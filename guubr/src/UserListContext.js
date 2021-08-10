import { createContext, useEffect, useState,  } from "react";
import firebase from "./firebase";

export const UserListContext = createContext();
const UserListContextProvider = ({children}) => {

    const [userList, setUserList] = useState()

    const db = firebase.firestore();

    useEffect(() => {
        const usersRef = db.collection("users");
        usersRef
            .get()
            .then((snapshot) => {
                const data = snapshot.docs.map((doc) => ({
                    id:doc.id,
                    ...doc.data(),
                }));

            setUserList(data)

            });
            console.log(userList)
    }, [])
    return(
        <UserListContext.Provider value={[userList, setUserList]}>{children}</UserListContext.Provider>
    )
}

export default UserListContextProvider;