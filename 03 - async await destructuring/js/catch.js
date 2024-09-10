const url = `https://restcountries.com/v3.1/name/spain`;
// const url = `https://dog.ceo/api/breeds/ige/random`;
;

fetch(url).then(
    function(response){
        console.log(response)
        if(response.status >= 200 && response.status < 300){
            return response.json();
        }
        else{
            throw "Country not found. Try again."
        }
    }
).then(
    function(data){
        console.log(data)
    }
).catch(
    function(error){
        console.log(error)
    }
);
