import { db } from "./modules/firebaseapp.js";
import { onValue, push, ref, update } from "firebase/database";

// Referens till users i våran databas
const usersRef = ref(db, '/users');

// Prenumerera på uppdateringar under users
onValue(usersRef, snapshot => {
    // snapshot är ett speciellt firebase objekt
    // val() returnerar ett objekt från din databas som har egenskapen users
    const users = snapshot.val();

    console.log(users)
})

// Make a user admin
// Referens till en specifik användare
const sanjaRef = ref(db, '/users/testestest');
update(sanjaRef, {admin: false});


// Adding a user with a firebase ID everytime the button is clicked
const btn = document.querySelector('button');
btn.addEventListener('click', ()=>{
    const newUser = {};
    console.log(newUser); //Empty object

    // Generating a firebase ID under users
    const id = push(usersRef).key;
    console.log(id)

    // Adding an object in the newUser object under the firebaseID
    newUser[id] = {
        name: 'Lena',
        admin: true
    }
    console.log(newUser)

    // Update the database with the new user
    update(usersRef, newUser)
})