"use strict";
module.exports = function(e) {
    if ("string" != typeof e) return "";
    for(var a = e.length - 1; a >= 0; --a)switch(e.charCodeAt(a)){
        case 47:
        case 92:
            return ".." === (e = e.slice(a + 1)) || "." === e ? "" : e;
    }
    return ".." === e || "." === e ? "" : e;
};
