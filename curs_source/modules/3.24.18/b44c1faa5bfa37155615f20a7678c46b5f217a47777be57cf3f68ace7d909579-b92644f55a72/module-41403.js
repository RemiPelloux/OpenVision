"use strict";
const { tokenChars: n } = require("./module-16818.js");
module.exports = {
    parse: function(e) {
        const t = new Set;
        let r = -1, s = -1, o = 0;
        for(; o < e.length; o++){
            const i = e.charCodeAt(o);
            if (-1 === s && 1 === n[i]) -1 === r && (r = o);
            else if (0 === o || 32 !== i && 9 !== i) {
                if (44 !== i) throw new SyntaxError(`Unexpected character at index ${o}`);
                {
                    if (-1 === r) throw new SyntaxError(`Unexpected character at index ${o}`);
                    -1 === s && (s = o);
                    const n = e.slice(r, s);
                    if (t.has(n)) throw new SyntaxError(`The "${n}" subprotocol is duplicated`);
                    t.add(n), r = s = -1;
                }
            } else -1 === s && -1 !== r && (s = o);
        }
        if (-1 === r || -1 !== s) throw new SyntaxError("Unexpected end of input");
        const i = e.slice(r, o);
        if (t.has(i)) throw new SyntaxError(`The "${i}" subprotocol is duplicated`);
        return t.add(i), t;
    }
};
