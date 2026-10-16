import { init_errors } from "../../../../../../../external_exports.js";
import { init_en } from "../locales/en.js";
var makeIssue, EMPTY_PATH, ParseStatus, INVALID, DIRTY, OK, isAborted, isDirty, isValid, isAsync;
export { DIRTY, EMPTY_PATH, INVALID, OK, ParseStatus, isAborted, isAsync, isDirty, isValid, makeIssue };
var __wakaru_init_parseUtil_initialized = false;
export function init_parseUtil() {
if (__wakaru_init_parseUtil_initialized) return;
__wakaru_init_parseUtil_initialized = true;
init_errors();
init_en();
makeIssue = (params)=>{
    const { data, path: path64, errorMaps, issueData } = params;
    const fullPath = [
        ...path64,
        ...issueData.path || []
    ];
    const fullIssue = {
        ...issueData,
        path: fullPath
    };
    if (issueData.message !== void 0) {
        return {
            ...issueData,
            path: fullPath,
            message: issueData.message
        };
    }
    let errorMessage4 = "";
    const maps = errorMaps.filter((m2)=>!!m2).slice().reverse();
    for (const map4 of maps){
        errorMessage4 = map4(fullIssue, {
            data,
            defaultError: errorMessage4
        }).message;
    }
    return {
        ...issueData,
        path: fullPath,
        message: errorMessage4
    };
};
EMPTY_PATH = [];
ParseStatus = class _ParseStatus {
    constructor(){
        this.value = "valid";
    }
    dirty() {
        if (this.value === "valid") this.value = "dirty";
    }
    abort() {
        if (this.value !== "aborted") this.value = "aborted";
    }
    static mergeArray(status, results) {
        const arrayValue = [];
        for (const s3 of results){
            if (s3.status === "aborted") return INVALID;
            if (s3.status === "dirty") status.dirty();
            arrayValue.push(s3.value);
        }
        return {
            status: status.value,
            value: arrayValue
        };
    }
    static async mergeObjectAsync(status, pairs2) {
        const syncPairs = [];
        for (const pair of pairs2){
            const key = await pair.key;
            const value = await pair.value;
            syncPairs.push({
                key,
                value
            });
        }
        return _ParseStatus.mergeObjectSync(status, syncPairs);
    }
    static mergeObjectSync(status, pairs2) {
        const finalObject = {};
        for (const pair of pairs2){
            const { key, value } = pair;
            if (key.status === "aborted") return INVALID;
            if (value.status === "aborted") return INVALID;
            if (key.status === "dirty") status.dirty();
            if (value.status === "dirty") status.dirty();
            if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
                finalObject[key.value] = value.value;
            }
        }
        return {
            status: status.value,
            value: finalObject
        };
    }
};
INVALID = Object.freeze({
    status: "aborted"
});
DIRTY = (value)=>({
        status: "dirty",
        value
    });
OK = (value)=>({
        status: "valid",
        value
    });
isAborted = (x)=>x.status === "aborted";
isDirty = (x)=>x.status === "dirty";
isValid = (x)=>x.status === "valid";
isAsync = (x)=>typeof Promise !== "undefined" && x instanceof Promise;

}
