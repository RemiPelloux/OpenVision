import { init_shim } from "../../shims/shim.js";
import { defineShim, jsonTokens } from "../../../../mcp_sandbox_policy_exports.js";
var stringifiedDynamicToolArguments, decodeStringLiteral, parseJsonObject, namesAKeyTwice, parseWholeObject, decodeLeadingJsonObject, structuralClosingBraces, leakedParameter, readLeakedParameters, READING_SEARCH_BUDGET, faithfulReadings, parseArgumentsLeniently;
export { READING_SEARCH_BUDGET, decodeLeadingJsonObject, decodeStringLiteral, faithfulReadings, leakedParameter, namesAKeyTwice, parseArgumentsLeniently, parseJsonObject, parseWholeObject, readLeakedParameters, stringifiedDynamicToolArguments, structuralClosingBraces };
var __wakaru_init_dynamic_tool_argument_repair_initialized = false;
export function init_dynamic_tool_argument_repair() {
if (__wakaru_init_dynamic_tool_argument_repair_initialized) return;
__wakaru_init_dynamic_tool_argument_repair_initialized = true;
"use strict";
init_shim();
stringifiedDynamicToolArguments = defineShim({
    name: "dynamic_tools_stringified_arguments",
    refusalReasons: [
        "unparseable_arguments"
    ]
});
decodeStringLiteral = (raw)=>{
    try {
        const decoded = JSON.parse(raw);
        return typeof decoded === "string" ? decoded : raw;
    } catch  {
        return raw;
    }
};
parseJsonObject = (text4)=>{
    try {
        const value = JSON.parse(text4);
        if (value === null || typeof value !== "object" || Array.isArray(value)) {
            return void 0;
        }
        return value;
    } catch  {
        return void 0;
    }
};
namesAKeyTwice = (text4)=>{
    const containers = [];
    const keysPerObject = [];
    let pendingString;
    for (const token of jsonTokens(text4, 0)){
        if (token.kind === "string") {
            pendingString = token.raw;
            continue;
        }
        switch(token.char){
            case "{":
                containers.push("object");
                keysPerObject.push(new Set());
                break;
            case "[":
                containers.push("array");
                break;
            case "}":
                if (containers.pop() === "object") {
                    keysPerObject.pop();
                }
                break;
            case "]":
                containers.pop();
                break;
            case ":":
                if (containers[containers.length - 1] === "object" && pendingString !== void 0) {
                    const key = decodeStringLiteral(pendingString);
                    const seen = keysPerObject[keysPerObject.length - 1];
                    if (seen !== void 0) {
                        if (seen.has(key)) {
                            return true;
                        }
                        seen.add(key);
                    }
                }
                break;
            default:
                break;
        }
        pendingString = void 0;
    }
    return false;
};
parseWholeObject = (text4)=>namesAKeyTwice(text4) ? void 0 : parseJsonObject(text4);
decodeLeadingJsonObject = (blob)=>{
    const start = blob.indexOf("{");
    if (start < 0) {
        return void 0;
    }
    let depth = 0;
    for (const token of jsonTokens(blob, start)){
        if (token.kind !== "punctuation") {
            continue;
        }
        if (token.char === "{") {
            depth++;
        } else if (token.char === "}" && --depth === 0) {
            const value = parseJsonObject(blob.slice(start, token.index + 1));
            return value === void 0 ? void 0 : {
                value,
                rest: blob.slice(token.index + 1)
            };
        }
    }
    return void 0;
};
structuralClosingBraces = (blob, start)=>{
    const out = [];
    for (const token of jsonTokens(blob, start)){
        if (token.kind === "punctuation" && token.char === "}") {
            out.push(token.index);
        }
    }
    return out;
};
leakedParameter = /<(?:antml:)?parameter\s+name="([^"]+)"\s*>([\s\S]*?)(?=<(?:antml:)?parameter\b|<\/|$)/gi;
readLeakedParameters = (markup)=>{
    const fields = {};
    for (const match2 of markup.matchAll(leakedParameter)){
        const name17 = match2[1];
        const value = match2[2];
        if (name17 !== void 0 && value !== void 0 && value.trim() !== "") {
            fields[name17] = value.trim();
        }
    }
    return Object.keys(fields).length > 0 ? fields : void 0;
};
READING_SEARCH_BUDGET = 25e4;
faithfulReadings = (blob)=>{
    const start = blob.indexOf("{");
    if (start < 0) {
        return [];
    }
    const closingBraces = structuralClosingBraces(blob, start);
    if (closingBraces.length * blob.length > READING_SEARCH_BUDGET) {
        return void 0;
    }
    const byFingerprint = new Map();
    const add2 = (value)=>{
        if (value !== void 0) {
            const fingerprint = JSON.stringify(value);
            if (!byFingerprint.has(fingerprint)) {
                byFingerprint.set(fingerprint, value);
            }
        }
    };
    const decoded = decodeLeadingJsonObject(blob);
    const leading = decoded !== void 0 && !namesAKeyTwice(blob.slice(start, blob.length - decoded.rest.length)) ? decoded : void 0;
    const tail = leading?.rest.trim() ?? "";
    if (leading !== void 0 && /^[\s,\]}]*$/.test(tail)) {
        add2(leading.value);
    }
    for (const index of closingBraces){
        add2(parseWholeObject(blob.slice(start, index) + blob.slice(index + 1)));
    }
    return [
        ...byFingerprint.values()
    ];
};
parseArgumentsLeniently = (blob)=>{
    const direct = parseJsonObject(blob);
    if (direct !== void 0) {
        return {
            args: direct,
            repaired: false
        };
    }
    const readings = faithfulReadings(blob);
    if (readings === void 0 || readings.length > 1) {
        return void 0;
    }
    if (readings.length === 1) {
        return {
            args: readings[0],
            repaired: true
        };
    }
    const decoded = decodeLeadingJsonObject(blob);
    const leaked = decoded === void 0 ? void 0 : readLeakedParameters(decoded.rest.trim());
    if (decoded === void 0 || leaked === void 0) {
        return void 0;
    }
    return Object.keys(leaked).some((field4)=>field4 !== "description") ? void 0 : {
        args: decoded.value,
        repaired: true,
        envelopeFields: leaked
    };
};

}
