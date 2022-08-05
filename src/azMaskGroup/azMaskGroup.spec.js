import azMaskGroup from './azMaskGroup';
import MaskFactory from '../maskFactory/MaskFactory';
import MaskFactoryType from '../maskFactory/MaskFactoryType';
import MaskType from '../MaskType';

test('AzMaskGroup works', () => {
  const maskFactory = MaskFactory.getMaskFactory(MaskFactoryType.NUMBER);
  const cpfMasks = [
    maskFactory.createMask(0),
    maskFactory.createMask(1),
    maskFactory.createMask(2),
    {
      maskType: MaskType.FIXED,
      value: '.',
      index: 3,
    },
    maskFactory.createMask(4),
    maskFactory.createMask(5),
    maskFactory.createMask(6),
    {
      maskType: MaskType.FIXED,
      value: '.',
      index: 7,
    },
    maskFactory.createMask(8),
    maskFactory.createMask(9),
    maskFactory.createMask(10),
    {
      maskType: MaskType.FIXED,
      value: '-',
      index: 11,
    },
    maskFactory.createMask(12),
    maskFactory.createMask(13),
  ];

  const cnpjMasks = [
    maskFactory.createMask(0),
    maskFactory.createMask(1),
    {
      maskType: MaskType.FIXED,
      value: '.',
      index: 2,
    },
    maskFactory.createMask(3),
    maskFactory.createMask(4),
    maskFactory.createMask(5),
    {
      maskType: MaskType.FIXED,
      value: '.',
      index: 6,
    },
    maskFactory.createMask(7),
    maskFactory.createMask(8),
    maskFactory.createMask(9),
    {
      maskType: MaskType.FIXED,
      value: '/',
      index: 10,
    },
    maskFactory.createMask(11),
    maskFactory.createMask(12),
    maskFactory.createMask(13),
    maskFactory.createMask(14),
    {
      maskType: MaskType.FIXED,
      value: '-',
      index: 15,
    },
    maskFactory.createMask(16),
    maskFactory.createMask(17),
  ];

  const maskFormatter = azMaskGroup([cpfMasks, cnpjMasks]);
  let formattedValue = maskFormatter.formatValue('a711776a38011');

  expect(formattedValue).toBe('711.776.380-11');
  expect(maskFormatter.cache.getCleanText()).toBe('71177638011');

  formattedValue = maskFormatter.formatValue('07.44a2.741/0001-71');

  expect(formattedValue).toBe('07.442.741/0001-71');
  expect(maskFormatter.cache.getCleanText()).toBe('07442741000171');

  formattedValue = maskFormatter.formatValue('a711776a38011');
  expect(formattedValue).toBe('711.776.380-11');
  expect(maskFormatter.cache.getCleanText()).toBe('71177638011');
});
