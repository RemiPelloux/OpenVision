const r = require(56970), { ResponseStatusCodeError: s } = require("./module-38238.js"), { chunksDecode: o } = require("./module-6564.js");
const n = (A)=>A.length > 15 && "/" === A[11] && "a" === A[0] && "p" === A[1] && "p" === A[2] && "l" === A[3] && "i" === A[4] && "c" === A[5] && "a" === A[6] && "t" === A[7] && "i" === A[8] && "o" === A[9] && "n" === A[10] && "j" === A[12] && "s" === A[13] && "o" === A[14] && "n" === A[15], i = (A)=>A.length > 4 && "/" === A[4] && "t" === A[0] && "e" === A[1] && "x" === A[2] && "t" === A[3];
module.exports = {
    getResolveErrorBodyCallback: async function({ callback: A, body: e, contentType: t, statusCode: a, statusMessage: Q, headers: g }) {
        r(e);
        let E = [], B = 0;
        try {
            for await (const A of e)if (E.push(A), B += A.length, B > 131072) {
                E = [], B = 0;
                break;
            }
        } catch  {
            E = [], B = 0;
        }
        const c = `Response status code ${a}${Q ? `: ${Q}` : ""}`;
        if (204 === a || !t || !B) return void queueMicrotask(()=>A(new s(c, a, g)));
        const I = Error.stackTraceLimit;
        let C;
        Error.stackTraceLimit = 0;
        try {
            n(t) ? C = JSON.parse(o(E, B)) : i(t) && (C = o(E, B));
        } catch  {} finally{
            Error.stackTraceLimit = I;
        }
        queueMicrotask(()=>A(new s(c, a, g, C)));
    },
    isContentTypeApplicationJson: n,
    isContentTypeText: i
};
