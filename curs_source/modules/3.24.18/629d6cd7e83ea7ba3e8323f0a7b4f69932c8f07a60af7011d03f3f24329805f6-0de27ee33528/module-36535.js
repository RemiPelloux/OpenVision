"use strict";
const r = require("./module-3685.js");
module.exports = (A)=>(e)=>function(t, s) {
            return e(t, new r({
                ...t,
                retryOptions: {
                    ...A,
                    ...t.retryOptions
                }
            }, {
                handler: s,
                dispatch: e
            }));
        };
