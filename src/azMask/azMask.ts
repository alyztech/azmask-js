import type { Mask } from '../Mask';
import type { AzMaskFormatter } from '../AzMaskFormatter';
import type { Cache } from '../textCache/Cache';

import { dropLast } from '../drop';
import validateRegex from '../validateRegex/validateRegex';
import MaskType from '../MaskType';
import azMaskCache from '../textCache/azMaskCache';

function azMask(masks: Mask[]): AzMaskFormatter {
  masks.sort((a: Mask, b: Mask) => a.index - b.index);
  const cache: Cache = azMaskCache();

  function formatValue(text: string): string {
    const cachedText = cache.getText();
    let result = '';
    let cleanResult = '';
    let index = 0;
    let maskIndex = 0;

    while (index < text.length && maskIndex < masks.length) {
      const mask = masks[maskIndex];
      const currentChar = text[index];

      if (mask.maskType === MaskType.REGEX) {
        if (index < cachedText.length && cachedText[index] === currentChar) {
          result = result.concat(currentChar);
          cleanResult = cleanResult.concat(currentChar);
          index += 1;
        } else {
          const validatedIndex: number | null = validateRegex(text, mask.value, index);
          if (validatedIndex !== null) {
            result = result.concat(text[validatedIndex]);
            cleanResult = cleanResult.concat(text[validatedIndex]);
            index = validatedIndex + 1;
          } else {
            return cache.updateCache(result, cleanResult);
          }
        }
      } else {
        if (currentChar.toString() === mask.value) {
          if (index === text.length - 1) {
            result = dropLast(result);
            return cache.updateCache(result, cleanResult);
          }
          index += 1;
        }
        result = result.concat(mask.value);
      }
      maskIndex += 1;
    }
    return cache.updateCache(result, cleanResult);
  }
  return { formatValue, cache };
}

export default azMask;
