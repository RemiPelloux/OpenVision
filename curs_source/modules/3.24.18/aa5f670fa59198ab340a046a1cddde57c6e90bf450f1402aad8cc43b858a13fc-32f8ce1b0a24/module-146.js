require.r(exports);
require.d(exports, {
    RepositoryIndexingInfo: ()=>RepositoryIndexingInfo
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const RepositoryIndexingInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RepositoryIndexingInfo", ()=>[
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
            repeated: true
        },
        {
            no: 3,
            name: "remote_names",
            kind: "scalar",
            T: 9,
            repeated: true
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
            opt: true
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
