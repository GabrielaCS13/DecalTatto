//biblioteca do firebase
import firebase from 'firebase/compat/app';
//autenticação de email e senha
import 'firebase/compat/auth';
//trabalha com o banco de dados criado no firebase
import 'firebase/compat/database';

let firebaseConfig = {
  apiKey: "AIzaSyBRFOYIrVYBN28eiKZrs5QfZceu89jBSec",
  authDomain: "apploja-e23fa.firebaseapp.com",
  projectId: "apploja-e23fa",
  storageBucket: "apploja-e23fa.appspot.com",
  messagingSenderId: "113516283807",
  appId: "1:113516283807:web:9c1f0d35e38ab7b563dfaa"
};

if (!firebase.apps.length) {
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
    }


export default firebase;