import Dexie, { Table } from 'dexie';
import { Ticket } from '../types/ticket';

export class TicketDB extends Dexie {
  tickets!: Table<Ticket>;

  constructor() {
    super('ticketDB');
    this.version(1).stores({
      tickets: '++id, title, status, priority, assignedTo, createdAt, updatedAt'
    });
  }
}

export const db = new TicketDB();