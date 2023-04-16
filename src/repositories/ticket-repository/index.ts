import { Ticket } from '@prisma/client';
import { prisma } from '@/config';

async function findTicketTypes(){
  return prisma.ticketType.findMany();
  
}

async function createTicket(ticket: CreateTicketParams){
  return prisma.ticket.create({
      data: ticket,
      include: {
        TicketType: true,
      }
  });
  
}

async function findTicket(enrollmentId: number){
  return prisma.ticket.findFirst({
      where:{
        enrollmentId
      },
      include: {
        TicketType: true,
      }
  });
  
}

export type CreateTicketParams = Omit<Ticket, 'id' | 'createdAt' | 'updatedAt'>;

const ticketRepository = {
  findTicketTypes,
  createTicket,
  findTicket,  
};

export default ticketRepository;
