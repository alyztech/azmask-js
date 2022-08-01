import textCache from './textCache';

test('validateRegex NUMBER works', () => {
  const text = 'abc.abc';
  const cleanText = 'abcabc';
  const cache = textCache();
  cache.updateCache(text, cleanText);
  expect(cache.getText()).toBe(text);
  expect(cache.getCleanText()).toBe(cleanText);
});
