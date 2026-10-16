import { bt, ve } from "./HVr.js";
import { p2 } from "./canvas.js";
import { Jtt, aqt } from "./canvasService.js";
import { P8e } from "./cloudCanvas.js";
import { Pe, _i } from "./codicons.js";
import { H0, MA } from "./editorInput.js";
import { Bmt } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
function rhe(e) {
    return `${e.storeId}/${e.canvasId}`;
}
function TLe(e) {
    const t = e.indexOf("/");
    if (!(t <= 0)) return aqt({
        storeId: e.slice(0, t),
        canvasId: e.slice(t + 1)
    });
}
function eLh(e) {
    const t = TLe(e)?.canvasId ?? Jtt(e)?.canvasId;
    return t === void 0 ? void 0 : `cloud-canvas-id:${t}`;
}
var Jer, she, aLh;
export { Jer, TLe, aLh, eLh, rhe, she };
var __wakaru_iIo_initialized = false;
export function iIo() {
if (__wakaru_iIo_initialized) return;
__wakaru_iIo_initialized = true;
"use strict";
x(), bt(), Qt(), MA(), _i(), p2(), P8e(), Jer = class gQn extends H0 {
    constructor(t, n){
        super(), this._previewEpoch = 0, this._onDidChangePreviewEpoch = this._register(new ve), this.onDidChangePreviewEpoch = this._onDidChangePreviewEpoch.event, this.canvasPath = t, this.ownerAgentId = n?.ownerAgentId, this.sourceResource = n?.sourceResource, this.cloudCanvasAddress = n?.cloudCanvasAddress, this._cloudCanvasTitle = n?.cloudCanvasTitle, this.resource = n?.cloudCanvasAddress !== void 0 ? Ee.from({
            scheme: "cursor-canvas",
            path: `__cloud__/${rhe(n.cloudCanvasAddress)}`
        }) : Ee.from({
            scheme: "cursor-canvas",
            authority: n?.ownerAgentId,
            path: t ?? "__welcome__"
        });
    }
    get typeId() {
        return gQn.TypeID;
    }
    get previewEpoch() {
        return this._previewEpoch;
    }
    bumpPreviewEpoch() {
        this._previewEpoch++, this._onDidChangePreviewEpoch.fire();
    }
    get editorId() {
        return gQn.EditorID;
    }
    get cloudCanvasTitle() {
        return this._cloudCanvasTitle;
    }
    setCloudCanvasTitle(t) {
        const n = t?.trim() || void 0;
        this.cloudCanvasAddress === void 0 || this._cloudCanvasTitle === n || (this._cloudCanvasTitle = n, this._onDidChangeLabel.fire());
    }
    getName() {
        return this._cloudCanvasTitle !== void 0 ? this._cloudCanvasTitle : this.cloudCanvasAddress !== void 0 ? "Canvas" : this.canvasPath ? Bmt(this.canvasPath) : "Canvas";
    }
    getIcon() {
        return Pe.brush;
    }
    get capabilities() {
        return 2;
    }
    toUntyped() {
        return {
            resource: this.resource,
            options: {
                override: gQn.EditorID
            }
        };
    }
    get cloudIdentity() {
        return this.cloudCanvasAddress !== void 0 ? eLh(rhe(this.cloudCanvasAddress)) : this.canvasPath === void 0 ? void 0 : eLh(this.canvasPath);
    }
    matches(t) {
        if (t instanceof gQn) {
            const n = this.cloudIdentity, i = t.cloudIdentity;
            return n !== void 0 || i !== void 0 ? n !== void 0 && n === i && t.ownerAgentId === this.ownerAgentId : t.canvasPath === this.canvasPath && t.ownerAgentId === this.ownerAgentId;
        }
        return super.matches(t);
    }
}, Jer.TypeID = "workbench.input.canvas", Jer.EditorID = "workbench.editor.canvas", she = Jer, aLh = class {
    canSerialize(e) {
        return e instanceof she;
    }
    serialize(e) {
        if (e instanceof she) return JSON.stringify({
            canvasPath: e.canvasPath,
            ownerAgentId: e.ownerAgentId,
            sourceResource: e.sourceResource?.toString(),
            cloudCanvasAddress: e.cloudCanvasAddress ? rhe(e.cloudCanvasAddress) : void 0,
            cloudCanvasTitle: e.cloudCanvasTitle
        });
    }
    deserialize(e, t) {
        try {
            const n = JSON.parse(t), i = n.cloudCanvasAddress ? TLe(n.cloudCanvasAddress) : void 0;
            return new she(n.canvasPath, {
                ownerAgentId: n.ownerAgentId,
                sourceResource: n.sourceResource ? Ee.parse(n.sourceResource) : void 0,
                cloudCanvasAddress: i,
                cloudCanvasTitle: i !== void 0 ? n.cloudCanvasTitle : void 0
            });
        } catch  {
            return;
        }
    }
};

}
