import React, { createContext, useEffect, useState } from 'react';
import firebase from './firebase';
// import * as FirestoreService from './services/firestore';
import 'firebase/auth';

export const MyContext = createContext({});

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userID, setUserId] = useState();
    const [specialtyList, setSpecialtyList] = useState();
    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user)
                console.log(user)
            } else {
                setUser(null)
            }
        });
    }, [user] )

    const initialState = {
        user
    };
    
    return (
        <MyContext.Provider value={initialState}>{children}</MyContext.Provider>
    );
};

export default ContextProvider;