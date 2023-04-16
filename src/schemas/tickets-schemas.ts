import Joi from 'joi';
import { TicketType } from '@/services/ticket-service'

export const createTicketSchema = Joi.object<TicketType>({
    ticketTypeId: Joi.number().integer().greater(0).required()
  });