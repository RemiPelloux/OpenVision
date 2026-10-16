var call = require("./module-9565.js");
module.exports = function(record, fn, ITERATOR_INSTEAD_OF_RECORD) {
    var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
    var next = record.next;
    var step, result;
    while(!(step = call(next, iterator)).done){
        result = fn(step.value);
        if (result !== void 0) return result;
    }
};
