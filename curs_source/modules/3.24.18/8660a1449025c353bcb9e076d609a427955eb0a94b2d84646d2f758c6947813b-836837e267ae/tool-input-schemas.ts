import { iv } from "./index_16.js";
import { E } from "./tslib.es6.js";
import { ze } from "./ze.js";
var F2, u2t, Sic, G3v, q3v, z3v, V3v, K3v, Y3v, X3v, Z3v, Q3v, J3v;
export { F2, G3v, J3v, K3v, Q3v, Sic, V3v, X3v, Y3v, Z3v, q3v, u2t, z3v };
var __wakaru_F50_initialized = false;
export function F50() {
if (__wakaru_F50_initialized) return;
__wakaru_F50_initialized = true;
"use strict";
E(), iv(), F2 = ze.string().optional(), u2t = ze.union([
    ze.number(),
    ze.string()
]).optional(), Sic = ze.boolean().optional(), G3v = ze.object({
    command: F2
}).catch(()=>({})), q3v = ze.object({
    pattern: F2,
    path: F2,
    glob: F2,
    output_mode: F2,
    type: F2,
    "-A": u2t,
    "-B": u2t,
    "-C": u2t,
    head_limit: u2t,
    offset: u2t,
    "-i": Sic,
    multiline: Sic
}).catch(()=>({})), z3v = ze.object({
    file_path: F2,
    path: F2,
    target_file: F2,
    offset: u2t,
    limit: u2t
}).catch(()=>({})), V3v = ze.object({
    file_path: F2,
    path: F2,
    target_file: F2,
    content: F2,
    file_text: F2
}).catch(()=>({})), K3v = ze.object({
    file_path: F2,
    path: F2,
    target_file: F2,
    old_string: F2,
    new_string: F2
}).catch(()=>({})), Y3v = ze.object({
    old_string: F2,
    new_string: F2
}), X3v = ze.object({
    file_path: F2,
    path: F2,
    target_file: F2,
    edits: ze.array(Y3v).optional()
}).catch(()=>({})), Z3v = ze.object({
    url: F2
}).catch(()=>({})), Q3v = ze.object({
    query: F2,
    search_term: F2,
    q: F2
}).catch(()=>({})), J3v = ze.object({
    pattern: F2,
    glob_pattern: F2,
    glob: F2,
    path: F2,
    target_directory: F2
}).catch(()=>({}));

}
