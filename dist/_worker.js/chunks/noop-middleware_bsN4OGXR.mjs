globalThis.process ??= {}; globalThis.process.env ??= {};
const NOOP_MIDDLEWARE_FN = (_, next) => next();

export { NOOP_MIDDLEWARE_FN as N };
