"use strict";
module.exports = {
    isValidLastEventId: function(A) {
        return -1 === A.indexOf("\0");
    },
    isASCIINumber: function(A) {
        if (0 === A.length) return !1;
        for(let e = 0; e < A.length; e++)if (A.charCodeAt(e) < 48 || A.charCodeAt(e) > 57) return !1;
        return !0;
    },
    delay: function(A) {
        return new Promise((e)=>{
            setTimeout(e, A).unref();
        });
    }
};
