require.r(exports);
require.d(exports, {
    LspSubgraphContextItem: ()=>LspSubgraphContextItem,
    LspSubgraphFullContext: ()=>LspSubgraphFullContext,
    LspSubgraphPosition: ()=>LspSubgraphPosition,
    LspSubgraphRange: ()=>LspSubgraphRange
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const LspSubgraphPosition = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LspSubgraphPosition", ()=>[
        {
            no: 1,
            name: "line",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "character",
            kind: "scalar",
            T: 5
        }
    ]);
const LspSubgraphRange = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LspSubgraphRange", ()=>[
        {
            no: 1,
            name: "start_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "start_character",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "end_line",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "end_character",
            kind: "scalar",
            T: 5
        }
    ]);
const LspSubgraphContextItem = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LspSubgraphContextItem", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "type",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "range",
            kind: "message",
            T: LspSubgraphRange,
            opt: true
        }
    ]);
const LspSubgraphFullContext = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.LspSubgraphFullContext", ()=>[
        {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "symbol_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "positions",
            kind: "message",
            T: LspSubgraphPosition,
            repeated: true
        },
        {
            no: 4,
            name: "context_items",
            kind: "message",
            T: LspSubgraphContextItem,
            repeated: true
        },
        {
            no: 5,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]);
