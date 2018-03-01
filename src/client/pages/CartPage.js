import React from 'react';

const CartPage = () => {
  return (
      <div>
        <div>I'm the cart page component</div>
        <button onClick={() => console.log('Hi there!')}>Press me!</button>
      </div>
  );
};

export default {
  component: CartPage
};
