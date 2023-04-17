import { prisma } from '@/config';

async function findTicket(ticketId:number) {
  return prisma.ticket.findUnique({
    where:{
      id: ticketId
    }
  })
  
}

async function findEnrollment(enrollmentId:number) {
  return prisma.enrollment.findUnique({
    where:{
      id: enrollmentId
    }
  })
  
}

async function findPayment(ticketId:number) {
  return prisma.payment.findFirst({
    where:{
      ticketId
    }
  })
  
}

const paymentRepository = {
  findTicket,
  findEnrollment,
  findPayment  
};

export default paymentRepository;
