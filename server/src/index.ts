import express from 'express';
import logger from './utils/logger';
import config from './config';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import {errorHandlingMiddleware} from "./middleware/errorHandling.middleware";
import {corsConfig} from "./config/corsConfig";
import routes from "./routes";
import {sequelize} from './models';
import path from "path";
import {swaggerConfig} from "./config/swaggerConfig";

export const ROOT_PATH = path.resolve(__dirname, '..');

const app = express();

const port = config.port || 3000;
const isDev = config.env === 'development';

app.use(express.json());
app.use(cors(corsConfig(isDev)));
app.use(cookieParser());

app.use('/api', routes);

if(isDev) {
	app.use("/api/docs", ...swaggerConfig());
}

app.use(errorHandlingMiddleware);

const start = async () => {
	await sequelize.authenticate();
	await sequelize.sync();
	
	app.listen(port, () => {
		logger.info(`Сервер запущен на http://localhost:${port} [${config.env}]`);
	});
	
	if(isDev) {
		logger.info(`Документация Swagger http://localhost:${port}/api/docs`);
	}
}

start()
