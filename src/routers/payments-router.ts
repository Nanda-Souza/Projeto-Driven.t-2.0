import { Router } from 'express';
import { authenticateToken, validateQuery, validateBody } from '@/middlewares';
import { getPayment, createPayment } from '@/controllers';
import { ticketIdSchema } from '@/schemas';
import { createPaymentSchema } from '@/schemas';


const paymentsRouter = Router();

paymentsRouter
  .all('/*', authenticateToken)
  .get('/', validateQuery(ticketIdSchema), getPayment)
  .post('/process', validateBody(createPaymentSchema), createPayment);

export { paymentsRouter };
