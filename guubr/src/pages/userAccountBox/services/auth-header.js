
//  Check Local Storage for user item,
//  If there is a logged in user with accessToken (JWT),
//        return HTTP Authorization header.
// else  Otherwise, return an empty object.

// export default function authHeader ()  {
//      const user =JSON.parse(localStorage.getItem("user"));

//      if (user && user.access_token) {
//           return { Authorization: "Bearer"  + user.access_token};
//      } else {
//           return {};
//      }
// }

//   For Node.js Express back-end, please use x-access-token header like this:

export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

   if (user && user.accessToken) {
        
     return { 'x-access-token': user.accessToken };
   } else {
     return {};
  }
}
