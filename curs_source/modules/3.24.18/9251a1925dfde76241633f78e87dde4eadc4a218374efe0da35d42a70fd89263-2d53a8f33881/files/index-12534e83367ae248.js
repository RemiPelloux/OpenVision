import { init_esm6 } from "../../../../../balanced-match@4.0.4/node_modules/balanced-match/dist/esm/index.js";
var escSlash, escOpen, escClose, escComma, escPeriod, escSlashPattern, escOpenPattern, escClosePattern, escCommaPattern, escPeriodPattern, slashPattern, openPattern, closePattern, commaPattern, periodPattern, EXPANSION_MAX, EXPANSION_MAX_LENGTH;
export { EXPANSION_MAX, EXPANSION_MAX_LENGTH, closePattern, commaPattern, escClose, escClosePattern, escComma, escCommaPattern, escOpen, escOpenPattern, escPeriod, escPeriodPattern, escSlash, escSlashPattern, openPattern, periodPattern, slashPattern };
var __wakaru_init_esm7_initialized = false;
export function init_esm7() {
if (__wakaru_init_esm7_initialized) return;
__wakaru_init_esm7_initialized = true;
init_esm6();
escSlash = "\0SLASH" + Math.random() + "\0";
escOpen = "\0OPEN" + Math.random() + "\0";
escClose = "\0CLOSE" + Math.random() + "\0";
escComma = "\0COMMA" + Math.random() + "\0";
escPeriod = "\0PERIOD" + Math.random() + "\0";
escSlashPattern = new RegExp(escSlash, "g");
escOpenPattern = new RegExp(escOpen, "g");
escClosePattern = new RegExp(escClose, "g");
escCommaPattern = new RegExp(escComma, "g");
escPeriodPattern = new RegExp(escPeriod, "g");
slashPattern = /\\\\/g;
openPattern = /\\{/g;
closePattern = /\\}/g;
commaPattern = /\\,/g;
periodPattern = /\\\./g;
EXPANSION_MAX = 1e5;
EXPANSION_MAX_LENGTH = 4e6;

}
