import { Router } from 'express';
import { ApiController } from '../controllers/api.controller';
import { Route } from './route.inteface';

export class ApiRoute implements Route {
  public path = '/api';
  public router = Router();
  private apiController: ApiController;

  constructor() {
    this.apiController = new ApiController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
      this.router.get(`${this.path}`, this.apiController.getAll);
  }
}