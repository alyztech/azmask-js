import type { AzMaskFormatter } from '../AzMaskFormatter';
import type { Mask } from '../Mask';
import type { Cache } from '../textCache/Cache';
import azMask from '../azMask/azMask';
import azMaskCache from '../textCache/azMaskCache';

function azMaskGroup(masks: [Mask[]]): AzMaskFormatter {
  masks.sort((a, b) => (a.length - b.length));
  const azMasks: AzMaskFormatter[] = masks.map((e: Mask[]) => azMask(e));
  const cache: Cache = azMaskCache();

  function formatValue(text: string): string {
    if (!text || cache.getText() === text) {
      return text;
    }
    cache.clean();
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
