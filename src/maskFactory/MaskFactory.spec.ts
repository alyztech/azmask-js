import {
  createAlphanumericMask,
  createNumberMask,
  createLetterMask,
  createMasks,
} from './maskFactory'
import MaskType from '../MaskType'
import { Mask } from '../Mask'

test('MaskFactory LETTER works', () => {
  const mask = createLetterMask()
  expect(mask.maskType).toBe(MaskType.REGEX)
  expect(mask.value).toBe('^[a-zA-Z]+$')
})

test('MaskFactory NUMBER works', () => {
  const mask = createNumberMask()
  expect(mask.maskType).toBe(MaskType.REGEX)
  expect(mask.value).toBe('^[0-9]*$')
})

test('MaskFactory ALPHANUMERIC works', () => {
  const mask = createAlphanumericMask()
  expect(mask.maskType).toBe(MaskType.REGEX)
  expect(mask.value).toBe('^[a-zA-Z0-9]*$')
})

test('MaskFactory array creation works', () => {
  const masks = createMasks(3, createNumberMask)
  console.log(masks)
  expect(masks.length).toBe(3)
  masks.forEach((e: Mask) => {
    expect(e.maskType).toBe(MaskType.REGEX)
    expect(e.value).toBe('^[0-9]*$')
  })
})
