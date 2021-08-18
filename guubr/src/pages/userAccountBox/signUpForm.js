
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
import { MyContext } from "../../Context"
import firebase from "../../firebase";
import { useHistory } from 'react-router-dom';
import 'firebase/auth';
function SignUpForm() {
	const [user, setUser] = useState({})
	const { switchToSignIn } = useContext(AccountContext);
	const auth = firebase.auth()
	const db = firebase.firestore();
	let history = useHistory()

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
		<BoxContainer>
			<FormContainer>
				<Input type="text" name="firstName" placeholder="First Name" onChange={handleInput} />
				<Input type="text" name="lastName" placeholder="Last Name" onChange={handleInput} />
				<Input type="email" name="email" placeholder="Email" onChange={handleInput} />
				<Input type="password" name="password" placeholder="Password" onChange={handleInput} />

			</FormContainer>
			<Marginer direction="vertical" margin={10} />
			<SubmitButton type="submit" onClick={(ev) => registerUser(ev)}> Continue </SubmitButton>
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
export default SignUpForm;