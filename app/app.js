import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import registerRouter from './routes/index.js';

import models from './models/index.js';

// This is called from the server.js file
const initalize = (app) => {
// cross origin 
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    mongoose.connect('mongodb+srv://Nammabnb:Nammabnb1234@nammabnb.0gsjaiz.mongodb.net/');
    registerRouter(app);



}


export default initalize;
