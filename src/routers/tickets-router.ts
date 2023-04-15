import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';
import { getTicketTypes } from '@/controllers';
//import { createEnrollmentSchema } from '@/schemas';

const ticketsRouter = Router();

ticketsRouter
  .all('/*', authenticateToken)
  .get('/types', getTicketTypes)
  //.post('/', validateBody(createEnrollmentSchema), postCreateOrUpdateEnrollment);

export { ticketsRouter };