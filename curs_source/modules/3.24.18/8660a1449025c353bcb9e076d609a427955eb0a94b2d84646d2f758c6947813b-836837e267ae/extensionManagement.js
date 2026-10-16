import { At, Di } from "./Iwo.js";
import { jn } from "./SZu.js";
import { It } from "./instantiation.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
var CGt, TGt, Kja, yXr, J6e, Xki, Yja, NCm, XD, Zki, Xja, LB, yL, pCt, Zja, QTn, LCm, Kae, OCm, tU1, Qja, Jja, EGt, e$a;
export { CGt, EGt, J6e, Jja, Kae, Kja, LB, LCm, NCm, OCm, QTn, Qja, TGt, XD, Xja, Xki, Yja, Zja, Zki, e$a, pCt, tU1, yL, yXr };
var __wakaru_jy_initialized = false;
export function jy() {
if (__wakaru_jy_initialized) return;
__wakaru_jy_initialized = true;
"use strict";
E(), Di(), Bt(), It(), CGt = "^([a-z0-9A-Z][a-z0-9-A-Z]*)\\.([a-z0-9A-Z][a-z0-9-A-Z]*)$", TGt = new RegExp(CGt), Kja = "__web_extension", yXr = "skipWalkthrough", J6e = "skipPublisherTrust", Xki = "extensionInstallSource", Yja = "dependecyOrPackExtensionInstall", NCm = "clientTargetPlatform", XD = jn("extensionGalleryService"), Zki = class extends Error {
    constructor(t, e){
        super(t), this.code = e, this.name = e;
    }
}, Xja = ((t)=>(t.NotFound = "NotFound", t.Unsupported = "Unsupported", t.Deprecated = "Deprecated", t.Malicious = "Malicious", t.Incompatible = "Incompatible", t.IncompatibleApi = "IncompatibleApi", t.IncompatibleTargetPlatform = "IncompatibleTargetPlatform", t.ReleaseVersionNotFound = "ReleaseVersionNotFound", t.Invalid = "Invalid", t.Download = "Download", t.DownloadSignature = "DownloadSignature", t.DownloadFailedWriting = "DownloadFailedWriting", t.UpdateMetadata = "UpdateMetadata", t.Extract = "Extract", t.Scanning = "Scanning", t.ScanningExtension = "ScanningExtension", t.ReadRemoved = "ReadRemoved", t.UnsetRemoved = "UnsetRemoved", t.Delete = "Delete", t.Rename = "Rename", t.IntializeDefaultProfile = "IntializeDefaultProfile", t.AddToProfile = "AddToProfile", t.InstalledExtensionNotFound = "InstalledExtensionNotFound", t.PostInstall = "PostInstall", t.CorruptZip = "CorruptZip", t.IncompleteZip = "IncompleteZip", t.PackageNotSigned = "PackageNotSigned", t.SignatureVerificationInternal = "SignatureVerificationInternal", t.SignatureVerificationFailed = "SignatureVerificationFailed", t.NotAllowed = "NotAllowed", t.Gallery = "Gallery", t.Cancelled = "Cancelled", t.Unknown = "Unknown", t.Internal = "Internal", t))(Xja || {}), LB = class extends Error {
    constructor(t, e){
        super(t), this.code = e, this.name = e;
    }
}, yL = jn("extensionManagementService"), pCt = "extensionsIdentifiers/disabled", Zja = "extensionsIdentifiers/enabled", QTn = jn("IGlobalExtensionEnablementService"), LCm = jn("IExtensionTipsService"), Kae = jn("IAllowedExtensionsService"), OCm = At(1942, "Extensions"), tU1 = At(1943, "Preferences"), Qja = "extensions.gallery.useUnpkgResourceApi", Jja = "extensions.requestTimeout", EGt = "extensions.allowed", e$a = "extensions.installCooldownHours";

}
