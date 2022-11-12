import {
  OrderCancelledEvent,
  Subjects,
  Listener,
  OrderStatus,
} from '@dhg-org/common';
import { Message } from 'node-nats-streaming';
import { QUEUE_GROUP_NAME } from './constants';
import { Order } from '../../models';

export class OrderCancelledListener extends Listener<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
  queueGroupName = QUEUE_GROUP_NAME;

  async onMessage(data: OrderCancelledEvent['data'], msg: Message) {
    const order = await Order.findOne({
      _id: data.id,
      version: data.version - 1,
    });

    if (!order) {
      throw new Error('Order not found');
    }

    order.set({ status: OrderStatus.Cancelled });
    await order.save();

    msg.ack();
  }
}
