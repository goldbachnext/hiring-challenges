import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { Route } from './route.inteface';

export class AuthRoute implements Route {
  public path = '/auth';
  public router = Router();
  private authController: AuthController;

  constructor() {
    this.authController = new AuthController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/login`, this.authController.login);
  }
}