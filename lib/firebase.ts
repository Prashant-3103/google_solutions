import {initializeApp} from 'firebase/app'
import {getFirestore} from "firebase/firestore"
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBH2moTHFhlVNea51TSrd16xv3wjKR_VtU",
    authDomain: "chat-app-a33a8.firebaseapp.com",
    projectId: "chat-app-a33a8",
    storageBucket: "chat-app-a33a8.appspot.com",
    messagingSenderId: "184965077901",
    appId: "1:184965077901:web:5ccba24e1c67bba1c83bc4",
    measurementId: "G-1BZKEF7VCP"
  };

const app = initializeApp(firebaseConfig)
const firestore= getFirestore(app)
const auth = getAuth(app)
export {app,firestore,auth}

