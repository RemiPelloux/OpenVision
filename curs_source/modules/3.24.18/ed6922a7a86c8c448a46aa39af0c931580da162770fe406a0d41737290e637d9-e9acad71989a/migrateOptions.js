import { GK, Vge } from "./qIc.js";
import { x } from "./tslib.es6.js";
var oes, Hfn, C5c;
export { C5c, Hfn, oes };
var __wakaru_T5c_initialized = false;
export function T5c() {
if (__wakaru_T5c_initialized) return;
__wakaru_T5c_initialized = true;
"use strict";
x(), oes = class u1r {
    constructor(t, n){
        this.key = t, this.migrate = n;
    }
    apply(t) {
        const n = u1r._read(t, this.key), i = (s)=>u1r._read(t, s), r = (s, o)=>u1r._write(t, s, o);
        this.migrate(n, i, r);
    }
    static _read(t, n) {
        if (typeof t > "u") return;
        const i = n.indexOf(".");
        if (i >= 0) {
            const r = n.substring(0, i);
            return this._read(t[r], n.substring(i + 1));
        }
        return t[n];
    }
    static _write(t, n, i) {
        const r = n.indexOf(".");
        if (r >= 0) {
            const s = n.substring(0, r);
            t[s] = t[s] || {}, this._write(t[s], n.substring(r + 1), i);
            return;
        }
        t[n] = i;
    }
}, oes.items = [], Hfn = oes, GK("wordWrap", [
    [
        !0,
        "on"
    ],
    [
        !1,
        "off"
    ]
]), GK("lineNumbers", [
    [
        !0,
        "on"
    ],
    [
        !1,
        "off"
    ]
]), GK("cursorBlinking", [
    [
        "visible",
        "solid"
    ]
]), GK("renderWhitespace", [
    [
        !0,
        "boundary"
    ],
    [
        !1,
        "none"
    ]
]), GK("renderLineHighlight", [
    [
        !0,
        "line"
    ],
    [
        !1,
        "none"
    ]
]), GK("acceptSuggestionOnEnter", [
    [
        !0,
        "on"
    ],
    [
        !1,
        "off"
    ]
]), GK("tabCompletion", [
    [
        !1,
        "off"
    ],
    [
        !0,
        "onlySnippets"
    ]
]), GK("hover", [
    [
        !0,
        {
            enabled: !0
        }
    ],
    [
        !1,
        {
            enabled: !1
        }
    ]
]), GK("parameterHints", [
    [
        !0,
        {
            enabled: !0
        }
    ],
    [
        !1,
        {
            enabled: !1
        }
    ]
]), GK("autoIndent", [
    [
        !1,
        "advanced"
    ],
    [
        !0,
        "full"
    ]
]), GK("matchBrackets", [
    [
        !0,
        "always"
    ],
    [
        !1,
        "never"
    ]
]), GK("renderFinalNewline", [
    [
        !0,
        "on"
    ],
    [
        !1,
        "off"
    ]
]), GK("cursorSmoothCaretAnimation", [
    [
        !0,
        "on"
    ],
    [
        !1,
        "off"
    ]
]), GK("occurrencesHighlight", [
    [
        !0,
        "singleFile"
    ],
    [
        !1,
        "off"
    ]
]), GK("wordBasedSuggestions", [
    [
        !0,
        "matchingDocuments"
    ],
    [
        !1,
        "off"
    ]
]), GK("defaultColorDecorators", [
    [
        !0,
        "auto"
    ],
    [
        !1,
        "never"
    ]
]), Vge("autoClosingBrackets", (e, t, n)=>{
    e === !1 && (n("autoClosingBrackets", "never"), typeof t("autoClosingQuotes") > "u" && n("autoClosingQuotes", "never"), typeof t("autoSurround") > "u" && n("autoSurround", "never"));
}), Vge("renderIndentGuides", (e, t, n)=>{
    typeof e < "u" && (n("renderIndentGuides", void 0), typeof t("guides.indentation") > "u" && n("guides.indentation", !!e));
}), Vge("highlightActiveIndentGuide", (e, t, n)=>{
    typeof e < "u" && (n("highlightActiveIndentGuide", void 0), typeof t("guides.highlightActiveIndentation") > "u" && n("guides.highlightActiveIndentation", !!e));
}), C5c = {
    method: "showMethods",
    function: "showFunctions",
    constructor: "showConstructors",
    deprecated: "showDeprecated",
    field: "showFields",
    variable: "showVariables",
    class: "showClasses",
    struct: "showStructs",
    interface: "showInterfaces",
    module: "showModules",
    property: "showProperties",
    event: "showEvents",
    operator: "showOperators",
    unit: "showUnits",
    value: "showValues",
    constant: "showConstants",
    enum: "showEnums",
    enumMember: "showEnumMembers",
    keyword: "showKeywords",
    text: "showWords",
    color: "showColors",
    file: "showFiles",
    reference: "showReferences",
    folder: "showFolders",
    typeParameter: "showTypeParameters",
    snippet: "showSnippets"
}, Vge("suggest.filteredTypes", (e, t, n)=>{
    if (e && typeof e == "object") {
        for (const i of Object.entries(C5c))e[i[0]] === !1 && typeof t(`suggest.${i[1]}`) > "u" && n(`suggest.${i[1]}`, !1);
        n("suggest.filteredTypes", void 0);
    }
}), Vge("quickSuggestions", (e, t, n)=>{
    if (typeof e == "boolean") {
        const i = e ? "on" : "off";
        n("quickSuggestions", {
            comments: i,
            strings: i,
            other: i
        });
    }
}), Vge("experimental.stickyScroll.enabled", (e, t, n)=>{
    typeof e == "boolean" && (n("experimental.stickyScroll.enabled", void 0), typeof t("stickyScroll.enabled") > "u" && n("stickyScroll.enabled", e));
}), Vge("experimental.stickyScroll.maxLineCount", (e, t, n)=>{
    typeof e == "number" && (n("experimental.stickyScroll.maxLineCount", void 0), typeof t("stickyScroll.maxLineCount") > "u" && n("stickyScroll.maxLineCount", e));
}), Vge("codeActionsOnSave", (e, t, n)=>{
    if (e && typeof e == "object") {
        let i = !1;
        const r = {};
        for (const s of Object.entries(e))typeof s[1] == "boolean" ? (i = !0, r[s[0]] = s[1] ? "explicit" : "never") : r[s[0]] = s[1];
        i && n("codeActionsOnSave", r);
    }
}), Vge("codeActionWidget.includeNearbyQuickfixes", (e, t, n)=>{
    typeof e == "boolean" && (n("codeActionWidget.includeNearbyQuickfixes", void 0), typeof t("codeActionWidget.includeNearbyQuickFixes") > "u" && n("codeActionWidget.includeNearbyQuickFixes", e));
}), Vge("lightbulb.enabled", (e, t, n)=>{
    typeof e == "boolean" && n("lightbulb.enabled", e ? void 0 : "off");
}), Vge("inlineSuggest.edits.codeShifting", (e, t, n)=>{
    typeof e == "boolean" && (n("inlineSuggest.edits.codeShifting", void 0), n("inlineSuggest.edits.allowCodeShifting", e ? "always" : "never"));
});

}
