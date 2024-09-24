import express from "express";

const app = express();
app.use(express.json()); //för att kunna hantera json, kommer förklaras mer på fredag

// console.log(app)
app.listen(3000, ()=>{
    console.log("listening on port 3000...")
})

app.get('/', (req, res)=>{
    res.send("GET request received, SÅ KUUUUUUUL");
})

// Ta emot en post request
const animals = []; 
app.post('/animals', (req, res)=>{

    // console.log(req.body);
    animals.push(req.body.newAnimal);

    res.json({
        message: 'new animal added',
        animals: animals
    });
})

const user = {
    name: 'Clara',
    admin: true
}

// Skicka från postman en patch-request till localhost:3000/users/clara och uppdatera admin från true till false
// { admin: false}

// Skriv kod för att hantera patchrequesten
app.patch('/users/clara', (req, res)=>{

    console.log(req.body);
    console.log(user);


    user.admin = req.body.admin;
    console.log(user);

    res.json({message: "clara's admin right is updated"})
})


// Tar bort ett nummer från arrayen varje gång en delete request kommer in till /numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
app.delete('/numbers', (req, res)=>{
    numbers.pop(); //Tar bort det sista elementet i arrayen numbers

    res.json({numbers}); //samma som {numbers: numbers}
})