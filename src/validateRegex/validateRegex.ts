export default function validateRegex(
  text: string,
  pattern: string,
  index = 0
): number | null {
  if (new RegExp(pattern).test(text[index].toString())) {
    return index
  }
  return index < text.length - 1
    ? validateRegex(text, pattern, index + 1)
    : null
}
