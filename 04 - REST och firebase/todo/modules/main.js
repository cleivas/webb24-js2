import { getAllTasks, postTask, patchTask, deleteTask } from "./firebase.js";
import { displayAllTasks } from "./gui.js";

const form = document.querySelector('form');
const taskContainerEl = document.querySelector('#taskContainer');


getAllTasks().then( displayAllTasks );

// Updating a tasks done-property if a p-element is clicked, from true to false or false to true depending on its value
// Or delete the task if a button is clicked
taskContainerEl.addEventListener('click', event =>{
    // console.log(event.target.tagName);
    // Kolla om användaren har klickat på ett p-element, för vi bryr oss inte om DIV:en
    if(event.target.tagName == 'P'){
        //console.log(event.target.id); //ID:t på elementet vi klickade på
        //console.log(event.target.classList.contains('done')) //Om elementet innehålleren klass som heter 'done' loggas true, i annat fall loggas false

        // Id:t på parent elementet till det elementet vi klickade på. Här i koden innebär det parentelementet till P-elementet vilter är en div
        // console.log(event.target.parentElement.id)


        const id = event.target.parentElement.id;
        const isDone = event.target.classList.contains('done');
        // console.log(id, !isDone) //! gör att false blir true och true blir false

        patchTask(id, !isDone).then(getAllTasks).then(displayAllTasks); 
    }
    else if(event.target.tagName == 'BUTTON'){
        const id = event.target.parentElement.id;
        deleteTask(id).then(getAllTasks).then(displayAllTasks);
    }
})

// Adding a new task with data from the form
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