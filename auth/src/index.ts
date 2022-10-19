import express from "express";
import {json} from "body-parser";
import 'express-async-errors';
import { currentUserRouter, signInRouter, signOutRouter, signUpRouter } from "./routes";
import { errorHandler } from "./middlewares";
import { NotFoundError } from "./errors";

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

app.listen(3000, () => {
    console.log("listening on port 3000!");
});

