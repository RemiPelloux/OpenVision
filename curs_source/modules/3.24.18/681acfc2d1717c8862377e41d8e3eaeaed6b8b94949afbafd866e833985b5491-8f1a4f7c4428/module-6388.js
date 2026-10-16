"use strict";
module.exports = function(e) {
    if ("string" != typeof e) return "";
    for(var t = e.length - 1; t >= 0; --t)switch(e.charCodeAt(t)){
        case 47:
        case 92:
            return ".." === (e = e.slice(t + 1)) || "." === e ? "" : e;
    }
    return ".." === e || "." === e ? "" : e;
};
