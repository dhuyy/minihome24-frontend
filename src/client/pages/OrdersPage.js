import React from 'react';

const OrdersPage = () => {
  return (
      <div>
        <div>I'm the orders page component</div>
        <button onClick={() => console.log('Hi there!')}>Press me!</button>
      </div>
  );
};

export default {
  component: OrdersPage
};
