import { createContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import firebase from "./firebase";

export const ProfileContext = createContext();
const ProfileContextProvider = ({children}) => {
    const { id } = useParams()
    const [formInfo, setFormInfo] = useState()
    const db = firebase.firestore();
    const docRef = db.collection("users").doc(`${id}`);



    useEffect(() => {
        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                setFormInfo(doc.data())
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, [])
    
    return(
        <ProfileContext.Provider value={[formInfo, setFormInfo]}>{children}</ProfileContext.Provider>
    )
}
export default ProfileContextProvider;