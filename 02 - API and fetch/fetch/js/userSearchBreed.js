const formEl = document.querySelector('form');

formEl.addEventListener('submit', handleSubmit );


function handleSubmit(event){
    event.preventDefault();
    const imgContainer = document.querySelector('#dogImageContainer');
    imgContainer.innerHTML = '';

    // Hämta det användaren angett som hundras
    const breed = document.querySelector('input').value;
    console.log(breed);
    // formEl.reset();

    // Skapa API-urlen
    // const dogURL = `https://dog.ceo/api/breed/${breed}/images/random`;
    const dogURL = `https://dog.ceo/api/breed/${breed}/images/random/10`;

    fetch(dogURL)
        .then( response => response.json() )
        .then( dogData => {
            console.log(dogData.message)
            // Visar en random bild
            // const imgEl = document.querySelector('img');
            // imgEl.src = dogData.message;


            // visa 10 bilder
            for(let i=0; i<dogData.message.length; i++){
                console.log( dogData.message[i])

                const imgEl = document.createElement('img');
                imgContainer.append(imgEl);
                imgEl.src = dogData.message[i];
            }

        })
}