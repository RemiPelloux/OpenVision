import { require_constants9 } from "./constants.js";
var __wakaru_require_tree_cache;
export function require_tree() {
if (__wakaru_require_tree_cache) return __wakaru_require_tree_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_tree_cache = module2;
"use strict";
var { wellknownHeaderNames, headerNameLowerCasedRecord } = require_constants9();
var TstNode = class _TstNode {
    value = null;
    left = null;
    middle = null;
    right = null;
    code;
    constructor(key, value, index){
        if (index === void 0 || index >= key.length) {
            throw new TypeError("Unreachable");
        }
        const code = this.code = key.charCodeAt(index);
        if (code > 127) {
            throw new TypeError("key must be ascii string");
        }
        if (key.length !== ++index) {
            this.middle = new _TstNode(key, value, index);
        } else {
            this.value = value;
        }
    }
    add(key, value) {
        const length = key.length;
        if (length === 0) {
            throw new TypeError("Unreachable");
        }
        let index = 0;
        let node = this;
        while(true){
            const code = key.charCodeAt(index);
            if (code > 127) {
                throw new TypeError("key must be ascii string");
            }
            if (node.code === code) {
                if (length === ++index) {
                    node.value = value;
                    break;
                } else if (node.middle !== null) {
                    node = node.middle;
                } else {
                    node.middle = new _TstNode(key, value, index);
                    break;
                }
            } else if (node.code < code) {
                if (node.left !== null) {
                    node = node.left;
                } else {
                    node.left = new _TstNode(key, value, index);
                    break;
                }
            } else if (node.right !== null) {
                node = node.right;
            } else {
                node.right = new _TstNode(key, value, index);
                break;
            }
        }
    }
    search(key) {
        const keylength = key.length;
        let index = 0;
        let node = this;
        while(node !== null && index < keylength){
            let code = key[index];
            if (code <= 90 && code >= 65) {
                code |= 32;
            }
            while(node !== null){
                if (code === node.code) {
                    if (keylength === ++index) {
                        return node;
                    }
                    node = node.middle;
                    break;
                }
                node = node.code < code ? node.left : node.right;
            }
        }
        return null;
    }
};
var TernarySearchTree = class {
    node = null;
    insert(key, value) {
        if (this.node === null) {
            this.node = new TstNode(key, value, 0);
        } else {
            this.node.add(key, value);
        }
    }
    lookup(key) {
        return this.node?.search(key)?.value ?? null;
    }
};
var tree = new TernarySearchTree();
for(let i = 0; i < wellknownHeaderNames.length; ++i){
    const key = headerNameLowerCasedRecord[wellknownHeaderNames[i]];
    tree.insert(key, key);
}
module2.exports = {
    TernarySearchTree,
    tree
};

return module2.exports;
}
