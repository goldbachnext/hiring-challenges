import { App } from "./app";
import { ApiRoute } from "./routes/api.route";
import { AuthRoute } from "./routes/auth.route";

const app = new App([
	new AuthRoute(),
	new ApiRoute()
])

app.listen();