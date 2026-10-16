require.r(exports);
require.d(exports, {
    RemoteControlV2AdminSettings: ()=>RemoteControlV2AdminSettings,
    RemoteControlV2Policy: ()=>RemoteControlV2Policy,
    RemoteControlV2UserSettings: ()=>RemoteControlV2UserSettings
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const RemoteControlV2AdminSettings = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RemoteControlV2AdminSettings", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 2,
            name: "automatic_registration_enabled",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
const RemoteControlV2Policy = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RemoteControlV2Policy", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 2,
            name: "automatic_registration_enabled",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 3,
            name: "available",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 4,
            name: "automatic_registration_released",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 5,
            name: "remote_control_denying_org_name",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "automatic_registration_denying_org_name",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const RemoteControlV2UserSettings = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("aiserver.v1.RemoteControlV2UserSettings", ()=>[
        {
            no: 2,
            name: "automatic_registration_enabled",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
