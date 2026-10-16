import { vAs } from "./browser-design-mode-comment-input-editor.js";
import { sm0 } from "./design-annotation-note-field.react.js";
import { _ee } from "./design-annotation-service.js";
import { Rut } from "./design-note-pill-styles.js";
import { Hn } from "./dom_2.js";
import { $b } from "./stylex.mjs";
import { E } from "./tslib.es6.js";
import { Put } from "./use-application-setting.react_2.js";
import { F_v } from "./use-design-css-inspector-session.react.js";
import { LL } from "./use-disposable-effect.react.js";
import { rYl } from "./use-send-design-annotation.react.js";
import { In } from "./use-service.react_2.js";
var sYl;
export { sYl };
var __wakaru_fm0_initialized = false;
export function fm0() {
if (__wakaru_fm0_initialized) return;
__wakaru_fm0_initialized = true;
"use strict";
E(), $b(), Hn(), LL(), In(), _ee(), vAs(), Put(), Rut(), sm0(), F_v(), rYl(), sYl = {
    editor: {
        kVAEAm: "glass-10l6tqk",
        kfzvcC: "glass-67bb7w",
        $$css: !0
    },
    frame: (t, e)=>[
            {
                kbCHJM: t != null ? "glass-gq9j65" : t,
                k87sOh: e != null ? "glass-jbys53" : e,
                $$css: !0
            },
            {
                "--x-left": ((n)=>typeof n == "number" ? n + "px" : n ?? void 0)(t),
                "--x-top": ((n)=>typeof n == "number" ? n + "px" : n ?? void 0)(e)
            }
        ]
};

}
