import { formatMissingBlobSuffix } from "../../dist_exports.js";
var CONVERSATION_DATA_MISSING_MESSAGE, MAX_MESSAGE_BLOB_ID_HEXES, MESSAGE_BLOB_ID_HEX_LENGTH, BlobNotFoundError, MAX_CAUSE_CHAIN_DEPTH;
export { BlobNotFoundError, CONVERSATION_DATA_MISSING_MESSAGE, MAX_CAUSE_CHAIN_DEPTH, MAX_MESSAGE_BLOB_ID_HEXES, MESSAGE_BLOB_ID_HEX_LENGTH };
var __wakaru_init_blob_not_found_error_initialized = false;
export function init_blob_not_found_error() {
if (__wakaru_init_blob_not_found_error_initialized) return;
__wakaru_init_blob_not_found_error_initialized = true;
"use strict";
CONVERSATION_DATA_MISSING_MESSAGE = "This conversation's data is missing and can't be restored. Start a new chat to continue.";
MAX_MESSAGE_BLOB_ID_HEXES = 3;
MESSAGE_BLOB_ID_HEX_LENGTH = 12;
BlobNotFoundError = class extends Error {
    constructor(blobIdHexes, options2){
        super(`${CONVERSATION_DATA_MISSING_MESSAGE}${formatMissingBlobSuffix(blobIdHexes)}`, options2?.cause !== void 0 ? {
            cause: options2.cause
        } : void 0);
        this.isUsageError = true;
        this.isBlobNotFound = true;
        this.name = "BlobNotFoundError";
        this.blobIdHexes = [
            ...blobIdHexes
        ];
    }
};
MAX_CAUSE_CHAIN_DEPTH = 10;

}
