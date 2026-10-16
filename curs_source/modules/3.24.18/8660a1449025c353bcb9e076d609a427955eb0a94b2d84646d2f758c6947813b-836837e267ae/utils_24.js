import { TCe } from "./externalTypes.js";
import { Ki } from "./network.js";
import { Ul } from "./path_2.js";
import { E } from "./tslib.es6.js";
import { Hu, rL } from "./utils_pb.js";
import { ff } from "./yBp.js";
var mYa;
export { mYa };
var __wakaru_gT_initialized = false;
export function gT() {
if (__wakaru_gT_initialized) return;
__wakaru_gT_initialized = true;
"use strict";
E(), Hu(), TCe(), Ki(), Ul(), mYa = (t)=>t.range ? new rL({
        relativeWorkspacePath: t.relativeWorkspacePath,
        contents: t.contents,
        range: {
            startPosition: {
                line: ff(t.range.startLineNumber),
                column: ff(t.range.startColumn)
            },
            endPosition: {
                line: ff(t.range.endLineNumber),
                column: ff(t.range.endColumn)
            }
        }
    }) : new rL({
        relativeWorkspacePath: t.relativeWorkspacePath,
        contents: t.contents
    });

}
