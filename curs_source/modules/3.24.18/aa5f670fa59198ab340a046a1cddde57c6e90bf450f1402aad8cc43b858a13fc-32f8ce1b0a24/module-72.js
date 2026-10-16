require.r(exports);
require.d(exports, {
    OutputLocation: ()=>OutputLocation,
    Position: ()=>Position,
    Range: ()=>Range,
    SmartModeApproval: ()=>SmartModeApproval
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const Range = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.Range", ()=>[
        {
            no: 1,
            name: "start",
            kind: "message",
            T: Position
        },
        {
            no: 2,
            name: "end",
            kind: "message",
            T: Position
        }
    ]);
const Position = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.Position", ()=>[
        {
            no: 1,
            name: "line",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "column",
            kind: "scalar",
            T: 13
        }
    ]);
const OutputLocation = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.OutputLocation", ()=>[
        {
            no: 1,
            name: "file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "size_bytes",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "line_count",
            kind: "scalar",
            T: 3
        }
    ]);
const SmartModeApproval = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SmartModeApproval", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);
