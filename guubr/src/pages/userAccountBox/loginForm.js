/** @format */

import React, { useContext, useState, useRef } from "react";
import {useDispatch, useSelector} from "react-redux";
import { Redirect, Link } from 'react-router-dom';

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
import { Marginer } from "../marginer";
import  {AccountContext}  from "./accountContext";
import firebase from "../../firebase";
import { login } from "./actions/auth";
import LoginGooglePage from "../LoginGooglePage";
import { useEffect } from "react";



const required = (value) => {
		if (!value) {
			return (
				<div className="alert alert-danger" role="alert">
					This field is required!
				</div>
			);
		}
	};
const validEmail = (text)=>{
		const regex = RegExp(
			/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
			);

		return !regex.test(text);
	}

export default function LoginForm(props, {history}) {

	const { switchToSignUp } = useContext(AccountContext);

		 const form = useRef();
		 const checkBtn = useRef();

		const [email, setEmail] = useState("");
		const [password, setPassword] = useState("");
		const [loading, setLoading] = useState(false);
		const[isSubmitting, setIsSubmiting] = useState(false);


		const [errors, setErrors] = useState("false")
		const [user, setUser] = useState({});

		const [successful, setSuccessful] = useState(false);

		const [formErrors, setFormErrors] = useState({
			email: "",
			password: "",
	 	 });

		const { isLoggedIn } = useSelector(state => state.auth);
		const { message } = useSelector(state => state.message);


  		const dispatch = useDispatch();

		//  useEffect(() => {
		//  	if (Object.keys(errors).length === 0 && isSubmitting) {
		// 		console.log("No errors and is submitting ", errors)

		//  	}
		// }, [errors, isSubmitting]);

		const onChangeEmail = (e) => {
			const email = e.target.value;
			setEmail(email);
		};

		const onChangePassword = (e) => {
			const password = e.target.value;
			setPassword(password);

		};

		// ***********  Handle Change  **************//

		const handleChange = (e) => {
			e.preventDefault();

			const { name, value } = e.target;
			console.log("name = ", name);
			console.log("value = ", value);

			let currentFormErrors = formErrors;



			console.log("currentForm ", currentFormErrors);
			console.log("formErrors ", formErrors)

			switch (name) {

				case "email":

					if(value === "") {
						currentFormErrors.email = "Email is required"
						console.log("email is required")
					}else if (!validEmail(value)) {

					      	 currentFormErrors.email = "Email address is invalid";
							  console.log("Email address is invalid");

					}
					setUser({ ...user, email: value });
					currentFormErrors.email = "";
					console.log("currentFormErrors.email = \"\"" );


					//currentFormErrors.firstName ="" ;
					console.log("currentFormErrors email", currentFormErrors.email)
					break;

				case "password":
					if ( !value.password ) {
						 currentFormErrors.password = 'Password is required'
						 console.log('Password is required');
					}else if  (value.password.length < 8) {
						currentFormErrors.password = "Password must be 8 or more characters"
						console.log("Password must be 8 or more characters");
					} else {
						currentFormErrors.password = "" ;
						setUser({ ...user, password: value });
						console.log("currentFormErrors.email = \"\"" );

						console.log("currentFormErrors email", currentFormErrors.email)
					}
					break;
				default:
					break;
			}

			setFormErrors(currentFormErrors);

			console.log("currentFormErrors "  , currentFormErrors )

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

		const handleLogin = (e, email, password) => {
				e.preventDefault();


				console.log(" HandleLogin formErrors= ", formErrors)
				console.log(password)


				


				// if (formValid(formErrors) && isSubmitting) {

				// 	dispatch(login(email, password))
				// 	.then(() => {
				// 		props.history.push("/");
				// 		window.location.reload();
				// 	})
				// 	.catch(() => {
				// 		setLoading(false);
				// 	});
				// } else {
				// 	setLoading(false);
				// }

		};



	// if (isLoggedIn) {
	// 	return <Redirect to="/my-info" />;
	// }
	if (isLoggedIn) {
		return <Link to="/" style={{ textDecoration: 'none' }}/>;
	}

	return (
		<BoxContainer >
			<FormContainer onSubmit={handleLogin} ref={form} autocomplete="on" >
				 <Marginer direction="vertical" margin={10} />
				<Input
					type="email"
					name="email"
					placeholder="Email"
					className="form-control"
					value={email}
					onChange={onChangeEmail}
              			validations={[required]}
					onBlur={handleChange}
				/>
				<Input type="password"
					placeholder="Password"
					name = {"password"}
					value={password}
					className="form-control"
					onChange={onChangePassword}
              			validations={[required]}
					onBlur={handleChange}
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
				<MutedLink href="#"> Forgot your password?
					<BoldLink href="#"  onClick={switchToSignUp}>
						??
					</BoldLink>
				</MutedLink>
				<Marginer direction="vertical" margin="1.6em" />
				<SubmitButton type="submit" disabled={loading}  ref={checkBtn}>
					<div className="form-group">
						{loading && (<span className="spinner-border spinner-border-sm"></span>)}
						<span>Login</span>
					</div>
					{/* {message && (
					<div className="form-group">
						<div className="alert alert-danger" role="alert">
							{message}
						</div>
					</div>
					)} */}
				</SubmitButton>
				<SubmitButton style={{ display: "none" }} ref={checkBtn} onClick={() => handleLogin()} />
				<GoogleButton className="googleContainer">
						<Link to="/addUser" style={{ textDecoration: 'none' }}>
							Login using Google
						</Link>
    					</GoogleButton>


				<Marginer direction="vertical" margin="1em" />
				<MutedLink href="#"> Don't have an account?{" "}
					<BoldLink href="#"  onClick={switchToSignUp}>
					Sign Up
					</BoldLink>
				</MutedLink>
		</FormContainer>
	</BoxContainer>



	);
};
