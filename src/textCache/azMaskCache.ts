import type { Cache } from './Cache'

const azMaskCache = (): Cache => {
  let maskedText = ''
  let unmaskedText = ''
  const updateCache = (newText: string, newUnmaskedText: string): string => {
    maskedText = newText
    unmaskedText = newUnmaskedText
    return maskedText
  }
  const clean = (): void => {
    maskedText = ''
    unmaskedText = ''
  }
  const getMaskedText = () => maskedText
  const getUnmaskedText = () => unmaskedText
  return {
    updateCache,
    getMaskedText,
    getUnmaskedText,
    clean,
  }
}

export default azMaskCache
