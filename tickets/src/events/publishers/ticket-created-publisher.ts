import { Publisher, Subjects, TicketCreatedEvent } from '@dhg-org/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
