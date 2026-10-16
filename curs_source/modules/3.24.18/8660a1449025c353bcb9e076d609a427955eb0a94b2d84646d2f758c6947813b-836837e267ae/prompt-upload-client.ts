import { pd } from "./background_composer_pb.js";
import { kl } from "./browser.ts";
import { E } from "./tslib.es6.js";
var HOm, WOm, GOm, Wwi;
export { GOm, HOm, WOm, Wwi };
var __wakaru_uj1_initialized = false;
export function uj1() {
if (__wakaru_uj1_initialized) return;
__wakaru_uj1_initialized = true;
"use strict";
E(), pd(), kl(), HOm = "cloud_agent_prompt_upload_presign", WOm = 4, GOm = 12e4, Wwi = class extends Error {
    constructor(t, e){
        super(t, e?.cause === void 0 ? void 0 : {
            cause: e.cause
        }), this.name = "PromptUploadError", this.filename = e?.filename, this.uploadId = e?.uploadId, this.s3UploadId = e?.s3UploadId;
    }
};

}
