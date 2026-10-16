import { Zu, si } from "./HVr.js";
import { dr } from "./arrays.js";
import { qa } from "./observable.js";
import { H7 } from "./platformObservableUtils.js";
import { ya } from "./position.js";
import { Sts } from "./positionToOffset.js";
import { $7 } from "./qIc.js";
import { dt, qi } from "./range.js";
import { yW } from "./textEdit.js";
import { x } from "./tslib.es6.js";
var Wwu, Gwu, Vwu;
export { Gwu, Vwu, Wwu };
var __wakaru_gRn_initialized = false;
export function gRn() {
if (__wakaru_gRn_initialized) return;
__wakaru_gRn_initialized = true;
"use strict";
x(), dr(), si(), qa(), H7(), ya(), Sts(), qi(), yW(), Wwu = [], Gwu = class {
    constructor(e, t){
        if (this.startColumn = e, this.endColumnExclusive = t, e > t) throw new Zu(`startColumn ${e} cannot be after endColumnExclusive ${t}`);
    }
    toRange(e) {
        return new dt(e, this.startColumn, e, this.endColumnExclusive);
    }
    equals(e) {
        return this.startColumn === e.startColumn && this.endColumnExclusive === e.endColumnExclusive;
    }
}, Vwu = class {
    constructor(e){
        this._contextKeyService = e;
    }
    bind(e, t) {
        return $7(e, this._contextKeyService, t instanceof Function ? t : (n)=>t.read(n));
    }
};

}
