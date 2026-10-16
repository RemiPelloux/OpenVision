"use strict";
const r = require("./module-47510.js"), s = require("./module-3685.js");
module.exports = class extends r {
    #d = null;
    #f = null;
    constructor(A, e = {}){
        super(e), this.#d = A, this.#f = e;
    }
    dispatch(A, e) {
        const t = new s({
            ...A,
            retryOptions: this.#f
        }, {
            dispatch: this.#d.dispatch.bind(this.#d),
            handler: e
        });
        return this.#d.dispatch(A, t);
    }
    close() {
        return this.#d.close();
    }
    destroy() {
        return this.#d.destroy();
    }
};
