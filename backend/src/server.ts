import app from '@/app';
import { SERVER_URL } from '@/config/env.config';
import logger from '@/config/logger.config';
import http from 'http';

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    // todo: Database intance 
    // todo: redis
    // todo: socket 
    const server = http.createServer(app);
    server.listen(PORT, () => {
      logger.info(`Server started on ${SERVER_URL} 🚀`);
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();


