"use strict";
require.r(exports), require.d(exports, {
    FileSyncService: ()=>o
});
var n = require("./module-66637.js"), s = require("./module-36038.js");
const o = {
    typeName: "aiserver.v1.FileSyncService",
    methods: {
        fSUploadFile: {
            name: "FSUploadFile",
            I: n.uh,
            O: n.wY,
            kind: s.MethodKind.Unary
        },
        fSSyncFile: {
            name: "FSSyncFile",
            I: n.Gk,
            O: n.Yb,
            kind: s.MethodKind.Unary
        },
        fSIsEnabledForUser: {
            name: "FSIsEnabledForUser",
            I: n.iz,
            O: n.e9,
            kind: s.MethodKind.Unary
        },
        fSConfig: {
            name: "FSConfig",
            I: n.vr,
            O: n.Zt,
            kind: s.MethodKind.Unary
        },
        fSGetFileContents: {
            name: "FSGetFileContents",
            I: n.h7,
            O: n.LD,
            kind: s.MethodKind.Unary
        },
        fSGetMultiFileContents: {
            name: "FSGetMultiFileContents",
            I: n.sR,
            O: n.Ou,
            kind: s.MethodKind.Unary
        },
        fSInternalSyncFile: {
            name: "FSInternalSyncFile",
            I: n.Gk,
            O: n.Yb,
            kind: s.MethodKind.Unary
        },
        fSInternalUploadFile: {
            name: "FSInternalUploadFile",
            I: n.uh,
            O: n.wY,
            kind: s.MethodKind.Unary
        },
        fSInternalHealthCheck: {
            name: "FSInternalHealthCheck",
            I: n.oF,
            O: n.M5,
            kind: s.MethodKind.Unary
        }
    }
};
