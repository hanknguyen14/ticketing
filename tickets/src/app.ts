import express from 'express';
import { json } from 'body-parser';
import { errorHandler, NotFoundError } from '@dhg-org/common';
import cookieSession from 'cookie-session';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);

app.use(errorHandler);

app.get('*', () => {
  throw new NotFoundError();
});

export { app };
