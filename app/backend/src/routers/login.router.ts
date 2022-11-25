import { Router } from 'express';
import UserMidlleware from '../middleware/UserMidlleware';
import LoginController from '../controllers/Login.controller';

const routers = Router();

const userMidlleware = new UserMidlleware();

const loginController = new LoginController();

routers.post('/', userMidlleware.validateLogin, loginController.verifyLogin);
routers.get('/validate', userMidlleware.validateToken, loginController.getRole);

export default routers;
