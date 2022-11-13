export const TEST_STRIPE_ID = 'test_stripe_id';
export const stripe = {
  charges: {
    create: jest.fn().mockResolvedValue({ id: TEST_STRIPE_ID }),
  },
};
