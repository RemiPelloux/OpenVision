import { Zp } from "./A3u.js";
import { Nde } from "./externalTypes.js";
import { li } from "./network.js";
import { ba } from "./path_2.js";
import { x } from "./tslib.es6.js";
import { hu, kD } from "./utils_pb.js";
var Emo;
export { Emo };
var __wakaru_Fw_initialized = false;
export function Fw() {
if (__wakaru_Fw_initialized) return;
__wakaru_Fw_initialized = true;
"use strict";
x(), hu(), Nde(), li(), ba(), Emo = (e)=>e.range ? new kD({
        relativeWorkspacePath: e.relativeWorkspacePath,
        contents: e.contents,
        range: {
            startPosition: {
                line: Zp(e.range.startLineNumber),
                column: Zp(e.range.startColumn)
            },
            endPosition: {
                line: Zp(e.range.endLineNumber),
                column: Zp(e.range.endColumn)
            }
        }
    }) : new kD({
        relativeWorkspacePath: e.relativeWorkspacePath,
        contents: e.contents
    });

}
