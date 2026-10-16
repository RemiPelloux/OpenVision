import { Sed } from "./SZu.js";
import { or } from "./configuration.js";
import { OCe, OPe } from "./customEditorLabelService.js";
import { AA, qO } from "./editorInput.js";
import { Sx, is, ms } from "./files.js";
import { YI, fT } from "./filesConfigurationService.js";
import { Yp, qg } from "./label.js";
import { Lr, Mc, gu } from "./resources.js";
import { FC, Mw } from "./textResourceConfiguration.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { xJn } from "./ze.js";
var GIi;
export { GIi };
var __wakaru_oyg_initialized = false;
export function oyg() {
if (__wakaru_oyg_initialized) return;
__wakaru_oyg_initialized = true;
"use strict";
E(), qO(), ms(), qg(), Lr(), YI(), or(), FC(), OPe(), GIi = class extends AA {
    constructor(t, e, n, i, r, s, o){
        super(), this.resource = t, this.labelService = n, this.fileService = i, this.filesConfigurationService = r, this.textResourceConfigurationService = s, this.customEditorLabelService = o, this._name = void 0, this._shortDescription = void 0, this._mediumDescription = void 0, this._longDescription = void 0, this._shortTitle = void 0, this._mediumTitle = void 0, this._longTitle = void 0, this._preferredResource = e || t, this.registerListeners();
    }
    get capabilities() {
        let t = 32;
        return this.fileService.hasProvider(this.resource) ? this.filesConfigurationService.isReadonly(this.resource) && (t |= 2) : t |= 4, t & 2 || (t |= 128), t;
    }
    get preferredResource() {
        return this._preferredResource;
    }
    registerListeners() {
        this._register(this.labelService.onDidChangeFormatters((t)=>this.onLabelEvent(t.scheme))), this._register(this.fileService.onDidChangeFileSystemProviderRegistrations((t)=>this.onLabelEvent(t.scheme))), this._register(this.fileService.onDidChangeFileSystemProviderCapabilities((t)=>this.onLabelEvent(t.scheme))), this._register(this.customEditorLabelService.onDidChange(()=>this.updateLabel())), this._register(this.filesConfigurationService.onDidChangeReadonly(()=>this._onDidChangeCapabilities.fire()));
    }
    onLabelEvent(t) {
        t === this._preferredResource.scheme && this.updateLabel();
    }
    updateLabel() {
        this._name = void 0, this._shortDescription = void 0, this._mediumDescription = void 0, this._longDescription = void 0, this._shortTitle = void 0, this._mediumTitle = void 0, this._longTitle = void 0, this._onDidChangeLabel.fire();
    }
    setPreferredResource(t) {
        gu(t, this._preferredResource) || (this._preferredResource = t, this.updateLabel());
    }
    getName() {
        return typeof this._name != "string" && (this._name = this.customEditorLabelService.getName(this._preferredResource) ?? this.labelService.getUriBasenameLabel(this._preferredResource)), this._name;
    }
    getDescription(t = 1) {
        switch(t){
            case 0:
                return this.shortDescription;
            case 2:
                return this.longDescription;
            case 1:
            default:
                return this.mediumDescription;
        }
    }
    get shortDescription() {
        return typeof this._shortDescription != "string" && (this._shortDescription = this.labelService.getUriBasenameLabel(Mc(this._preferredResource))), this._shortDescription;
    }
    get mediumDescription() {
        return typeof this._mediumDescription != "string" && (this._mediumDescription = this.labelService.getUriLabel(Mc(this._preferredResource), {
            relative: !0
        })), this._mediumDescription;
    }
    get longDescription() {
        return typeof this._longDescription != "string" && (this._longDescription = this.labelService.getUriLabel(Mc(this._preferredResource))), this._longDescription;
    }
    get shortTitle() {
        return typeof this._shortTitle != "string" && (this._shortTitle = this.getName()), this._shortTitle;
    }
    get mediumTitle() {
        return typeof this._mediumTitle != "string" && (this._mediumTitle = this.labelService.getUriLabel(this._preferredResource, {
            relative: !0
        })), this._mediumTitle;
    }
    get longTitle() {
        return typeof this._longTitle != "string" && (this._longTitle = this.labelService.getUriLabel(this._preferredResource)), this._longTitle;
    }
    getTitle(t) {
        switch(t){
            case 0:
                return this.shortTitle;
            case 2:
                return this.longTitle;
            default:
            case 1:
                return this.mediumTitle;
        }
    }
    isReadonly() {
        return this.filesConfigurationService.isReadonly(this.resource);
    }
    ensureLimits(t) {
        if (t?.limits) return t.limits;
        const e = Sed(this.resource);
        let n;
        const i = this.textResourceConfigurationService.inspect(this.resource, null, "workbench.editorLargeFileConfirmation");
        return xJn(i) && (n = i.value * Sx.MB), {
            size: n ?? e
        };
    }
}, GIi = Re([
    F(2, Yp),
    F(3, is),
    F(4, fT),
    F(5, Mw),
    F(6, OCe)
], GIi);

}
