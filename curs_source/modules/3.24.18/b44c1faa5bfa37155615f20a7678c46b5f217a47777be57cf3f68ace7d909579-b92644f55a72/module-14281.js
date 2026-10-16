"use strict";
require.r(exports), require.d(exports, {
    BidiService: ()=>o
});
var n = require("./module-82537.js"), s = require("./module-36038.js");
const o = {
    typeName: "aiserver.v1.BidiService",
    methods: {
        bidiAppend: {
            name: "BidiAppend",
            I: n.BidiAppendRequest,
            O: n.BidiAppendResponse,
            kind: s.MethodKind.Unary
        }
    }
};
