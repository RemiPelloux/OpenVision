var $ = require("./module-6518.js");
var newPromiseCapabilityModule = require("./module-6043.js");
$({
    target: "Promise",
    stat: true
}, {
    withResolvers: function withResolvers() {
        var promiseCapability = newPromiseCapabilityModule.f(this);
        return {
            promise: promiseCapability.promise,
            resolve: promiseCapability.resolve,
            reject: promiseCapability.reject
        };
    }
});
