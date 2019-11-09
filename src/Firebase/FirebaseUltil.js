import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config={
    apiKey: "AIzaSyDeNt2voj886LcuZX7wckcZL9ufF3-59jk",
    authDomain: "crown-clothing-db432.firebaseapp.com",
    databaseURL: "https://crown-clothing-db432.firebaseio.com",
    projectId: "crown-clothing-db432",
    storageBucket: "crown-clothing-db432.appspot.com",
    messagingSenderId: "105921274208",
    appId: "1:105921274208:web:eeb9b64290baaa7c753e05",
    measurementId: "G-BTSV4E27VF"
}
export  const createuserprofiledocument=async(userauth,additiondata)=>{
    if(!userauth) return;
    const userRef=firestore.doc(`users/${userauth.uid}`);
    const snapshot=await userRef.get();
    console.log(snapshot);
    if(!snapshot.exists){
        const {displayname,email}=userauth;
        const createdat=new Date();
        try{
            await userRef.set({
                displayname,
                email,
                createdat,
                ...additiondata
            })
        }
        catch (error){
            console.log("error creating user",error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);
export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;