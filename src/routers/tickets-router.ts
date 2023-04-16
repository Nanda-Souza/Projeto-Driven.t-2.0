import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';
import { getTicketTypes, createTicket, getTicket } from '@/controllers';
import { createTicketSchema } from '@/schemas';


const ticketsRouter = Router();

ticketsRouter
  .all('/*', authenticateToken)
  .get('/types', getTicketTypes)
  .post('/', validateBody(createTicketSchema), createTicket)
  .get('/', getTicket);

export { ticketsRouter };
