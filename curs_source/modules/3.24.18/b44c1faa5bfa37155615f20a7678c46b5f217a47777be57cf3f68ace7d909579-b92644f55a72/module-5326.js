"use strict";
require.r(exports), require.d(exports, {
    PrivateInferenceService: ()=>o
});
var n = require("./module-45904.js"), s = require("./module-36038.js");
const o = {
    typeName: "aiserver.v1.PrivateInferenceService",
    methods: {
        admitRun: {
            name: "AdmitRun",
            I: n.u,
            O: n.a4,
            kind: s.MethodKind.Unary
        },
        reportUsage: {
            name: "ReportUsage",
            I: n.Ln,
            O: n.L0,
            kind: s.MethodKind.Unary
        }
    }
};
