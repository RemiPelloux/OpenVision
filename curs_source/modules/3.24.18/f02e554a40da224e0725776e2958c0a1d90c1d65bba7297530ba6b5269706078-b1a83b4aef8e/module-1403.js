"use strict";
const { tokenChars: n } = require("./module-6818.js");
module.exports = {
    parse: function(t) {
        const e = new Set;
        let r = -1, s = -1, i = 0;
        for(; i < t.length; i++){
            const o = t.charCodeAt(i);
            if (-1 === s && 1 === n[o]) -1 === r && (r = i);
            else if (0 === i || 32 !== o && 9 !== o) {
                if (44 !== o) throw new SyntaxError(`Unexpected character at index ${i}`);
                {
                    if (-1 === r) throw new SyntaxError(`Unexpected character at index ${i}`);
                    -1 === s && (s = i);
                    const n = t.slice(r, s);
                    if (e.has(n)) throw new SyntaxError(`The "${n}" subprotocol is duplicated`);
                    e.add(n), r = s = -1;
                }
            } else -1 === s && -1 !== r && (s = i);
        }
        if (-1 === r || -1 !== s) throw new SyntaxError("Unexpected end of input");
        const o = t.slice(r, i);
        if (e.has(o)) throw new SyntaxError(`The "${o}" subprotocol is duplicated`);
        return e.add(o), e;
    }
};
