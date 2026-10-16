import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { Eqe } from "./symbolic_context_pb.js";
import { h } from "./tslib.es6.js";
import { SP, jq, lr } from "./utils_pb_2.js";
var Iz, VP, uu, Dg;
export { Dg, Iz, VP, uu };
var __wakaru_zc_initialized = false;
export function zc() {
if (__wakaru_zc_initialized) return;
__wakaru_zc_initialized = true;
"use strict";
h(), F(), lr(), Eqe(), Iz = c.makeEnum("aiserver.v1.DatabaseProvider", [
    {
        no: 0,
        name: "DATABASE_PROVIDER_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "DATABASE_PROVIDER_AURORA",
        localName: "AURORA"
    },
    {
        no: 2,
        name: "DATABASE_PROVIDER_PLANETSCALE",
        localName: "PLANETSCALE"
    }
]), VP = c.makeMessageType("aiserver.v1.QueryOnlyRepoAccess", ()=>[
        {
            no: 1,
            name: "owner_auth_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "access_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "user_repo_owner",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "user_repo_name",
            kind: "scalar",
            T: 9
        }
    ]), uu = c.makeMessageType("aiserver.v1.CodeResult", ()=>[
        {
            no: 1,
            name: "code_block",
            kind: "message",
            T: SP
        },
        {
            no: 2,
            name: "score",
            kind: "scalar",
            T: 2
        }
    ]), Dg = c.makeMessageType("aiserver.v1.RepositoryInfo", ()=>[
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
            name: "num_files",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 9,
            name: "orthogonal_transform_seed",
            kind: "scalar",
            T: 1,
            opt: !0
        },
        {
            no: 10,
            name: "preferred_embedding_model",
            kind: "enum",
            T: c.getEnumType(jq),
            opt: !0
        },
        {
            no: 11,
            name: "workspace_uri",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "preferred_db_provider",
            kind: "enum",
            T: c.getEnumType(Iz),
            opt: !0
        }
    ]);

}
