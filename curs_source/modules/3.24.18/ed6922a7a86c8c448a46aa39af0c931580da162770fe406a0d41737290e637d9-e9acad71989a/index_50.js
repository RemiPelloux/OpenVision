import { x } from "./tslib.es6.js";
var mfs;
export { mfs };
var __wakaru_gfs_initialized = false;
export function gfs() {
if (__wakaru_gfs_initialized) return;
__wakaru_gfs_initialized = true;
x(), mfs = {}.hasOwnProperty;

}
