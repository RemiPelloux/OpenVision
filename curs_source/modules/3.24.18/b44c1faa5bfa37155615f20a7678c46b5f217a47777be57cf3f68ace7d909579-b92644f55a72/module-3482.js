"use strict";
module.exports = function(e, t) {
    let r = t.engines[e] || t.engines[function(e) {
        switch(e.toLowerCase()){
            case "js":
            case "javascript":
                return "javascript";
            case "coffee":
            case "coffeescript":
            case "cson":
                return "coffee";
            case "yaml":
            case "yml":
                return "yaml";
            default:
                return e;
        }
    }(e)];
    if (void 0 === r) throw new Error('gray-matter engine "' + e + '" is not registered');
    return "function" == typeof r && (r = {
        parse: r
    }), r;
};
