export const AWS_SERVER = {
  url: 'http://18.216.180.137',
  endpoints: {
    products: {
      getAll: '/products/find',
      getById: '/products/find/'
    },
    pricing: {
      getAll: '/pricing/find',
      getById: '/pricing/find/',
      calculate: '/pricing/calculate/'
    },
    orders: {
      getAll: '/orders/find'
    }
  }
};
