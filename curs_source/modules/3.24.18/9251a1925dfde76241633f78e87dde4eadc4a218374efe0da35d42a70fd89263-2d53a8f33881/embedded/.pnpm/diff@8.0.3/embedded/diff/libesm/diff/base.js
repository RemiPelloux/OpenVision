var Diff;
export { Diff };
var __wakaru_init_base2_initialized = false;
export function init_base2() {
if (__wakaru_init_base2_initialized) return;
__wakaru_init_base2_initialized = true;
Diff = class {
    diff(oldStr, newStr, options2 = {}) {
        let callback;
        if (typeof options2 === "function") {
            callback = options2;
            options2 = {};
        } else if ("callback" in options2) {
            callback = options2.callback;
        }
        const oldString = this.castInput(oldStr, options2);
        const newString = this.castInput(newStr, options2);
        const oldTokens = this.removeEmpty(this.tokenize(oldString, options2));
        const newTokens = this.removeEmpty(this.tokenize(newString, options2));
        return this.diffWithOptionsObj(oldTokens, newTokens, options2, callback);
    }
    diffWithOptionsObj(oldTokens, newTokens, options2, callback) {
        var _a18;
        const done = (value)=>{
            value = this.postProcess(value, options2);
            if (callback) {
                setTimeout(function() {
                    callback(value);
                }, 0);
                return void 0;
            } else {
                return value;
            }
        };
        const newLen = newTokens.length, oldLen = oldTokens.length;
        let editLength = 1;
        let maxEditLength = newLen + oldLen;
        if (options2.maxEditLength != null) {
            maxEditLength = Math.min(maxEditLength, options2.maxEditLength);
        }
        const maxExecutionTime = (_a18 = options2.timeout) !== null && _a18 !== void 0 ? _a18 : Infinity;
        const abortAfterTimestamp = Date.now() + maxExecutionTime;
        const bestPath = [
            {
                oldPos: -1,
                lastComponent: void 0
            }
        ];
        let newPos = this.extractCommon(bestPath[0], newTokens, oldTokens, 0, options2);
        if (bestPath[0].oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
            return done(this.buildValues(bestPath[0].lastComponent, newTokens, oldTokens));
        }
        let minDiagonalToConsider = -Infinity, maxDiagonalToConsider = Infinity;
        const execEditLength = ()=>{
            for(let diagonalPath = Math.max(minDiagonalToConsider, -editLength); diagonalPath <= Math.min(maxDiagonalToConsider, editLength); diagonalPath += 2){
                let basePath;
                const removePath = bestPath[diagonalPath - 1], addPath = bestPath[diagonalPath + 1];
                if (removePath) {
                    bestPath[diagonalPath - 1] = void 0;
                }
                let canAdd = false;
                if (addPath) {
                    const addPathNewPos = addPath.oldPos - diagonalPath;
                    canAdd = addPath && 0 <= addPathNewPos && addPathNewPos < newLen;
                }
                const canRemove = removePath && removePath.oldPos + 1 < oldLen;
                if (!canAdd && !canRemove) {
                    bestPath[diagonalPath] = void 0;
                    continue;
                }
                if (!canRemove || canAdd && removePath.oldPos < addPath.oldPos) {
                    basePath = this.addToPath(addPath, true, false, 0, options2);
                } else {
                    basePath = this.addToPath(removePath, false, true, 1, options2);
                }
                newPos = this.extractCommon(basePath, newTokens, oldTokens, diagonalPath, options2);
                if (basePath.oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
                    return done(this.buildValues(basePath.lastComponent, newTokens, oldTokens)) || true;
                } else {
                    bestPath[diagonalPath] = basePath;
                    if (basePath.oldPos + 1 >= oldLen) {
                        maxDiagonalToConsider = Math.min(maxDiagonalToConsider, diagonalPath - 1);
                    }
                    if (newPos + 1 >= newLen) {
                        minDiagonalToConsider = Math.max(minDiagonalToConsider, diagonalPath + 1);
                    }
                }
            }
            editLength++;
        };
        if (callback) {
            (function exec2() {
                setTimeout(function() {
                    if (editLength > maxEditLength || Date.now() > abortAfterTimestamp) {
                        return callback(void 0);
                    }
                    if (!execEditLength()) {
                        exec2();
                    }
                }, 0);
            })();
        } else {
            while(editLength <= maxEditLength && Date.now() <= abortAfterTimestamp){
                const ret = execEditLength();
                if (ret) {
                    return ret;
                }
            }
        }
    }
    addToPath(path64, added, removed, oldPosInc, options2) {
        const last = path64.lastComponent;
        if (last && !options2.oneChangePerToken && last.added === added && last.removed === removed) {
            return {
                oldPos: path64.oldPos + oldPosInc,
                lastComponent: {
                    count: last.count + 1,
                    added,
                    removed,
                    previousComponent: last.previousComponent
                }
            };
        } else {
            return {
                oldPos: path64.oldPos + oldPosInc,
                lastComponent: {
                    count: 1,
                    added,
                    removed,
                    previousComponent: last
                }
            };
        }
    }
    extractCommon(basePath, newTokens, oldTokens, diagonalPath, options2) {
        const newLen = newTokens.length, oldLen = oldTokens.length;
        let oldPos = basePath.oldPos, newPos = oldPos - diagonalPath, commonCount = 0;
        while(newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(oldTokens[oldPos + 1], newTokens[newPos + 1], options2)){
            newPos++;
            oldPos++;
            commonCount++;
            if (options2.oneChangePerToken) {
                basePath.lastComponent = {
                    count: 1,
                    previousComponent: basePath.lastComponent,
                    added: false,
                    removed: false
                };
            }
        }
        if (commonCount && !options2.oneChangePerToken) {
            basePath.lastComponent = {
                count: commonCount,
                previousComponent: basePath.lastComponent,
                added: false,
                removed: false
            };
        }
        basePath.oldPos = oldPos;
        return newPos;
    }
    equals(left, right, options2) {
        if (options2.comparator) {
            return options2.comparator(left, right);
        } else {
            return left === right || !!options2.ignoreCase && left.toLowerCase() === right.toLowerCase();
        }
    }
    removeEmpty(array3) {
        const ret = [];
        for(let i = 0; i < array3.length; i++){
            if (array3[i]) {
                ret.push(array3[i]);
            }
        }
        return ret;
    }
    castInput(value, options2) {
        return value;
    }
    tokenize(value, options2) {
        return Array.from(value);
    }
    join(chars) {
        return chars.join("");
    }
    postProcess(changeObjects, options2) {
        return changeObjects;
    }
    get useLongestToken() {
        return false;
    }
    buildValues(lastComponent, newTokens, oldTokens) {
        const components = [];
        let nextComponent;
        while(lastComponent){
            components.push(lastComponent);
            nextComponent = lastComponent.previousComponent;
            delete lastComponent.previousComponent;
            lastComponent = nextComponent;
        }
        components.reverse();
        const componentLen = components.length;
        let componentPos = 0, newPos = 0, oldPos = 0;
        for(; componentPos < componentLen; componentPos++){
            const component = components[componentPos];
            if (!component.removed) {
                if (!component.added && this.useLongestToken) {
                    let value = newTokens.slice(newPos, newPos + component.count);
                    value = value.map(function(value2, i) {
                        const oldValue = oldTokens[oldPos + i];
                        return oldValue.length > value2.length ? oldValue : value2;
                    });
                    component.value = this.join(value);
                } else {
                    component.value = this.join(newTokens.slice(newPos, newPos + component.count));
                }
                newPos += component.count;
                if (!component.added) {
                    oldPos += component.count;
                }
            } else {
                component.value = this.join(oldTokens.slice(oldPos, oldPos + component.count));
                oldPos += component.count;
            }
        }
        return components;
    }
};

}
