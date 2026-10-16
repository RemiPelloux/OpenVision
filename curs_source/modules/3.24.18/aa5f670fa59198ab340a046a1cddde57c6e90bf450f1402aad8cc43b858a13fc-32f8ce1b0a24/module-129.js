require.r(exports);
require.d(exports, {
    PiTruncation: ()=>PiTruncation
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const PiTruncation = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.PiTruncation", ()=>[
        {
            no: 1,
            name: "truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "truncated_by",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "total_lines",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "output_lines",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "output_bytes",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "max_lines",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 7,
            name: "max_bytes",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 8,
            name: "first_line_exceeds_limit",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "last_line_partial",
            kind: "scalar",
            T: 8
        }
    ]);
