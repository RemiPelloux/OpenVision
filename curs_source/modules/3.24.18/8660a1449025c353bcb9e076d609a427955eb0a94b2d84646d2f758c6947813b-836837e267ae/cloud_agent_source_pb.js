import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var vX;
export { vX };
var __wakaru_R$a_initialized = false;
export function R$a() {
if (__wakaru_R$a_initialized) return;
__wakaru_R$a_initialized = true;
"use strict";
E(), hr(), vX = x.makeEnum("aiserver.v1.CloudAgentSourceCategory", [
    {
        no: 0,
        name: "CLOUD_AGENT_SOURCE_CATEGORY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CLOUD_AGENT_SOURCE_CATEGORY_DESKTOP",
        localName: "DESKTOP"
    },
    {
        no: 2,
        name: "CLOUD_AGENT_SOURCE_CATEGORY_WEB",
        localName: "WEB"
    },
    {
        no: 3,
        name: "CLOUD_AGENT_SOURCE_CATEGORY_MOBILE",
        localName: "MOBILE"
    },
    {
        no: 4,
        name: "CLOUD_AGENT_SOURCE_CATEGORY_SLACK",
        localName: "SLACK"
    },
    {
        no: 5,
        name: "CLOUD_AGENT_SOURCE_CATEGORY_LINEAR",
        localName: "LINEAR"
    },
    {
        no: 6,
        name: "CLOUD_AGENT_SOURCE_CATEGORY_SCM",
        localName: "SCM"
    },
    {
        no: 7,
        name: "CLOUD_AGENT_SOURCE_CATEGORY_CLI",
        localName: "CLI"
    },
    {
        no: 8,
        name: "CLOUD_AGENT_SOURCE_CATEGORY_SETUP",
        localName: "SETUP"
    },
    {
        no: 9,
        name: "CLOUD_AGENT_SOURCE_CATEGORY_SDK",
        localName: "SDK"
    },
    {
        no: 10,
        name: "CLOUD_AGENT_SOURCE_CATEGORY_AUTOMATIONS",
        localName: "AUTOMATIONS"
    },
    {
        no: 11,
        name: "CLOUD_AGENT_SOURCE_CATEGORY_API",
        localName: "API"
    },
    {
        no: 12,
        name: "CLOUD_AGENT_SOURCE_CATEGORY_BUGBOT_AUTOFIX",
        localName: "BUGBOT_AUTOFIX"
    },
    {
        no: 13,
        name: "CLOUD_AGENT_SOURCE_CATEGORY_QABOT_FRONTEND",
        localName: "QABOT_FRONTEND"
    },
    {
        no: 14,
        name: "CLOUD_AGENT_SOURCE_CATEGORY_LOCAL",
        localName: "LOCAL"
    },
    {
        no: 15,
        name: "CLOUD_AGENT_SOURCE_CATEGORY_INTERNAL",
        localName: "INTERNAL"
    },
    {
        no: 16,
        name: "CLOUD_AGENT_SOURCE_CATEGORY_SAND",
        localName: "SAND"
    }
]);

}
