export default function drop(str: string, index: number): string {
  return str.slice(0, index) + str.slice(index + 1)
}

export function dropLast(str: string): string {
  return drop(str, str.length - 1)
}
