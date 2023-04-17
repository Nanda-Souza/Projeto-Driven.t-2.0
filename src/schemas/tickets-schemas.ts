import Joi from 'joi';
import { TicketType} from '@/services/ticket-service'
import { TicketId } from '@/services/payment-service'

export const createTicketSchema = Joi.object<TicketType>({
    ticketTypeId: Joi.number().integer().greater(0).required()
  });
  
  export const ticketIdSchema = Joi.object<TicketId>({
    ticketId: Joi.string().pattern(/^[0-9]+$/).required()
  });
  