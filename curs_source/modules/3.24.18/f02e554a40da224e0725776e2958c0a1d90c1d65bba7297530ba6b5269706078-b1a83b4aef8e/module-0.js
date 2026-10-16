"use strict";
module.exports = function(t) {
    if ("string" != typeof t) return "";
    for(var e = t.length - 1; e >= 0; --e)switch(t.charCodeAt(e)){
        case 47:
        case 92:
            return ".." === (t = t.slice(e + 1)) || "." === t ? "" : t;
    }
    return ".." === t || "." === t ? "" : t;
};
