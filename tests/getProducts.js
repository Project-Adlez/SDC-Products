import { check } from 'k6';
import http from 'k6/http';

export default function getProducts() {
  const res = http.get('http://localhost:3100/products/1/10');
  check(res, {
    'Is status 200': (response) => response.status === 200
  });
}

// k6 run -u 100 -d 5s getProducts.js
