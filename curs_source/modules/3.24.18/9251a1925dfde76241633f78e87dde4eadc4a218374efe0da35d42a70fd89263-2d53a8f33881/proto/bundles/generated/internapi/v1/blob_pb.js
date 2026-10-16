import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage146, __protoMessage3139, BlobType, ImageBlobData, BlobData, BlobDataPerMessage;
export { BlobData, BlobDataPerMessage, BlobType, ImageBlobData, __protoMessage3139, __protoPackage146 };
var __wakaru_init_blob_pb_initialized = false;
export function init_blob_pb() {
if (__wakaru_init_blob_pb_initialized) return;
__wakaru_init_blob_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage146 = "internapi.v1.";
__protoMessage3139 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage146;
    }
};
BlobType = enumType2(proto3, __protoPackage146, "BlobType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "IMAGE"
    ],
    [
        2,
        "INVOCATION_CONTEXT"
    ],
    [
        3,
        "EXTRA_CONTEXT"
    ],
    [
        4,
        "GIT_PR_DIFF_SELECTION"
    ],
    [
        5,
        "SELECTED_PULL_REQUEST"
    ],
    [
        6,
        "TEXT"
    ],
    [
        7,
        "RICH_TEXT"
    ],
    [
        8,
        "EXTERNAL_LINK_PDF"
    ],
    [
        9,
        "DOCUMENT"
    ],
    [
        10,
        "VIDEO"
    ]
], 1);
ImageBlobData = class _ImageBlobData extends __protoMessage3139 {
    constructor(data){
        super();
        this.mimeType = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ImageBlobData().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ImageBlobData().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ImageBlobData().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ImageBlobData, a, b2);
    }
    static $() {
        return [
            "ImageBlobData|1 mime_type 9"
        ];
    }
};
BlobData = class _BlobData extends __protoMessage3139 {
    constructor(data){
        super();
        this.blobType = BlobType.UNSPECIFIED;
        this.blobId = new Uint8Array(0);
        this.index = 0;
        this.typeSpecificData = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _BlobData().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _BlobData().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _BlobData().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_BlobData, a, b2);
    }
    static $() {
        return [
            "BlobData|1 blob_type #0|2 blob_id 12|3 index 5|4 image_data #1 type_specific_data",
            BlobType,
            ImageBlobData
        ];
    }
};
BlobDataPerMessage = class _BlobDataPerMessage extends __protoMessage3139 {
    constructor(data){
        super();
        this.blobData = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _BlobDataPerMessage().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _BlobDataPerMessage().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _BlobDataPerMessage().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_BlobDataPerMessage, a, b2);
    }
    static $() {
        return [
            "BlobDataPerMessage|1 blob_data #0*",
            BlobData
        ];
    }
};

}
