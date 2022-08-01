import type { TextCache } from './UpdateCache';

const textCache = (): TextCache => {
  let text = '';
  let cleanText = '';

  const updateCache = (result: string, cleanResult: string): string => {
    text = result;
    cleanText = cleanResult;
    return text;
  };
  const getText = () => text;
  const getCleanText = () => cleanText;

  return { updateCache, getText, getCleanText };
};

export default textCache;
