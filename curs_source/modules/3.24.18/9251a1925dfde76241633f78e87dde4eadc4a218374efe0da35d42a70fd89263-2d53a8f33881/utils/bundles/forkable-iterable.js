import { createWritableIterable } from "../../dist_exports.js";
import { init_writable_iterable } from "./writable-iterable.js";
var ForkableIterable;
export { ForkableIterable };
var __wakaru_init_forkable_iterable_initialized = false;
export function init_forkable_iterable() {
if (__wakaru_init_forkable_iterable_initialized) return;
__wakaru_init_forkable_iterable_initialized = true;
"use strict";
init_writable_iterable();
ForkableIterable = class {
    constructor(source){
        this.source = source;
        this.pastElements = [];
        this.closed = false;
        this.forks = new Set();
        void this.consume();
    }
    async consume() {
        try {
            for await (const element of this.source){
                this.pastElements.push(element);
                const writePromises = [];
                for (const fork of this.forks){
                    writePromises.push(fork.write(element).catch(()=>{}));
                }
                await Promise.allSettled(writePromises);
            }
        } catch (error3) {
            this.error = error3 instanceof Error ? error3 : new Error(String(error3));
        } finally{
            this.closed = true;
            for (const fork of this.forks){
                if (this.error) {
                    fork.throw(this.error);
                } else {
                    fork.close();
                }
            }
            this.forks.clear();
        }
    }
    fork() {
        if (this.closed) {
            const pastElements2 = this.pastElements;
            const error3 = this.error;
            return (async function*() {
                for (const element of pastElements2){
                    yield element;
                }
                if (error3) {
                    throw error3;
                }
            })();
        }
        const fork = createWritableIterable();
        const pastElements = this.pastElements.slice();
        this.forks.add(fork);
        const self2 = this;
        return (async function*() {
            for (const element of pastElements){
                yield element;
            }
            try {
                for await (const element of fork){
                    yield element;
                }
            } finally{
                self2.forks.delete(fork);
            }
        })();
    }
};

}
