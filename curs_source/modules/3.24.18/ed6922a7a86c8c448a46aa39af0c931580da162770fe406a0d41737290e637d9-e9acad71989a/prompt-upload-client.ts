import { hm } from "./background_composer_pb.js";
import { Yu } from "./browser.ts";
import { x } from "./tslib.es6.js";
var tjd, njd, ijd, l2n;
export { ijd, l2n, njd, tjd };
var __wakaru_wxv_initialized = false;
export function wxv() {
if (__wakaru_wxv_initialized) return;
__wakaru_wxv_initialized = true;
"use strict";
x(), hm(), Yu(), tjd = "cloud_agent_prompt_upload_presign", njd = 4, ijd = 12e4, l2n = class extends Error {
    constructor(e, t){
        super(e, t?.cause === void 0 ? void 0 : {
            cause: t.cause
        }), this.name = "PromptUploadError", this.filename = t?.filename, this.uploadId = t?.uploadId, this.s3UploadId = t?.s3UploadId;
    }
};

}
