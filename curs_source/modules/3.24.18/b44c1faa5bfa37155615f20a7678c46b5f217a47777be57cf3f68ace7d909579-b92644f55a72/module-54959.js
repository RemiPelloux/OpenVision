"use strict";
require.d(exports, {
    q: ()=>s,
    r: ()=>o
});
var n = require("./module-84959.js");
function s(e) {
    switch(e){
        case 400:
            return n.C.Internal;
        case 401:
            return n.C.Unauthenticated;
        case 403:
            return n.C.PermissionDenied;
        case 404:
            return n.C.Unimplemented;
        case 429:
        case 502:
        case 503:
        case 504:
            return n.C.Unavailable;
        default:
            return n.C.Unknown;
    }
}
function o(e) {
    switch(e){
        case n.C.Canceled:
            return 499;
        case n.C.Unknown:
            return 500;
        case n.C.InvalidArgument:
            return 400;
        case n.C.DeadlineExceeded:
            return 504;
        case n.C.NotFound:
            return 404;
        case n.C.AlreadyExists:
            return 409;
        case n.C.PermissionDenied:
            return 403;
        case n.C.ResourceExhausted:
            return 429;
        case n.C.FailedPrecondition:
            return 400;
        case n.C.Aborted:
            return 409;
        case n.C.OutOfRange:
            return 400;
        case n.C.Unimplemented:
            return 501;
        case n.C.Internal:
            return 500;
        case n.C.Unavailable:
            return 503;
        case n.C.DataLoss:
            return 500;
        case n.C.Unauthenticated:
            return 401;
        default:
            return 500;
    }
}
