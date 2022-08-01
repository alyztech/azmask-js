import drop from './drop';

export default function dropLast(str: string): string {
  return drop(str, str.length - 1);
}
