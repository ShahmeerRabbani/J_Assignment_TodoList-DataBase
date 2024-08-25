// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDIUrFiFL5evFKdthMvv3jb3qewkC6cDA",
  authDomain: "database-todo-91ac9.firebaseapp.com",
  projectId: "database-todo-91ac9",
  storageBucket: "database-todo-91ac9.appspot.com",
  messagingSenderId: "272356702647",
  appId: "1:272356702647:web:fe20a3c7629c8e6cdd9032"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {app, db};