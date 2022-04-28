import BaseRouter from './routes/index';
import App from './app';
import CarController from './controllers/CarController';
import { Car } from './interfaces/CarInterface';

const server = new App();
const carsController = new CarController();
const carsRouter = new BaseRouter<Car>();

carsRouter.addRoute(carsController);
server.addRouter(carsRouter.router);

export default server;
