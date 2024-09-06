// https://dog.ceo/dog-api/ 
// OBS! Nedan kod är för att visa alla steg i hela processen. DVS att fetch returnerar ett promise osv. Det är inte ett praktiskt sätt att koda på. 
// Den korta version är det här: 
// fetch(dogURL).then( dogCallback ).then( responseCallback );

const dogURL = 'https://dog.ceo/api/breeds/image/random';

const dogPromise = fetch(dogURL);
console.log(dogPromise);

const responsePromise = dogPromise.then( dogCallback )
console.log(responsePromise);

responsePromise.then( responseCallback )

function responseCallback(dogImageResult){
    // console.log('second promise is resolved');
    console.log( dogImageResult );

    const imgEl = document.createElement('img');
    document.body.append(imgEl);
    imgEl.src = dogImageResult.message;
}


function dogCallback(response){
    // console.log( 'First promise is resolved');
    console.log(response)

    return response.json();
}

