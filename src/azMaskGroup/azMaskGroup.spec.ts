import azMaskGroup from '.'
import { createNumberMask } from '../maskFactory'
import MaskType from '../MaskType'

test('AzMaskGroup works', () => {
  const cpfMasks = [
    createNumberMask(),
    createNumberMask(),
    createNumberMask(),
    {
      maskType: MaskType.FIXED,
      value: '.',
    },
    createNumberMask(),
    createNumberMask(),
    createNumberMask(),
    {
      maskType: MaskType.FIXED,
      value: '.',
    },
    createNumberMask(),
    createNumberMask(),
    createNumberMask(),
    {
      maskType: MaskType.FIXED,
      value: '-',
    },
    createNumberMask(),
    createNumberMask(),
  ]

  const cnpjMasks = [
    createNumberMask(),
    createNumberMask(),
    {
      maskType: MaskType.FIXED,
      value: '.',
    },
    createNumberMask(),
    createNumberMask(),
    createNumberMask(),
    {
      maskType: MaskType.FIXED,
      value: '.',
    },
    createNumberMask(),
    createNumberMask(),
    createNumberMask(),
    {
      maskType: MaskType.FIXED,
      value: '/',
    },
    createNumberMask(),
    createNumberMask(),
    createNumberMask(),
    createNumberMask(),
    {
      maskType: MaskType.FIXED,
      value: '-',
    },
    createNumberMask(),
    createNumberMask(),
  ]

  const maskFormatter = azMaskGroup([cpfMasks, cnpjMasks])

  maskFormatter.formatValue('a711776a38011', (maskedText, unmaskedText) => {
    expect(maskedText).toBe('711.776.380-11')
    expect(unmaskedText).toBe('71177638011')
  })

  maskFormatter.formatValue(
    '07.44a2.741/0001-71',
    (maskedText, unmaskedText) => {
      expect(maskedText).toBe('07.442.741/0001-71')
      expect(unmaskedText).toBe('07442741000171')
    }
  )

  maskFormatter.formatValue('a711776a38011', (maskedText, unmaskedText) => {
    expect(maskedText).toBe('711.776.380-11')
    expect(unmaskedText).toBe('71177638011')
  })
})
