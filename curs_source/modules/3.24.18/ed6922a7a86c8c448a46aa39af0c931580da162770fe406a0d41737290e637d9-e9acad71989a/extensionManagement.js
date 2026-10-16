import { Ae, jn } from "./HVr.js";
import { Ze } from "./instantiation.js";
import { rt } from "./nls.js";
import { vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var JJe, wkt, Tao, HGi, c1e, bNn, Eao, pFd, s0, uWt, xao, sF, WE, eet, Iao, dWt, WGi, P6, OD, Aao, Rao, Dao, Ckt, Mao;
export { Aao, Ckt, Dao, Eao, HGi, Iao, JJe, Mao, OD, P6, Rao, Tao, WE, WGi, bNn, c1e, dWt, eet, pFd, s0, sF, uWt, wkt, xao };
var __wakaru_Ug_initialized = false;
export function Ug() {
if (__wakaru_Ug_initialized) return;
__wakaru_Ug_initialized = true;
"use strict";
x(), jn(), rt(), Ze(), JJe = "^([a-z0-9A-Z][a-z0-9-A-Z]*)\\.([a-z0-9A-Z][a-z0-9-A-Z]*)$", wkt = new RegExp(JJe), Tao = "__web_extension", HGi = "skipWalkthrough", c1e = "skipPublisherTrust", bNn = "extensionInstallSource", Eao = "dependecyOrPackExtensionInstall", pFd = "clientTargetPlatform", s0 = vn("extensionGalleryService"), uWt = class extends Error {
    constructor(e, t){
        super(e), this.code = t, this.name = t;
    }
}, xao = ((e)=>(e.NotFound = "NotFound", e.Unsupported = "Unsupported", e.Deprecated = "Deprecated", e.Malicious = "Malicious", e.Incompatible = "Incompatible", e.IncompatibleApi = "IncompatibleApi", e.IncompatibleTargetPlatform = "IncompatibleTargetPlatform", e.ReleaseVersionNotFound = "ReleaseVersionNotFound", e.Invalid = "Invalid", e.Download = "Download", e.DownloadSignature = "DownloadSignature", e.DownloadFailedWriting = "DownloadFailedWriting", e.UpdateMetadata = "UpdateMetadata", e.Extract = "Extract", e.Scanning = "Scanning", e.ScanningExtension = "ScanningExtension", e.ReadRemoved = "ReadRemoved", e.UnsetRemoved = "UnsetRemoved", e.Delete = "Delete", e.Rename = "Rename", e.IntializeDefaultProfile = "IntializeDefaultProfile", e.AddToProfile = "AddToProfile", e.InstalledExtensionNotFound = "InstalledExtensionNotFound", e.PostInstall = "PostInstall", e.CorruptZip = "CorruptZip", e.IncompleteZip = "IncompleteZip", e.PackageNotSigned = "PackageNotSigned", e.SignatureVerificationInternal = "SignatureVerificationInternal", e.SignatureVerificationFailed = "SignatureVerificationFailed", e.NotAllowed = "NotAllowed", e.Gallery = "Gallery", e.Cancelled = "Cancelled", e.Unknown = "Unknown", e.Internal = "Internal", e))(xao || {}), sF = class extends Error {
    constructor(e, t){
        super(e), this.code = t, this.name = t;
    }
}, WE = vn("extensionManagementService"), eet = "extensionsIdentifiers/disabled", Iao = "extensionsIdentifiers/enabled", dWt = vn("IGlobalExtensionEnablementService"), WGi = vn("IExtensionTipsService"), P6 = vn("IAllowedExtensionsService"), OD = Ae(1942, "Extensions"), Aao = Ae(1943, "Preferences"), Rao = "extensions.gallery.useUnpkgResourceApi", Dao = "extensions.requestTimeout", Ckt = "extensions.allowed", Mao = "extensions.installCooldownHours";

}
