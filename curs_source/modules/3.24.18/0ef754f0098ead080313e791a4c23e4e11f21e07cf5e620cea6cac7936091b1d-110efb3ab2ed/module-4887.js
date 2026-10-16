"use strict";
module.exports.mixin = function(e, a) {
    const n = Object.getOwnPropertyNames(a);
    for(let t = 0; t < n.length; ++t)Object.defineProperty(e, n[t], Object.getOwnPropertyDescriptor(a, n[t]));
}, module.exports.wrapperSymbol = Symbol("wrapper"), module.exports.implSymbol = Symbol("impl"), module.exports.wrapperForImpl = function(a) {
    return a[module.exports.wrapperSymbol];
}, module.exports.implForWrapper = function(a) {
    return a[module.exports.implSymbol];
};
