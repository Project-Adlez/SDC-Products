import http from 'k6/http';

export const options = {
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 1000,
      timeUnit: '1s', // 1000 iterations per second, i.e. 1000 RPS
      duration: '30s',
      preAllocatedVUs: 100, // how large the initial pool of VUs would be
      maxVUs: 200, // if the preAllocatedVUs are not enough, we can initialize more
    },
  },
};

export default function constantRate() {
  const BASE_URL = 'http://localhost:3100';
  const PRODUCT_ID = Math.floor(Math.random() * 1000000);

  // http.get(`${BASE_URL}/products/1/5`);
  http.get(`${BASE_URL}/products/${PRODUCT_ID}`);
  // http.get(`${BASE_URL}/products/${PRODUCT_ID}/styles`);
  // http.get(`${BASE_URL}/products/${PRODUCT_ID}/related`);
}
