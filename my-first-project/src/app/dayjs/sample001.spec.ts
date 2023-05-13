import * as dayjs from 'dayjs';

describe('sample001', () => {
  it('xxx', () => {
    const day = dayjs('2023/01/01', 'YYYY/MM/DD').toDate();
    console.log(day);
  });
});
