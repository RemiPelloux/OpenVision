import { E } from "./tslib.es6.js";
var Afi, rop;
export { Afi, rop };
var __wakaru_azS_initialized = false;
export function azS() {
if (__wakaru_azS_initialized) return;
__wakaru_azS_initialized = true;
E(), Afi = {
    fit: "contain",
    scale: 1,
    rotation: 0,
    offsetX: 0,
    offsetY: 0,
    originX: .5,
    originY: .5,
    worldWidth: 0,
    worldHeight: 0
}, rop = {
    none: 0,
    contain: 1,
    cover: 2
};

}
