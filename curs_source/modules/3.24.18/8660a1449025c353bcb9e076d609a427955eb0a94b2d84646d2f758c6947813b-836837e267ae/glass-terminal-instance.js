import { e5n, w6i } from "./glass-display-constants.js";
import { Kpc } from "./glass-local-terminal-persistence.js";
import { xc } from "./glass-storage-service.js";
import { yPt } from "./gpc.js";
import { Ypc, qfC } from "./internal-key-classifier.js";
import { nT, rv } from "./keyboardEvent.js";
import { io } from "./storage_2.js";
import { T2n, cU } from "./terminalInstance.js";
import { E } from "./tslib.es6.js";
var Xpc;
export { Xpc };
var __wakaru_qt__initialized = false;
export function qt_() {
if (__wakaru_qt__initialized) return;
__wakaru_qt__initialized = true;
"use strict";
E(), nT(), T2n(), e5n(), xc(), Kpc(), qfC(), Xpc = class extends cU {
    _registerLayoutSettingsInvalidators() {
        this._register(this._storageService.onDidChangeValue(io.APPLICATION, w6i, this._store)(()=>{
            this._invalidateLayoutSettings();
        }));
    }
    get shouldPersist() {
        return yPt(this) === void 0 ? super.shouldPersist : this._terminalConfigurationService.config.enablePersistentSessions && this.shellLaunchConfig.isTransient !== !0 && this.persistentProcessId !== void 0;
    }
    _isGlassCommand(t) {
        return t.startsWith("glass.");
    }
    wouldConsumeKeyboardEvent(t) {
        return this._isExiting ? !1 : this._wouldConsumeKeyboardEvent(t);
    }
    _wouldConsumeKeyboardEvent(t) {
        const e = new rv(t), n = this._keybindingService.softDispatch(e, e.target), i = n.kind === 1 && this._terminalConfigurationService.config.allowChords && t.key !== "Escape";
        if (this._keybindingService.inChordMode || i || n.kind === 2 && n.commandId && this._terminalConfigurationService.shouldSkipTerminalCommand(n.commandId) && !this._terminalConfigurationService.config.sendKeybindingsToShell) return !1;
        const r = this._terminalConfigurationService.config.allowMnemonics;
        if (Ypc.shouldSkipTerminal(t, r)) return !1;
        const { xterm: s } = this;
        return s ? Ypc.handles(s.raw, t) : !1;
    }
};

}
