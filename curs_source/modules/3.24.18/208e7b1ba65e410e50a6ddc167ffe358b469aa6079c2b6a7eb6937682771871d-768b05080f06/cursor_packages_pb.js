import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var Aae;
export { Aae };
var __wakaru_kKe_initialized = false;
export function kKe() {
if (__wakaru_kKe_initialized) return;
__wakaru_kKe_initialized = true;
"use strict";
h(), F(), Aae = c.makeEnum("agent.v1.PackageType", [
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
