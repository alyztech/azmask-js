import type { Cache } from './Cache';

const azMaskCache = (): Cache => {
  let text = '';
  let cleanText = '';
  const updateCache = (result: string, cleanResult: string): string => {
    text = result;
    cleanText = cleanResult;
    return text;
  };
  const clean = (): void => {
    text = '';
    cleanText = '';
  };
  const getText = () => text;
  const getCleanText = () => cleanText;
  return {
    updateCache, getText, getCleanText, clean,
  };
};

export default azMaskCache;
