import MaskFactory from './MaskFactory'
import MaskFactoryType from './MaskFactoryType'
import MaskType from '../MaskType'

test('MaskFactory LETTER works', () => {
  const maskFactory = MaskFactory.getMaskFactory(MaskFactoryType.LETTER)
  const mask = maskFactory.createMask()
  expect(mask.maskType).toBe(MaskType.REGEX)
  expect(mask.value).toBe('^[a-zA-Z]+$')
})

test('MaskFactory NUMBER works', () => {
  const maskFactory = MaskFactory.getMaskFactory(MaskFactoryType.NUMBER)
  const mask = maskFactory.createMask()
  expect(mask.maskType).toBe(MaskType.REGEX)
  expect(mask.value).toBe('^[0-9]*$')
})

test('MaskFactory ALPHANUMERIC works', () => {
  const maskFactory = MaskFactory.getMaskFactory(MaskFactoryType.ALPHANUMERIC)
  const mask = maskFactory.createMask()
  expect(mask.maskType).toBe(MaskType.REGEX)
  expect(mask.value).toBe('^[a-zA-Z0-9]*$')
})
