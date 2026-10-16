var ceil2 = Math.ceil;
var floor2 = Math.floor;
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor2 : ceil2)(n);
};
