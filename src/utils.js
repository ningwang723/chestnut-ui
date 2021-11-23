export function isObject(obj) {
    return obj !== null && obj && obj.toString() === '[object Object]';
}
