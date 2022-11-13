import { Subjects, Publisher, PaymentCreatedEvent } from '@dhg-org/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
