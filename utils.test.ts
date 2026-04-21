import { add, subtract, toUpper, isArrayEmpty, multiply } from './utils';

describe('Utility Functions Tests', () => {
  
  test('يجب أن يجمع رقمين بشكل صحيح', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('يجب أن يطرح رقمين بشكل صحيح', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('يجب أن يحول النص إلى حروف كبيرة', () => {
    expect(toUpper('jumana')).toBe('JUMANA');
  });

  test('يجب أن يتحقق إذا كانت القائمة فارغة', () => {
    expect(isArrayEmpty([])).toBe(true);
  });

  test('يجب أن يضرب رقمين بشكل صحيح', () => {
    expect(multiply(3, 4)).toBe(12);
  });

});