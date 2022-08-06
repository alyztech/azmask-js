export default function validateRegex(text, pattern, index = 0) {
    if (new RegExp(pattern).test(text[index].toString())) {
        return index;
    }
    return (index < text.length - 1) ? validateRegex(text, pattern, index + 1) : null;
}
//# sourceMappingURL=validateRegex.js.map