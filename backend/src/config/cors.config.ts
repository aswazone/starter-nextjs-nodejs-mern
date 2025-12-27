import { CLIENT_URL } from '@/config/env.config';
import cors,{CorsOptions} from 'cors';

export const corsConfig = (origin:string):CorsOptions => ({
  origin,
  methods: ['GET', 'POST', 'PUT', 'DELETE','OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cache-Control','Expires', 'Pragma'],
  credentials: true
});


export const corsMiddleware = cors(corsConfig(CLIENT_URL as string));