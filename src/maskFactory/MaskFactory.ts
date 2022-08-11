import { Mask } from '../Mask'
import MaskType from '../MaskType'

export const createLetterMask = (): Mask => ({
  maskType: MaskType.REGEX,
  value: '^[a-zA-Z]+$',
})

export const createNumberMask = (): Mask => ({
  maskType: MaskType.REGEX,
  value: '^[0-9]*$',
})

export const createAlphanumericMask = (): Mask => ({
  maskType: MaskType.REGEX,
  value: '^[a-zA-Z0-9]*$',
})

export const createMasks = (size: number, fn: () => Mask): Mask[] => {
  return Array<Mask>(size).fill(fn())
}
