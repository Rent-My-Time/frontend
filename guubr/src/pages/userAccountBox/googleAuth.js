import firebase from "../firebase";
import { Link } from "react-router-dom";
import "firebase/auth";
import { MyContext } from "../Context";
import ContextProvider from "../../Context";



function GoogleAuth() {

     const loginHandler = async () => {
          const googleProvider = new firebase.auth.GoogleAuthProvider();
           await firebase
               .auth()
               .signInWithPopup(googleProvider)
               .catch((err) => {console.log(err)})
          // const credential =results.credential;
          // console.log(credential.accessToken);
          // console.log(results.user);
     }


     return (
          <ContextProvider>
               <div  className= "googleAuth">
                    <h1>Google Login</h1>
                    <button onClick={() => loginHandler()}>
                         <GoogleAuth/>
                    </button>{""}
               </div>
          </ContextProvider>
     );
}
export default GoogleAuth;
