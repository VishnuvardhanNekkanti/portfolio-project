import { Ticket } from '../types/ticket';

export const mockTickets: Ticket[] = [
  {
    id: '1',
    title: 'Network Connection Issues',
    description: 'Unable to connect to the company VPN from remote location',
    priority: 'high',
    status: 'open',
    createdAt: '2024-03-10T10:00:00Z',
    updatedAt: '2024-03-10T10:00:00Z',
    assignedTo: 'John Smith',
    createdBy: 'Sarah Johnson'
  },
  {
    id: '2',
    title: 'Email Client Not Responding',
    description: 'Outlook keeps crashing when opening attachments',
    priority: 'medium',
    status: 'in-progress',
    createdAt: '2024-03-09T15:30:00Z',
    updatedAt: '2024-03-10T09:15:00Z',
    assignedTo: 'Mike Wilson',
    createdBy: 'Tom Brown'
  }
];