import React, { createContext, useEffect, useState } from 'react';
import firebase from './firebase';
// import * as FirestoreService from './services/firestore';
import 'firebase/auth';

export const MyContext = createContext({});

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [userID, setUserId] = useState();
    const [specialtyList, setSpecialtyList] = useState();
    useEffect(()=>{
        setUser({})
    }, [] )


    return (
        <MyContext.Provider value={[user, setUser]}>{children}</MyContext.Provider>
    );
};

export default ContextProvider;