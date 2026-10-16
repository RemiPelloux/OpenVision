import { init_shim } from "../shims/shim.js";
import { init_dynamic_tool_argument_repair, leakedParameter, namesAKeyTwice } from "./mcp/dynamic-tool-argument-repair.js";
import { defineShim, jsonTokens } from "../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var stringifiedArray, parseWholeArray, diagnose, decodeLeadingJsonArray, looksMultiItem, repairStringifiedArray;
export { decodeLeadingJsonArray, diagnose, looksMultiItem, parseWholeArray, repairStringifiedArray, stringifiedArray };
var __wakaru_init_lenient_array_initialized = false;
export function init_lenient_array() {
if (__wakaru_init_lenient_array_initialized) return;
__wakaru_init_lenient_array_initialized = true;
"use strict";
init_zod();
init_shim();
init_dynamic_tool_argument_repair();
stringifiedArray = defineShim({
    name: "stringified_array"
});
parseWholeArray = (text4)=>{
    if (namesAKeyTwice(text4)) {
        return void 0;
    }
    try {
        const parsed = JSON.parse(text4);
        return Array.isArray(parsed) ? parsed : void 0;
    } catch  {
        return void 0;
    }
};
diagnose = (text4)=>{
    if (namesAKeyTwice(text4)) {
        return "duplicate-key";
    }
    try {
        const parsed = JSON.parse(text4);
        return Array.isArray(parsed) ? "unreachable" : `parsed-as-${typeof parsed}`;
    } catch (error3) {
        const message = error3 instanceof Error ? error3.message : "";
        if (/Unexpected end of (JSON input|data)/.test(message)) {
            return "truncated";
        }
        try {
            const requoted = JSON.parse(text4.replace(/'/g, '"'));
            if (Array.isArray(requoted)) {
                return "python-repr";
            }
        } catch  {}
        return "corrupt-json";
    }
};
decodeLeadingJsonArray = (blob)=>{
    const start = blob.indexOf("[");
    if (start < 0) {
        return void 0;
    }
    let depth = 0;
    for (const token of jsonTokens(blob, start)){
        if (token.kind !== "punctuation") {
            continue;
        }
        if (token.char === "[" || token.char === "{") {
            depth++;
        } else if ((token.char === "]" || token.char === "}") && --depth === 0) {
            const value = parseWholeArray(blob.slice(start, token.index + 1));
            return value === void 0 ? void 0 : {
                value,
                rest: blob.slice(token.index + 1)
            };
        }
    }
    return void 0;
};
looksMultiItem = (scalar)=>/,\s*\S/.test(scalar) || /\n\s*\S/.test(scalar);
repairStringifiedArray = (value, field4, itemsArePrimitive)=>{
    const trimmed = value.trim();
    if (trimmed === "") {
        return {
            ok: false,
            reason: "empty"
        };
    }
    const direct = parseWholeArray(trimmed);
    if (direct !== void 0) {
        return {
            ok: true,
            value: direct,
            strategy: "clean-json"
        };
    }
    const leaks = [
        ...trimmed.matchAll(leakedParameter)
    ];
    if (leaks.length > 0) {
        const names3 = leaks.map((match2)=>match2[1]);
        const mine = leaks.filter((match2)=>match2[1] === field4);
        if (mine.length === 1 && names3.every((name17)=>name17 === field4)) {
            const inner = parseWholeArray((mine[0]?.[2] ?? "").trim());
            if (inner !== void 0) {
                return {
                    ok: true,
                    value: inner,
                    strategy: "strip-leaked-markup"
                };
            }
        }
        return {
            ok: false,
            reason: `leaked-markup-unrecoverable(${[
                ...new Set(names3)
            ].join("|")})`
        };
    }
    if (itemsArePrimitive && !/^[[{]/.test(trimmed)) {
        if (looksMultiItem(trimmed)) {
            return {
                ok: false,
                reason: "scalar-looks-multi-item"
            };
        }
        if (parseWholeArray(`[${trimmed}]`) === void 0) {
            return {
                ok: true,
                value: [
                    value
                ],
                strategy: "wrap-scalar"
            };
        }
    }
    if (trimmed.startsWith("[")) {
        const leading = decodeLeadingJsonArray(trimmed);
        if (leading !== void 0 && /^[\s,\]}]*$/.test(leading.rest)) {
            return {
                ok: true,
                value: leading.value,
                strategy: "drop-contentless-tail"
            };
        }
    }
    return {
        ok: false,
        reason: diagnose(trimmed)
    };
};

}
