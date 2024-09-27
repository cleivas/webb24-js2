import express from "express";
import cors from "cors";
import * as db from "./handledb.js";
import {body, validationResult} from "express-validator";
// import { mw1, mw2, mw3 } from "./middlewares.js";

const PORT = 3000;
const app = express();

const validations = [
    body("name").exists().isString(),
    body("genre").exists().isString(),
    body("director").exists().isString(),
    body("year").exists().isNumeric(),
];

app.use( express.json() );
app.use( cors() );


app.get('/movies', async (req, res)=>{
    const movies = await db.getAllMovies();
    res.json(movies);
})

// Det är endast här mina validation middlewares behövs
app.post('/movies', validations, async (req, res)=>{
    const errors = validationResult(req);
    console.log(errors.array().length);
    if(errors.array().length>0){
        res.status(400).json({message: 'Invalid value'});
    }
    else{
        await db.addMovie(req.body);
        res.json({message: 'New movie added'});
    }

})

app.listen(PORT, ()=>{
    console.log('Listening on port', PORT)
});
