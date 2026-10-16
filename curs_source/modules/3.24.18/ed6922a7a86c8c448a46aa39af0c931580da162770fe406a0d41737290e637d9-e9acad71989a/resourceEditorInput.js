import { C, ie } from "./actions_2.js";
import { Cn } from "./configuration.js";
import { Gde, ooe } from "./customEditorLabelService.js";
import { H0, MA } from "./editorInput.js";
import { Fi, GT, Ii } from "./files.js";
import { $w, aE } from "./filesConfigurationService.js";
import { dc, yu } from "./label.js";
import { d2c, ign } from "./qIc.js";
import { Ac, Li, ml } from "./resources.js";
import { $v, M_ } from "./textResourceConfiguration.js";
import { x } from "./tslib.es6.js";
var hBn;
export { hBn };
var __wakaru_mMh_initialized = false;
export function mMh() {
if (__wakaru_mMh_initialized) return;
__wakaru_mMh_initialized = true;
"use strict";
x(), MA(), Fi(), yu(), Li(), aE(), Cn(), M_(), Gde(), hBn = class extends H0 {
    constructor(e, t, n, i, r, s, o){
        super(), this.resource = e, this.labelService = n, this.fileService = i, this.filesConfigurationService = r, this.textResourceConfigurationService = s, this.customEditorLabelService = o, this._name = void 0, this._shortDescription = void 0, this._mediumDescription = void 0, this._longDescription = void 0, this._shortTitle = void 0, this._mediumTitle = void 0, this._longTitle = void 0, this._preferredResource = t || e, this.registerListeners();
    }
    get capabilities() {
        let e = 32;
        return this.fileService.hasProvider(this.resource) ? this.filesConfigurationService.isReadonly(this.resource) && (e |= 2) : e |= 4, e & 2 || (e |= 128), e;
    }
    get preferredResource() {
        return this._preferredResource;
    }
    registerListeners() {
        this._register(this.labelService.onDidChangeFormatters((e)=>this.onLabelEvent(e.scheme))), this._register(this.fileService.onDidChangeFileSystemProviderRegistrations((e)=>this.onLabelEvent(e.scheme))), this._register(this.fileService.onDidChangeFileSystemProviderCapabilities((e)=>this.onLabelEvent(e.scheme))), this._register(this.customEditorLabelService.onDidChange(()=>this.updateLabel())), this._register(this.filesConfigurationService.onDidChangeReadonly(()=>this._onDidChangeCapabilities.fire()));
    }
    onLabelEvent(e) {
        e === this._preferredResource.scheme && this.updateLabel();
    }
    updateLabel() {
        this._name = void 0, this._shortDescription = void 0, this._mediumDescription = void 0, this._longDescription = void 0, this._shortTitle = void 0, this._mediumTitle = void 0, this._longTitle = void 0, this._onDidChangeLabel.fire();
    }
    setPreferredResource(e) {
        Ac(e, this._preferredResource) || (this._preferredResource = e, this.updateLabel());
    }
    getName() {
        return typeof this._name != "string" && (this._name = this.customEditorLabelService.getName(this._preferredResource) ?? this.labelService.getUriBasenameLabel(this._preferredResource)), this._name;
    }
    getDescription(e = 1) {
        switch(e){
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
        return typeof this._shortDescription != "string" && (this._shortDescription = this.labelService.getUriBasenameLabel(ml(this._preferredResource))), this._shortDescription;
    }
    get mediumDescription() {
        return typeof this._mediumDescription != "string" && (this._mediumDescription = this.labelService.getUriLabel(ml(this._preferredResource), {
            relative: !0
        })), this._mediumDescription;
    }
    get longDescription() {
        return typeof this._longDescription != "string" && (this._longDescription = this.labelService.getUriLabel(ml(this._preferredResource))), this._longDescription;
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
    getTitle(e) {
        switch(e){
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
    ensureLimits(e) {
        if (e?.limits) return e.limits;
        const t = d2c(this.resource);
        let n;
        const i = this.textResourceConfigurationService.inspect(this.resource, null, "workbench.editorLargeFileConfirmation");
        return ign(i) && (n = i.value * GT.MB), {
            size: n ?? t
        };
    }
}, hBn = ie([
    C(2, dc),
    C(3, Ii),
    C(4, $w),
    C(5, $v),
    C(6, ooe)
], hBn);

}
