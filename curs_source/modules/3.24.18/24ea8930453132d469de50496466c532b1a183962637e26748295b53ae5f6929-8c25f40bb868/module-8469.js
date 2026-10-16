var uncurryThis = require("./module-9504.js");
var iterateSimple = require("./module-507.js");
var SetHelpers = require("./module-4402.js");
var Set2 = SetHelpers.Set;
var SetPrototype = SetHelpers.proto;
var forEach = uncurryThis(SetPrototype.forEach);
var keys = uncurryThis(SetPrototype.keys);
var next = keys(new Set2()).next;
module.exports = function(set, fn, interruptible) {
    return interruptible ? iterateSimple({
        iterator: keys(set),
        next
    }, fn) : forEach(set, fn);
};
