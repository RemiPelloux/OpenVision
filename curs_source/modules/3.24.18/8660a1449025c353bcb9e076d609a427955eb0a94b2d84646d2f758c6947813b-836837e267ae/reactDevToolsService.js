import { Xjw, Yjw } from "./BA.js";
import { Ga, Tr } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { cy, fb } from "./environment.js";
import { Rn } from "./extensions.js";
import { is, mA, ms } from "./files.js";
import { Od, Tc } from "./host.js";
import { It } from "./instantiation.js";
import { gCt } from "./jsonEdit.js";
import { Ji, Li } from "./log.js";
import { Jc } from "./observable.js";
import { fc, hu } from "./productService.js";
import { Zjw, nHl } from "./reactDevToolsOptIn.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Epe, swi } from "./yBp.js";
import { bc } from "./ze.js";
var iHl, MTs;
export { MTs, iHl };
var __wakaru_tJf_initialized = false;
export function tJf() {
if (__wakaru_tJf_initialized) return;
__wakaru_tJf_initialized = true;
"use strict";
E(), Ga(), gCt(), Jc(), fb(), Zjw(), ms(), Rn(), It(), Ji(), hu(), Od(), iHl = Il("reactDevToolsService"), MTs = class {
    constructor(t, e, n, i, r){
        this._environmentService = t, this._fileService = e, this._hostService = n, this._logService = i, this._productService = r, this._enabledOnLaunch = bc(this, void 0), this.enabledOnLaunch = this._enabledOnLaunch, this._readArgvJson().then((s)=>{
            this._enabledOnLaunch.set(Yjw({
                isDevBuild: !this._environmentService.isBuilt,
                internalBuild: this._productService.internalBuild === !0,
                cliOptIn: void 0,
                argvOptIn: Xjw(s)
            }), void 0);
        }, (s)=>{
            this._logService.error("[React DevTools] could not read argv.json", s);
        });
    }
    async setEnabledAndRestart(t) {
        const e = await this._readArgvJson() ?? "{}", n = Epe(e, [
            nHl
        ], t, {
            insertSpaces: !1,
            tabSize: 4,
            eol: `
`
        });
        await this._fileService.writeFile(this._environmentService.argvResource, Tr.fromString(swi(e, n))), this._enabledOnLaunch.set(t, void 0), await this._hostService.restart();
    }
    async _readArgvJson() {
        try {
            return (await this._fileService.readFile(this._environmentService.argvResource)).value.toString();
        } catch (t) {
            if (t instanceof mA && t.fileOperationResult === 1) return;
            throw t;
        }
    }
}, MTs = Re([
    F(0, cy),
    F(1, is),
    F(2, Tc),
    F(3, Li),
    F(4, fc)
], MTs), bn(iHl, MTs, 1, 1);

}
