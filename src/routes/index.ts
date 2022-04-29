import { Router } from 'express';
import BaseController from '../controllers/index';

export default class BaseRouter<T> {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  public addRoute(
    controller: BaseController<T>,
    route: string = controller.route,
  ) {
    this.router.post(route, controller.create);
    this.router.get(route, controller.read);
  }
}
