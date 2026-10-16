var $ = require("./module-6518.js");
var globalThis2 = require("./module-4576.js");
var apply = require("./module-8745.js");
var slice = require("./module-7680.js");
var newPromiseCapabilityModule = require("./module-6043.js");
var aCallable = require("./module-9306.js");
var perform = require("./module-1103.js");
var Promise2 = globalThis2.Promise;
var ACCEPT_ARGUMENTS = false;
var FORCED = !Promise2 || !Promise2["try"] || perform(function() {
    Promise2["try"](function(argument) {
        ACCEPT_ARGUMENTS = argument === 8;
    }, 8);
}).error || !ACCEPT_ARGUMENTS;
$({
    target: "Promise",
    stat: true,
    forced: FORCED
}, {
    "try": function(callbackfn) {
        var args = arguments.length > 1 ? slice(arguments, 1) : [];
        var promiseCapability = newPromiseCapabilityModule.f(this);
        var result = perform(function() {
            return apply(aCallable(callbackfn), void 0, args);
        });
        (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
        return promiseCapability.promise;
    }
});
