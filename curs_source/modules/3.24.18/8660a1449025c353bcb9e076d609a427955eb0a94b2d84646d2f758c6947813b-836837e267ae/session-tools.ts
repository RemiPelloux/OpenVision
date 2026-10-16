import { Etf } from "./Ycg.js";
import { Die, Gle, Nie, TTe, Wle, h0, qCl, qle, zCl } from "./tool-names.ts";
import { E } from "./tslib.es6.js";
var $gs, unf, Vlt;
export { $gs, Vlt, unf };
var __wakaru_LIt_initialized = false;
export function LIt() {
if (__wakaru_LIt_initialized) return;
__wakaru_LIt_initialized = true;
"use strict";
E(), Nie(), $gs = [
    {
        type: "function",
        name: h0,
        description: qle.sendTask(),
        parameters: {
            type: "object",
            properties: {
                request: {
                    type: "string",
                    description: qle.sendTaskRequest()
                }
            },
            required: [
                "request"
            ]
        }
    },
    {
        type: "function",
        name: Wle,
        description: qle.recallTextMessages(),
        parameters: {
            type: "object",
            properties: {}
        }
    },
    {
        type: "function",
        name: Die,
        description: qle.staySilent(),
        parameters: {
            type: "object",
            properties: {}
        }
    },
    {
        type: "function",
        name: TTe,
        description: qle.endTheCall(),
        parameters: {
            type: "object",
            properties: {}
        }
    }
], unf = [
    {
        type: "function",
        name: Gle,
        description: qle.searchConversations(),
        parameters: {
            type: "object",
            properties: {
                query: {
                    type: "string",
                    description: qle.searchConversationsQuery()
                },
                scope: {
                    type: "string",
                    description: qle.searchConversationsScope(),
                    enum: qCl
                },
                id: {
                    type: "string",
                    description: qle.searchConversationsId()
                },
                from: {
                    type: "string",
                    description: qle.searchConversationsFrom()
                },
                to: {
                    type: "string",
                    description: qle.searchConversationsTo()
                },
                if_missing: {
                    type: "string",
                    description: qle.searchConversationsIfMissing(),
                    enum: zCl
                }
            },
            required: [
                "query",
                "if_missing"
            ]
        }
    }
], Vlt = class {
    static all() {
        return $gs;
    }
    static of(t) {
        return $gs.filter((e)=>t.includes(e.name));
    }
    static descriptor(t) {
        const e = [
            ...$gs,
            ...unf
        ].find((n)=>n.name === t);
        if (e === void 0) throw new Error(`VoiceCallSessionTools.descriptor: ${t} is not a voice tool`);
        return e;
    }
    static worded(t, e) {
        const n = Etf(t.name) ? e[t.name] : void 0;
        if (n === void 0 || n.description === void 0 && n.parameters === void 0) return t;
        const i = new Map(Object.entries(n.parameters ?? {})), r = Object.fromEntries(Object.entries(t.parameters.properties).map(([s, o])=>{
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
            ...t,
            description: n.description ?? t.description,
            parameters: {
                ...t.parameters,
                properties: r
            }
        };
    }
    static registers(t, e) {
        return e.some((n)=>n.name === t);
    }
};

}
