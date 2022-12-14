export interface Cache {
  updateCache: (result: string, cleanResult: string) => void
  getMaskedText: () => string
  getUnmaskedText: () => string
  clean: () => void
}
