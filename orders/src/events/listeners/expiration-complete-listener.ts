import {
  Listener,
  Subjects,
  ExpirationCompleteEvent,
  OrderStatus,
} from '@dhg-org/common';
import { Message } from 'node-nats-streaming';
import { QUEUE_GROUP_NAME } from './constants';
import { Order } from '../../models';
import { OrderCancelledPublisher } from '../publishers';

export class ExpirationCompleteListener extends Listener<ExpirationCompleteEvent> {
  queueGroupName = QUEUE_GROUP_NAME;
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;

  async onMessage(data: ExpirationCompleteEvent['data'], msg: Message) {
    const order = await Order.findById(data.orderId).populate('ticket');

    if (!order) {
      throw new Error('Order not found');
    }

    if (order.status === OrderStatus.Complete) {
      return msg.ack();
    }

    order.set({
      status: OrderStatus.Cancelled,
    });

    await order.save();
    await new OrderCancelledPublisher(this.client).publish({
      id: order.id,
      version: order.version,
      ticket: {
        id: order.ticket.id,
      },
    });

    msg.ack();
  }
}
