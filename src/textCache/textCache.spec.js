import azMaskCache from './azMaskCache';

test('validateRegex NUMBER works', () => {
  const text = 'abc.abc';
  const cleanText = 'abcabc';
  const cache = azMaskCache();
  cache.updateCache(text, cleanText);
  expect(cache.getText()).toBe(text);
  expect(cache.getCleanText()).toBe(cleanText);

  const text2 = 'abc.abc2';
  const cleanText2 = 'abcabc2';
  const cache2 = azMaskCache();
  expect(cache2.getText()).toBe('');
  expect(cache2.getCleanText()).toBe('');

  cache2.updateCache(text2, cleanText2);
  expect(cache2.getText()).toBe(text2);
  expect(cache2.getCleanText()).toBe(cleanText2);
});
