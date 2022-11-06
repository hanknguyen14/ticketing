import { Subjects, Publisher, OrderCancelledEvent } from '@dhg-org/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
