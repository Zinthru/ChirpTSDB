
import * as express from 'express';
import usersRouter from './users';
import chirpsRouter from '../index';

const router = express.Router();


router.use('/users', usersRouter);
router.use('/chirps', chirpsRouter);

export default router;