import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var COo, TOo, lfd, cfd, ufd;
export { COo, TOo, cfd, lfd, ufd };
var __wakaru_Gyr_initialized = false;
export function Gyr() {
if (__wakaru_Gyr_initialized) return;
__wakaru_Gyr_initialized = true;
"use strict";
E(), hr(), COo = x.makeMessageType("aiserver.v1.DocumentationMetadata", ()=>[
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
            opt: !0
        }
    ]), TOo = x.makeMessageType("aiserver.v1.DocumentationChunk", ()=>[
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
    ]), lfd = x.makeMessageType("aiserver.v1.DocumentationQueryRequest", ()=>[
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
    ]), cfd = x.makeMessageType("aiserver.v1.DocumentationQueryResponse", ()=>[
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
            T: TOo,
            repeated: !0
        },
        {
            no: 4,
            name: "status",
            kind: "enum",
            T: x.getEnumType(ufd)
        }
    ]), ufd = x.makeEnum("aiserver.v1.DocumentationQueryResponse.Status", [
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

}
