import express from "express";
import {json} from "body-parser";
import 'express-async-errors';
import { currentUserRouter, signInRouter, signOutRouter, signUpRouter } from "./routes";
import { errorHandler } from "./middlewares";
import { NotFoundError } from "./errors";
import mongoose from 'mongoose';

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);
app.use(errorHandler);

app.get('*', () => {
    throw new NotFoundError();
});

const start = async () => {
    try {
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth')
    } catch (err) {
        console.error(err);
    }
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
        console.log("listening on port 3000!");
    });
}

start();

