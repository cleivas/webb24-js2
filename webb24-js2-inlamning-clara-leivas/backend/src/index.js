/**
 * This app maintains a highscore list in a json file with top 5 user scores for a simple guess the number game and returns or updates the list on http requests through an expressjs server.
 * 
 * This file contains all http request handlers
 * - GET /hiscore : sends the current highscore list
 * - PUT /highscore : updates the list and sends the new updated list
 */

import express from "express";
import cors from "cors";
import {body, validationResult} from "express-validator"
import * as db from "./handledatabase.js";

const app = express();
const PORT = 3000;

const validations = [
  body('name').exists().isString(), 
  body('score').exists().isNumeric()
]

/* Middlewares */
app.use(express.json());
app.use(cors());


/* Request handlers */
app.get('/highscore', async (req, res) => {
  const highscoreList = await db.getHighscore();
  res.json(highscoreList)
});


app.put('/highscore', validations, async (req, res) => {
  
  const errors = validationResult(req);

  if(errors.array().length>0){
    res.status(406).json({message: 'Wrong format'})
  }
  else{
    const updatedHighscoreList = await db.addScore(req.body);
    res.json(updatedHighscoreList);
  }
});

app.listen(PORT, () => {
  console.log("Listening on port", PORT, "...");
});