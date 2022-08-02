import type { AzMaskFormatter } from '../AzMaskFormatter';
import type { Mask } from '../Mask';
import type { TextCache } from '../textCache/UpdateCache';
import azMask from '../azMask/azMask';
import textCache from '../textCache/textCache';

function azMaskGroup(masks: [Mask[]]): AzMaskFormatter {
  masks.sort((a, b) => (a.length - b.length));
  const azMasks: AzMaskFormatter[] = masks.map((e: Mask[]) => azMask(e));
  const cache: TextCache = textCache();

  function formatValue(text: string): string {
    if (!text || cache.getText() === text) {
      return text;
    }
    azMasks.forEach((e) => {
      const formatResult = e.formatValue(text);
      if (cache.getCleanText().length < e.cache.getCleanText().length) {
        cache.updateCache(formatResult, e.cache.getCleanText());
      }
    });
    return cache.getText();
  }

  return { formatValue, cache };
}

export default azMaskGroup;
