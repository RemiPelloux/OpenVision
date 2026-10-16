import { E } from "./tslib.es6.js";
import { VAe, foe } from "./ze.js";
var cHo, vsi, UUd;
export { UUd, cHo, vsi };
var __wakaru_jUd_initialized = false;
export function jUd() {
if (__wakaru_jUd_initialized) return;
__wakaru_jUd_initialized = true;
"use strict";
E(), cHo = class ZYs {
    constructor(e, n){
        this.key = e, this.migrate = n;
    }
    apply(e) {
        const n = ZYs._read(e, this.key), i = (s)=>ZYs._read(e, s), r = (s, o)=>ZYs._write(e, s, o);
        this.migrate(n, i, r);
    }
    static _read(e, n) {
        if (typeof e > "u") return;
        const i = n.indexOf(".");
        if (i >= 0) {
            const r = n.substring(0, i);
            return this._read(e[r], n.substring(i + 1));
        }
        return e[n];
    }
    static _write(e, n, i) {
        const r = n.indexOf(".");
        if (r >= 0) {
            const s = n.substring(0, r);
            e[s] = e[s] || {}, this._write(e[s], n.substring(r + 1), i);
            return;
        }
        e[n] = i;
    }
}, cHo.items = [], vsi = cHo, foe("wordWrap", [
    [
        !0,
        "on"
    ],
    [
        !1,
        "off"
    ]
]), foe("lineNumbers", [
    [
        !0,
        "on"
    ],
    [
        !1,
        "off"
    ]
]), foe("cursorBlinking", [
    [
        "visible",
        "solid"
    ]
]), foe("renderWhitespace", [
    [
        !0,
        "boundary"
    ],
    [
        !1,
        "none"
    ]
]), foe("renderLineHighlight", [
    [
        !0,
        "line"
    ],
    [
        !1,
        "none"
    ]
]), foe("acceptSuggestionOnEnter", [
    [
        !0,
        "on"
    ],
    [
        !1,
        "off"
    ]
]), foe("tabCompletion", [
    [
        !1,
        "off"
    ],
    [
        !0,
        "onlySnippets"
    ]
]), foe("hover", [
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
]), foe("parameterHints", [
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
]), foe("autoIndent", [
    [
        !1,
        "advanced"
    ],
    [
        !0,
        "full"
    ]
]), foe("matchBrackets", [
    [
        !0,
        "always"
    ],
    [
        !1,
        "never"
    ]
]), foe("renderFinalNewline", [
    [
        !0,
        "on"
    ],
    [
        !1,
        "off"
    ]
]), foe("cursorSmoothCaretAnimation", [
    [
        !0,
        "on"
    ],
    [
        !1,
        "off"
    ]
]), foe("occurrencesHighlight", [
    [
        !0,
        "singleFile"
    ],
    [
        !1,
        "off"
    ]
]), foe("wordBasedSuggestions", [
    [
        !0,
        "matchingDocuments"
    ],
    [
        !1,
        "off"
    ]
]), foe("defaultColorDecorators", [
    [
        !0,
        "auto"
    ],
    [
        !1,
        "never"
    ]
]), VAe("autoClosingBrackets", (t, e, n)=>{
    t === !1 && (n("autoClosingBrackets", "never"), typeof e("autoClosingQuotes") > "u" && n("autoClosingQuotes", "never"), typeof e("autoSurround") > "u" && n("autoSurround", "never"));
}), VAe("renderIndentGuides", (t, e, n)=>{
    typeof t < "u" && (n("renderIndentGuides", void 0), typeof e("guides.indentation") > "u" && n("guides.indentation", !!t));
}), VAe("highlightActiveIndentGuide", (t, e, n)=>{
    typeof t < "u" && (n("highlightActiveIndentGuide", void 0), typeof e("guides.highlightActiveIndentation") > "u" && n("guides.highlightActiveIndentation", !!t));
}), UUd = {
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
}, VAe("suggest.filteredTypes", (t, e, n)=>{
    if (t && typeof t == "object") {
        for (const i of Object.entries(UUd))t[i[0]] === !1 && typeof e(`suggest.${i[1]}`) > "u" && n(`suggest.${i[1]}`, !1);
        n("suggest.filteredTypes", void 0);
    }
}), VAe("quickSuggestions", (t, e, n)=>{
    if (typeof t == "boolean") {
        const i = t ? "on" : "off";
        n("quickSuggestions", {
            comments: i,
            strings: i,
            other: i
        });
    }
}), VAe("experimental.stickyScroll.enabled", (t, e, n)=>{
    typeof t == "boolean" && (n("experimental.stickyScroll.enabled", void 0), typeof e("stickyScroll.enabled") > "u" && n("stickyScroll.enabled", t));
}), VAe("experimental.stickyScroll.maxLineCount", (t, e, n)=>{
    typeof t == "number" && (n("experimental.stickyScroll.maxLineCount", void 0), typeof e("stickyScroll.maxLineCount") > "u" && n("stickyScroll.maxLineCount", t));
}), VAe("codeActionsOnSave", (t, e, n)=>{
    if (t && typeof t == "object") {
        let i = !1;
        const r = {};
        for (const s of Object.entries(t))typeof s[1] == "boolean" ? (i = !0, r[s[0]] = s[1] ? "explicit" : "never") : r[s[0]] = s[1];
        i && n("codeActionsOnSave", r);
    }
}), VAe("codeActionWidget.includeNearbyQuickfixes", (t, e, n)=>{
    typeof t == "boolean" && (n("codeActionWidget.includeNearbyQuickfixes", void 0), typeof e("codeActionWidget.includeNearbyQuickFixes") > "u" && n("codeActionWidget.includeNearbyQuickFixes", t));
}), VAe("lightbulb.enabled", (t, e, n)=>{
    typeof t == "boolean" && n("lightbulb.enabled", t ? void 0 : "off");
}), VAe("inlineSuggest.edits.codeShifting", (t, e, n)=>{
    typeof t == "boolean" && (n("inlineSuggest.edits.codeShifting", void 0), n("inlineSuggest.edits.allowCodeShifting", t ? "always" : "never"));
});

}
