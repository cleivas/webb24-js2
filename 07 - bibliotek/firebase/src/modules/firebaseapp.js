import { initializeApp } from "firebase/app";
import { getDatabase, ref} from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZnO_WNRJ1VTMG5gmHor1moRPGF2IsJFk",
  authDomain: "firstdb-82c36.firebaseapp.com",
  databaseURL: "https://firstdb-82c36-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "firstdb-82c36",
  storageBucket: "firstdb-82c36.appspot.com",
  messagingSenderId: "27321012590",
  appId: "1:27321012590:web:c8eb5fc79d2f04a470717f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the database from your firebase app
const db = getDatabase(app);

// Create a reference to the users node in your database
export {db};