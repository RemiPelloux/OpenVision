import { Idw } from "./engine.mjs";
import { Adw } from "./env.mjs";
import { Exf } from "./os.mjs";
import { xdw } from "./screen-reader.mjs";
import { E } from "./tslib.es6.js";
var __wakaru_Rdw_initialized = false;
export function Rdw() {
if (__wakaru_Rdw_initialized) return;
__wakaru_Rdw_initialized = true;
E(), Exf(), Idw(), xdw(), Adw();

}
