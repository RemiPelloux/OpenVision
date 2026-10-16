var isCallable = require("./module-4901.js");
var isObject = require("./module-34.js");
var setPrototypeOf = require("./module-2967.js");
module.exports = function($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (setPrototypeOf && isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);
    return $this;
};
