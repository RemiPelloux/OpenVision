import { nl } from "./index.ts";
import { sQn } from "./pull-request-review-links.ts";
import { E } from "./tslib.es6.js";
var N2l, Jbf, eyf, tyf, nyf, iyf, ryf, syf;
export { Jbf, N2l, eyf, iyf, nyf, ryf, syf, tyf };
var __wakaru_oyf_initialized = false;
export function oyf() {
if (__wakaru_oyf_initialized) return;
__wakaru_oyf_initialized = true;
"use strict";
E(), nl(), N2l = "https://cursor.com", Jbf = "https://github.com", [eyf, tyf] = sQn, nyf = new Map([
    [
        `https://${eyf}`,
        N2l
    ],
    [
        `https://${tyf}`,
        "https://staging.cursor.com"
    ]
]), iyf = "cursor_com_review_pages", ryf = new Map([
    [
        "anysphere/everysphere",
        {
            originOwner: "anysphere",
            originRepo: "everysphere"
        }
    ]
]), syf = [
    {
        provider: "github",
        pattern: /^\/github\/pr\/([^/]+)\/([^/]+)\/([1-9]\d*)(\/.*)?$/
    },
    {
        provider: "github",
        pattern: /^\/github\/([^/]+)\/([^/]+)\/pull\/([1-9]\d*)(\/.*)?$/
    },
    {
        provider: "origin",
        pattern: /^\/pr\/([^/]+)\/([^/]+)\/([1-9]\d*)(\/.*)?$/
    }
];

}
