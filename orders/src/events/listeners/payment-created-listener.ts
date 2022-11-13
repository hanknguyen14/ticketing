import {
  Subjects,
  Listener,
  PaymentCreatedEvent,
  OrderStatus,
} from '@dhg-org/common';
import { Message } from 'node-nats-streaming';
import { QUEUE_GROUP_NAME } from '..';
import { Order } from '../../models';

export class PaymentCreatedListener extends Listener<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
  queueGroupName = QUEUE_GROUP_NAME;

  async onMessage(data: PaymentCreatedEvent['data'], msg: Message) {
    const order = await Order.findById(data.orderId);

    if (!order) {
      throw new Error('Order not found');
    }

    order.set({
      status: OrderStatus.Complete,
    });
    await order.save();

    msg.ack();
  }
}
