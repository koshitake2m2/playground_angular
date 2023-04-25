import { from, Observable } from 'rxjs';

const data = from(new Promise((r) => r('hello')));
data.subscribe({
  next(response) {
    console.log(response);
  },
  error(err) {
    console.error('Error: ' + err);
  },
  complete() {
    console.log('Completed');
  },
});

describe('hello', () => {
  it('wow', () => {
    expect('hello').toBe('hello');
  });
});
