import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var YEm, XEm, FHa, ZEm;
export { FHa, XEm, YEm, ZEm };
var __wakaru_zU1_initialized = false;
export function zU1() {
if (__wakaru_zU1_initialized) return;
__wakaru_zU1_initialized = true;
"use strict";
E(), hr(), YEm = x.makeEnum("internapi.v1.BlobType", [
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
]), XEm = x.makeMessageType("internapi.v1.ImageBlobData", ()=>[
        {
            no: 1,
            name: "mime_type",
            kind: "scalar",
            T: 9
        }
    ]), FHa = x.makeMessageType("internapi.v1.BlobData", ()=>[
        {
            no: 1,
            name: "blob_type",
            kind: "enum",
            T: x.getEnumType(YEm)
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
            T: XEm,
            oneof: "type_specific_data"
        }
    ]), ZEm = x.makeMessageType("internapi.v1.BlobDataPerMessage", ()=>[
        {
            no: 1,
            name: "blob_data",
            kind: "message",
            T: FHa,
            repeated: !0
        }
    ]);

}
