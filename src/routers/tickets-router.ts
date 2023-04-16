import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';
import { getTicketTypes, createTicket } from '@/controllers';
import { createTicketSchema } from '@/schemas';


const ticketsRouter = Router();

ticketsRouter
  .all('/*', authenticateToken)
  .get('/types', getTicketTypes)
  .post('/', validateBody(createTicketSchema), createTicket);

export { ticketsRouter };
