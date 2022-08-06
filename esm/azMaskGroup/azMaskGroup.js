import azMask from '../azMask/azMask';
import azMaskCache from '../textCache/azMaskCache';
function azMaskGroup(masks) {
    masks.sort((a, b) => (a.length - b.length));
    const azMasks = masks.map((e) => azMask(e));
    const cache = azMaskCache();
    function formatValue(text, func) {
        if (typeof func !== 'function') {
            throw new TypeError('Expected a function');
        }
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
//# sourceMappingURL=azMaskGroup.js.map