require.r(exports);
require.d(exports, {
    DocumentationChunk: ()=>DocumentationChunk,
    DocumentationMetadata: ()=>DocumentationMetadata,
    DocumentationQueryRequest: ()=>DocumentationQueryRequest,
    DocumentationQueryResponse: ()=>DocumentationQueryResponse,
    DocumentationQueryResponse_Status: ()=>DocumentationQueryResponse_Status
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const DocumentationMetadata = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DocumentationMetadata", ()=>[
        {
            no: 1,
            name: "prefix_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "doc_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "is_different_prefix_origin",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "true_prefix_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "public",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "team_id",
            kind: "scalar",
            T: 5,
            opt: true
        }
    ]);
const DocumentationChunk = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DocumentationChunk", ()=>[
        {
            no: 1,
            name: "doc_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "page_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "documentation_chunk",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "score",
            kind: "scalar",
            T: 2
        },
        {
            no: 5,
            name: "page_title",
            kind: "scalar",
            T: 9
        }
    ]);
const DocumentationQueryRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DocumentationQueryRequest", ()=>[
        {
            no: 1,
            name: "doc_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "query",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "top_k",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "rerank_results",
            kind: "scalar",
            T: 8
        }
    ]);
const DocumentationQueryResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.DocumentationQueryResponse", ()=>[
        {
            no: 1,
            name: "doc_identifier",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "doc_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "doc_chunks",
            kind: "message",
            T: DocumentationChunk,
            repeated: true
        },
        {
            no: 4,
            name: "status",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(DocumentationQueryResponse_Status)
        }
    ]);
const DocumentationQueryResponse_Status = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.DocumentationQueryResponse.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_NOT_FOUND",
        localName: "NOT_FOUND"
    },
    {
        no: 2,
        name: "STATUS_SUCCESS",
        localName: "SUCCESS"
    },
    {
        no: 3,
        name: "STATUS_FAILURE",
        localName: "FAILURE"
    }
]);
