import { tha } from "./decode_2.js";
import { omS } from "./encode.js";
import { nha } from "./escape_2.js";
import { E } from "./tslib.es6.js";
var yNh, SNh;
export { SNh, yNh };
var __wakaru_amS_initialized = false;
export function amS() {
if (__wakaru_amS_initialized) return;
__wakaru_amS_initialized = true;
E(), tha(), tha(), omS(), nha(), nha(), (function(t) {
    t[t.XML = 0] = "XML", t[t.HTML = 1] = "HTML";
})(yNh || (yNh = {})), (function(t) {
    t[t.UTF8 = 0] = "UTF8", t[t.ASCII = 1] = "ASCII", t[t.Extensive = 2] = "Extensive", t[t.Attribute = 3] = "Attribute", t[t.Text = 4] = "Text";
})(SNh || (SNh = {}));

}
