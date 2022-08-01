import validateRegex from './validateRegex';
import MaskFactory from '../maskFactory/MaskFactory';
import MaskFactoryType from '../maskFactory/MaskFactoryType';

test('validateRegex NUMBER works', () => {
  const text = 'abc1abc';
  const mask = MaskFactory.getMaskFactory(MaskFactoryType.NUMBER).createMask(0);
  const result = validateRegex(text, mask.value);
  expect(result).toBe(3);
});

test('validateRegex works', () => {
  const text = '1abc1abc';
  const mask = MaskFactory.getMaskFactory(MaskFactoryType.LETTER).createMask(0);
  const result = validateRegex(text, mask.value);
  expect(result).toBe(1);
});

test('validateRegex works', () => {
  const text = '1abc1abc';
  const mask = MaskFactory.getMaskFactory(MaskFactoryType.ALPHANUMERIC).createMask(0);
  const result = validateRegex(text, mask.value);
  expect(result).toBe(0);
});
