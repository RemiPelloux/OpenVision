import { E } from "./tslib.es6.js";
var yjl, kKf;
export { kKf, yjl };
var __wakaru_w9w_initialized = false;
export function w9w() {
if (__wakaru_w9w_initialized) return;
__wakaru_w9w_initialized = true;
"use strict";
E(), yjl = 100, kKf = class {
    constructor(){
        this.undoLog = [], this.redoLog = [], this.pendingProgrammaticBodyChanges = 0;
    }
    recordBodyChange() {
        return this.pendingProgrammaticBodyChanges > 0 ? (this.pendingProgrammaticBodyChanges--, "suppressed") : (this.recordUserAction("body"), "recorded");
    }
    recordFrontmatterChange() {
        this.recordUserAction("frontmatter");
    }
    takeNext(t) {
        return (t === "undo" ? this.undoLog : this.redoLog).pop();
    }
    recordRoutedAction(t, e) {
        (t === "undo" ? this.redoLog : this.undoLog).push(e), e === "body" && this.pendingProgrammaticBodyChanges++;
    }
    restoreRoutedAction(t, e) {
        (t === "undo" ? this.undoLog : this.redoLog).push(e);
    }
    recordUserAction(t) {
        this.undoLog.push(t), this.undoLog.length > yjl && this.undoLog.splice(0, this.undoLog.length - yjl), this.redoLog.length = 0;
    }
};

}
