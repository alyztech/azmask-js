import azMask from './azMask';
import MaskFactory from '../maskFactory/MaskFactory';
import MaskFactoryType from '../maskFactory/MaskFactoryType';
import MaskType from '../MaskType';

test('AzMask works', () => {
  const maskFactory = MaskFactory.getMaskFactory(MaskFactoryType.NUMBER);
  const masks = [
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
  const maskFormatter = azMask(masks);
  let formattedValue = maskFormatter.formatValue('34775332830');
  expect(formattedValue).toBe('347.753.328-30');
  expect(maskFormatter.cache.getCleanText()).toBe('34775332830');
  expect(maskFormatter.cache.getText()).toBe('347.753.328-30');

  formattedValue = maskFormatter.formatValue('07.44a2.741/0001-71');
  expect(formattedValue).toBe('07.442.741/0001-71');
  expect(maskFormatter.cache.getCleanText()).toBe('07442741000171');
});
