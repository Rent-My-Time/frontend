import axios from "axios";
import firebase from '../../../firebase';
import 'firebase/auth';

// register(): POST {firstName, lastName, email, password}
// login(): POST {email, password} & save JWT to Local Storage
// logout(): remove JWT from Local Storage


const API_URL = "http://localhost:8082/";



const register = (firstName, lastName, email, password) => {
     return axios.post(API_URL + "signup", {

          firstName,
          lastName,
          email,
          password,

     });


};

const login = (email, password) => {


     return axios
               .post(API_URL + "signup", {
                         email,
                         password,

               })
               .then((response) => {
                    if (response.data.accessToken) {
                         localStorage.setItem("user", JSON.stringify(response.data));
                    }
                    return response.data;
               });

};

const logout = () => {
     localStorage.removeItem("user");
}
// dont use default to remove the warning about
// eslint-disable-next-line import/no-anonymous-default-export
export default {
     register,
     login,
     logout,

}
