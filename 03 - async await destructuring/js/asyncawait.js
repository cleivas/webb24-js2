async function demoFunc(){
    // console.log('demo');
    return 100;
}
// Visar att functionen returnerar ett promise
// console.log( demoFunc() );


// demoFunc().then( data => console.log(data) )
// demoFunc().then( function(data){console.log(data)} )

// async med fetch
getDogImage()
    .then( displayImage )
    .catch( error=>console.log(error) );

async function getDogImage(){
    const dogURL = `https://dog.ceo/api/breeds/image/random`;

    // try{
        const response = await fetch(dogURL);
        console.log(response);

        if(response.status == 404) throw 'Breed not found'
        else if(response.status >= 200 && response.status < 300){
            const data = await response.json();
            console.log(data);
        
            return data.message;
        }
        else{
            throw "something went wrong";
        }
        
        
    // }
    // catch(error){
    //     console.log(error)
    // }

}

function displayImage(imageURL){
    const imgEl = document.createElement('img');
    document.body.append(imgEl);
    imgEl.src = imageURL;
}
