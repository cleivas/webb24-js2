function displayAllTasks(tasksObj){
    // console.log(tasksObj);
    const taskContainerEl = document.querySelector('#taskContainer');
    taskContainerEl.innerHTML = '';

    // For ech key / property name IN an object
    for(const firebaseID in tasksObj){
        // console.log( firebaseID, typeof firebaseID ); //Egenskaps-namnet hos tasksOBj som innehåller firebaseID:t
        //console.log( tasksObj[firebaseID] ); //Objektet som är innehållet vid varje firebaseID

        const task = tasksObj[firebaseID];

        // 
        const taskDiv = document.createElement('div');
        taskContainerEl.append(taskDiv);
        taskDiv.id = firebaseID;

        const pEl = document.createElement('p');
        taskDiv.append(pEl);
        pEl.innerText = task.task;


        // Om done är like med true lägger vi till en klass på p-elementet
        if(task.done){
            const delBtn = document.createElement('button');
            taskDiv.append(delBtn);
            delBtn.innerText = 'X'

            pEl.classList.add('done');
        }

    }

}

export {displayAllTasks};