import drop from '.'

test('drop works', () => {
  const text = 'Dropping!'
  const result = drop(text, text.length - 1)
  expect(result).toBe('Dropping')
})
