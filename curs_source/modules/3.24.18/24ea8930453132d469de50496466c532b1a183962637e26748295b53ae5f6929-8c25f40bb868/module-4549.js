var globalThis2 = require("./module-4576.js");
module.exports = function(METHOD_NAME, ExpectedError) {
    var Iterator2 = globalThis2.Iterator;
    var IteratorPrototype = Iterator2 && Iterator2.prototype;
    var method = IteratorPrototype && IteratorPrototype[METHOD_NAME];
    var CLOSED = false;
    if (method) try {
        method.call({
            next: function() {
                return {
                    done: true
                };
            },
            "return": function() {
                CLOSED = true;
            }
        }, -1);
    } catch (error) {
        if (!(error instanceof ExpectedError)) CLOSED = false;
    }
    if (!CLOSED) return method;
};
