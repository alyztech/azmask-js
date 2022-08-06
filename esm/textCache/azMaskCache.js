const azMaskCache = () => {
    let maskedText = '';
    let unmaskedText = '';
    const updateCache = (newText, newUnmaskedText) => {
        maskedText = newText;
        unmaskedText = newUnmaskedText;
        return maskedText;
    };
    const clean = () => {
        maskedText = '';
        unmaskedText = '';
    };
    const getMaskedText = () => maskedText;
    const getUnmaskedText = () => unmaskedText;
    return {
        updateCache, getMaskedText, getUnmaskedText, clean,
    };
};
export default azMaskCache;
//# sourceMappingURL=azMaskCache.js.map