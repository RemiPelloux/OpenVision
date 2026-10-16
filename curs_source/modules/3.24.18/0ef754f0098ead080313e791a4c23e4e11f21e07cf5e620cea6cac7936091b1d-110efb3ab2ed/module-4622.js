"use strict";
const a = 2047;
class n {
    constructor(){
        this.bottom = 0, this.top = 0, this.list = new Array(2048), this.next = null;
    }
    isEmpty() {
        return this.top === this.bottom;
    }
    isFull() {
        return (this.top + 1 & a) === this.bottom;
    }
    push(e) {
        this.list[this.top] = e, this.top = this.top + 1 & a;
    }
    shift() {
        const e = this.list[this.bottom];
        return void 0 === e ? null : (this.list[this.bottom] = void 0, this.bottom = this.bottom + 1 & a, e);
    }
}
module.exports = class {
    constructor(){
        this.head = this.tail = new n;
    }
    isEmpty() {
        return this.head.isEmpty();
    }
    push(e) {
        this.head.isFull() && (this.head = this.head.next = new n), this.head.push(e);
    }
    shift() {
        const e = this.tail, a = e.shift();
        return e.isEmpty() && null !== e.next && (this.tail = e.next), a;
    }
};
