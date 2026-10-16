var powers = 0, boolean = increment(), booleanish = increment(), overloadedBoolean = increment(), number = increment(), spaceSeparated = increment(), commaSeparated = increment(), commaOrSpaceSeparated = increment();
function increment() {
    return 2 ** ++powers;
}
export { boolean, booleanish, commaOrSpaceSeparated, commaSeparated, number, overloadedBoolean, spaceSeparated };

export var types_exports = {};
Object.defineProperty(types_exports, "boolean", {
    enumerable: true,
    get: ()=>boolean
});
Object.defineProperty(types_exports, "booleanish", {
    enumerable: true,
    get: ()=>booleanish
});
Object.defineProperty(types_exports, "commaOrSpaceSeparated", {
    enumerable: true,
    get: ()=>commaOrSpaceSeparated
});
Object.defineProperty(types_exports, "commaSeparated", {
    enumerable: true,
    get: ()=>commaSeparated
});
Object.defineProperty(types_exports, "number", {
    enumerable: true,
    get: ()=>number
});
Object.defineProperty(types_exports, "overloadedBoolean", {
    enumerable: true,
    get: ()=>overloadedBoolean
});
Object.defineProperty(types_exports, "spaceSeparated", {
    enumerable: true,
    get: ()=>spaceSeparated
});
