import { h } from "./tslib.es6.js";
var F_e, W_e;
export { F_e, W_e };
var __wakaru_utt_initialized = false;
export function utt() {
if (__wakaru_utt_initialized) return;
__wakaru_utt_initialized = true;
"use strict";
h(), F_e = 300 * 1e3, W_e = class {
    setUploadUrl(e, t) {
        if (!this.allowsAutomaticDebuggingData()) return "privacyModeNotKnownOff";
        const n = Number(e.searchParams.get("X-Amz-Expires"));
        return !Number.isInteger(n) || n <= 0 ? "noLifetime" : (this._entry = {
            url: e.toString(),
            expiresAtMs: t + n * 1e3
        }, "stored");
    }
    clearUploadUrl() {
        this._entry = void 0;
    }
    setPrivacyModeEnabled(e) {
        this._isPrivacyModeEnabled = e, this._dropUrlUnlessAllowed();
    }
    setLegacyPrivacyMode(e) {
        this._isLegacyPrivacyMode = e, this._dropUrlUnlessAllowed();
    }
    allowsAutomaticDebuggingData() {
        return this._isPrivacyModeEnabled === !1 && this._isLegacyPrivacyMode === !1;
    }
    _dropUrlUnlessAllowed() {
        this.allowsAutomaticDebuggingData() || (this._entry = void 0);
    }
    uploadUrl(e) {
        return !this.allowsAutomaticDebuggingData() || this._entry === void 0 || e >= this._entry.expiresAtMs - F_e ? null : this._entry.url;
    }
};

}
