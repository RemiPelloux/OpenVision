import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var GAu;
export { GAu };
var __wakaru_Idv_initialized = false;
export function Idv() {
if (__wakaru_Idv_initialized) return;
__wakaru_Idv_initialized = true;
"use strict";
x(), bi(), GAu = k.makeEnum("agent.v1.PackageType", [
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

}
