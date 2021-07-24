
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

export default function SignUpForm(props) {

	const { switchToSignIn } = useContext(AccountContext);

	return (
		<BoxContainer>
			<FormContainer>
                    <Input type="text" placeholder="Full Name" />
				<Input type="email" placeholder="Email" />
				<Input type="password" placeholder="Password" />
                    <Input type="password" placeholder="Confirm Password" />
			</FormContainer>
			<Marginer direction="vertical" margin={10} />
			<SubmitButton type="submit"> Continue </SubmitButton>
               <Marginer direction="vertical" margin="1em" />
               <MutedLink href="#">
                Already have an account?
		  	<BoldLink href="#"  onClick={switchToSignIn}>
                 Sign in
               </BoldLink>
		  </MutedLink>
		</BoxContainer>
	);
}
