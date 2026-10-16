import { Fvt, Yo, adn, wf } from "./Iwo.js";
import { YE } from "./assert.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
var QZu, Fi;
export { Fi, QZu };
var __wakaru_Eo_initialized = false;
export function Eo() {
if (__wakaru_Eo_initialized) return;
__wakaru_Eo_initialized = true;
"use strict";
E(), YE(), To(), QZu = class {
    constructor(){
        this.data = new Map;
    }
    add(t, e) {
        adn(Yo(t)), adn(wf(e)), adn(!this.data.has(t), "There is already an extension with this id"), this.data.set(t, e);
    }
    knows(t) {
        return this.data.has(t);
    }
    as(t) {
        return this.data.get(t) || null;
    }
    dispose() {
        this.data.forEach((t)=>{
            Fvt(t.dispose) && t.dispose();
        }), this.data.clear();
    }
}, Fi = new QZu;

}
