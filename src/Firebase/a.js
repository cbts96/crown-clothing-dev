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
