"use strict";
module.exports = function(e) {
    if ("string" != typeof e) return "";
    for(var A = e.length - 1; A >= 0; --A)switch(e.charCodeAt(A)){
        case 47:
        case 92:
            return ".." === (e = e.slice(A + 1)) || "." === e ? "" : e;
    }
    return ".." === e || "." === e ? "" : e;
};
