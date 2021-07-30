import React, { useContext, useEffect, useRef } from 'react';
import firebase from "../firebase";
import "firebase/auth";
import { ReactComponent as Guubr } from "../assets/GuuBr.svg";
import { MyContext } from "../Context";
import getUsersList from "../firebase";

function AddUserPage({ history })  {
    const { user } = useContext(MyContext);
    const db = firebase.firestore();
    const emailRef = useRef();
    const firstnameRef = useRef();
    const lastnameRef = useRef();

    useEffect(() => {
        const usersRef = db.collection("users");

        usersRef
            .get()
            .then((snapshot) => {
                const data = snapshot.docs.map((doc) => ({
                    id:doc.id,
                    ...doc.data(),
                }));

            console.log("all the data: ", data);
            });
        console.log("AddUserPage: getUsersList: ", getUsersList);
    }, []);

const emailSubmit = (e) => {
    e.preventDefault();
    
    db.collection("users")
    .doc(emailRef.current.value)
    .set({
        fullName: {
            firstname: firstnameRef.current.value,
             lastname: lastnameRef.current.value, 
           }
    }, {merge:true})
    .then((doc) => {
        console.log("Added record doc.data(): ", doc.data());
    })
    .catch((error) => {
        console.error("Error adding email: ", error);
    });

    history.push("/");
    }

    let showName = "";
    if (user) {
        showName = user.displayName;
      } else {
        showName = "not logged in";
      }
    

    return (
        <div>
            <Guubr className="Guubr__Logo" />
            <p> GOING TO ADD the USER: {showName} </p>
            <form styles="gap:5px">
                <input type="text" name="first name" placeholder="First Name" ref={firstnameRef}/>
                <input type="text" name="last name" placeholder="Last Name" ref={lastnameRef}/>
                <input type="email" name="email" placeholder="Email" ref={emailRef} />
                <button onClick={(ev) => emailSubmit(ev)}>Add EMAIL</button>
            </form>
        </div>
    )
}

export default AddUserPage;