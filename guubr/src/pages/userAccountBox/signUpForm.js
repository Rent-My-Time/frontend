
import React, { useContext, useState , useRef} from "react";
import {
	BoldLink,
	BoxContainer,
	FormContainer,
	Input,
	MutedLink,
	SubmitButton,
	GoogleButton,
	UnorderedList
} from "./common";
// import { useDispatch, useSelector } from "react-redux";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
// import {register} from "./actions/auth";
import { isEmail } from "validator"
import * as zxcvbn from 'zxcvbn';
import { MyContext } from "../../Context"
import firebase from "../../firebase";
import { useHistory } from 'react-router-dom';
import 'firebase/auth';


const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vUserName = (value) => {
	const passwordRegExp = "^(?=.*([A-Z]){1,})(?= .*[!@#$%^&*()\-__+.]{1,})(?=.*[0-9]{1,})(?=.*[a-z]{1,}).{8, }"

  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }

};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be at least 6 characters long!.
      </div>
    );
  }

};


function SignUpForm() {
	const [user, setUser] = useState({})
	const { switchToSignIn } = useContext(AccountContext);
	const form = useRef();
	const checkBtn = useRef(null);

	const auth = firebase.auth()
	const db = firebase.firestore();
	let history = useHistory()

	const [formErrors, setFormErrors] = useState({
		 firstName: "",
           lastName: "",
           email: "",
           password: "",
           confirmPassword: ""
	});

	const [firstName, setFirstName] = useState()
	const [email, setEmail] = useState("");
 	const [password, setPassword] = useState("");
 	const [confirmPassword, setConfirmPassword] = useState("")
	const [successful, setSuccessful] = useState(false);

	const [displayName, setDisplayname] = useState("");

	// const { message } = useSelector(state => state.message);
	// const dispatch = useDispatch();

	const onChangeFirstName = (e) => {
		const firstName = e.target.value;
		setFirstName(firstName);
	};
	const onChangeLastName = (e) => {
		const lastName = e.target.value;
		setFirstName(lastName);
	};

	const onChangeEmail = (e) => {
		const email = e.target.value;
		setEmail(email);
	};

	const onChangePassword = (e) => {
		const password = e.target.value;
		setPassword(password);
	};
	const onChangeConfirmPassword = (e) => {
		const confirmPassword = e.target.value;

		setConfirmPassword(confirmPassword);
		if (password !== confirmPassword)  {
			console.log("password not match")
		}else{
			console.log("pasword match");

		}
	}

	const minMaxLength = (text, minLength, maxLength) => {
		let result = !text || text.length < minLength;
		console.log(text.length)
		if(maxLength)
			result = result || text.length < minLength;
		return result;
	}

	const validEmail = (text)=>{
		const regex = RegExp(
			/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
			);

		return !regex.test(text);
	}


	// ************* test the password strenght ***********

	const  passwordStrength= (text) => {
		let result = zxcvbn(text);
		return result.score < 3;
	}

	const formValid = (formErrors) => {
		console.log("formErrors =", formErrors)
		let valid = true;

		// validate form errors being empty
		Object.values(formErrors).forEach((val) => {
			val.length > 0 && (valid = false);
		});

		// validate the form was filled out
		// Object.values(rest).forEach((val) => {
		// 	val === null && (valid = false);
		// });

		return valid;
	};


	function validateConfirmPassword(password, confirmPassword, formErrors) {
		formErrors = formErrors || {};

		if(password !== confirmPassword) {
			formErrors.confirmPassword = 'Confirmed password is not matching with password';
			console.log(formErrors.confirmPassword.value);
			return false;
		} else{
			delete formErrors.confirmPassword;
			return true;
		}
	}

	/************** Create  User with name, last name and  Email Password ************/

	 const handleChange = (e) => {
	 	e.preventDefault();

	 	const { name, value } = e.target;
	 	console.log("name ", name);
	 	console.log("value ", value);

		console.log("formErrors ON handlechange", form.current.name)
          let currentFormErrors = formErrors;
          console.log("currentForm", currentFormErrors);

	 	switch (name) {

	 		case "firstName":
	 			setUser({ ...user, firstName: value });

	 			minMaxLength(value, 3) ? currentFormErrors.firstName = `First name should have minimum 3 characters`
	 							    : currentFormErrors.firstName ="" ;
	 			console.log("delete currentForm ", currentFormErrors.firstName);
	 			break;
	 		case "lastName":
	 		 	setUser({ ...user, lastName: value });
				minMaxLength(value, 3) ? currentFormErrors.lastName = `Last Name should have minimum 3 characters`
								   : currentFormErrors.lastName = "" ;
	 		 	break;
	 		case "email":
				console.log("userExist???????",userExists(value));
	 		 	setUser({ ...user, email: value });
	 			(!value || validEmail(value)) ?  currentFormErrors.email = `Email address is invalid`
	 								   :  userExists(value)
	 								   		.then((result) => {console.log("user exist ", value)
	 									   		result ? currentFormErrors.email='The email is already registered. Please use a different email.'
	 												  : currentFormErrors.email = "";
	 										})
	 		 	break;
	 		case "password":
	 			setUser({ ...user, password: value });
	 			minMaxLength(value, 6) ? currentFormErrors.password = 'Password should have minimum 6 characters'
	 							   : (passwordStrength(value)) ? currentFormErrors.password ='Password is not strong enough. Include an upper case letter, a number or a special character to make it strong'
	 													 : currentFormErrors.password = "";
	 													setUser({
	 														...user,
	 														password: value,
	 													});

	 			if (user.confirmPassword ) {
	 									validateConfirmPassword (
	 													value,
	 													user.confirmPassword,
	 													currentFormErrors
	 									)

	 			}
	 			break;
	 		case 'confirmPassword':
	 			setUser({ ...user, confirmPassword: value });
	 			let valid = validateConfirmPassword (
    	 				user.password,
    	 				value,
    	 				currentFormErrors
  	 			);
	 			  console.log("valid or no ? =", valid);
	 			if (valid ) {
	 				setUser({ ...user, confirmPassword: value });
					 currentFormErrors.confirmPassword = "";
					
	 			}

	 			break;
	 		default:
	 			break;
	 	}
	 	//this.setState({currentFormErrors, [name]: value});
		setFormErrors(currentFormErrors);
		///******* */
	}


	   let registeredUsers = [
	  	 "giannimpe1@yahoo.com",
	 	 "abc"
		]
/*****************Google login *************** */
		const handleGoogleLogin = async() => {
			let provider = new firebase.auth.GoogleAuthProvider();
			await firebase.auth().signInWithPopup(provider);

				/* Here add to the database?? */

			history.push("/");
		};

	/*-----------------------   fix check for registred user ------------------   */
		const  userExists = (email) =>  {
		return new Promise(resolve => {
			setTimeout(() => {
				if(registeredUsers.findIndex(u => u === email) !== -1) {
					resolve(true);
					console.log(email)
				}
				else {
					resolve(false);
				}
			});
   		 });
		}








	 const handleInput = (event) => {
	 	const target = event.target
	 	const name = target.name;
	 	const value = target.value;
	 	console.log(name, value)
	 	setUser({ ...user, [name]: value })
	 	console.log("Hello", user)
	 }

	 const registerUser = (e) => {
		e.preventDefault()
		console.log("Hello")
		const email = user.email
		const password = user.password
		const fullName = {
			firstName: user.firstName,
			lastName: user.lastName
		}

		console.log(email, password)
		auth.createUserWithEmailAndPassword(email, password)
			.then((userCredential) => {
				// Signed in
				// ...
				let USER = userCredential.user;
				console.log(USER)
				// const profile = auth.currentUser;
				// console.log(profile)
				USER.updateProfile({
					displayName: `${fullName.firstName} ${fullName.lastName}`,
					photoURL: ""
				}).then(() => {
					const usersRef = db.collection("userProfiles")
					console.log(email)
					usersRef.doc(email).set({
						fullName: {
							firstName: user.firstName,
							lastName: user.lastName
						},
						occupation: "",
						hourlyRate: 0,
						nationality: "",
						ageGroup: "",
						maritalStatus: "",
						children: 0,
						gender: "",
						languages: [],
						education: "",
						city: "",
						country: "",
						telephone: "",
						email: "",
						websites: "",
						offices: "",
						socialmedia: {
							youtube: "",
							facebook: "",
							linkedin: "",
							instagram: "",
							tiktok: ""
						},
						skills: {
							expert: [],
							intermediate: [],
							entry: []
						},
						expertise: {
							expert: false,
							intermediate: false,
							entry: false
						},
						networking: false,
						friends: false,
						other: "",
						pic:"light turquoise default profile picture.jpg",
						contactMethods: {
							phone: false,
							email: false,
							zoom: false,
							office: false
						}
					})
					console.log("UPDATE SUCCESS")
					history.push("/")
				}).catch((error) => {
					let errorCode = error.code;
					let errorMessage = error.message;
				});
			})
			.catch((error) => {
				let errorCode = error.code;
				let errorMessage = error.message;
				// ..
			});



	 }

	return (
		<FormContainer  ref={form} >

					 <div className="form-group">
					<Input
						className={
							formErrors && formErrors.firstName
								? 'form-control error'
								: 'form-control'
						}
						placeholder="First Name"
						type="text"
						name = "firstName"
						onChange={onChangeFirstName}
						validation={[required, vUserName]}
						onBlur= {handleChange}

					/>
					<Input
						className={
							formErrors && formErrors.firstName
								? 'form-control error'
								: 'form-control'
						}
						placeholder="Last Name"
						type="text"
						name = "lastName"

						onChange={onChangeLastName}
						validation={[required, vUserName]}
						onBlur= {handleChange}
					/>
					<Input
						className={
							formErrors && formErrors.firstName
								? 'form-control error'
								: 'form-control'
						}
						type="email"
						placeholder="Email"
						value={email}
						name = "email"
						onChange={onChangeEmail}
						validation={[required, validEmail]}
						onBlur= {handleChange}
					/>
					<Input
						className={
							formErrors && formErrors.firstName
								? 'form-control error'
								: 'form-control'
						}
						type="password"
						placeholder="Password"
						value={password}
						name= "password"
						onChange={onChangePassword}
						validation={[required, vpassword]}
						onBlur= {handleChange}
					/>
					<Input
						className={
							formErrors && formErrors.firstName
								? 'form-control error'
								: 'form-control'
						}
						type="password"
						placeholder="Confirm Password"
						value={confirmPassword}
						name= "confirmPassword"
						onChange={onChangeConfirmPassword}
						validation={[required, vpassword]}
						onBlur= {handleChange}
					/>
					<UnorderedList>
						{Object.entries(formErrors || {}).map(([prop, value]) => {
							return (
								<li className='error-message' key={prop}>
								{value}
								</li>
							);
						})}
					</UnorderedList>

					<Marginer direction="vertical" margin={10} />

					<SubmitButton  type='submit'
								//disabled={Object.entries(formErrors || {}).length > 0}
								onClick = {(ev) => registerUser(ev)}
					>
						Continue
					</SubmitButton>

					<GoogleButton onClick={() => handleGoogleLogin({history})}>
						 GuuBr Google SIGNUP
					</GoogleButton>
						<Marginer direction="vertical" margin="1em" />
					<MutedLink href="#">
						Already have an account?
						<BoldLink href="#"  onClick={switchToSignIn}>
							Sign in
						</BoldLink>
					</MutedLink>
            			</div>

				{/* {message && (
					 <div className="form-group">
              				<div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                			{message}
             			 </div>
            		</div>
				)} */}
				 <SubmitButton style={{ display: "none" }} ref={checkBtn} />
			</FormContainer>
	);
}
export default SignUpForm;
