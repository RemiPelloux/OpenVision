import { cI } from "./LexicalComposerContext.js";
import { Ius, XAk, ZAk } from "./Ycg.js";
import { NA } from "./api_7.js";
import { LX } from "./api_9.js";
import { RGr, jd } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { tgl } from "./useLexicalNodeSelection.js";
import { at } from "./web.js";
import { Ee, pi } from "./ze.js";
var TEg, tAi;
export { TEg, tAi };
var __wakaru_xus_initialized = false;
export function xus() {
if (__wakaru_xus_initialized) return;
__wakaru_xus_initialized = true;
"use strict";
E(), at(), NA(), pi(), NA(), cI(), tgl(), LX(), TEg = jd("INSERT_HORIZONTAL_RULE_COMMAND"), tAi = class SPb extends RGr {
    static getType() {
        return "horizontalrule";
    }
    static clone(e) {
        return new SPb(e.__key);
    }
    static importJSON(e) {
        return Ius();
    }
    static importDOM() {
        return {
            hr: ()=>({
                    conversion: ZAk,
                    priority: 0
                })
        };
    }
    exportJSON() {
        return {
            type: "horizontalrule",
            version: 1
        };
    }
    exportDOM() {
        return {
            element: document.createElement("hr")
        };
    }
    createDOM() {
        return document.createElement("hr");
    }
    getTextContent() {
        return `
`;
    }
    isInline() {
        return !1;
    }
    updateDOM() {
        return !1;
    }
    decorate() {
        const e = this;
        return Ee(XAk, {
            get nodeKey () {
                return e.__key;
            }
        });
    }
};

}
