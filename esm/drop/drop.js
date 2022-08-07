export default function drop(str, index) {
    return str.slice(0, index) + str.slice(index + 1);
}
export function dropLast(str) {
    return drop(str, str.length - 1);
}
//# sourceMappingURL=drop.js.map