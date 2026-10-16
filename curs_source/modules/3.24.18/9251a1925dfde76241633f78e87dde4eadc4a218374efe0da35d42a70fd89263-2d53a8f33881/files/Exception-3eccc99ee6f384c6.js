var InvalidPDFException2, PasswordException2, FormatError2, UnknownErrorException2, ResponseException2, AbortException2;
export { AbortException2, FormatError2, InvalidPDFException2, PasswordException2, ResponseException2, UnknownErrorException2 };
var __wakaru_init_Exception_initialized = false;
export function init_Exception() {
if (__wakaru_init_Exception_initialized) return;
__wakaru_init_Exception_initialized = true;
InvalidPDFException2 = class _InvalidPDFException extends Error {
    constructor(message, cause){
        if (cause !== void 0) {
            super(message ?? "Invalid PDF", {
                cause
            });
        } else {
            super(message ?? "Invalid PDF");
        }
        this.name = "InvalidPDFException";
        Object.setPrototypeOf(this, _InvalidPDFException.prototype);
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(this, _InvalidPDFException);
        }
    }
};
PasswordException2 = class _PasswordException extends Error {
    constructor(message, cause){
        if (cause !== void 0) {
            super(message ?? "Password required or incorrect", {
                cause
            });
        } else {
            super(message ?? "Password required or incorrect");
        }
        this.name = "PasswordException";
        Object.setPrototypeOf(this, _PasswordException.prototype);
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(this, _PasswordException);
        }
    }
};
FormatError2 = class _FormatError extends Error {
    constructor(message, cause){
        if (cause !== void 0) {
            super(message ?? "PDF format error", {
                cause
            });
        } else {
            super(message ?? "PDF format error");
        }
        this.name = "FormatError";
        Object.setPrototypeOf(this, _FormatError.prototype);
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(this, _FormatError);
        }
    }
};
UnknownErrorException2 = class _UnknownErrorException extends Error {
    constructor(message, details, cause){
        if (cause !== void 0) {
            super(message ?? "Unknown error", {
                cause
            });
        } else {
            super(message ?? "Unknown error");
        }
        this.name = "UnknownErrorException";
        Object.setPrototypeOf(this, _UnknownErrorException.prototype);
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(this, _UnknownErrorException);
        }
        this.details = details;
    }
};
ResponseException2 = class _ResponseException extends Error {
    constructor(message, status, missing, cause){
        if (cause !== void 0) {
            super(message ?? "Response error", {
                cause
            });
        } else {
            super(message ?? "Response error");
        }
        this.name = "ResponseException";
        Object.setPrototypeOf(this, _ResponseException.prototype);
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(this, _ResponseException);
        }
        this.status = status;
        this.missing = missing;
    }
};
AbortException2 = class _AbortException extends Error {
    constructor(message, cause){
        if (cause !== void 0) {
            super(message ?? "Operation aborted", {
                cause
            });
        } else {
            super(message ?? "Operation aborted");
        }
        this.name = "AbortException";
        Object.setPrototypeOf(this, _AbortException.prototype);
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(this, _AbortException);
        }
    }
};

}
