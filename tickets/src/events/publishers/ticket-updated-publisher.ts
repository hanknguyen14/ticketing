import { Publisher, Subjects, TicketUpdatedEvent } from '@dhg-org/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
