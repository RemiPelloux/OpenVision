var iteratorClose = require("./module-9539.js");
module.exports = function(iters, kind, value) {
    for(var i = iters.length - 1; i >= 0; i--){
        if (iters[i] === void 0) continue;
        try {
            value = iteratorClose(iters[i].iterator, kind, value);
        } catch (error) {
            kind = "throw";
            value = error;
        }
    }
    if (kind === "throw") throw value;
    return value;
};
