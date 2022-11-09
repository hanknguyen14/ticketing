import { Subjects, Publisher, ExpirationCompleteEvent } from '@dhg-org/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
