import { Av, Zx } from "./configurationRegistry.js";
import { Q, ne } from "./instantiation.js";
import { Ne } from "./nls.js";
import { oe } from "./platform.js";
import { h } from "./tslib.es6.js";
function e4(e, t, ...n) {
    let r;
    typeof e == "number" ? r = Zx(e, t) : r = t;
    const s = Av(r, n);
    return {
        value: s,
        original: t === r ? s : Av(t, n)
    };
}
var Hme, HD, vze, ks, Tze, kze, Sze, yze, wze, Eze;
export { Eze, HD, Hme, Sze, Tze, e4, ks, kze, vze, wze, yze };
var __wakaru_Nw_initialized = false;
export function Nw() {
if (__wakaru_Nw_initialized) return;
__wakaru_Nw_initialized = true;
"use strict";
h(), oe(), Ne(), ne(), Hme = "^([a-z0-9A-Z][a-z0-9-A-Z]*)\\.([a-z0-9A-Z][a-z0-9-A-Z]*)$", HD = new RegExp(Hme), vze = Q("extensionGalleryService"), ks = ((e)=>(e.NotSigned = "NotSigned", e.Success = "Success", e.RequiredArgumentMissing = "RequiredArgumentMissing", e.InvalidArgument = "InvalidArgument", e.PackageIsUnreadable = "PackageIsUnreadable", e.UnhandledException = "UnhandledException", e.SignatureManifestIsMissing = "SignatureManifestIsMissing", e.SignatureManifestIsUnreadable = "SignatureManifestIsUnreadable", e.SignatureIsMissing = "SignatureIsMissing", e.SignatureIsUnreadable = "SignatureIsUnreadable", e.CertificateIsUnreadable = "CertificateIsUnreadable", e.SignatureArchiveIsUnreadable = "SignatureArchiveIsUnreadable", e.FileAlreadyExists = "FileAlreadyExists", e.SignatureArchiveIsInvalidZip = "SignatureArchiveIsInvalidZip", e.SignatureArchiveHasSameSignatureFile = "SignatureArchiveHasSameSignatureFile", e.PackageIntegrityCheckFailed = "PackageIntegrityCheckFailed", e.SignatureIsInvalid = "SignatureIsInvalid", e.SignatureManifestIsInvalid = "SignatureManifestIsInvalid", e.SignatureIntegrityCheckFailed = "SignatureIntegrityCheckFailed", e.EntryIsMissing = "EntryIsMissing", e.EntryIsTampered = "EntryIsTampered", e.Untrusted = "Untrusted", e.CertificateRevoked = "CertificateRevoked", e.SignatureIsNotValid = "SignatureIsNotValid", e.UnknownError = "UnknownError", e.PackageIsInvalidZip = "PackageIsInvalidZip", e.SignatureArchiveHasTooManyEntries = "SignatureArchiveHasTooManyEntries", e))(ks || {}), Tze = Q("extensionManagementService"), kze = Q("IGlobalExtensionEnablementService"), Sze = Q("IExtensionTipsService"), yze = Q("IAllowedExtensionsService"), wze = e4(1942, "Extensions"), Eze = e4(1943, "Preferences");

}
