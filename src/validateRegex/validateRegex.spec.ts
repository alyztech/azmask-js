import validateRegex from './validateRegex'
import MaskFactory, { MaskFactoryType } from '../maskFactory'

test('validateRegex NUMBER works', () => {
  const text = 'abc1abc'
  const mask = MaskFactory.getMaskFactory(MaskFactoryType.NUMBER).createMask()
  const result = validateRegex(text, mask.value)
  expect(result).toBe(3)
})

test('validateRegex works', () => {
  const text = '1abc1abc'
  const mask = MaskFactory.getMaskFactory(MaskFactoryType.LETTER).createMask()
  const result = validateRegex(text, mask.value)
  expect(result).toBe(1)
})

test('validateRegex works', () => {
  const text = '1abc1abc'
  const mask = MaskFactory.getMaskFactory(
    MaskFactoryType.ALPHANUMERIC
  ).createMask()
  const result = validateRegex(text, mask.value)
  expect(result).toBe(0)
})
