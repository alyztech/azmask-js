export default function drop(str: string, index: number): string {
  return str.slice(0, index) + str.slice(index + 1);
}
