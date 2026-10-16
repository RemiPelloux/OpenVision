"use strict";
require.r(exports), require.d(exports, {
    CmdKService: ()=>o
});
var n = require("./module-16496.js"), s = require("./module-36038.js");
const o = {
    typeName: "aiserver.v1.CmdKService",
    methods: {
        streamCmdK: {
            name: "StreamCmdK",
            I: n.V_,
            O: n.Xo,
            kind: s.MethodKind.ServerStreaming
        },
        streamHypermode: {
            name: "StreamHypermode",
            I: n.bO,
            O: n.Xo,
            kind: s.MethodKind.ServerStreaming
        },
        rerankCmdKContext: {
            name: "RerankCmdKContext",
            I: n.jm,
            O: n.n9,
            kind: s.MethodKind.Unary
        },
        streamTerminalCmdK: {
            name: "StreamTerminalCmdK",
            I: n.xu,
            O: n.$2,
            kind: s.MethodKind.ServerStreaming
        },
        rerankTerminalCmdKContext: {
            name: "RerankTerminalCmdKContext",
            I: n.NF,
            O: n.Xx,
            kind: s.MethodKind.Unary
        },
        getRelevantChunks: {
            name: "GetRelevantChunks",
            I: n.Tv,
            O: n.D,
            kind: s.MethodKind.ServerStreaming
        }
    }
};
