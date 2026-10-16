require.r(exports);
require.d(exports, {
    BlobData: ()=>BlobData,
    BlobDataPerMessage: ()=>BlobDataPerMessage,
    BlobType: ()=>BlobType,
    ImageBlobData: ()=>ImageBlobData
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const BlobType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("internapi.v1.BlobType", [
    {
        no: 0,
        name: "BLOB_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BLOB_TYPE_IMAGE",
        localName: "IMAGE"
    },
    {
        no: 2,
        name: "BLOB_TYPE_INVOCATION_CONTEXT",
        localName: "INVOCATION_CONTEXT"
    },
    {
        no: 3,
        name: "BLOB_TYPE_EXTRA_CONTEXT",
        localName: "EXTRA_CONTEXT"
    },
    {
        no: 4,
        name: "BLOB_TYPE_GIT_PR_DIFF_SELECTION",
        localName: "GIT_PR_DIFF_SELECTION"
    },
    {
        no: 5,
        name: "BLOB_TYPE_SELECTED_PULL_REQUEST",
        localName: "SELECTED_PULL_REQUEST"
    },
    {
        no: 6,
        name: "BLOB_TYPE_TEXT",
        localName: "TEXT"
    },
    {
        no: 7,
        name: "BLOB_TYPE_RICH_TEXT",
        localName: "RICH_TEXT"
    },
    {
        no: 8,
        name: "BLOB_TYPE_EXTERNAL_LINK_PDF",
        localName: "EXTERNAL_LINK_PDF"
    },
    {
        no: 9,
        name: "BLOB_TYPE_DOCUMENT",
        localName: "DOCUMENT"
    },
    {
        no: 10,
        name: "BLOB_TYPE_VIDEO",
        localName: "VIDEO"
    }
]);
const ImageBlobData = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("internapi.v1.ImageBlobData", ()=>[
        {
            no: 1,
            name: "mime_type",
            kind: "scalar",
            T: 9
        }
    ]);
const BlobData = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("internapi.v1.BlobData", ()=>[
        {
            no: 1,
            name: "blob_type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(BlobType)
        },
        {
            no: 2,
            name: "blob_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 3,
            name: "index",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "image_data",
            kind: "message",
            T: ImageBlobData,
            oneof: "type_specific_data"
        }
    ]);
const BlobDataPerMessage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("internapi.v1.BlobDataPerMessage", ()=>[
        {
            no: 1,
            name: "blob_data",
            kind: "message",
            T: BlobData,
            repeated: true
        }
    ]);
