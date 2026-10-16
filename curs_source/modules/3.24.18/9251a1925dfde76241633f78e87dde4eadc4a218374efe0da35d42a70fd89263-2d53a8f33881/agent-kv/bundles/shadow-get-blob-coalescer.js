var PROJECTED_MAX_BATCH_ITEMS, NoDelayGetBlobShadowCoalescer;
export { NoDelayGetBlobShadowCoalescer, PROJECTED_MAX_BATCH_ITEMS };
var __wakaru_init_shadow_get_blob_coalescer_initialized = false;
export function init_shadow_get_blob_coalescer() {
if (__wakaru_init_shadow_get_blob_coalescer_initialized) return;
__wakaru_init_shadow_get_blob_coalescer_initialized = true;
"use strict";
PROJECTED_MAX_BATCH_ITEMS = 32;
NoDelayGetBlobShadowCoalescer = class {
    constructor(){
        this.sealedEligibleRemoteGetCount = 0;
        this.sealedBatchWidthMax = 0;
        this.sealedProjectedPostCount = 0;
        this.openBatchWidth = 0;
        this.sealScheduled = false;
    }
    observe() {
        this.openBatchWidth++;
        if (this.sealScheduled) {
            return;
        }
        this.sealScheduled = true;
        queueMicrotask(()=>{
            this.sealOpenBatch();
        });
    }
    getSnapshot() {
        const eligibleRemoteGetCount = this.sealedEligibleRemoteGetCount + this.openBatchWidth;
        const projectedPostCount = this.sealedProjectedPostCount + (this.openBatchWidth > 0 ? Math.ceil(this.openBatchWidth / PROJECTED_MAX_BATCH_ITEMS) : 0);
        return {
            eligibleRemoteGetCount,
            batchWidthMax: Math.max(this.sealedBatchWidthMax, this.openBatchWidth),
            projectedPostCount
        };
    }
    sealOpenBatch() {
        const width = this.openBatchWidth;
        this.openBatchWidth = 0;
        this.sealScheduled = false;
        if (width === 0) {
            return;
        }
        this.sealedEligibleRemoteGetCount += width;
        this.sealedBatchWidthMax = Math.max(this.sealedBatchWidthMax, width);
        this.sealedProjectedPostCount += Math.ceil(width / PROJECTED_MAX_BATCH_ITEMS);
    }
};

}
