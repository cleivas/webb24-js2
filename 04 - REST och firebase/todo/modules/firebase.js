const baseURL = 'https://webb23-1babd-default-rtdb.europe-west1.firebasedatabase.app/todo-list/';
const header = {
        "Content-type": "application/json; charset=UTF-8"
    };
    

async function getAllTasks(){
    const url = baseURL + '.json';

    // Behövs inget andra argument eftersom fetch med ett argument skickar en GET request som default och vi ska hämta alla tasks.. Alltså GET
    const response = await fetch(url);
    const tasks = await response.json();
    // console.log(tasks);
    return tasks;
}

async function postTask(newTask){
    const url = baseURL + '.json';
    const options = {
        method: 'POST',
        body: JSON.stringify(newTask),
        headers: header
    }

    const response = await fetch(url, options);
    const data = await response.json();
    // console.log(data);
}

async function patchTask(firebaseID, isDone){
    const url = baseURL + firebaseID + '.json';
    // console.log(url);

    const options = {
        method: 'PATCH',
        body: JSON.stringify({done: isDone}), //ett objekt med en egenskap som heter done, som matchar det som finns på firebase. (men med annat värde)
        headers: header
    }

    const response = await fetch(url, options);
    const data = await response.json();
    // console.log(data);
}

async function deleteTask(firebaseID){
    const url = baseURL + firebaseID + '.json';
    const options = {
        method: 'DELETE'
    }

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data)
}

export {getAllTasks, postTask, patchTask, deleteTask};