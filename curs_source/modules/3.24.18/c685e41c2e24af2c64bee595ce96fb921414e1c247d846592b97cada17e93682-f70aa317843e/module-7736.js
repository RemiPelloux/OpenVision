let r = require("./module-7749.js"), n = require("./module-6446.js");
exports.process = function(t, e) {
    let i = [], s = new r(t);
    return new n(e, {
        read: s.read.bind(s),
        write: function(t) {
            i.push(t);
        },
        complete: function() {}
    }).start(), s.process(), Buffer.concat(i);
};
