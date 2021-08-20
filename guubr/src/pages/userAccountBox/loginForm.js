/** @format */

import React, { useContext, useState } from "react";
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
import firebase from "../../firebase";
import { useHistory } from 'react-router-dom';
import 'firebase/auth';
//guubr/src/pages/userAccountBox/accountContext.js

export default function LoginForm(props) {
	const [user, setUser] = useState({})
	const auth = firebase.auth()
	let history = useHistory()

	const handleInputChange = (event) => {
        const target = event.target
        const name = target.name;
        const value = target.value;
		setUser({ ...user, [name]: value })
    }

	const { switchToSignUp } = useContext(AccountContext);
	const handleLogin = (event) => {
		event.preventDefault()

		const email = user.email
		const password = user.password
		console.log(email, password)
		auth.signInWithEmailAndPassword(email, password)
			.then((userCredential) => {
				// Signed in
				console.log("hello")
				var user = userCredential.user;
				// ...
				history.push("/")
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
			});
	}
	return (
		<BoxContainer>
			<FormContainer>
				<Input type="email" name="email" placeholder="Email" onChange={handleInputChange}/>
				<Input type="password" name="password" placeholder="Password" onChange={handleInputChange}/>
			</FormContainer>
			<Marginer direction="vertical" margin={10} />
			<MutedLink href="#"> Forgot your password?
				<BoldLink href="#" onClick={switchToSignUp}>
					??
				</BoldLink>
			</MutedLink>
			<Marginer direction="vertical" margin="1.6em" />
			<SubmitButton type="submit"  onClick={(ev) => handleLogin(ev)}> Continue </SubmitButton>
			<SubmitButton type="submit"> Google Sign-in </SubmitButton>
			<Marginer direction="vertical" margin="1em" />
			<MutedLink href="#"> Don't have an account?{" "}
				<BoldLink href="#" onClick={switchToSignUp}>
					Sign Up
				</BoldLink>
			</MutedLink>
		</BoxContainer>
	);
}
