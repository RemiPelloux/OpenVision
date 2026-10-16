import { qIg, zRk } from "./chatHistoryMentionsHandler.js";
import { WIg, qRk } from "./cmdKDefinitionsMentionsHandler.js";
import { E } from "./tslib.es6.js";
var zIg;
export { zIg };
var __wakaru_VRk_initialized = false;
export function VRk() {
if (__wakaru_VRk_initialized) return;
__wakaru_VRk_initialized = true;
"use strict";
E(), qRk(), zRk(), zIg = {
    cmdKDefinitions: {
        typeaheadOption: WIg
    },
    chatHistory: {
        typeaheadOption: qIg
    }
};

}
