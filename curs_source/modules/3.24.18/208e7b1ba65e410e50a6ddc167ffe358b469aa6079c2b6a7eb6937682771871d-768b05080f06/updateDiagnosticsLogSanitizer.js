import { le } from "./async.js";
import { h } from "./tslib.es6.js";
var af, Vhe, $he, jhe, BO, Hhe;
export { $he, BO, Hhe, Vhe, af, jhe };
var __wakaru_VJe_initialized = false;
export function VJe() {
if (__wakaru_VJe_initialized) return;
__wakaru_VJe_initialized = true;
"use strict";
h(), le(), af = "[REDACTED]", Vhe = 64 * 1024, $he = "[REDACTED:PRIVATE_KEY]", jhe = /-----BEGIN[^-\r\n]+PRIVATE KEY-----/, BO = /-----END[^-\r\n]+PRIVATE KEY-----/, Hhe = [
    {
        pattern: /([a-zA-Z][a-zA-Z0-9+.-]*:\/\/)([^/\s:@]+):([^@\s/]+)@/g,
        replace: (e, t)=>`${t}${af}@`
    },
    {
        pattern: /([a-zA-Z][a-zA-Z0-9+.-]*:\/\/)([^/\s:@]{10,})@/g,
        replace: (e, t)=>`${t}${af}@`
    },
    {
        pattern: /\b(Bearer|Basic|Negotiate|NTLM|Digest)\s+[A-Za-z0-9._~+/-]+=*/gi,
        replace: (e, t)=>`${t} ${af}`
    },
    {
        pattern: /\b([A-Za-z0-9_.-]*(?:token|secret|password|passwd|pwd|api[_-]?key|access[_-]?key|auth|cookie|credential|private[_-]?key)[A-Za-z0-9_.-]*)(\s*[:=]\s*)(?:"[^"\r\n]*"|'[^'\r\n]*'|[^\r\n'",}]+)/gi,
        replace: (e, t, n)=>`${t}${n}${af}`
    },
    {
        pattern: /\bAKIA[0-9A-Z]{16}\b/g,
        replace: ()=>"[REDACTED:AWS_ACCESS_KEY]"
    },
    {
        pattern: /\bASIA[0-9A-Z]{16}\b/g,
        replace: ()=>"[REDACTED:AWS_SESSION_KEY]"
    },
    {
        pattern: /\bgh[pousr]_[A-Za-z0-9]{30,}\b/g,
        replace: ()=>"[REDACTED:GITHUB_TOKEN]"
    },
    {
        pattern: /\bgithub_pat_[A-Za-z0-9_]{20,}\b/g,
        replace: ()=>"[REDACTED:GITHUB_TOKEN]"
    },
    {
        pattern: /\bxox[baprs]-[A-Za-z0-9-]{10,}\b/g,
        replace: ()=>"[REDACTED:SLACK_TOKEN]"
    },
    {
        pattern: /\bnpm_[A-Za-z0-9]{30,}\b/g,
        replace: ()=>"[REDACTED:NPM_TOKEN]"
    },
    {
        pattern: /\bsk-[A-Za-z0-9_-]{20,}\b/g,
        replace: ()=>"[REDACTED:API_KEY]"
    },
    {
        pattern: /\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/g,
        replace: ()=>"[REDACTED:JWT]"
    }
];

}
