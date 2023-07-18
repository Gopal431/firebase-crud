import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
const firebaseConfig = {
    apiKey: "AIzaSyAc5dSrE4VUuVMfK_KA6v_It2s-zChGUAE",
    authDomain: "react-curd-62c7d.firebaseapp.com",
    projectId: "react-curd-62c7d",
    storageBucket: "react-curd-62c7d.appspot.com",
    messagingSenderId: "668656205250",
    appId: "1:668656205250:web:132b0d3c4a14455d50aa5b"
  };
  const firedb = firebase.initializeApp(firebaseConfig)
  export default firedb.database().ref();