"use strict";
const n = 2047;
class t {
    constructor(){
        this.bottom = 0, this.top = 0, this.list = new Array(2048), this.next = null;
    }
    isEmpty() {
        return this.top === this.bottom;
    }
    isFull() {
        return (this.top + 1 & n) === this.bottom;
    }
    push(e) {
        this.list[this.top] = e, this.top = this.top + 1 & n;
    }
    shift() {
        const e = this.list[this.bottom];
        return void 0 === e ? null : (this.list[this.bottom] = void 0, this.bottom = this.bottom + 1 & n, e);
    }
}
module.exports = class {
    constructor(){
        this.head = this.tail = new t;
    }
    isEmpty() {
        return this.head.isEmpty();
    }
    push(e) {
        this.head.isFull() && (this.head = this.head.next = new t), this.head.push(e);
    }
    shift() {
        const e = this.tail, n = e.shift();
        return e.isEmpty() && null !== e.next && (this.tail = e.next), n;
    }
};
