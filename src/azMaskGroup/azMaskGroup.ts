import type { AzMaskFormatter } from '../AzMaskFormatter';
import type { Mask } from '../Mask';
import type { Cache } from '../textCache/Cache';
import azMask from '../azMask/azMask';
import azMaskCache from '../textCache/azMaskCache';

function azMaskGroup(masks: [Mask[]]): AzMaskFormatter {
  masks.sort((a, b) => (a.length - b.length));
  const azMasks: AzMaskFormatter[] = masks.map((e: Mask[]) => azMask(e));
  const cache: Cache = azMaskCache();

  function formatValue(text: string, func: (text: string, unmaskedText: string) => void): void {
    if (!text || cache.getMaskedText() === text) {
      func(text, cache.getUnmaskedText());
      return;
    }
    cache.clean();
    azMasks.forEach((e) => {
      e.formatValue(text, (maskedText, unmaskedText) => {
        if (cache.getUnmaskedText().length < unmaskedText.length) {
          cache.updateCache(maskedText, unmaskedText);
        }
      });
    });
    func(cache.getMaskedText(), cache.getUnmaskedText());
  }
  return { formatValue };
}

export default azMaskGroup;
