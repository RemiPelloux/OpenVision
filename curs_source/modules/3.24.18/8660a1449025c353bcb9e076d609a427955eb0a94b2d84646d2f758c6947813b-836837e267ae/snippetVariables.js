import { D, EI, Fa, Ike, Vq, ww } from "./Iwo.js";
import { $l, nR, x0 } from "./SZu.js";
import { Nx, R6e } from "./ipa.js";
import { RD, fA } from "./languageConfigurationRegistry.js";
import { Bt } from "./nls.js";
import { Ku, Ul, g4 } from "./path_2.js";
import { Lr, Mc } from "./resources.js";
import { A5e, cne } from "./snippetParser.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Ai, Xo } from "./uuid_2.js";
import { Lde, Sr } from "./workspace.js";
var qMp, O3a, F3a, B3a, U3a, fyi, nCn, j3a, $3a, H3a;
export { $3a, B3a, F3a, H3a, O3a, U3a, fyi, j3a, nCn, qMp };
var __wakaru_zMp_initialized = false;
export function zMp() {
if (__wakaru_zMp_initialized) return;
__wakaru_zMp_initialized = true;
"use strict";
E(), Nx(), Ul(), Lr(), Fa(), Xo(), RD(), A5e(), Bt(), Sr(), qMp = Object.freeze({
    CURRENT_YEAR: !0,
    CURRENT_YEAR_SHORT: !0,
    CURRENT_MONTH: !0,
    CURRENT_DATE: !0,
    CURRENT_HOUR: !0,
    CURRENT_MINUTE: !0,
    CURRENT_SECOND: !0,
    CURRENT_DAY_NAME: !0,
    CURRENT_DAY_NAME_SHORT: !0,
    CURRENT_MONTH_NAME: !0,
    CURRENT_MONTH_NAME_SHORT: !0,
    CURRENT_SECONDS_UNIX: !0,
    CURRENT_TIMEZONE_OFFSET: !0,
    SELECTION: !0,
    CLIPBOARD: !0,
    TM_SELECTED_TEXT: !0,
    TM_CURRENT_LINE: !0,
    TM_CURRENT_WORD: !0,
    TM_LINE_INDEX: !0,
    TM_LINE_NUMBER: !0,
    TM_FILENAME: !0,
    TM_FILENAME_BASE: !0,
    TM_DIRECTORY: !0,
    TM_FILEPATH: !0,
    CURSOR_INDEX: !0,
    CURSOR_NUMBER: !0,
    RELATIVE_FILEPATH: !0,
    BLOCK_COMMENT_START: !0,
    BLOCK_COMMENT_END: !0,
    LINE_COMMENT: !0,
    WORKSPACE_NAME: !0,
    WORKSPACE_FOLDER: !0,
    RANDOM: !0,
    RANDOM_HEX: !0,
    UUID: !0
}), O3a = class {
    constructor(t){
        this._delegates = t;
    }
    resolve(t) {
        for (const e of this._delegates){
            const n = e.resolve(t);
            if (n !== void 0) return n;
        }
    }
}, F3a = class {
    constructor(t, e, n, i){
        this._model = t, this._selection = e, this._selectionIdx = n, this._overtypingCapturer = i;
    }
    resolve(t) {
        const { name: e } = t;
        if (e === "SELECTION" || e === "TM_SELECTED_TEXT") {
            let n = this._model.getValueInRange(this._selection) || void 0, i = this._selection.startLineNumber !== this._selection.endLineNumber;
            if (!n && this._overtypingCapturer) {
                const r = this._overtypingCapturer.getLastOvertypedInfo(this._selectionIdx);
                r && (n = r.value, i = r.multiline);
            }
            if (n && i && t.snippet) {
                const r = this._model.getLineContent(this._selection.startLineNumber), s = EI(r, 0, this._selection.startColumn - 1);
                let o = s;
                t.snippet.walk((l)=>l === t ? !1 : (l instanceof cne && (o = EI(ww(l.value).pop())), !0));
                const a = Ike(o, s);
                n = n.replace(/(\r\n|\r|\n)(.*)/g, (l, c, u)=>`${c}${o.substr(a)}${u}`);
            }
            return n;
        } else {
            if (e === "TM_CURRENT_LINE") return this._model.getLineContent(this._selection.positionLineNumber);
            if (e === "TM_CURRENT_WORD") {
                const n = this._model.getWordAtPosition({
                    lineNumber: this._selection.positionLineNumber,
                    column: this._selection.positionColumn
                });
                return n && n.word || void 0;
            } else {
                if (e === "TM_LINE_INDEX") return String(this._selection.positionLineNumber - 1);
                if (e === "TM_LINE_NUMBER") return String(this._selection.positionLineNumber);
                if (e === "CURSOR_INDEX") return String(this._selectionIdx);
                if (e === "CURSOR_NUMBER") return String(this._selectionIdx + 1);
            }
        }
    }
}, B3a = class {
    constructor(t, e){
        this._labelService = t, this._model = e;
    }
    resolve(t) {
        const { name: e } = t;
        if (e === "TM_FILENAME") return Ku(this._model.uri.fsPath);
        if (e === "TM_FILENAME_BASE") {
            const n = Ku(this._model.uri.fsPath), i = n.lastIndexOf(".");
            return i <= 0 ? n : n.slice(0, i);
        } else {
            if (e === "TM_DIRECTORY") return g4(this._model.uri.fsPath) === "." ? "" : this._labelService.getUriLabel(Mc(this._model.uri));
            if (e === "TM_FILEPATH") return this._labelService.getUriLabel(this._model.uri);
            if (e === "RELATIVE_FILEPATH") return this._labelService.getUriLabel(this._model.uri, {
                relative: !0,
                noPrefix: !0
            });
        }
    }
}, U3a = class {
    constructor(t, e, n, i){
        this._readClipboardText = t, this._selectionIdx = e, this._selectionCount = n, this._spread = i;
    }
    resolve(t) {
        if (t.name !== "CLIPBOARD") return;
        const e = this._readClipboardText();
        if (e) {
            if (this._spread) {
                const n = e.split(/\r\n|\n|\r/).filter((i)=>!Vq(i));
                if (n.length === this._selectionCount) return n[this._selectionIdx];
            }
            return e;
        }
    }
}, fyi = class {
    constructor(t, e, n){
        this._model = t, this._selection = e, this._languageConfigurationService = n;
    }
    resolve(t) {
        const { name: e } = t, n = this._model.getLanguageIdAtPosition(this._selection.selectionStartLineNumber, this._selection.selectionStartColumn), i = this._languageConfigurationService.getLanguageConfiguration(n).comments;
        if (i) {
            if (e === "LINE_COMMENT") return i.lineCommentToken || void 0;
            if (e === "BLOCK_COMMENT_START") return i.blockCommentStartToken || void 0;
            if (e === "BLOCK_COMMENT_END") return i.blockCommentEndToken || void 0;
        }
    }
}, fyi = Re([
    F(2, fA)
], fyi), nCn = class HZi {
    constructor(){
        this._date = new Date;
    }
    resolve(e) {
        const { name: n } = e;
        if (n === "CURRENT_YEAR") return String(this._date.getFullYear());
        if (n === "CURRENT_YEAR_SHORT") return String(this._date.getFullYear()).slice(-2);
        if (n === "CURRENT_MONTH") return String(this._date.getMonth().valueOf() + 1).padStart(2, "0");
        if (n === "CURRENT_DATE") return String(this._date.getDate().valueOf()).padStart(2, "0");
        if (n === "CURRENT_HOUR") return String(this._date.getHours().valueOf()).padStart(2, "0");
        if (n === "CURRENT_MINUTE") return String(this._date.getMinutes().valueOf()).padStart(2, "0");
        if (n === "CURRENT_SECOND") return String(this._date.getSeconds().valueOf()).padStart(2, "0");
        if (n === "CURRENT_DAY_NAME") return HZi.dayNames[this._date.getDay()];
        if (n === "CURRENT_DAY_NAME_SHORT") return HZi.dayNamesShort[this._date.getDay()];
        if (n === "CURRENT_MONTH_NAME") return HZi.monthNames[this._date.getMonth()];
        if (n === "CURRENT_MONTH_NAME_SHORT") return HZi.monthNamesShort[this._date.getMonth()];
        if (n === "CURRENT_SECONDS_UNIX") return String(Math.floor(this._date.getTime() / 1e3));
        if (n === "CURRENT_TIMEZONE_OFFSET") {
            const i = this._date.getTimezoneOffset(), r = i > 0 ? "-" : "+", s = Math.trunc(Math.abs(i / 60)), o = s < 10 ? "0" + s : s, a = Math.abs(i) - s * 60, l = a < 10 ? "0" + a : a;
            return r + o + ":" + l;
        }
    }
}, nCn.dayNames = [
    D(1540, null),
    D(1541, null),
    D(1542, null),
    D(1543, null),
    D(1544, null),
    D(1545, null),
    D(1546, null)
], nCn.dayNamesShort = [
    D(1547, null),
    D(1548, null),
    D(1549, null),
    D(1550, null),
    D(1551, null),
    D(1552, null),
    D(1553, null)
], nCn.monthNames = [
    D(1554, null),
    D(1555, null),
    D(1556, null),
    D(1557, null),
    D(1558, null),
    D(1559, null),
    D(1560, null),
    D(1561, null),
    D(1562, null),
    D(1563, null),
    D(1564, null),
    D(1565, null)
], nCn.monthNamesShort = [
    D(1566, null),
    D(1567, null),
    D(1568, null),
    D(1569, null),
    D(1570, null),
    D(1571, null),
    D(1572, null),
    D(1573, null),
    D(1574, null),
    D(1575, null),
    D(1576, null),
    D(1577, null)
], j3a = nCn, $3a = class {
    constructor(t){
        this._workspaceService = t;
    }
    resolve(t) {
        if (!this._workspaceService) return;
        const e = x0(this._workspaceService.getWorkspace());
        if (!nR(e)) {
            if (t.name === "WORKSPACE_NAME") return this._resolveWorkspaceName(e);
            if (t.name === "WORKSPACE_FOLDER") return this._resoveWorkspacePath(e);
        }
    }
    _resolveWorkspaceName(t) {
        if ($l(t)) return Ku(t.uri.path);
        let e = Ku(t.configPath.path);
        return e.endsWith(Lde) && (e = e.substr(0, e.length - Lde.length - 1)), e;
    }
    _resoveWorkspacePath(t) {
        if ($l(t)) return R6e(t.uri.fsPath);
        const e = Ku(t.configPath.path);
        let n = t.configPath.fsPath;
        return n.endsWith(e) && (n = n.substr(0, n.length - e.length - 1)), n ? R6e(n) : "/";
    }
}, H3a = class {
    resolve(t) {
        const { name: e } = t;
        if (e === "RANDOM") return Math.random().toString().slice(-6);
        if (e === "RANDOM_HEX") return Math.random().toString(16).slice(-6);
        if (e === "UUID") return Ai();
    }
};

}
