import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCTyw_LHA6QfoAjDvkibncQ0f7RoK_0Dj8",
  authDomain: "todo-app-7db73.firebaseapp.com",
  databaseURL: "https://todo-app-7db73.firebaseio.com",
  projectId: "todo-app-7db73",
  storageBucket: "todo-app-7db73.appspot.com",
  messagingSenderId: "304312147183",
  appId: "1:304312147183:web:f449e38edea27831ec8f1a",
  measurementId: "G-LVRSSYVYR4"
};

export const createUserProfileDocument = async (userAuth,additionalData)=>{
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
    }catch(error){
        console.log("ERROR HERE", error.message)
    }

  } 
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;