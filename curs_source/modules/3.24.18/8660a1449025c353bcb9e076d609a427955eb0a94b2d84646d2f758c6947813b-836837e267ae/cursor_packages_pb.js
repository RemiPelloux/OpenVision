import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var CSd;
export { CSd };
var __wakaru_PIy_initialized = false;
export function PIy() {
if (__wakaru_PIy_initialized) return;
__wakaru_PIy_initialized = true;
"use strict";
E(), hr(), CSd = x.makeEnum("agent.v1.PackageType", [
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
