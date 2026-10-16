import { init_dist } from "../../../../context/dist/index.js";
import { init_dist3 } from "../../../../utils/dist/index.js";
var TRANSPORT_DEFAULT_PORTS;
export { TRANSPORT_DEFAULT_PORTS };
var __wakaru_init_repository_resolver_initialized = false;
export function init_repository_resolver() {
if (__wakaru_init_repository_resolver_initialized) return;
__wakaru_init_repository_resolver_initialized = true;
"use strict";
init_dist();
init_dist3();
TRANSPORT_DEFAULT_PORTS = {
    ssh: "22",
    git: "9418"
};

}
