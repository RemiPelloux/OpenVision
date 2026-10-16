import { DMo, ES, Fq, Oq, RMo, gZ, ghe, mZ, p6h, pZ } from "./tool-names.ts";
import { x } from "./tslib.es6.js";
function h6h(e) {
    return p6h.some((t)=>t === e);
}
var arr, X6h, h7e;
export { X6h, arr, h6h, h7e };
var __wakaru_Ont_initialized = false;
export function Ont() {
if (__wakaru_Ont_initialized) return;
__wakaru_Ont_initialized = true;
"use strict";
x(), Fq(), arr = [
    {
        type: "function",
        name: ES,
        description: gZ.sendTask(),
        parameters: {
            type: "object",
            properties: {
                request: {
                    type: "string",
                    description: gZ.sendTaskRequest()
                }
            },
            required: [
                "request"
            ]
        }
    },
    {
        type: "function",
        name: pZ,
        description: gZ.recallTextMessages(),
        parameters: {
            type: "object",
            properties: {}
        }
    },
    {
        type: "function",
        name: Oq,
        description: gZ.staySilent(),
        parameters: {
            type: "object",
            properties: {}
        }
    },
    {
        type: "function",
        name: ghe,
        description: gZ.endTheCall(),
        parameters: {
            type: "object",
            properties: {}
        }
    }
], X6h = [
    {
        type: "function",
        name: mZ,
        description: gZ.searchConversations(),
        parameters: {
            type: "object",
            properties: {
                query: {
                    type: "string",
                    description: gZ.searchConversationsQuery()
                },
                scope: {
                    type: "string",
                    description: gZ.searchConversationsScope(),
                    enum: RMo
                },
                id: {
                    type: "string",
                    description: gZ.searchConversationsId()
                },
                from: {
                    type: "string",
                    description: gZ.searchConversationsFrom()
                },
                to: {
                    type: "string",
                    description: gZ.searchConversationsTo()
                },
                if_missing: {
                    type: "string",
                    description: gZ.searchConversationsIfMissing(),
                    enum: DMo
                }
            },
            required: [
                "query",
                "if_missing"
            ]
        }
    }
], h7e = class {
    static all() {
        return arr;
    }
    static of(e) {
        return arr.filter((t)=>e.includes(t.name));
    }
    static descriptor(e) {
        const t = [
            ...arr,
            ...X6h
        ].find((n)=>n.name === e);
        if (t === void 0) throw new Error(`VoiceCallSessionTools.descriptor: ${e} is not a voice tool`);
        return t;
    }
    static worded(e, t) {
        const n = h6h(e.name) ? t[e.name] : void 0;
        if (n === void 0 || n.description === void 0 && n.parameters === void 0) return e;
        const i = new Map(Object.entries(n.parameters ?? {})), r = Object.fromEntries(Object.entries(e.parameters.properties).map(([s, o])=>{
            const a = i.get(s);
            return [
                s,
                a === void 0 ? o : {
                    ...o,
                    description: a
                }
            ];
        }));
        return {
            ...e,
            description: n.description ?? e.description,
            parameters: {
                ...e.parameters,
                properties: r
            }
        };
    }
    static registers(e, t) {
        return t.some((n)=>n.name === e);
    }
};

}
