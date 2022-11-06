import { Publisher, OrderCreatedEvent, Subjects } from '@dhg-org/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
