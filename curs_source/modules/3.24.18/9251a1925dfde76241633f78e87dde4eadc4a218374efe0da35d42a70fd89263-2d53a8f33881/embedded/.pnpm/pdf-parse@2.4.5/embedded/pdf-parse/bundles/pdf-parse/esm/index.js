import { init_Exception } from "./Exception.js";
import { init_PDFParse } from "./PDFParse.js";
import { init_geometry } from "./geometry/index.js";
import { init_pdf } from "../../../../../../../../pdf_exports.js";
var __wakaru_init_esm21_initialized = false;
export function init_esm21() {
if (__wakaru_init_esm21_initialized) return;
__wakaru_init_esm21_initialized = true;
init_PDFParse();
init_pdf();
init_Exception();
init_geometry();

}
