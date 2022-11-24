import { Router } from 'express';
// import validateLogin from '../middleware/validateLogin';
import loginRouter from './login.router';

const routers = Router();

routers.use('/login', loginRouter);

export default routers;
