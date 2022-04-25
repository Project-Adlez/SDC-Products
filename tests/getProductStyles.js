import { check } from 'k6';
import http from 'k6/http';

export default function getProductStyles() {
  const res = http.get('http://localhost:3100/products/40353/styles');
  check(res, {
    'Is status 200': (response) => response.status === 200
  });
}

// k6 run -u 100 -d 5s getProductStyles.js
