import Joi from 'joi';

export const createPaymentSchema = Joi.object({
  ticketId: Joi.number().integer().greater(0).required(),
  cardData: Joi.object({
    issuer: Joi.string().required(),
    number: Joi.number().integer().greater(0).required(),
    name: Joi.string().required(),
    expirationDate: Joi.string().required(),    
    cvv: Joi.number().integer().greater(0).required(),
  }).required(),
});

