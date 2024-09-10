const form = document.querySelector('form');

form.addEventListener('submit', handleImageSearch);

function handleImageSearch(event){
    event.preventDefault();

    const breed = document.querySelector('#breed').value;
    const amount = document.querySelector('#amount').value;

    
    const dogAPIURL = `https://dog.ceo/api/breed/${breed}/images/random/${amount}`;
    
    fetch(dogAPIURL)
        .then( response => response.json() )
        .then( displayImages )
}

function displayImages(images){
    // console.log(images);

    const container = document.querySelector('#imageContainer');
    container.innerHTML = '';

    for( const imgUrl of images.message){
        // console.log(imgUrl);
        const imgEl = document.createElement('img');
        container.append(imgEl);
        imgEl.src = imgUrl;
    }
}

