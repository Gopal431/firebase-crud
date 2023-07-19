import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
const firebaseConfig = {
    apiKey:process.env.REACT_APP_API_KEY,
    authDomain:process.env.REACT_APP_AUTH_DOMAIN,
    projectId:process.env.REACT_APP_PROJECT_ID,
    storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId:process.env.REACT_APP_MESSSAGING_SENDER_ID,
    appId:process.env.REACT_APP_APP_ID
  };
  const firedb = firebase.initializeApp(firebaseConfig)
  export default firedb.database().ref();