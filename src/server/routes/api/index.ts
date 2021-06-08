import todosRouter from './todos';
import * as express from 'express';

const router = express.Router();

router.use('/todos', todosRouter);

export default router;