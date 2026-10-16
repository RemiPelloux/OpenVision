import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var Mae;
export { Mae };
var __wakaru_SKe_initialized = false;
export function SKe() {
if (__wakaru_SKe_initialized) return;
__wakaru_SKe_initialized = true;
"use strict";
h(), F(), Mae = c.makeMessageType("agent.v1.RepositoryIndexingInfo", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "remote_urls",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "remote_names",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "repo_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "repo_owner",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "is_tracked",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "is_local",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "orthogonal_transform_seed",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 9,
            name: "workspace_uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "path_encryption_key",
            kind: "scalar",
            T: 9
        }
    ]);

}
