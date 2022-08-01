import type { Mask } from '../Mask';
import type { AzMaskFormatter } from '../AzMaskFormatter';
import type { TextCache } from '../textCache/UpdateCache';

import { dropLast } from '../drop';
import validateRegex from '../validateRegex/validateRegex';
import MaskType from '../MaskType';
import textCache from '../textCache/textCache';

function azMask(masks: Mask[]): AzMaskFormatter {
  masks.sort((a: Mask, b: Mask) => a.index - b.index);
  const cache: TextCache = textCache();

  return function formatValue(text: string): string {
    const cachedText = cache.getText();
    let result = '';
    let cleanResult = '';
    let index = 0;
    let maskIndex = 0;

    while (index < text.length && maskIndex < masks.length) {
      const mask = masks[maskIndex];

      if (index < cachedText.length && cachedText[index] === text[index]) {
        result.concat(text[index]);
        if (mask.maskType === MaskType.REGEX) {
          cleanResult.concat(text[index]);
        }
        index += 1;
      } else if (mask.maskType === MaskType.REGEX) {
        const validatedIndex: number | null = validateRegex(text, mask.value, index);
        if (validatedIndex !== null) {
          result = result.concat(text[validatedIndex]);
          cleanResult = cleanResult.concat(text[validatedIndex]);
          index = validatedIndex + 1;
        } else {
          return cache.updateCache(result, cleanResult);
        }
      } else {
        if (index === text.length - 1 && text[index].toString() === mask.value) {
          result = dropLast(result);
          return cache.updateCache(result, cleanResult);
        }
        result = result.concat(mask.value);
      }
      maskIndex += 1;
    }
    return cache.updateCache(result, cleanResult);
  };
}

export default azMask;
