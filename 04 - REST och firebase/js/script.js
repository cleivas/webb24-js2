const baseURL = 'https://restrictions-6ead1-default-rtdb.europe-west1.firebasedatabase.app/main';



const header = {
    "Content-type": "application/json; charset=UTF-8"
}
const addNameBtn = document.querySelector("#addName");

addNameBtn.addEventListener('click', () => {
    // Ett objekt med ditt namn som innehåller ett till objekt med vad som
    const bodyContent = {
        clara: {
            age: 100,
            location: 'Malmö'
        }
    }
    const options = {
        method: "PATCH",
        body: JSON.stringify(bodyContent),
        headers: header
    }

    const url = baseURL + '.json';

    fetch(url, options)
        .then(response => response.json())
        .then(data => console.log(data));

})

const postBtn = document.querySelector('#post');
postBtn.addEventListener('click', ()=>{
    const content = {
        animal: 'dog',
        name: 'Thunder'
    }

    const options = {
        method: "POST",
        body: JSON.stringify(content),
        headers: header
    }

    // byt ut clara till ditt egna namn
    const url = baseURL +'/clara.json';

    fetch(url, options)
        .then(response=>response.json())
        .then(data => console.log(data));
})

const delBtn = document.querySelector('#delete');
delBtn.addEventListener('click', ()=>{

    const options = {
        method: 'DELETE'
    }
    const url = baseURL + '/clara/-O6VRQH4FGfINC-uWhLr.json';

    fetch(url, options)
        .then(response=>response.json())
        .then(data => console.log(data));
})
