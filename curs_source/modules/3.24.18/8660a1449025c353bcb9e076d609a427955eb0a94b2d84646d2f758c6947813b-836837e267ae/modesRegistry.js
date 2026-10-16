import { D, Gt, Qe, st, tt } from "./Iwo.js";
import { Vg, gp } from "./configurationRegistry.js";
import { Jk, tB } from "./mime.js";
import { Bt } from "./nls.js";
import { Eo, Fi } from "./platform_2.js";
import { E } from "./tslib.es6.js";
var AFd, RFd, J$e, iR, dwr;
export { AFd, J$e, RFd, dwr, iR };
var __wakaru_y4_initialized = false;
export function y4() {
if (__wakaru_y4_initialized) return;
__wakaru_y4_initialized = true;
"use strict";
E(), Bt(), Gt(), Eo(), Qe(), tB(), Vg(), AFd = {
    ModesRegistry: "editor.modesRegistry"
}, RFd = class extends st {
    constructor(){
        super(), this._onDidChangeLanguages = this._register(new tt), this.onDidChangeLanguages = this._onDidChangeLanguages.event, this._languages = [];
    }
    registerLanguage(t) {
        return this._languages.push(t), this._onDidChangeLanguages.fire(void 0), {
            dispose: ()=>{
                for(let e = 0, n = this._languages.length; e < n; e++)if (this._languages[e] === t) {
                    this._languages.splice(e, 1);
                    return;
                }
            }
        };
    }
    getLanguages() {
        return this._languages;
    }
}, J$e = new RFd, Fi.add(AFd.ModesRegistry, J$e), iR = "plaintext", dwr = ".txt", J$e.registerLanguage({
    id: iR,
    extensions: [
        dwr
    ],
    aliases: [
        D(883, null),
        "text"
    ],
    mimetypes: [
        Jk.text
    ]
}), Fi.as(gp.Configuration).registerDefaultConfigurations([
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
