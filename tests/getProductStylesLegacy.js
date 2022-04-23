import { check } from 'k6';
import http from 'k6/http';

export default function getProductStyles() {
  const params = {
    headers: {
      Authorization: process.env.PG_AUTHORIZATION
    }
  };

  const res = http.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40353/styles', params);
  check(res, {
    'Is status 200': (response) => response.status === 200
  });
}

// k6 run -u 100 -d 5s getProductStyles.js
