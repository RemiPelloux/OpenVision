"use strict";
const { WebsocketFrameSend: r } = require("./module-35553.js"), { opcodes: s, sendHints: o } = require("./module-30229.js"), n = require("./module-50423.js"), i = Buffer[Symbol.species];
function a(A, e) {
    return new r(function(A, e) {
        switch(e){
            case o.string:
                return Buffer.from(A);
            case o.arrayBuffer:
            case o.blob:
                return new i(A);
            case o.typedArray:
                return new i(A.buffer, A.byteOffset, A.byteLength);
        }
    }(A, e)).createFrame(e === o.string ? s.TEXT : s.BINARY);
}
module.exports = {
    SendQueue: class {
        #q = new n;
        #Z = !1;
        #z;
        constructor(A){
            this.#z = A;
        }
        add(A, e, t) {
            if (t !== o.blob) {
                const r = a(A, t);
                if (this.#Z) {
                    const A = {
                        promise: null,
                        callback: e,
                        frame: r
                    };
                    this.#q.push(A);
                } else this.#z.write(r, e);
                return;
            }
            const r = {
                promise: A.arrayBuffer().then((A)=>{
                    r.promise = null, r.frame = a(A, t);
                }),
                callback: e,
                frame: null
            };
            this.#q.push(r), this.#Z || this.#K();
        }
        async #K() {
            this.#Z = !0;
            const A = this.#q;
            for(; !A.isEmpty();){
                const e = A.shift();
                null !== e.promise && await e.promise, this.#z.write(e.frame, e.callback), e.callback = e.frame = null;
            }
            this.#Z = !1;
        }
    }
};
