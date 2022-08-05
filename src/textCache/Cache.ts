export interface Cache {
  updateCache: (result: string, cleanResult: string) => string;
  getText: () => string;
  getCleanText: () => string;
  clean: () => void;
}
