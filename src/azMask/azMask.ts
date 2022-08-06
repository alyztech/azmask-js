import type { Mask } from '../Mask';
import type { AzMaskFormatter } from '../AzMaskFormatter';
import type { Cache } from '../textCache';

import { dropLast } from '../drop';
import validateRegex from '../validateRegex';
import MaskType from '../MaskType';
import azMaskCache from '../textCache';

function azMask(masks: Mask[]): AzMaskFormatter {
  masks.sort((a: Mask, b: Mask) => a.index - b.index);
  const cache: Cache = azMaskCache();

  function formatValue(text: string, func: (text: string, unmaskedText: string) => void): void {
    if (typeof func !== 'function') {
      throw new TypeError('Expected a function');
    }
    const cachedText = cache.getMaskedText();
    let maskedText = '';
    let unmaskedText = '';
    let index = 0;
    let maskIndex = 0;

    while (index < text.length && maskIndex < masks.length) {
      const mask = masks[maskIndex];
      const currentChar = text[index];

      if (mask.maskType === MaskType.REGEX) {
        if (index < cachedText.length && cachedText[index] === currentChar) {
          maskedText = maskedText.concat(currentChar);
          unmaskedText = unmaskedText.concat(currentChar);
          index += 1;
        } else {
          const validatedIndex: number | null = validateRegex(text, mask.value, index);
          if (validatedIndex !== null) {
            maskedText = maskedText.concat(text[validatedIndex]);
            unmaskedText = unmaskedText.concat(text[validatedIndex]);
            index = validatedIndex + 1;
          } else {
            cache.updateCache(maskedText, unmaskedText);
            func(maskedText, unmaskedText);
          }
        }
      } else {
        if (currentChar.toString() === mask.value) {
          if (index === text.length - 1) {
            maskedText = dropLast(maskedText);
            cache.updateCache(maskedText, unmaskedText);
            func(maskedText, unmaskedText);
          }
          index += 1;
        }
        maskedText = maskedText.concat(mask.value);
      }
      maskIndex += 1;
    }
    cache.updateCache(maskedText, unmaskedText);
    func(maskedText, unmaskedText);
  }
  return { formatValue };
}

export default azMask;
