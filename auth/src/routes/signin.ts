import express from 'express';

const router = express.Router();

router.post('/api/users/signin', (req, res) => {
    const {body} = req;
    req
});

export { router as signInRouter }
