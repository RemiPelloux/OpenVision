"use strict";
module.exports = function(A) {
    if ("string" != typeof A) return "";
    for(var e = A.length - 1; e >= 0; --e)switch(A.charCodeAt(e)){
        case 47:
        case 92:
            return ".." === (A = A.slice(e + 1)) || "." === A ? "" : A;
    }
    return ".." === A || "." === A ? "" : A;
};
