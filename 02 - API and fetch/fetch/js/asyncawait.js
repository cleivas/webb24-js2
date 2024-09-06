const dogURL = 'https://dog.ceo/api/breeds/image/random';

async function getDogImage(){
    
    const response = await fetch(dogURL);
    const dogImageResult = await response.json();

    const imgEl = document.createElement('img');
    document.body.append(imgEl);
    imgEl.src = dogImageResult.message;
}

getDogImage();