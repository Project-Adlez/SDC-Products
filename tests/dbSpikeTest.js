import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 100 },
    { duration: '1m', target: 100 },
    { duration: '10s', target: 1400 },
    { duration: '3m', target: 1400 },
    { duration: '10s', target: 100 },
    { duration: '3m', target: 100 },
    { duration: '10s', target: 0 },
  ],
};

export default function dbStressTest() {
  const BASE_URL = 'http://localhost:3100/';

  const responses = http.batch([
    [ 'GET', `${BASE_URL}/products/500000/10`, null, { tags: { name: 'Products' } } ],
    [ 'GET', `${BASE_URL}/products/500000/`, null, { tags: { name: 'Product' } } ],
    [ 'GET', `${BASE_URL}/products/500000/styles`, null, { tags: { name: 'ProductStyles' } } ],
    [ 'GET', `${BASE_URL}/products/500000/related`, null, { tags: { name: 'ProductRelated' } } ],
  ]);

  sleep(1);
}
