require.r(exports);
require.d(exports, {
    CursorPackage: ()=>CursorPackage,
    CursorPackagePrompt: ()=>CursorPackagePrompt,
    PackageType: ()=>PackageType
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const PackageType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.PackageType", [
    {
        no: 0,
        name: "PACKAGE_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PACKAGE_TYPE_CURSOR_PROJECT",
        localName: "CURSOR_PROJECT"
    },
    {
        no: 2,
        name: "PACKAGE_TYPE_CURSOR_PERSONAL",
        localName: "CURSOR_PERSONAL"
    },
    {
        no: 3,
        name: "PACKAGE_TYPE_CLAUDE_SKILL",
        localName: "CLAUDE_SKILL"
    },
    {
        no: 4,
        name: "PACKAGE_TYPE_CLAUDE_PLUGIN",
        localName: "CLAUDE_PLUGIN"
    }
]);
const CursorPackagePrompt = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CursorPackagePrompt", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_path",
            kind: "scalar",
            T: 9
        }
    ]);
const CursorPackage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CursorPackage", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "folder_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "parse_error",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "prompts",
            kind: "message",
            T: CursorPackagePrompt,
            repeated: true
        },
        {
            no: 7,
            name: "readme_file_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "package_type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(PackageType)
        }
    ]);
