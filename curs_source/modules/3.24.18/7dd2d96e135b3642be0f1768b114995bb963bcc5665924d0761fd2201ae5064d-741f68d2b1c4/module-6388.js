"use strict";
module.exports = function(e) {
    if ("string" != typeof e) return "";
    for(var n = e.length - 1; n >= 0; --n)switch(e.charCodeAt(n)){
        case 47:
        case 92:
            return ".." === (e = e.slice(n + 1)) || "." === e ? "" : e;
    }
    return ".." === e || "." === e ? "" : e;
};
