"use strict";
require.r(exports), require.d(exports, {
    CmdKService: ()=>i
});
var n = require("./module-6496.js"), s = require("./module-6038.js");
const i = {
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
