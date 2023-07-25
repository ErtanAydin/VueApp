import * as firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC7kInVEj6L35XB8NX_iwdgKvpnzpkK_WU",
    authDomain: "cilekbutik-9efd9.firebaseapp.com",
    projectId: "cilekbutik-9efd9",
    storageBucket: "cilekbutik-9efd9.appspot.com",
    messagingSenderId: "128564693192",
    appId: "1:128564693192:web:34362c3303bb2a162b3dfd",
    measurementId: "G-V1W8HH0S1K"
  };

  let app = null;
  if(!firebase.apps.length){
      app = firebase.initializeApp(firebaseConfig);
  }

export default firebase;