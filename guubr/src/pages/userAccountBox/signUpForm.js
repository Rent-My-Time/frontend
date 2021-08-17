
import React, { useContext } from "react";
import {
	BoldLink,
	BoxContainer,
	FormContainer,
	Input,
	MutedLink,
	SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import {MyContext} from "../../Context"
import firebase from "../../firebase";

export default function SignUpForm(props) {

    const [user, setUser]  = useContext(MyContext)

	const { switchToSignIn } = useContext(AccountContext);

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
		
		const email = user.email
		const password = user.password
		console.log(email, password)
		firebase.auth().createUserWithEmailAndPassword(email, password)
		.then((userCredential) => {
		  // Signed in 
		  let USER = userCredential.user;
			console.log(USER)
		  // ...
		})
		.catch((error) => {
			let errorCode = error.code;
			let errorMessage = error.message;
		  // ..
		});	
	}
	return (
		<BoxContainer>
			<FormContainer>
				<Input type="text" name="fullName" placeholder="Full Name" onChange={handleInput}/>
				<Input type="email" name="email" placeholder="Email" onChange={handleInput}/>
				<Input type="password" name="password" placeholder="Password" onChange={handleInput} />

			</FormContainer>
			<Marginer direction="vertical" margin={10} />
			<SubmitButton type="submit" onClick={(ev) =>registerUser(ev)}> Continue </SubmitButton>
			<Marginer direction="vertical" margin="1em" />
			<MutedLink href="#">
				Already have an account?
				<BoldLink href="#" onClick={switchToSignIn}>
					Sign in
				</BoldLink>
			</MutedLink>
		</BoxContainer>
	);
}
