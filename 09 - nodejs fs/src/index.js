import express from "express";
import cors from "cors";
import * as db from "./handledatabase.js"; //Importera allt som exporteras från filen, under namnet "db". Alla funktioner blir en metod i ett objekt som heter db.

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get('/api/users', async (req, res)=>{
    const users = await db.readUsers();
    res.json(users)
})

app.get('/api/users/:id', async (req, res)=>{
    console.log(req.params.id); //Ett objekt som innehåller id, placeholdern vi angav i pathen
    const user = await db.getUser(req.params.id);
    res.json(user);
})

app.post('/api/users', async (req, res)=>{
    await db.addUser(req.body);
    res.json({message: `Welcome, ${req.body.name}!`});
})

app.delete('/api/users/:id', async (req, res)=>{
    await db.deleteUser(req.params.id);
    res.json({message: `User ${req.params.id} deleted.`});
})

app.patch('/api/updateadmin/:id', async (req, res)=>{
    await db.updateAdmin(req.params.id, req.body.admin )
    res.json({message: `User ${req.params.id} admin rights updated.`});
})

app.listen(PORT, ()=>{
    console.log('listening on port ', PORT)
})