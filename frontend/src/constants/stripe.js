const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_ycE98SE2Hnrn2MQaLmrLdTxM00QMwOkTG4';

export default STRIPE_PUBLISHABLE;
