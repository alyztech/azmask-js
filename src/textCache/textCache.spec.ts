import azMaskCache from '.'

test('validateRegex NUMBER works', () => {
  const text = 'abc.abc'
  const cleanText = 'abcabc'
  const cache = azMaskCache()
  cache.updateCache(text, cleanText)
  expect(cache.getMaskedText()).toBe(text)
  expect(cache.getUnmaskedText()).toBe(cleanText)

  const text2 = 'abc.abc2'
  const cleanText2 = 'abcabc2'
  const cache2 = azMaskCache()
  expect(cache2.getMaskedText()).toBe('')
  expect(cache2.getUnmaskedText()).toBe('')

  cache2.updateCache(text2, cleanText2)
  expect(cache2.getMaskedText()).toBe(text2)
  expect(cache2.getUnmaskedText()).toBe(cleanText2)
})
