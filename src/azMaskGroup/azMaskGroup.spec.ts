import azMaskGroup from '.'
import MaskFactory, { MaskFactoryType } from '../maskFactory'
import MaskType from '../MaskType'

test('AzMaskGroup works', () => {
  const maskFactory = MaskFactory.getMaskFactory(MaskFactoryType.NUMBER)
  const cpfMasks = [
    maskFactory.createMask(),
    maskFactory.createMask(),
    maskFactory.createMask(),
    {
      maskType: MaskType.FIXED,
      value: '.',
    },
    maskFactory.createMask(),
    maskFactory.createMask(),
    maskFactory.createMask(),
    {
      maskType: MaskType.FIXED,
      value: '.',
    },
    maskFactory.createMask(),
    maskFactory.createMask(),
    maskFactory.createMask(),
    {
      maskType: MaskType.FIXED,
      value: '-',
    },
    maskFactory.createMask(),
    maskFactory.createMask(),
  ]

  const cnpjMasks = [
    maskFactory.createMask(),
    maskFactory.createMask(),
    {
      maskType: MaskType.FIXED,
      value: '.',
    },
    maskFactory.createMask(),
    maskFactory.createMask(),
    maskFactory.createMask(),
    {
      maskType: MaskType.FIXED,
      value: '.',
    },
    maskFactory.createMask(),
    maskFactory.createMask(),
    maskFactory.createMask(),
    {
      maskType: MaskType.FIXED,
      value: '/',
    },
    maskFactory.createMask(),
    maskFactory.createMask(),
    maskFactory.createMask(),
    maskFactory.createMask(),
    {
      maskType: MaskType.FIXED,
      value: '-',
    },
    maskFactory.createMask(),
    maskFactory.createMask(),
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
