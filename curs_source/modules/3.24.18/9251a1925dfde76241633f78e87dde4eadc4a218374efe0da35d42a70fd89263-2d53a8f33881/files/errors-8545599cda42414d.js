var OAuthError, InvalidRequestError, InvalidClientError, InvalidGrantError, UnauthorizedClientError, UnsupportedGrantTypeError, InvalidScopeError, AccessDeniedError, ServerError, TemporarilyUnavailableError, UnsupportedResponseTypeError, UnsupportedTokenTypeError, InvalidTokenError, MethodNotAllowedError, TooManyRequestsError, InvalidClientMetadataError, InsufficientScopeError, InvalidTargetError, OAUTH_ERRORS;
export { AccessDeniedError, InsufficientScopeError, InvalidClientError, InvalidClientMetadataError, InvalidGrantError, InvalidRequestError, InvalidScopeError, InvalidTargetError, InvalidTokenError, MethodNotAllowedError, OAUTH_ERRORS, OAuthError, ServerError, TemporarilyUnavailableError, TooManyRequestsError, UnauthorizedClientError, UnsupportedGrantTypeError, UnsupportedResponseTypeError, UnsupportedTokenTypeError };
var __wakaru_init_errors6_initialized = false;
export function init_errors6() {
if (__wakaru_init_errors6_initialized) return;
__wakaru_init_errors6_initialized = true;
OAuthError = class extends Error {
    constructor(message, errorUri){
        super(message);
        this.errorUri = errorUri;
        this.name = this.constructor.name;
    }
    toResponseObject() {
        const response = {
            error: this.errorCode,
            error_description: this.message
        };
        if (this.errorUri) {
            response.error_uri = this.errorUri;
        }
        return response;
    }
    get errorCode() {
        return this.constructor.errorCode;
    }
};
InvalidRequestError = class extends OAuthError {
};
InvalidRequestError.errorCode = "invalid_request";
InvalidClientError = class extends OAuthError {
};
InvalidClientError.errorCode = "invalid_client";
InvalidGrantError = class extends OAuthError {
};
InvalidGrantError.errorCode = "invalid_grant";
UnauthorizedClientError = class extends OAuthError {
};
UnauthorizedClientError.errorCode = "unauthorized_client";
UnsupportedGrantTypeError = class extends OAuthError {
};
UnsupportedGrantTypeError.errorCode = "unsupported_grant_type";
InvalidScopeError = class extends OAuthError {
};
InvalidScopeError.errorCode = "invalid_scope";
AccessDeniedError = class extends OAuthError {
};
AccessDeniedError.errorCode = "access_denied";
ServerError = class extends OAuthError {
};
ServerError.errorCode = "server_error";
TemporarilyUnavailableError = class extends OAuthError {
};
TemporarilyUnavailableError.errorCode = "temporarily_unavailable";
UnsupportedResponseTypeError = class extends OAuthError {
};
UnsupportedResponseTypeError.errorCode = "unsupported_response_type";
UnsupportedTokenTypeError = class extends OAuthError {
};
UnsupportedTokenTypeError.errorCode = "unsupported_token_type";
InvalidTokenError = class extends OAuthError {
};
InvalidTokenError.errorCode = "invalid_token";
MethodNotAllowedError = class extends OAuthError {
};
MethodNotAllowedError.errorCode = "method_not_allowed";
TooManyRequestsError = class extends OAuthError {
};
TooManyRequestsError.errorCode = "too_many_requests";
InvalidClientMetadataError = class extends OAuthError {
};
InvalidClientMetadataError.errorCode = "invalid_client_metadata";
InsufficientScopeError = class extends OAuthError {
};
InsufficientScopeError.errorCode = "insufficient_scope";
InvalidTargetError = class extends OAuthError {
};
InvalidTargetError.errorCode = "invalid_target";
OAUTH_ERRORS = {
    [InvalidRequestError.errorCode]: InvalidRequestError,
    [InvalidClientError.errorCode]: InvalidClientError,
    [InvalidGrantError.errorCode]: InvalidGrantError,
    [UnauthorizedClientError.errorCode]: UnauthorizedClientError,
    [UnsupportedGrantTypeError.errorCode]: UnsupportedGrantTypeError,
    [InvalidScopeError.errorCode]: InvalidScopeError,
    [AccessDeniedError.errorCode]: AccessDeniedError,
    [ServerError.errorCode]: ServerError,
    [TemporarilyUnavailableError.errorCode]: TemporarilyUnavailableError,
    [UnsupportedResponseTypeError.errorCode]: UnsupportedResponseTypeError,
    [UnsupportedTokenTypeError.errorCode]: UnsupportedTokenTypeError,
    [InvalidTokenError.errorCode]: InvalidTokenError,
    [MethodNotAllowedError.errorCode]: MethodNotAllowedError,
    [TooManyRequestsError.errorCode]: TooManyRequestsError,
    [InvalidClientMetadataError.errorCode]: InvalidClientMetadataError,
    [InsufficientScopeError.errorCode]: InsufficientScopeError,
    [InvalidTargetError.errorCode]: InvalidTargetError
};

}
