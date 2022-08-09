import { dropLast } from '.'

test('dropLast works', () => {
  const text = 'Dropping!'
  const result = dropLast(text)
  expect(result).toBe('Dropping')
})
