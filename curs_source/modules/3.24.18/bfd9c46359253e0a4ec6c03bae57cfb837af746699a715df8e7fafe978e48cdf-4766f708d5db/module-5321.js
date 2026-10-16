"use strict";
var n = require("./module-77454.js");
module.exports = new n("tag:yaml.org,2002:merge", {
    kind: "scalar",
    resolve: function(e) {
        return "<<" === e || null === e;
    }
});
