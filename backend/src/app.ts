import express, { Express } from 'express';
import helmet from 'helmet';
import logger from '@/config/logger.config';
import morganMiddleware from '@/config/morgan.config';
import cookieParser from 'cookie-parser';
import { validateEnv } from '@/utils/validateEnv';
import { corsMiddleware } from '@/config/cors.config';
import { apiLimiter } from '@/config/rateLimit.config';

const app: Express = express();

validateEnv();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morganMiddleware);
app.use(corsMiddleware);
app.use(apiLimiter);
app.use(cookieParser());

app.get('/', (req, res) => {
  logger.info('Hello from OnePlan-API ✨');
  res.status(200).send('Hello from OnePlan-API ✨');
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});


// todo: routes


app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});


export default app;
