"use strict";
require.d(exports, {
    a: ()=>s
});
var n = require("./module-5289.js");
function s(e) {
    switch(e){
        case n.PrivacyMode.NO_STORAGE:
            return n.PrivacyMode.NO_STORAGE;
        case n.PrivacyMode.NO_TRAINING:
            return n.PrivacyMode.NO_TRAINING;
        case n.PrivacyMode.USAGE_DATA_TRAINING_ALLOWED:
            return n.PrivacyMode.USAGE_DATA_TRAINING_ALLOWED;
        case n.PrivacyMode.USAGE_CODEBASE_TRAINING_ALLOWED:
            return n.PrivacyMode.USAGE_CODEBASE_TRAINING_ALLOWED;
        default:
            return;
    }
}
