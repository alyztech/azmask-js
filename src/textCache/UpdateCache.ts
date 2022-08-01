export interface TextCache {
  updateCache: (result: string, cleanResult: string) => string;
  getText: () => string;
  getCleanText: () => string;
}
