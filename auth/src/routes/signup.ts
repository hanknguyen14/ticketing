import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { BadRequestError, validationRequest } from '@dhg-org/common';
import { User } from '../models';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post(
  '/api/users/signup',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters'),
  ],
  validationRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const isExistedUser = await User.findOne({ email: email });

    if (isExistedUser) {
      throw new BadRequestError('Email already exists');
    }

    const user = User.build({ email, password });
    await user.save();

    // Generate JWT token
    const userJWT = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_KEY!
    );
    req.session = {
      jwt: userJWT,
    };

    res.status(201).send(user);
  }
);

export { router as signUpRouter };
