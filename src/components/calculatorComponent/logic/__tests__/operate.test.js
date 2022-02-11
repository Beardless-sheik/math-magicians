import operate from '../operate';

describe('test for operate calculator function logic', () => {
  test('check sum function', () => {
    expect(operate(30, 5, '+')).toEqual('35');
  });
  test('check substract function', () => {
    expect(operate(30, 5, '-')).toEqual('25');
  });
  test('check multiply function', () => {
    expect(operate(30, 4, 'x')).toEqual('120');
  });
  test('check divide function', () => {
    expect(operate(30, 5, '÷')).toEqual('6');
  });
  test('check modulus function', () => {
    expect(operate(43, 5, '%')).toEqual('3');
  });
});
