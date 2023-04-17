import paymentRepository from '@/repositories/payment-repository';
import { notFoundError, unauthorizedError } from '@/errors';


async function getTicketById(ticketId: number, userId: number) {

  const ticket = await paymentRepository.findTicket(ticketId);
  
  if (!ticket) {
    throw notFoundError();
  } 

  const enrollment = await paymentRepository.findEnrollment(ticket.enrollmentId);

  if (enrollment.userId !== userId) {
    throw unauthorizedError();
  }

  const payment = await paymentRepository.findPayment(ticketId);

  return payment;
}

export type TicketId = {
  ticketId: number;
};

const paymentsService = {
  getTicketById,
};

export default paymentsService;
