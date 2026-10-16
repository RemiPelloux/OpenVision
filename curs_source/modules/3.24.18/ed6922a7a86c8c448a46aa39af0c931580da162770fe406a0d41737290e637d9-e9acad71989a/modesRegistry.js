import { S, Se, bt, ve, we } from "./HVr.js";
import { iu, uh } from "./configurationRegistry.js";
import { Q9, tb } from "./mime.js";
import { rt } from "./nls.js";
import { kn, rr } from "./platform_2.js";
import { x } from "./tslib.es6.js";
var SPc, kPc, UAe, Sy, wfi;
export { SPc, Sy, UAe, kPc, wfi };
var __wakaru_$T_initialized = false;
export function $T() {
if (__wakaru_$T_initialized) return;
__wakaru_$T_initialized = true;
"use strict";
x(), rt(), bt(), rr(), Se(), Q9(), uh(), SPc = {
    ModesRegistry: "editor.modesRegistry"
}, kPc = class extends we {
    constructor(){
        super(), this._onDidChangeLanguages = this._register(new ve), this.onDidChangeLanguages = this._onDidChangeLanguages.event, this._languages = [];
    }
    registerLanguage(e) {
        return this._languages.push(e), this._onDidChangeLanguages.fire(void 0), {
            dispose: ()=>{
                for(let t = 0, n = this._languages.length; t < n; t++)if (this._languages[t] === e) {
                    this._languages.splice(t, 1);
                    return;
                }
            }
        };
    }
    getLanguages() {
        return this._languages;
    }
}, UAe = new kPc, kn.add(SPc.ModesRegistry, UAe), Sy = "plaintext", wfi = ".txt", UAe.registerLanguage({
    id: Sy,
    extensions: [
        wfi
    ],
    aliases: [
        S(883, null),
        "text"
    ],
    mimetypes: [
        tb.text
    ]
}), kn.as(iu.Configuration).registerDefaultConfigurations([
    {
        overrides: {
            "[plaintext]": {
                "editor.unicodeHighlight.ambiguousCharacters": !1,
                "editor.unicodeHighlight.invisibleCharacters": !1
            },
            "[go]": {
                "editor.insertSpaces": !1
            },
            "[makefile]": {
                "editor.insertSpaces": !1
            },
            "[shellscript]": {
                "files.eol": `
`
            },
            "[yaml]": {
                "editor.insertSpaces": !0,
                "editor.tabSize": 2
            }
        }
    }
]);

}
