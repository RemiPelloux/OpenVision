import { Se, cn } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { ca, la } from "./aiMiscServices.js";
import { Pe, _i } from "./codicons.js";
import { H0, MA } from "./editorInput.js";
import { BR, LA } from "./editorPane.js";
import { Ze, _t } from "./instantiation.js";
import { gt, li } from "./network.js";
import { ly_, pVh } from "./renderCursorBlamePane.js";
import { Vn, yn } from "./storage_2.js";
import { $r, as } from "./themeService.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
var Hnt, E9n, NNo, RTe, Wnt;
export { E9n, Hnt, NNo, RTe, Wnt };
var __wakaru_dsr_initialized = false;
export function dsr() {
if (__wakaru_dsr_initialized) return;
__wakaru_dsr_initialized = true;
"use strict";
x(), _i(), Se(), li(), Qt(), Ze(), Vn(), as(), BR(), la(), MA(), ly_(), Hnt = "workbench.editor.cursorblame", E9n = class {
    constructor(e){
        this.instantiationService = e;
    }
    canSerialize(e) {
        return e instanceof RTe;
    }
    serialize(e) {
        if (e instanceof RTe) return JSON.stringify({
            options: e.options
        });
    }
    deserialize(e, t) {
        try {
            const { options: n } = JSON.parse(t);
            return e.createInstance(RTe, n);
        } catch  {
            return;
        }
    }
}, E9n = ie([
    C(0, _t)
], E9n), NNo = class yQn extends H0 {
    constructor(t){
        super(), this.options = t;
    }
    get typeId() {
        return yQn.ID;
    }
    get editorId() {
        return Hnt;
    }
    get resource() {
        const t = this.options.repoRoot ? new URLSearchParams({
            repoRoot: this.options.repoRoot
        }).toString() : void 0;
        return Ee.from({
            scheme: gt.cursorBlame,
            path: `commit/${this.options.commitId}`,
            query: t
        });
    }
    get capabilities() {
        return 2;
    }
    matches(t) {
        return super.matches(t) ? !0 : t instanceof yQn ? this.options.commitId === t.options.commitId && this.options.repoRoot === t.options.repoRoot : !(t instanceof H0) && "resource" in t && t.resource ? t.resource.scheme === gt.cursorBlame && t.resource.path === `commit/${this.options.commitId}` && t.resource.query === this.resource.query : !1;
    }
    getName() {
        const t = this.options.displayId || this.options.commitId.substring(0, 7), n = this.options.subject, i = `${t}: ${n}`;
        return i.length <= 50 ? i : i.substring(0, 47) + "...";
    }
    getTitle(t) {
        const n = this.options.displayId || this.options.commitId.substring(0, 7), i = this.options.subject;
        if (t === 2) {
            const s = this.options.author ? ` by ${this.options.author}` : "";
            return `${n}: ${i}${s}`;
        }
        const r = `${n}: ${i}`;
        return r.length <= 50 ? r : r.substring(0, 47) + "...";
    }
    getIcon() {
        return Pe.gitCommit;
    }
    toJSON() {
        return {
            options: this.options
        };
    }
    toUntyped() {
        return {
            resource: this.resource,
            options: {
                override: yQn.ID,
                pinned: !0
            }
        };
    }
    copy() {
        return new yQn(this.options);
    }
}, NNo.ID = "workbench.editor.cursorblame.input", RTe = NNo, Wnt = class extends LA {
    constructor(e, t, n, i, r){
        super(Wnt.ID, e, t, n), this._instantiationService = i, this._analyticsService = r, this._solidDisposable = this._register(new cn), this._inputDisposable = this._register(new cn);
    }
    createEditor(e) {}
    async setInput(e, t, n, i) {
        await super.setInput(e, {
            ...t,
            pinned: !0
        }, n, i);
        const r = this.getContainer();
        if (!r) return;
        const s = this._currentCommitId !== e.options.commitId, o = this._currentRepoRoot !== e.options.repoRoot;
        (!this._solidDisposable.value || s || o) && (this._solidDisposable.clear(), r.replaceChildren(), this._currentCommitId = e.options.commitId, this._currentRepoRoot = e.options.repoRoot, this._solidDisposable.value = pVh(r, this._instantiationService, e.options), this._analyticsService.trackEvent("cursor_blame.ai_details_opened")), this._inputDisposable.clear(), this._inputDisposable.value = e.onWillDispose(()=>{
            this._solidDisposable.clear();
        });
    }
    layout(e) {}
    dispose() {
        this._solidDisposable.clear(), this._inputDisposable.clear(), super.dispose();
    }
}, Wnt.ID = Hnt, Wnt = ie([
    C(1, $r),
    C(2, yn),
    C(3, _t),
    C(4, ca)
], Wnt);

}
