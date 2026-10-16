import { ZNe } from "./index_55.js";
import { KMt } from "./index_56.js";
import { i } from "./plugin-brand-icon.js";
function eRt(r, e) {
    const a = ZNe(r);
    return !!(!e.options.resourceLink && r.url && !r.title && r.children && r.children.length === 1 && r.children[0].type === "text" && (a === r.url || "mailto:" + a === r.url) && /^[a-z][a-z+.-]+:/i.test(r.url) && !/[\0- <>\u007F]/.test(r.url));
}
export { eRt };
var __wakaru_s3i_initialized = false;
export function s3i() {
if (__wakaru_s3i_initialized) return;
__wakaru_s3i_initialized = true;
KMt(), i(eRt, "formatLinkAsAutolink");

}
