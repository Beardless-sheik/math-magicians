import calculate from '../calculate';

describe('Tests for calculate logic function', () => {
  const obj = { total: null, next: null, operation: '+' };
  test('should return object with null variables', () => {
    expect(calculate(obj, 'AC')).toEqual({ total: null, next: null, operation: null });
  });

  test('should return an object with next variable equal to "8"', () => {
    expect(calculate(obj, '8').next).toEqual('8');
  });

  test('should return an empty object', () => {
    expect(calculate(obj, '=')).toEqual({});
  });

  test('should return obj which total is calculated', () => {
    const obj2 = { total: '16', next: '8', operation: '+' };
    expect(calculate(obj2, '=').total).toEqual('24');
  });
});
