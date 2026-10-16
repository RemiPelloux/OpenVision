import { E } from "./tslib.es6.js";
var cnv, unv, WAt, dnv, hnv, pnv;
export { WAt, cnv, dnv, hnv, pnv, unv };
var __wakaru_Wzw_initialized = false;
export function Wzw() {
if (__wakaru_Wzw_initialized) return;
__wakaru_Wzw_initialized = true;
"use strict";
E(), cnv = 128, unv = 2048, WAt = "[A-Za-z0-9_-]{20,}", dnv = (t)=>`Sensitive key ${t}... detected. Please enter only the model name.`, hnv = "Model name looks like a URL or secret. Please enter only the model name.", pnv = [
    {
        pattern: /:\/\//i
    },
    {
        pattern: /api[_-]?key\s*=/i
    },
    {
        pattern: /secret\s*=/i
    },
    {
        pattern: /password\s*=/i
    },
    {
        pattern: /connection\s*=/i
    },
    {
        pattern: /token\s*=/i
    },
    {
        pattern: /bearer\s+/i
    },
    {
        pattern: new RegExp(`sk-proj-${WAt}`, "i"),
        keyPrefix: "sk-proj-"
    },
    {
        pattern: /sk-[A-Za-z0-9]{32,}/,
        keyPrefix: "sk-"
    },
    {
        pattern: new RegExp(`sk-ant-api\\d+-${WAt}`, "i"),
        keyPrefix: "sk-ant-api"
    },
    {
        pattern: new RegExp(`AIzaSy${WAt}`, "i"),
        keyPrefix: "AIzaSy"
    },
    {
        pattern: /\|sk-[A-Za-z0-9]{20,}/,
        keyPrefix: "|sk-"
    },
    {
        pattern: new RegExp(`xai-${WAt}`, "i"),
        keyPrefix: "xai-"
    },
    {
        pattern: /cr_[A-Za-z0-9]{40,}/,
        keyPrefix: "cr_"
    },
    {
        pattern: new RegExp("sk-or-v\\d+-[A-Za-z0-9]{20,}", "i"),
        keyPrefix: "sk-or-v"
    },
    {
        pattern: new RegExp(`sk-kimi-${WAt}`, "i"),
        keyPrefix: "sk-kimi-"
    },
    {
        pattern: new RegExp(`sk-reapi-${WAt}`, "i"),
        keyPrefix: "sk-reapi-"
    },
    {
        pattern: new RegExp(`sk-rwyk${WAt}`, "i"),
        keyPrefix: "sk-rwyk"
    },
    {
        pattern: new RegExp("sk-cqu[a-z0-9]{20,}", "i"),
        keyPrefix: "sk-cqu"
    },
    {
        pattern: new RegExp("sk-acw-[A-Za-z0-9-]{20,}", "i"),
        keyPrefix: "sk-acw-"
    }
];

}
