var $ = require("./module-6518.js");
var uncurryThis = require("./module-9504.js");
var iterate = require("./module-2652.js");
var $RangeError = RangeError;
var $TypeError = TypeError;
var $Infinity = Infinity;
var $NaN = NaN;
var abs = Math.abs;
var pow = Math.pow;
var push = uncurryThis([].push);
var POW_2_1023 = pow(2, 1023);
var MAX_SAFE_INTEGER = pow(2, 53) - 1;
var MAX_DOUBLE = Number.MAX_VALUE;
var MAX_ULP = pow(2, 971);
var NOT_A_NUMBER = {};
var MINUS_INFINITY = {};
var PLUS_INFINITY = {};
var MINUS_ZERO = {};
var FINITE = {};
var twosum = function(x, y) {
    var hi = x + y;
    var lo = y - (hi - x);
    return {
        hi,
        lo
    };
};
$({
    target: "Math",
    stat: true
}, {
    sumPrecise: function sumPrecise(items) {
        var numbers = [];
        var count = 0;
        var state = MINUS_ZERO;
        iterate(items, function(n2) {
            if (++count >= MAX_SAFE_INTEGER) throw new $RangeError("Maximum allowed index exceeded");
            if (typeof n2 != "number") throw new $TypeError("Value is not a number");
            if (state !== NOT_A_NUMBER) {
                if (n2 !== n2) state = NOT_A_NUMBER;
                else if (n2 === $Infinity) state = state === MINUS_INFINITY ? NOT_A_NUMBER : PLUS_INFINITY;
                else if (n2 === -$Infinity) state = state === PLUS_INFINITY ? NOT_A_NUMBER : MINUS_INFINITY;
                else if ((n2 !== 0 || 1 / n2 === $Infinity) && (state === MINUS_ZERO || state === FINITE)) {
                    state = FINITE;
                    push(numbers, n2);
                }
            }
        });
        switch(state){
            case NOT_A_NUMBER:
                return $NaN;
            case MINUS_INFINITY:
                return -$Infinity;
            case PLUS_INFINITY:
                return $Infinity;
            case MINUS_ZERO:
                return -0;
        }
        var partials = [];
        var overflow = 0;
        var x, y, sum, hi, lo, tmp;
        for(var i = 0; i < numbers.length; i++){
            x = numbers[i];
            var actuallyUsedPartials = 0;
            for(var j = 0; j < partials.length; j++){
                y = partials[j];
                if (abs(x) < abs(y)) {
                    tmp = x;
                    x = y;
                    y = tmp;
                }
                sum = twosum(x, y);
                hi = sum.hi;
                lo = sum.lo;
                if (abs(hi) === $Infinity) {
                    var sign = hi === $Infinity ? 1 : -1;
                    overflow += sign;
                    x = x - sign * POW_2_1023 - sign * POW_2_1023;
                    if (abs(x) < abs(y)) {
                        tmp = x;
                        x = y;
                        y = tmp;
                    }
                    sum = twosum(x, y);
                    hi = sum.hi;
                    lo = sum.lo;
                }
                if (lo !== 0) partials[actuallyUsedPartials++] = lo;
                x = hi;
            }
            partials.length = actuallyUsedPartials;
            if (x !== 0) push(partials, x);
        }
        var n = partials.length - 1;
        hi = 0;
        lo = 0;
        if (overflow !== 0) {
            var next = n >= 0 ? partials[n] : 0;
            n--;
            if (abs(overflow) > 1 || overflow > 0 && next > 0 || overflow < 0 && next < 0) {
                return overflow > 0 ? $Infinity : -$Infinity;
            }
            sum = twosum(overflow * POW_2_1023, next / 2);
            hi = sum.hi;
            lo = sum.lo;
            lo *= 2;
            if (abs(2 * hi) === $Infinity) {
                if (hi > 0) {
                    return hi === POW_2_1023 && lo === -(MAX_ULP / 2) && n >= 0 && partials[n] < 0 ? MAX_DOUBLE : $Infinity;
                }
                return hi === -POW_2_1023 && lo === MAX_ULP / 2 && n >= 0 && partials[n] > 0 ? -MAX_DOUBLE : -$Infinity;
            }
            if (lo !== 0) {
                partials[++n] = lo;
                lo = 0;
            }
            hi *= 2;
        }
        while(n >= 0){
            sum = twosum(hi, partials[n--]);
            hi = sum.hi;
            lo = sum.lo;
            if (lo !== 0) break;
        }
        if (n >= 0 && (lo < 0 && partials[n] < 0 || lo > 0 && partials[n] > 0)) {
            y = lo * 2;
            x = hi + y;
            if (y === x - hi) hi = x;
        }
        return hi;
    }
});
