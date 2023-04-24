const pluckDeep = (key) => (obj) =>
    key.split(".").reduce((accum, key) => accum[key], obj);

export function pluck(key) {
    return function (obj) {
        return key.split(".").reduce((accum, key) => accum[key], obj);
    };
}
