var globalThis2 = require("./module-4576.js");
var isCallable = require("./module-4901.js");
var aFunction = function(argument) {
    return isCallable(argument) ? argument : void 0;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(globalThis2[namespace]) : globalThis2[namespace] && globalThis2[namespace][method];
};
