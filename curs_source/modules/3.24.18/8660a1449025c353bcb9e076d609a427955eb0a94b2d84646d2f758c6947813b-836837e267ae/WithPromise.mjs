import { E } from "./tslib.es6.js";
var JAs;
export { JAs };
var __wakaru_YYl_initialized = false;
export function YYl() {
if (__wakaru_YYl_initialized) return;
__wakaru_YYl_initialized = true;
E(), JAs = class {
    constructor(){
        this.updateFinished();
    }
    get finished() {
        return this._finished;
    }
    updateFinished() {
        this._finished = new Promise((t)=>{
            this.resolve = t;
        });
    }
    notifyFinished() {
        this.resolve();
    }
    then(t, e) {
        return this.finished.then(t, e);
    }
};

}
