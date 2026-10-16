"use strict";
const e = 2047;
class t {
    constructor(){
        this.bottom = 0, this.top = 0, this.list = new Array(2048), this.next = null;
    }
    isEmpty() {
        return this.top === this.bottom;
    }
    isFull() {
        return (this.top + 1 & e) === this.bottom;
    }
    push(A) {
        this.list[this.top] = A, this.top = this.top + 1 & e;
    }
    shift() {
        const A = this.list[this.bottom];
        return void 0 === A ? null : (this.list[this.bottom] = void 0, this.bottom = this.bottom + 1 & e, A);
    }
}
module.exports = class {
    constructor(){
        this.head = this.tail = new t;
    }
    isEmpty() {
        return this.head.isEmpty();
    }
    push(A) {
        this.head.isFull() && (this.head = this.head.next = new t), this.head.push(A);
    }
    shift() {
        const A = this.tail, e = A.shift();
        return A.isEmpty() && null !== A.next && (this.tail = A.next), e;
    }
};
