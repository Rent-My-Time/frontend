import React from "react";
import {
     BoxContainer,
     FormContainer,
     Input,
     MutedLink,
     SubmitButton
     } from "./common";
import { Marginer} from "../marginer";

 export default function LoginForm(props) {
     return (
           <BoxContainer>
               <FormContainer>
                    <Input type="email" placeholder="Email"/>
                    <Input type="password" placeholder="Password"/>
                     <Marginer direction="vertical" margin={10} />
                     <MutedLink href="#">Forget your password?</MutedLink>
                     <Marginer direction="vertical" margin="1em" />
                     <SubmitButton type="submit">SignIn</SubmitButton>
                </FormContainer>
           </BoxContainer>


      )
 }
