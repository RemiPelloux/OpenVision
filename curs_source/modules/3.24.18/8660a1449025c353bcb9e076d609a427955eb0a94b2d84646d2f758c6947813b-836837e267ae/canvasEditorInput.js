import { Gt, tt } from "./Iwo.js";
import { wnt } from "./LYd.js";
import { cMe, oTe, qat } from "./Ycg.js";
import { jD } from "./canvas.js";
import { dMe } from "./cloudCanvas.js";
import { gs, yt } from "./codicons.js";
import { AA, qO } from "./editorInput.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
var Nls, aTe, zSg;
export { Nls, aTe, zSg };
var __wakaru_yhl_initialized = false;
export function yhl() {
if (__wakaru_yhl_initialized) return;
__wakaru_yhl_initialized = true;
"use strict";
E(), Gt(), fn(), qO(), gs(), jD(), dMe(), Nls = class zZi extends AA {
    constructor(e, n){
        super(), this._previewEpoch = 0, this._onDidChangePreviewEpoch = this._register(new tt), this.onDidChangePreviewEpoch = this._onDidChangePreviewEpoch.event, this.canvasPath = e, this.ownerAgentId = n?.ownerAgentId, this.sourceResource = n?.sourceResource, this.cloudCanvasAddress = n?.cloudCanvasAddress, this._cloudCanvasTitle = n?.cloudCanvasTitle, this.resource = n?.cloudCanvasAddress !== void 0 ? rt.from({
            scheme: "cursor-canvas",
            path: `__cloud__/${oTe(n.cloudCanvasAddress)}`
        }) : rt.from({
            scheme: "cursor-canvas",
            authority: n?.ownerAgentId,
            path: e ?? "__welcome__"
        });
    }
    get typeId() {
        return zZi.TypeID;
    }
    get previewEpoch() {
        return this._previewEpoch;
    }
    bumpPreviewEpoch() {
        this._previewEpoch++, this._onDidChangePreviewEpoch.fire();
    }
    get editorId() {
        return zZi.EditorID;
    }
    get cloudCanvasTitle() {
        return this._cloudCanvasTitle;
    }
    setCloudCanvasTitle(e) {
        const n = e?.trim() || void 0;
        this.cloudCanvasAddress === void 0 || this._cloudCanvasTitle === n || (this._cloudCanvasTitle = n, this._onDidChangeLabel.fire());
    }
    getName() {
        return this._cloudCanvasTitle !== void 0 ? this._cloudCanvasTitle : this.cloudCanvasAddress !== void 0 ? "Canvas" : this.canvasPath ? wnt(this.canvasPath) : "Canvas";
    }
    getIcon() {
        return yt.brush;
    }
    get capabilities() {
        return 2;
    }
    toUntyped() {
        return {
            resource: this.resource,
            options: {
                override: zZi.EditorID
            }
        };
    }
    get cloudIdentity() {
        return this.cloudCanvasAddress !== void 0 ? qat(oTe(this.cloudCanvasAddress)) : this.canvasPath === void 0 ? void 0 : qat(this.canvasPath);
    }
    matches(e) {
        if (e instanceof zZi) {
            const n = this.cloudIdentity, i = e.cloudIdentity;
            return n !== void 0 || i !== void 0 ? n !== void 0 && n === i && e.ownerAgentId === this.ownerAgentId : e.canvasPath === this.canvasPath && e.ownerAgentId === this.ownerAgentId;
        }
        return super.matches(e);
    }
}, Nls.TypeID = "workbench.input.canvas", Nls.EditorID = "workbench.editor.canvas", aTe = Nls, zSg = class {
    canSerialize(t) {
        return t instanceof aTe;
    }
    serialize(t) {
        if (t instanceof aTe) return JSON.stringify({
            canvasPath: t.canvasPath,
            ownerAgentId: t.ownerAgentId,
            sourceResource: t.sourceResource?.toString(),
            cloudCanvasAddress: t.cloudCanvasAddress ? oTe(t.cloudCanvasAddress) : void 0,
            cloudCanvasTitle: t.cloudCanvasTitle
        });
    }
    deserialize(t, e) {
        try {
            const n = JSON.parse(e), i = n.cloudCanvasAddress ? cMe(n.cloudCanvasAddress) : void 0;
            return new aTe(n.canvasPath, {
                ownerAgentId: n.ownerAgentId,
                sourceResource: n.sourceResource ? rt.parse(n.sourceResource) : void 0,
                cloudCanvasAddress: i,
                cloudCanvasTitle: i !== void 0 ? n.cloudCanvasTitle : void 0
            });
        } catch  {
            return;
        }
    }
};

}
