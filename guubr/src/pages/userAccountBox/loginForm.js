/** @format */

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
import  {AccountContext}  from "./accountContext";

//guubr/src/pages/userAccountBox/accountContext.js

export default function LoginForm(props) {

	const { switchToSignUp } = useContext(AccountContext);

	return (
		<BoxContainer>
			<FormContainer>
				<Input type="email" placeholder="Email" />
				<Input type="password" placeholder="Password" />
			</FormContainer>
			<Marginer direction="vertical" margin={10} />
			<MutedLink href="#"> Forgot your password?
				<BoldLink href="#"  onClick={switchToSignUp}>
					??
				</BoldLink>
			</MutedLink>
			<Marginer direction="vertical" margin="1.6em" />
			<SubmitButton type="submit"> Continue </SubmitButton>
			<SubmitButton type="submit"> Google Sign-in </SubmitButton>
			<Marginer direction="vertical" margin="1em" />
			<MutedLink href="#"> Don't have an account?{" "}
				<BoldLink href="#"  onClick={switchToSignUp}>
					Sign Up
				</BoldLink>
		 	 </MutedLink>
		</BoxContainer>
	);
}
