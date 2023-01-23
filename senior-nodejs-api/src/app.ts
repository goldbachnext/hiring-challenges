import express from "express";
import { Route } from "./routes/route.inteface";

export class App {
	public app: express.Application;
	public port: string | number;

	constructor(routes: Route[]) {
		this.app = express();
		this.port = process.env.PORT || 3000;

		this.initializeMiddlewares();
		this.initializeRoutes(routes);
	}

	public listen() {
		this.app.listen(this.port, () => {
			console.log(`The server is running on port ${this.port}`);
		})
	}

	private initializeMiddlewares() {
		this.app.use(express.json());
	}

	private initializeRoutes(routes: Route[]) {
		routes.forEach(route => {
			this.app.use('/', route.router);
		});
	}
}