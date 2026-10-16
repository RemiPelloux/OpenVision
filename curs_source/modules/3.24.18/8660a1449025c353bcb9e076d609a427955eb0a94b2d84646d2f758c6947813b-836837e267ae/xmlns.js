import { Wbn, cmh } from "./LYd.js";
import { umh } from "./case-insensitive-transform.js";
import { Gbn } from "./create.js";
import { E } from "./tslib.es6.js";
var fia;
export { fia };
var __wakaru_Hqy_initialized = false;
export function Hqy() {
if (__wakaru_Hqy_initialized) return;
__wakaru_Hqy_initialized = true;
E(), Gbn(), umh(), fia = Wbn({
    attributes: {
        xmlnsxlink: "xmlns:xlink"
    },
    properties: {
        xmlnsXLink: null,
        xmlns: null
    },
    space: "xmlns",
    transform: cmh
});

}
