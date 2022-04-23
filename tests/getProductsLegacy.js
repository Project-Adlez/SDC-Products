import { check } from 'k6';
import http from 'k6/http';

export default function getProducts() {
  const params = {
    headers: {
      Authorization: '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'
    }
  };

  const res = http.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products', params);
  check(res, {
    'Is status 200': (response) => response.status === 200
  });
}

// k6 run -u 100 -d 5s getProducts.js
