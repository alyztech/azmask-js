import azMask from './azMask'
import MaskFactory, { MaskFactoryType } from '../maskFactory'
import MaskType from '../MaskType'

test('AzMask CPF works', () => {
  const maskFactory = MaskFactory.getMaskFactory(MaskFactoryType.NUMBER)
  const masks = [
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
  const maskFormatter = azMask(masks)
  maskFormatter.formatValue('34775332830', (maskedText, unmaskedText) => {
    expect(maskedText).toBe('347.753.328-30')
    expect(unmaskedText).toBe('34775332830')
  })
})

test('AzMask CNPJ works', () => {
  const maskFactory = MaskFactory.getMaskFactory(MaskFactoryType.NUMBER)

  const masks = [
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

  const maskFormatter = azMask(masks)
  maskFormatter.formatValue(
    '07.44a2.741/0001-71',
    (maskedText, unmaskedText) => {
      expect(maskedText).toBe('07.442.741/0001-71')
      expect(unmaskedText).toBe('07442741000171')
    }
  )
})

test('AzMask CPF works', () => {
  const maskFactory = MaskFactory.getMaskFactory(MaskFactoryType.NUMBER)
  const masks = [
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
  const maskFormatter = azMask(masks)
  maskFormatter.formatValue('34775332830', (maskedText, unmaskedText) => {
    expect(maskedText).toBe('347.753.328-30')
    expect(unmaskedText).toBe('34775332830')
  })
})

test('AzMask delete fixed works', () => {
  const maskFactory = MaskFactory.getMaskFactory(MaskFactoryType.NUMBER)

  const masks = [
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

  const maskFormatter = azMask(masks)
  maskFormatter.formatValue('07.', (maskedText, unmaskedText) => {
    expect(maskedText).toBe('07')
    expect(unmaskedText).toBe('07')
  })
})
