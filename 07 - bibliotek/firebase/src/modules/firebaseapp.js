import { initializeApp } from "firebase/app";
import { getDatabase, ref} from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
 // OBS kopiera dina uppgifter från firebase
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the database from your firebase app
const db = getDatabase(app);

// Create a reference to the users node in your database
export {db};
