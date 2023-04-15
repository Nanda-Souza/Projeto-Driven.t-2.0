import ticketRepository from '@/repositories/ticket-repository';

async function getTicketByType() {
  const ticketTypes = await ticketRepository.findTicketTypes();
  return ticketTypes
  
}

const ticketsService = {
  getTicketByType,
};

export default ticketsService;
