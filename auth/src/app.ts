import express from 'express';
import { json } from 'body-parser';
import 'express-async-errors';
import {
  currentUserRouter,
  signInRouter,
  signOutRouter,
  signUpRouter,
} from './routes';
import { errorHandler } from './middlewares';
import { NotFoundError } from './errors';
import cookieSession from 'cookie-session';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);

app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);
app.use(errorHandler);

app.get('*', () => {
  throw new NotFoundError();
});

export { app };
