import fs from "fs/promises";

async function readUsers(){
    const rawDB = await fs.readFile("./src/database.json"); //Readfile utgår alltid från rotmappen så vi måste ange mappen src i sökvägen
    // console.log(rawDB);

    const dbObj = JSON.parse(rawDB);
    // console.log(dbObj)

    const {users} = dbObj;
    // const users = dbObj.users;
    // console.log(users);

    return users;
}

async function getUser(id){
    const users = await readUsers();
    console.log(users)
    // Element kommer innehålla ett user objekt i taget från users arrayen.
    // Vi jämför varje users id med parameter-id:t och returnerar den usern om det är samma id
    // const user = users.find( element => {
    //     console.log(element.id, id);
    //     console.log(element.id == id);
    //     return element.id == id
    // });

    const user = users.find( element => element.id == id);
    return user;
}


async function addUser(newUser){

    // Lägger till ett id till användaren
    newUser.id = Date.now();
    console.log(newUser);

    const users = await readUsers();

    users.push(newUser)
    // console.log(users);

    const newDB = {users};
    // const newDB = {users: users}
    // console.log(newDB);

    await fs.writeFile('./src/database.json', JSON.stringify(newDB, null, 2));
}

async function deleteUser(id){
    const users = await readUsers();

    for(let i=0; i<users.length; i++){
        console.log(users[i].id == id);
        if(users[i].id == id){ //Om parameter-id:t är samma som en users id
            users.splice(i, 1); //Ta bort usern på index i
            break; //Avbryt loopen
        }
    }

    const newDB = {users}; //newDB = {users: users}
    await fs.writeFile('./src/database.json', JSON.stringify(newDB, null, 2));
}

async function updateAdmin(id, newAdmin){
    const users = await readUsers();

    for(let i=0; i<users.length; i++){
        console.log(users[i].id == id);
        if(users[i].id == id){ //Om parameter-id:t är samma som en users id
            users[i].admin = newAdmin; //uppdatera egenskapen admin till newAdmin, alltså det som skickades med i requesten
            break; //Avbryt loopen
        }
    }

    const newDB = {users}; //newDB = {users: users}
    await fs.writeFile('./src/database.json', JSON.stringify(newDB, null, 2));
}


export {readUsers, getUser, addUser, deleteUser, updateAdmin};