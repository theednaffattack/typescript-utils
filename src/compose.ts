const compose =
    (...fns) =>
    (res) =>
        fns.reduce((accum, next) => next(accum), res);
