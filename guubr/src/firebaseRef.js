import React, { useContext, useEffect, useRef } from "react";
import { MyContext } from "../Context";
import firebase from "../firebase";
import "firebase/firestore";
import shortid from "shortid";

const DisorderBox = () => {
  const { user } = useContext(MyContext);
  const db = firebase.firestore();
  const inputRef = useRef();
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const dobRef = useRef();
  const disorderRef = useRef();
  let patientIdRef = useRef();
  console.log("DisorderBox user: ", user);
  /* why can't I get user.Displayname? */
  useEffect(() => {
    firebase
      .firestore()
      .collection("patient")
      .doc("patient1")
      .collection("records")
      .doc("20210510")
      .collection("disorders")
      .onSnapshot((doc) => console.log("doc:", doc));
  }, []);
  const handleSubmit = () => {
    firebase
      .firestore()
      .collection("patient")
      .doc("patient1")
      .collection("records")
      .doc("20210510")
      .collection("disorders")
      .add({
        name: inputRef.current.value,
        starRating: 4,
        imbalType: "excess",
        // uid: user.uid,
        // id: shortid(),
      });
    inputRef.current.value = "";
  };
  const formPxSubmit = (e) => {
    e.preventDefault();
    db.collection("patient")
      .add({
        id: shortid(),
        firstname: firstnameRef.current.value,
        lastname: lastnameRef.current.value,
        dob: dobRef.current.value,
      })
      .then((docRef) => {
        patientIdRef = docRef.id;
        console.log("Added Patient: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding patient record: ", error);
      });
  };
  const formDoSubmit = (e) => {
    e.preventDefault();
    db.collection("patient")
      .doc(patientIdRef)
      .collection("records")
      .doc("20210510")
      .collection("disorders")
      .add({
        disorder: disorderRef.current.value,
      })
      .then((docDoRef) => {
        console.log("Added Disorder: ", docDoRef.id);
      })
      .catch((error) => {
        console.error("Error adding disorder: ", error);
      });
  };
  return (
    <div className="disorderBox">
      <h2>INPUT PATIENT RECORD</h2>
      <div className="user">
        <p>user: robin</p>
      </div>
      <div>
        <form
          action="."
          id="idPxInputform"
          name="namePxInputForm"
          className="pxInputForm"
        >
          <header class="pxInputFormHeader">4i5o: PATIENT INFO</header>
          <div id="fieldset_PxInputFieldsDiv">
            <fieldset name="fieldnamePxInputFields" className="PxInputFields">
              <p className="pxLabel">
                <label>Enter Px Data</label>
              </p>
              <div className="patientInfo">
                <input
                  placeholder="First Name"
                  ref={firstnameRef}
                  type="text"
                  autofocus
                />
                <input placeholder="Last Name" ref={lastnameRef} type="text" />
                <p>
                  <label>Date Of Birth</label>
                  <input
                    className="dobBox"
                    placeholder="Date of Birth"
                    ref={dobRef}
                    type="date"
                  />
                </p>
              </div>
              <p>
                <button className="pxButton" onClick={(ev) => formPxSubmit(ev)}>
                  Add Patient
                </button>
              </p>
              <label id="DisordersLabel"> Health Concerns:</label>
              <div className="disorders">
                <input placeholder="concern" ref={disorderRef} type="text" />
              </div>
              <div>
                <input
                  type="button"
                  className="addDelButton"
                  name="addDisorder"
                  id="idAddDisorder"
                  value="+"
                  onclick={(ev) => addPxDisorder(ev)}
                />
                <input
                  type="button"
                  className="addDelButton"
                  name="removeDisorder"
                  id="idRemoveDisorder"
                  value="-"
                  onclick={(ev) => DisorderBox(ev)}
                />
              </div>
              <p>
                <button className="doButton" onClick={(ev) => formDoSubmit(ev)}>
                  Submit Health Record
                </button>
              </p>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
};
export default DisorderBox;
