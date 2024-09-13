import { getAllTasks, postTask } from "./firebase.js";
import { displayAllTasks } from "./gui.js";

const form = document.querySelector('form');

getAllTasks().then( displayAllTasks );

form.addEventListener('submit', event =>{
    event.preventDefault();

    const taskText = document.querySelector('input').value;

    const newTask = {
        task: taskText,
        done: false    
    }
    // console.log(newTask);

    postTask(newTask).then(getAllTasks).then(displayAllTasks);
})