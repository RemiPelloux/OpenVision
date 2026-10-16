import { getCanonicalMcpOAuthRedirectUris, getRestMcpProviderIdForUrlPath, mcpOAuthLoopbackRedirectUrl, parseRestMcpProviderMetadataFromPrm } from "./utils_pb_exports.js";
import { withTimeout } from "./dist_exports.js";
import { pkceChallenge, sanitizeErrorMessageForLog } from "./esm_exports8.js";
import { _coercedBigint, _coercedBoolean, _coercedDate, _coercedNumber, _coercedString, _never, _string, util_exports } from "./util_exports.js";
import { MCP_OAUTH_CLIENT_LOGO_URI, REST_MCP_CURSOR_AUTH_HEADER } from "./constants/dist/mcp.js";
import { import_node_crypto13 } from "./mcp-agent-exec/dist/approval-store.js";
import { import_promises24 } from "./mcp-agent-exec/dist/config.js";
import { ENV_VAR_PATTERN2 } from "./mcp-agent-exec/dist/env-expansion.js";
import { import_node_crypto14 } from "./mcp-agent-exec/dist/mcp-sessionless-initialize.js";
import { STDERR_FLUSH_TIMEOUT_MS, STDERR_TAIL_PROPERTY } from "./mcp-agent-exec/dist/stdio-stderr.js";
import { mcpConfigSchema2 } from "./mcp-config/dist/index.js";
import { OAUTH_CREDENTIAL_ERROR_CODES, OAUTH_CREDENTIAL_ERROR_NAMES, OAUTH_REJECTED_TOKEN_MESSAGE_PATTERNS } from "./mcp-core/dist/oauth/oauth-errors.js";
import { UNRESOLVED_PLACEHOLDER } from "./mcp-core/dist/oauth/resolved-oauth-client-id.js";
import { PRM_CACHE_TTL_MS, cache } from "./mcp-core/dist/oauth/rest-mcp-provider-metadata.js";
import { STDIO_CONNECT_STDERR_CAPTURE_MAX_BYTES } from "./mcp-core/dist/transport/reconnect-manager.js";
import { ignoreOverride } from "./node_modules/.pnpm/_a0bfa0c1d160da5255f5725e22e2e76b/node_modules/zod-to-json-schema/dist/esm/Options.js";
import { addMeta, get$ref } from "./node_modules/.pnpm/_a0bfa0c1d160da5255f5725e22e2e76b/node_modules/zod-to-json-schema/dist/esm/parseDef.js";
import { integerDateParser } from "./node_modules/.pnpm/_a0bfa0c1d160da5255f5725e22e2e76b/node_modules/zod-to-json-schema/dist/esm/parsers/date.js";
import { isJsonSchema7AllOfType } from "./node_modules/.pnpm/_a0bfa0c1d160da5255f5725e22e2e76b/node_modules/zod-to-json-schema/dist/esm/parsers/intersection.js";
import { ALPHA_NUMERIC, zodPatterns } from "./node_modules/.pnpm/_a0bfa0c1d160da5255f5725e22e2e76b/node_modules/zod-to-json-schema/dist/esm/parsers/string.js";
import { asAnyOf, primitiveMappings } from "./node_modules/.pnpm/_a0bfa0c1d160da5255f5725e22e2e76b/node_modules/zod-to-json-schema/dist/esm/parsers/union.js";
import { selectParser } from "./node_modules/.pnpm/_a0bfa0c1d160da5255f5725e22e2e76b/node_modules/zod-to-json-schema/dist/esm/selectParser.js";
import { AUTHORIZATION_CODE_CHALLENGE_METHOD, AUTHORIZATION_CODE_RESPONSE_TYPE, __CURSOR_OFFLINE_ACCESS_SCOPE } from "./node_modules/.pnpm/_f57967f111cc31bce3ae8564d9ceaa93/node_modules/@modelcontextprotocol/sdk/dist/esm/client/auth.js";
import { DEFAULT_INHERITED_ENV_VARS, import_node_process } from "./node_modules/.pnpm/_f57967f111cc31bce3ae8564d9ceaa93/node_modules/@modelcontextprotocol/sdk/dist/esm/client/stdio.js";
import { StreamableHTTPError } from "./node_modules/.pnpm/_f57967f111cc31bce3ae8564d9ceaa93/node_modules/@modelcontextprotocol/sdk/dist/esm/client/streamableHttp.js";
import { InvalidClientError, InvalidClientMetadataError, InvalidGrantError, OAUTH_ERRORS, OAuthError, ServerError, TemporarilyUnavailableError, UnauthorizedClientError } from "./node_modules/.pnpm/_f57967f111cc31bce3ae8564d9ceaa93/node_modules/@modelcontextprotocol/sdk/dist/esm/server/auth/errors.js";
import { OAuthClientInformationFullSchema, OAuthErrorResponseSchema, OAuthMetadataSchema, OAuthProtectedResourceMetadataSchema, OAuthTokensSchema, OpenIdProviderDiscoveryMetadataSchema } from "./node_modules/.pnpm/_f57967f111cc31bce3ae8564d9ceaa93/node_modules/@modelcontextprotocol/sdk/dist/esm/shared/auth.js";
import { JSONRPCMessageSchema, LATEST_PROTOCOL_VERSION } from "./node_modules/.pnpm/_f57967f111cc31bce3ae8564d9ceaa93/node_modules/@modelcontextprotocol/sdk/dist/esm/types.js";
import { import_ajv2, import_ajv_formats } from "./node_modules/.pnpm/_f57967f111cc31bce3ae8564d9ceaa93/node_modules/@modelcontextprotocol/sdk/dist/esm/validation/ajv-provider.js";
import { CR, LF, ParseError, SPACE } from "./node_modules/.pnpm/eventsource-parser@3.0.8/node_modules/eventsource-parser/dist/index.js";
import { parse6 } from "./node_modules/.pnpm/jsonc-parser@3.3.1/node_modules/jsonc-parser/lib/esm/main.js";
import { ZodFirstPartyTypeKind, ZodOptional } from "./node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js";
import { ZodBigInt2, ZodBoolean2, ZodDate2, ZodNumber2, ZodString2 } from "./node_modules/.pnpm/zod@3.25.76/node_modules/zod/v4/classic/schemas.js";
import { safeParse } from "./node_modules/.pnpm/zod@3.25.76/node_modules/zod/v4/core/parse.js";
import { ZodMiniArray, ZodMiniEnum, ZodMiniLiteral, ZodMiniNever, ZodMiniObject, ZodMiniOptional, ZodMiniRecord, ZodMiniString, ZodMiniUnion } from "./node_modules/.pnpm/zod@3.25.76/node_modules/zod/v4/mini/schemas.js";
import { TimeoutError } from "./utils/dist/promise-extras.js";
import { spawnWorkload } from "./utils/dist/workload-spawn.js";
export function string3(params) {
    return _coercedString(ZodString2, params);
}
export function number3(params) {
    return _coercedNumber(ZodNumber2, params);
}
export function boolean3(params) {
    return _coercedBoolean(ZodBoolean2, params);
}
export function bigint2(params) {
    return _coercedBigint(ZodBigInt2, params);
}
export function date3(params) {
    return _coercedDate(ZodDate2, params);
}
function resourceUrlFromServerUrl(url2) {
    const resourceURL = typeof url2 === "string" ? new URL(url2) : new URL(url2.href);
    resourceURL.hash = "";
    return resourceURL;
}
function checkResourceAllowed({ requestedResource, configuredResource }) {
    const requested = typeof requestedResource === "string" ? new URL(requestedResource) : new URL(requestedResource.href);
    const configured = typeof configuredResource === "string" ? new URL(configuredResource) : new URL(configuredResource.href);
    if (requested.origin !== configured.origin) {
        return false;
    }
    if (requested.pathname.length < configured.pathname.length) {
        return false;
    }
    const requestedPath = requested.pathname.endsWith("/") ? requested.pathname : requested.pathname + "/";
    const configuredPath2 = configured.pathname.endsWith("/") ? configured.pathname : configured.pathname + "/";
    return requestedPath.startsWith(configuredPath2);
}
function __cursorIsRetryableOAuthRefreshError(error3, provider) {
    return provider?.isRetryableOAuthRefreshError?.(error3) === true;
}
function __cursorSelectAuthorizationScope(challengeScope, resourceMetadata, clientMetadataScope, authServerMetadata) {
    const supported2 = resourceMetadata?.scopes_supported;
    const selected = challengeScope || supported2?.join(" ") || clientMetadataScope;
    if (!selected || ![
        supported2,
        authServerMetadata?.scopes_supported
    ].some((list2)=>Array.isArray(list2) && list2.includes(__CURSOR_OFFLINE_ACCESS_SCOPE))) {
        return selected;
    }
    const requested = selected.split(/\s+/).filter((entry)=>entry.length > 0);
    if (requested.includes(__CURSOR_OFFLINE_ACCESS_SCOPE)) {
        return selected;
    }
    return [
        ...requested,
        __CURSOR_OFFLINE_ACCESS_SCOPE
    ].join(" ");
}
function __cursorIsRedirectRejection(error3) {
    if (!(error3 instanceof OAuthError) || /^HTTP 5\d\d:/.test(error3.message)) {
        return false;
    }
    return error3.errorCode === "invalid_redirect_uri" || /redirect/i.test(error3.message);
}
async function __cursorRegisterClientWithRedirectFallback(provider, authorizationServerUrl, { metadata, clientMetadata, fetchFn }) {
    await provider.prepareForClientRegistration?.();
    const activeRedirectUri = String(provider.redirectUrl);
    const requested = clientMetadata.redirect_uris ?? [];
    const full = requested.includes(activeRedirectUri) ? [
        ...requested
    ] : [
        ...requested,
        activeRedirectUri
    ];
    const attempts = full.length > 1 ? [
        full,
        [
            activeRedirectUri
        ]
    ] : [
        full
    ];
    let lastError;
    for (const redirect_uris of attempts){
        try {
            const registered = await registerClient(authorizationServerUrl, {
                metadata,
                clientMetadata: {
                    ...clientMetadata,
                    redirect_uris
                },
                fetchFn
            });
            return registered.redirect_uris?.length ? registered : {
                ...registered,
                redirect_uris
            };
        } catch (error3) {
            if (!__cursorIsRedirectRejection(error3)) {
                throw error3;
            }
            lastError = error3;
        }
    }
    throw lastError;
}
function isClientAuthMethod(method) {
    return [
        "client_secret_basic",
        "client_secret_post",
        "none"
    ].includes(method);
}
function selectClientAuthMethod(clientInformation, supportedMethods) {
    const hasClientSecret = clientInformation.client_secret !== void 0;
    if (supportedMethods.length === 0) {
        return hasClientSecret ? "client_secret_post" : "none";
    }
    if ("token_endpoint_auth_method" in clientInformation && clientInformation.token_endpoint_auth_method && isClientAuthMethod(clientInformation.token_endpoint_auth_method) && supportedMethods.includes(clientInformation.token_endpoint_auth_method)) {
        return clientInformation.token_endpoint_auth_method;
    }
    if (hasClientSecret && supportedMethods.includes("client_secret_basic")) {
        return "client_secret_basic";
    }
    if (hasClientSecret && supportedMethods.includes("client_secret_post")) {
        return "client_secret_post";
    }
    if (supportedMethods.includes("none")) {
        return "none";
    }
    return hasClientSecret ? "client_secret_post" : "none";
}
function applyClientAuthentication(method, clientInformation, headers, params) {
    const { client_id, client_secret } = clientInformation;
    switch(method){
        case "client_secret_basic":
            applyBasicAuth(client_id, client_secret, headers);
            return;
        case "client_secret_post":
            applyPostAuth(client_id, client_secret, params);
            return;
        case "none":
            applyPublicAuth(client_id, params);
            return;
        default:
            throw new Error(`Unsupported client authentication method: ${method}`);
    }
}
function applyBasicAuth(clientId, clientSecret, headers) {
    if (!clientSecret) {
        throw new Error("client_secret_basic authentication requires a client_secret");
    }
    const credentials = btoa(`${clientId}:${clientSecret}`);
    headers.set("Authorization", `Basic ${credentials}`);
}
function applyPostAuth(clientId, clientSecret, params) {
    params.set("client_id", clientId);
    if (clientSecret) {
        params.set("client_secret", clientSecret);
    }
}
function applyPublicAuth(clientId, params) {
    params.set("client_id", clientId);
}
async function parseErrorResponse(input) {
    const statusCode = input instanceof Response ? input.status : void 0;
    const body = input instanceof Response ? await input.text() : input;
    try {
        const result = OAuthErrorResponseSchema.parse(JSON.parse(body));
        const { error: error3, error_description, error_uri } = result;
        const errorClass = OAUTH_ERRORS[error3] || ServerError;
        return new errorClass(error_description || "", error_uri);
    } catch (error3) {
        const errorMessage4 = `${statusCode ? `HTTP ${statusCode}: ` : ""}Invalid OAuth error response: ${error3}. Raw body: ${body}`;
        return new ServerError(errorMessage4);
    }
}
export async function auth(provider, options2) {
    try {
        return await authInternal(provider, options2);
    } catch (error3) {
        if (error3 instanceof Error && error3.name === "OAuthRefreshTransientError") {
            throw error3;
        }
        if (error3 instanceof InvalidClientError || error3 instanceof UnauthorizedClientError) {
            await provider.invalidateCredentials?.("all");
            return await authInternal(provider, options2);
        } else if (error3 instanceof InvalidGrantError) {
            await provider.invalidateCredentials?.("tokens");
            return await authInternal(provider, options2);
        }
        throw error3;
    }
}
async function authInternal(provider, { serverUrl, authorizationCode, scope, resourceMetadataUrl, fetchFn }) {
    const oauthFetchFn = provider.getOAuthHttpFetch?.();
    const tokenFetchFn = oauthFetchFn ?? fetchFn;
    let resourceMetadata;
    let authorizationServerUrl;
    try {
        resourceMetadata = await discoverOAuthProtectedResourceMetadata(serverUrl, {
            resourceMetadataUrl
        }, fetchFn);
        if (resourceMetadata.authorization_servers && resourceMetadata.authorization_servers.length > 0) {
            authorizationServerUrl = resourceMetadata.authorization_servers[0];
        }
    } catch  {}
    if (!authorizationServerUrl) {
        authorizationServerUrl = new URL("/", serverUrl);
    }
    const resource = await selectResourceURL(serverUrl, provider, resourceMetadata);
    const metadata = await discoverAuthorizationServerMetadata(authorizationServerUrl, {
        fetchFn
    });
    const resolvedScope = __cursorSelectAuthorizationScope(scope, resourceMetadata, provider.clientMetadata.scope, metadata);
    let clientInformation = await Promise.resolve(provider.clientInformation());
    if (!clientInformation) {
        if (authorizationCode !== void 0) {
            throw new Error("Existing OAuth client information is required when exchanging an authorization code");
        }
        const supportsUrlBasedClientId = metadata?.client_id_metadata_document_supported === true;
        const clientMetadataUrl = provider.clientMetadataUrl;
        if (clientMetadataUrl && !isHttpsUrl(clientMetadataUrl)) {
            throw new InvalidClientMetadataError(`clientMetadataUrl must be a valid HTTPS URL with a non-root pathname, got: ${clientMetadataUrl}`);
        }
        const shouldUseUrlBasedClientId = supportsUrlBasedClientId && clientMetadataUrl;
        if (shouldUseUrlBasedClientId) {
            clientInformation = {
                client_id: clientMetadataUrl
            };
            await provider.saveClientInformation?.(clientInformation);
        } else {
            if (!provider.saveClientInformation) {
                throw new Error("OAuth client information must be saveable for dynamic registration");
            }
            const fullInformation = await __cursorRegisterClientWithRedirectFallback(provider, authorizationServerUrl, {
                metadata,
                clientMetadata: resolvedScope !== void 0 ? {
                    ...provider.clientMetadata,
                    scope: resolvedScope
                } : provider.clientMetadata,
                fetchFn: tokenFetchFn
            });
            await provider.saveClientInformation(fullInformation);
            clientInformation = fullInformation;
        }
    }
    const nonInteractiveFlow = !provider.redirectUrl;
    if (authorizationCode !== void 0 || nonInteractiveFlow) {
        const tokens2 = await fetchToken(provider, authorizationServerUrl, {
            metadata,
            resource,
            authorizationCode,
            fetchFn: tokenFetchFn
        });
        await provider.saveTokens(tokens2);
        return "AUTHORIZED";
    }
    const tokens = await provider.tokens();
    if (tokens?.refresh_token) {
        try {
            await provider.prepareForRefresh?.();
            const newTokens = await refreshAuthorization(authorizationServerUrl, {
                metadata,
                clientInformation,
                refreshToken: tokens.refresh_token,
                resource,
                addClientAuthentication: provider.addClientAuthentication,
                fetchFn: tokenFetchFn
            });
            await provider.saveTokens(newTokens);
            return "AUTHORIZED";
        } catch (error3) {
            if (error3 && error3.name === "SiblingAlreadyRefreshedError") {
                throw error3;
            }
            const __isOAuthError = error3 instanceof OAuthError;
            const __isServerError = error3 instanceof ServerError;
            const __isRetryable = __cursorIsRetryableOAuthRefreshError(error3, provider);
            const __isDefiniteOAuthFailure = __isOAuthError && !__isServerError && !(error3 instanceof TemporarilyUnavailableError);
            const __willRethrow = __isDefiniteOAuthFailure || __isRetryable;
            provider.logRefreshCatchBranch?.({
                errorIsOAuthError: __isOAuthError,
                errorIsServerError: __isServerError,
                errorIsRetryable: __isRetryable,
                willFallThrough: !__willRethrow,
                willRethrow: __willRethrow,
                errorName: error3 instanceof Error ? error3.name : typeof error3,
                errorMessage: error3 instanceof Error ? error3.message : String(error3),
                underlyingError: error3
            });
            await provider.releaseRefreshLeaseOnError?.(error3);
            if (error3 instanceof OAuthError && !(error3 instanceof ServerError) && !(error3 instanceof TemporarilyUnavailableError)) {
                throw error3;
            }
            if (__cursorIsRetryableOAuthRefreshError(error3, provider)) {
                const wrapped = new Error(error3 instanceof Error ? error3.message : String(error3));
                wrapped.name = "OAuthRefreshTransientError";
                if (error3 instanceof Error && error3.stack) {
                    wrapped.stack = error3.stack;
                }
                throw wrapped;
            }
            if (!(error3 instanceof OAuthError) || error3 instanceof ServerError) {} else {
                throw error3;
            }
        }
    }
    const state = provider.state ? await provider.state() : void 0;
    const { authorizationUrl, codeVerifier } = await startAuthorization(authorizationServerUrl, {
        metadata,
        clientInformation,
        state,
        redirectUrl: provider.redirectUrl,
        scope: resolvedScope,
        resource
    });
    await provider.saveCodeVerifier(codeVerifier);
    await provider.redirectToAuthorization(authorizationUrl);
    return "REDIRECT";
}
function isHttpsUrl(value) {
    if (!value) return false;
    try {
        const url2 = new URL(value);
        return url2.protocol === "https:" && url2.pathname !== "/";
    } catch  {
        return false;
    }
}
async function selectResourceURL(serverUrl, provider, resourceMetadata) {
    const defaultResource = resourceUrlFromServerUrl(serverUrl);
    if (provider.validateResourceURL) {
        return await provider.validateResourceURL(defaultResource, resourceMetadata?.resource);
    }
    if (!resourceMetadata) {
        return void 0;
    }
    if (!checkResourceAllowed({
        requestedResource: defaultResource,
        configuredResource: resourceMetadata.resource
    })) {
        throw new Error(`Protected resource ${resourceMetadata.resource} does not match expected ${defaultResource} (or origin)`);
    }
    return new URL(resourceMetadata.resource);
}
export function extractWWWAuthenticateParams(res) {
    const authenticateHeader = res.headers.get("WWW-Authenticate");
    if (!authenticateHeader) {
        return {};
    }
    const [type2, scheme] = authenticateHeader.split(" ");
    if (type2.toLowerCase() !== "bearer" || !scheme) {
        return {};
    }
    const resourceMetadataMatch = extractFieldFromWwwAuth(res, "resource_metadata") || void 0;
    let resourceMetadataUrl;
    if (resourceMetadataMatch) {
        try {
            resourceMetadataUrl = new URL(resourceMetadataMatch);
        } catch  {}
    }
    const scope = extractFieldFromWwwAuth(res, "scope") || void 0;
    const error3 = extractFieldFromWwwAuth(res, "error") || void 0;
    return {
        resourceMetadataUrl,
        scope,
        error: error3
    };
}
function extractFieldFromWwwAuth(response, fieldName) {
    const wwwAuthHeader = response.headers.get("WWW-Authenticate");
    if (!wwwAuthHeader) {
        return null;
    }
    const pattern = new RegExp(`${fieldName}=(?:"([^"]+)"|([^\\s,]+))`);
    const match2 = wwwAuthHeader.match(pattern);
    if (match2) {
        return match2[1] || match2[2];
    }
    return null;
}
async function discoverOAuthProtectedResourceMetadata(serverUrl, opts, fetchFn = fetch) {
    const response = await discoverMetadataWithFallback(serverUrl, "oauth-protected-resource", fetchFn, {
        protocolVersion: opts?.protocolVersion,
        metadataUrl: opts?.resourceMetadataUrl
    });
    if (!response || response.status === 404) {
        await response?.body?.cancel();
        throw new Error(`Resource server does not implement OAuth 2.0 Protected Resource Metadata.`);
    }
    if (!response.ok) {
        await response.body?.cancel();
        throw new Error(`HTTP ${response.status} trying to load well-known OAuth protected resource metadata.`);
    }
    return OAuthProtectedResourceMetadataSchema.parse(await response.json());
}
async function fetchWithCorsRetry(url2, headers, fetchFn = fetch) {
    try {
        return await fetchFn(url2, {
            headers
        });
    } catch (error3) {
        if (error3 instanceof TypeError) {
            if (headers) {
                return fetchWithCorsRetry(url2, void 0, fetchFn);
            } else {
                return void 0;
            }
        }
        throw error3;
    }
}
function buildWellKnownPath(wellKnownPrefix, pathname = "", options2 = {}) {
    if (pathname.endsWith("/")) {
        pathname = pathname.slice(0, -1);
    }
    return options2.prependPathname ? `${pathname}/.well-known/${wellKnownPrefix}` : `/.well-known/${wellKnownPrefix}${pathname}`;
}
async function tryMetadataDiscovery(url2, protocolVersion2, fetchFn = fetch) {
    const headers = {
        "MCP-Protocol-Version": protocolVersion2
    };
    return await fetchWithCorsRetry(url2, headers, fetchFn);
}
function shouldAttemptFallback(response, pathname) {
    return !response || response.status >= 400 && response.status < 500 && pathname !== "/";
}
async function discoverMetadataWithFallback(serverUrl, wellKnownType, fetchFn, opts) {
    const issuer = new URL(serverUrl);
    const protocolVersion2 = opts?.protocolVersion ?? LATEST_PROTOCOL_VERSION;
    let url2;
    if (opts?.metadataUrl) {
        url2 = new URL(opts.metadataUrl);
    } else {
        const wellKnownPath = buildWellKnownPath(wellKnownType, issuer.pathname);
        url2 = new URL(wellKnownPath, opts?.metadataServerUrl ?? issuer);
        url2.search = issuer.search;
    }
    let response = await tryMetadataDiscovery(url2, protocolVersion2, fetchFn);
    if (!opts?.metadataUrl && shouldAttemptFallback(response, issuer.pathname)) {
        const rootUrl = new URL(`/.well-known/${wellKnownType}`, issuer);
        response = await tryMetadataDiscovery(rootUrl, protocolVersion2, fetchFn);
    }
    return response;
}
function buildDiscoveryUrls(authorizationServerUrl) {
    const url2 = typeof authorizationServerUrl === "string" ? new URL(authorizationServerUrl) : authorizationServerUrl;
    const hasPath = url2.pathname !== "/";
    const urlsToTry = [];
    if (!hasPath) {
        urlsToTry.push({
            url: new URL("/.well-known/oauth-authorization-server", url2.origin),
            type: "oauth"
        });
        urlsToTry.push({
            url: new URL(`/.well-known/openid-configuration`, url2.origin),
            type: "oidc"
        });
        return urlsToTry;
    }
    let pathname = url2.pathname;
    if (pathname.endsWith("/")) {
        pathname = pathname.slice(0, -1);
    }
    urlsToTry.push({
        url: new URL(`/.well-known/oauth-authorization-server${pathname}`, url2.origin),
        type: "oauth"
    });
    urlsToTry.push({
        url: new URL(`/.well-known/openid-configuration${pathname}`, url2.origin),
        type: "oidc"
    });
    urlsToTry.push({
        url: new URL(`${pathname}/.well-known/openid-configuration`, url2.origin),
        type: "oidc"
    });
    return urlsToTry;
}
async function discoverAuthorizationServerMetadata(authorizationServerUrl, { fetchFn = fetch, protocolVersion: protocolVersion2 = LATEST_PROTOCOL_VERSION } = {}) {
    const headers = {
        "MCP-Protocol-Version": protocolVersion2,
        Accept: "application/json"
    };
    const urlsToTry = buildDiscoveryUrls(authorizationServerUrl);
    for (const { url: endpointUrl, type: type2 } of urlsToTry){
        const response = await fetchWithCorsRetry(endpointUrl, headers, fetchFn);
        if (!response) {
            continue;
        }
        if (!response.ok) {
            await response.body?.cancel();
            if (response.status >= 400 && response.status < 500) {
                continue;
            }
            throw new Error(`HTTP ${response.status} trying to load ${type2 === "oauth" ? "OAuth" : "OpenID provider"} metadata from ${endpointUrl}`);
        }
        if (type2 === "oauth") {
            return OAuthMetadataSchema.parse(await response.json());
        } else {
            return OpenIdProviderDiscoveryMetadataSchema.parse(await response.json());
        }
    }
    return void 0;
}
async function startAuthorization(authorizationServerUrl, { metadata, clientInformation, redirectUrl, scope, state, resource }) {
    let authorizationUrl;
    if (metadata) {
        authorizationUrl = new URL(metadata.authorization_endpoint);
        if (!metadata.response_types_supported.includes(AUTHORIZATION_CODE_RESPONSE_TYPE)) {
            throw new Error(`Incompatible auth server: does not support response type ${AUTHORIZATION_CODE_RESPONSE_TYPE}`);
        }
        if (metadata.code_challenge_methods_supported && !metadata.code_challenge_methods_supported.includes(AUTHORIZATION_CODE_CHALLENGE_METHOD)) {
            throw new Error(`Incompatible auth server: does not support code challenge method ${AUTHORIZATION_CODE_CHALLENGE_METHOD}`);
        }
    } else {
        authorizationUrl = new URL("/authorize", authorizationServerUrl);
    }
    const challenge = await pkceChallenge();
    const codeVerifier = challenge.code_verifier;
    const codeChallenge = challenge.code_challenge;
    authorizationUrl.searchParams.set("response_type", AUTHORIZATION_CODE_RESPONSE_TYPE);
    authorizationUrl.searchParams.set("client_id", clientInformation.client_id);
    authorizationUrl.searchParams.set("code_challenge", codeChallenge);
    authorizationUrl.searchParams.set("code_challenge_method", AUTHORIZATION_CODE_CHALLENGE_METHOD);
    authorizationUrl.searchParams.set("redirect_uri", String(redirectUrl));
    if (state) {
        authorizationUrl.searchParams.set("state", state);
    }
    if (scope) {
        authorizationUrl.searchParams.set("scope", scope);
    }
    if (scope?.includes("offline_access")) {
        authorizationUrl.searchParams.append("prompt", "consent");
    }
    if (resource) {
        authorizationUrl.searchParams.set("resource", resource.href);
    }
    return {
        authorizationUrl,
        codeVerifier
    };
}
function prepareAuthorizationCodeRequest(authorizationCode, codeVerifier, redirectUri) {
    return new URLSearchParams({
        grant_type: "authorization_code",
        code: authorizationCode,
        code_verifier: codeVerifier,
        redirect_uri: String(redirectUri)
    });
}
async function executeTokenRequest(authorizationServerUrl, { metadata, tokenRequestParams, clientInformation, addClientAuthentication, resource, fetchFn }) {
    const tokenUrl = metadata?.token_endpoint ? new URL(metadata.token_endpoint) : new URL("/token", authorizationServerUrl);
    const headers = new Headers({
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json"
    });
    if (resource) {
        tokenRequestParams.set("resource", resource.href);
    }
    if (addClientAuthentication) {
        await addClientAuthentication(headers, tokenRequestParams, tokenUrl, metadata);
    } else if (clientInformation) {
        const supportedMethods = metadata?.token_endpoint_auth_methods_supported ?? [];
        const authMethod = selectClientAuthMethod(clientInformation, supportedMethods);
        applyClientAuthentication(authMethod, clientInformation, headers, tokenRequestParams);
    }
    const response = await (fetchFn ?? fetch)(tokenUrl, {
        method: "POST",
        headers,
        body: tokenRequestParams
    });
    if (!response.ok) {
        throw await parseErrorResponse(response);
    }
    return OAuthTokensSchema.parse(await response.json());
}
async function refreshAuthorization(authorizationServerUrl, { metadata, clientInformation, refreshToken, resource, addClientAuthentication, fetchFn }) {
    const tokenRequestParams = new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken
    });
    const tokens = await executeTokenRequest(authorizationServerUrl, {
        metadata,
        tokenRequestParams,
        clientInformation,
        addClientAuthentication,
        resource,
        fetchFn
    });
    return {
        refresh_token: refreshToken,
        ...tokens
    };
}
async function fetchToken(provider, authorizationServerUrl, { metadata, resource, authorizationCode, fetchFn } = {}) {
    const scope = provider.clientMetadata.scope;
    let tokenRequestParams;
    if (provider.prepareTokenRequest) {
        tokenRequestParams = await provider.prepareTokenRequest(scope);
    }
    if (!tokenRequestParams) {
        if (!authorizationCode) {
            throw new Error("Either provider.prepareTokenRequest() or authorizationCode is required");
        }
        if (!provider.redirectUrl) {
            throw new Error("redirectUrl is required for authorization_code flow");
        }
        const codeVerifier = await provider.codeVerifier();
        tokenRequestParams = prepareAuthorizationCodeRequest(authorizationCode, codeVerifier, provider.redirectUrl);
    }
    const clientInformation = await provider.clientInformation();
    return executeTokenRequest(authorizationServerUrl, {
        metadata,
        tokenRequestParams,
        clientInformation: clientInformation ?? void 0,
        addClientAuthentication: provider.addClientAuthentication,
        resource,
        fetchFn
    });
}
async function registerClient(authorizationServerUrl, { metadata, clientMetadata, fetchFn }) {
    let registrationUrl;
    if (metadata) {
        if (!metadata.registration_endpoint) {
            throw new Error("Incompatible auth server: does not support dynamic client registration");
        }
        registrationUrl = new URL(metadata.registration_endpoint);
    } else {
        registrationUrl = new URL("/register", authorizationServerUrl);
    }
    const response = await (fetchFn ?? fetch)(registrationUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(clientMetadata)
    });
    if (!response.ok) {
        throw await parseErrorResponse(response);
    }
    return OAuthClientInformationFullSchema.parse(await response.json());
}
function isRejectedTokenInvalidRequestOAuthError(error3) {
    if (error3 === null || typeof error3 !== "object") {
        return false;
    }
    const name17 = error3.name;
    const errorCode3 = error3.errorCode;
    const isInvalidRequest = name17 === "InvalidRequestError" || typeof errorCode3 === "string" && errorCode3.toLowerCase() === "invalid_request";
    if (!isInvalidRequest) {
        return false;
    }
    const message = error3.message;
    return typeof message === "string" && OAUTH_REJECTED_TOKEN_MESSAGE_PATTERNS.some((pattern)=>pattern.test(message));
}
export function isOAuthCredentialRejectionError(error3) {
    if (error3 === null || typeof error3 !== "object") {
        return false;
    }
    const name17 = error3.name;
    if (typeof name17 === "string" && OAUTH_CREDENTIAL_ERROR_NAMES.has(name17)) {
        return true;
    }
    const errorCode3 = error3.errorCode;
    if (typeof errorCode3 === "string" && OAUTH_CREDENTIAL_ERROR_CODES.has(errorCode3.toLowerCase())) {
        return true;
    }
    return isRejectedTokenInvalidRequestOAuthError(error3);
}
export function applyConfiguredOAuthScopeOverride(authorizationUrl, scopes) {
    if (scopes !== void 0 && scopes.length > 0) {
        authorizationUrl.searchParams.set("scope", scopes.join(" "));
    }
}
function leftoverOAuthClientPlaceholder(value) {
    if (value === void 0) {
        return void 0;
    }
    const trimmed = value.trim();
    if (trimmed.length === 0) {
        return void 0;
    }
    return UNRESOLVED_PLACEHOLDER.test(trimmed) ? trimmed : void 0;
}
function resolvedOAuthClientId(value) {
    if (leftoverOAuthClientPlaceholder(value) !== void 0) {
        return void 0;
    }
    const trimmed = value?.trim();
    return trimmed && trimmed.length > 0 ? trimmed : void 0;
}
async function resolveRestMcpProviderMetadataFromPrm(serverUrl, fetchImpl = fetch) {
    if (getRestMcpProviderIdForUrlPath(serverUrl) === void 0) {
        return void 0;
    }
    const url2 = new URL(serverUrl);
    const prmUrl = `${url2.origin}/.well-known/oauth-protected-resource${url2.pathname.replace(/\/+$/, "")}`;
    const cached2 = cache.get(prmUrl);
    if (cached2 !== void 0 && cached2.expiresAtMs > Date.now()) {
        return cached2.metadata;
    }
    let metadata;
    try {
        const response = await fetchImpl(prmUrl);
        if (!response.ok) {
            return void 0;
        }
        metadata = parseRestMcpProviderMetadataFromPrm(await response.json());
    } catch  {
        return void 0;
    }
    cache.set(prmUrl, {
        metadata,
        expiresAtMs: Date.now() + PRM_CACHE_TTL_MS
    });
    return metadata;
}
export function splitRestMcpCursorAuthHeader(serverUrl, headers) {
    if (headers === void 0) {
        return {
            headers,
            cursorAuthHeaderValue: void 0,
            cursorAuthOrigin: void 0
        };
    }
    const entries = Object.entries(headers);
    const cursorAuthEntry = entries.find(([name17])=>name17.toLowerCase() === REST_MCP_CURSOR_AUTH_HEADER);
    if (cursorAuthEntry === void 0) {
        return {
            headers,
            cursorAuthHeaderValue: void 0,
            cursorAuthOrigin: void 0
        };
    }
    let origin;
    try {
        origin = new URL(serverUrl).origin;
    } catch  {
        origin = void 0;
    }
    return {
        headers: Object.fromEntries(entries.filter(([name17])=>name17.toLowerCase() !== REST_MCP_CURSOR_AUTH_HEADER)),
        cursorAuthHeaderValue: cursorAuthEntry[1],
        cursorAuthOrigin: origin
    };
}
export function wrapFetchWithRestMcpCursorAuthHeader(supplier, allowedOrigin, baseFetch) {
    return async (url2, init)=>{
        let requestOrigin;
        try {
            requestOrigin = new URL(typeof url2 === "string" ? url2 : url2.toString()).origin;
        } catch  {
            return baseFetch(url2, init);
        }
        if (requestOrigin !== allowedOrigin) {
            return baseFetch(url2, init);
        }
        const cursorAuthHeaderValue = await supplier();
        if (cursorAuthHeaderValue === void 0 || cursorAuthHeaderValue.length === 0) {
            return baseFetch(url2, init);
        }
        const requestHeaders = new Headers(init?.headers);
        requestHeaders.set(REST_MCP_CURSOR_AUTH_HEADER, cursorAuthHeaderValue);
        return baseFetch(url2, {
            ...init,
            headers: requestHeaders,
            redirect: "manual"
        });
    };
}
function isConnectionRefusedError(error3) {
    if (!(error3 instanceof Error)) {
        return false;
    }
    const errorWithCode = error3;
    const nestedCode = error3.cause?.code;
    if (errorWithCode.code === "ECONNREFUSED" || nestedCode === "ECONNREFUSED") {
        return true;
    }
    return error3.message.includes("ECONNREFUSED");
}
function extractStrictSseFallbackStatusCode(error3) {
    if (!error3 || typeof error3 !== "object") {
        return void 0;
    }
    const maybeCode = error3.code;
    if (typeof maybeCode === "number" && maybeCode >= 100 && maybeCode <= 599) {
        return maybeCode;
    }
    if (typeof maybeCode === "string" && /^\d{3}$/.test(maybeCode) && Number(maybeCode) >= 100 && Number(maybeCode) <= 599) {
        return Number(maybeCode);
    }
    const maybeMessage = error3 instanceof Error ? error3.message : typeof error3.message === "string" ? error3.message : void 0;
    if (!maybeMessage) {
        return void 0;
    }
    const match2 = maybeMessage.match(/\bHTTP\s+(\d{3})\b/i);
    if (!match2?.[1]) {
        return void 0;
    }
    const parsed = Number.parseInt(match2[1], 10);
    return Number.isNaN(parsed) ? void 0 : parsed;
}
export function isSseFallbackAppropriate(error3) {
    const httpStatus = extractStrictSseFallbackStatusCode(error3);
    if (httpStatus !== void 0) {
        return httpStatus === 400 || httpStatus === 404 || httpStatus === 405;
    }
    if (error3 instanceof Error && error3.message.toLowerCase().includes("sessionid must be provided")) {
        return true;
    }
    return isConnectionRefusedError(error3);
}
export function generateApprovalKey(serverName, server, cwd) {
    const hashInput = {
        path: cwd,
        server
    };
    const hash = (0, import_node_crypto13.createHash)("sha256").update(JSON.stringify(hashInput)).digest("hex").substring(0, 16);
    return `${serverName}-${hash}`;
}
export function getIfReady(promise) {
    let result;
    promise.then((value)=>{
        result = value;
    }).catch(()=>{});
    return result;
}
export function extractTextFromNonTextContent(item) {
    const itemAny = item;
    if (itemAny.resource && typeof itemAny.resource === "object") {
        const resource = itemAny.resource;
        if (typeof resource.text === "string") {
            return resource.text;
        } else if (typeof resource.blob === "string") {
            try {
                return Buffer.from(resource.blob, "base64").toString("utf8");
            } catch  {
                return `[Binary resource: ${resource.uri ?? "unknown"}]`;
            }
        } else {
            return `Resource: ${resource.uri ?? "unknown"}${resource.name ? ` (${resource.name})` : ""}`;
        }
    } else if (itemAny.uri) {
        return `Resource: ${itemAny.uri}${itemAny.name ? ` (${itemAny.name})` : ""}`;
    } else {
        return `Unsupported content type "${item.type}": ${JSON.stringify(item)}`;
    }
}
export function string4(params) {
    return _string(ZodMiniString, params);
}
function never2(params) {
    return _never(ZodMiniNever, params);
}
export function array2(element, params) {
    return new ZodMiniArray({
        type: "array",
        element,
        ...util_exports.normalizeParams(params)
    });
}
export function object2(shape, params) {
    const def = {
        type: "object",
        get shape () {
            util_exports.assignProp(this, "shape", {
                ...shape
            });
            return this.shape;
        },
        ...util_exports.normalizeParams(params)
    };
    return new ZodMiniObject(def);
}
export function strictObject(shape, params) {
    return new ZodMiniObject({
        type: "object",
        get shape () {
            util_exports.assignProp(this, "shape", {
                ...shape
            });
            return this.shape;
        },
        catchall: never2(),
        ...util_exports.normalizeParams(params)
    });
}
export function union2(options2, params) {
    return new ZodMiniUnion({
        type: "union",
        options: options2,
        ...util_exports.normalizeParams(params)
    });
}
export function record2(keyType, valueType, params) {
    return new ZodMiniRecord({
        type: "record",
        keyType,
        valueType,
        ...util_exports.normalizeParams(params)
    });
}
export function _enum2(values, params) {
    const entries = Array.isArray(values) ? Object.fromEntries(values.map((v2)=>[
            v2,
            v2
        ])) : values;
    return new ZodMiniEnum({
        type: "enum",
        entries,
        ...util_exports.normalizeParams(params)
    });
}
export function literal2(value, params) {
    return new ZodMiniLiteral({
        type: "literal",
        values: Array.isArray(value) ? value : [
            value
        ],
        ...util_exports.normalizeParams(params)
    });
}
export function optional2(innerType) {
    return new ZodMiniOptional({
        type: "optional",
        innerType
    });
}
function expandString(value, envLookup) {
    return value.replace(ENV_VAR_PATTERN2, (match2, envPrefixVar, plainVar, defaultValue)=>{
        if (envPrefixVar !== void 0) {
            const envValue2 = envLookup(envPrefixVar);
            return envValue2 !== void 0 ? envValue2 : match2;
        }
        const envValue = envLookup(plainVar);
        if (envValue !== void 0) {
            return envValue;
        }
        if (defaultValue !== void 0) {
            return defaultValue;
        }
        return match2;
    });
}
function expandEnvVarsWithLookup2(obj, envLookup) {
    if (typeof obj === "string") {
        return expandString(obj, envLookup);
    }
    if (Array.isArray(obj)) {
        return obj.map((item)=>expandEnvVarsWithLookup2(item, envLookup));
    }
    if (obj !== null && typeof obj === "object") {
        const result = {};
        for (const [key, value] of Object.entries(obj)){
            result[key] = expandEnvVarsWithLookup2(value, envLookup);
        }
        return result;
    }
    return obj;
}
export async function getMcpConfig(configPath, envLookup = (key)=>process.env[key]) {
    try {
        const configString = await (0, import_promises24.readFile)(configPath, "utf8");
        const raw = parse6(configString);
        const expanded = expandEnvVarsWithLookup2(raw, envLookup);
        return mcpConfigSchema2.parse(expanded);
    } catch  {
        return {
            mcpServers: {}
        };
    }
}
export function parseArgsStringToArgv(value, env, file) {
    var myRegexp = /([^\s'"]([^\s'"]*(['"])([^\3]*?)\3)+[^\s'"]*)|[^\s'"]+|(['"])([^\5]*?)\5/gi;
    var myString = value;
    var myArray = [];
    if (env) {
        myArray.push(env);
    }
    if (file) {
        myArray.push(file);
    }
    var match2;
    do {
        match2 = myRegexp.exec(myString);
        if (match2 !== null) {
            myArray.push(firstString2(match2[1], match2[6], match2[0]));
        }
    }while (match2 !== null)
    return myArray;
}
function firstString2() {
    var args = [];
    for(var _i2 = 0; _i2 < arguments.length; _i2++){
        args[_i2] = arguments[_i2];
    }
    for(var i = 0; i < args.length; i++){
        var arg = args[i];
        if (typeof arg === "string") {
            return arg;
        }
    }
}
export function isZ4Schema(s3) {
    const schema2 = s3;
    return !!schema2._zod;
}
export function safeParse3(schema2, data) {
    if (isZ4Schema(schema2)) {
        const result2 = safeParse(schema2, data);
        return result2;
    }
    const v3Schema = schema2;
    const result = v3Schema.safeParse(data);
    return result;
}
export function getObjectShape(schema2) {
    if (!schema2) return void 0;
    let rawShape;
    if (isZ4Schema(schema2)) {
        const v4Schema = schema2;
        rawShape = v4Schema._zod?.def?.shape;
    } else {
        const v3Schema = schema2;
        rawShape = v3Schema.shape;
    }
    if (!rawShape) return void 0;
    if (typeof rawShape === "function") {
        try {
            return rawShape();
        } catch  {
            return void 0;
        }
    }
    return rawShape;
}
function getLiteralValue(schema2) {
    if (isZ4Schema(schema2)) {
        const v4Schema = schema2;
        const def2 = v4Schema._zod?.def;
        if (def2) {
            if (def2.value !== void 0) return def2.value;
            if (Array.isArray(def2.values) && def2.values.length > 0) {
                return def2.values[0];
            }
        }
    }
    const v3Schema = schema2;
    const def = v3Schema._def;
    if (def) {
        if (def.value !== void 0) return def.value;
        if (Array.isArray(def.values) && def.values.length > 0) {
            return def.values[0];
        }
    }
    const directValue = schema2.value;
    if (directValue !== void 0) return directValue;
    return void 0;
}
export function isTerminal(status) {
    return status === "completed" || status === "failed" || status === "cancelled";
}
function addErrorMessage(res, key, errorMessage4, refs) {
    if (!refs?.errorMessages) return;
    if (errorMessage4) {
        res.errorMessage = {
            ...res.errorMessage,
            [key]: errorMessage4
        };
    }
}
export function setResponseValueAndErrors(res, key, value, errorMessage4, refs) {
    res[key] = value;
    addErrorMessage(res, key, errorMessage4, refs);
}
export function parseAnyDef() {
    return {};
}
export function parseArrayDef(def, refs) {
    const res = {
        type: "array"
    };
    if (def.type?._def && def.type?._def?.typeName !== ZodFirstPartyTypeKind.ZodAny) {
        res.items = parseDef(def.type._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "items"
            ]
        });
    }
    if (def.minLength) {
        setResponseValueAndErrors(res, "minItems", def.minLength.value, def.minLength.message, refs);
    }
    if (def.maxLength) {
        setResponseValueAndErrors(res, "maxItems", def.maxLength.value, def.maxLength.message, refs);
    }
    if (def.exactLength) {
        setResponseValueAndErrors(res, "minItems", def.exactLength.value, def.exactLength.message, refs);
        setResponseValueAndErrors(res, "maxItems", def.exactLength.value, def.exactLength.message, refs);
    }
    return res;
}
export function parseBigintDef(def, refs) {
    const res = {
        type: "integer",
        format: "int64"
    };
    if (!def.checks) return res;
    for (const check2 of def.checks){
        switch(check2.kind){
            case "min":
                if (refs.target === "jsonSchema7") {
                    if (check2.inclusive) {
                        setResponseValueAndErrors(res, "minimum", check2.value, check2.message, refs);
                    } else {
                        setResponseValueAndErrors(res, "exclusiveMinimum", check2.value, check2.message, refs);
                    }
                } else {
                    if (!check2.inclusive) {
                        res.exclusiveMinimum = true;
                    }
                    setResponseValueAndErrors(res, "minimum", check2.value, check2.message, refs);
                }
                break;
            case "max":
                if (refs.target === "jsonSchema7") {
                    if (check2.inclusive) {
                        setResponseValueAndErrors(res, "maximum", check2.value, check2.message, refs);
                    } else {
                        setResponseValueAndErrors(res, "exclusiveMaximum", check2.value, check2.message, refs);
                    }
                } else {
                    if (!check2.inclusive) {
                        res.exclusiveMaximum = true;
                    }
                    setResponseValueAndErrors(res, "maximum", check2.value, check2.message, refs);
                }
                break;
            case "multipleOf":
                setResponseValueAndErrors(res, "multipleOf", check2.value, check2.message, refs);
                break;
        }
    }
    return res;
}
export function parseBooleanDef() {
    return {
        type: "boolean"
    };
}
export function parseBrandedDef(_def, refs) {
    return parseDef(_def.type._def, refs);
}
export function parseDateDef(def, refs, overrideDateStrategy) {
    const strategy = overrideDateStrategy ?? refs.dateStrategy;
    if (Array.isArray(strategy)) {
        return {
            anyOf: strategy.map((item, i)=>parseDateDef(def, refs, item))
        };
    }
    switch(strategy){
        case "string":
        case "format:date-time":
            return {
                type: "string",
                format: "date-time"
            };
        case "format:date":
            return {
                type: "string",
                format: "date"
            };
        case "integer":
            return integerDateParser(def, refs);
    }
}
export function parseDefaultDef(_def, refs) {
    return {
        ...parseDef(_def.innerType._def, refs),
        default: _def.defaultValue()
    };
}
export function parseEffectsDef(_def, refs) {
    return refs.effectStrategy === "input" ? parseDef(_def.schema._def, refs) : {};
}
export function parseEnumDef(def) {
    return {
        type: "string",
        enum: Array.from(def.values)
    };
}
export function parseIntersectionDef(def, refs) {
    const allOf = [
        parseDef(def.left._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "allOf",
                "0"
            ]
        }),
        parseDef(def.right._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "allOf",
                "1"
            ]
        })
    ].filter((x)=>!!x);
    let unevaluatedProperties = refs.target === "jsonSchema2019-09" ? {
        unevaluatedProperties: false
    } : void 0;
    const mergedAllOf = [];
    allOf.forEach((schema2)=>{
        if (isJsonSchema7AllOfType(schema2)) {
            mergedAllOf.push(...schema2.allOf);
            if (schema2.unevaluatedProperties === void 0) {
                unevaluatedProperties = void 0;
            }
        } else {
            let nestedSchema = schema2;
            if ("additionalProperties" in schema2 && schema2.additionalProperties === false) {
                const { additionalProperties, ...rest } = schema2;
                nestedSchema = rest;
            } else {
                unevaluatedProperties = void 0;
            }
            mergedAllOf.push(nestedSchema);
        }
    });
    return mergedAllOf.length ? {
        allOf: mergedAllOf,
        ...unevaluatedProperties
    } : void 0;
}
export function parseLiteralDef(def, refs) {
    const parsedType2 = typeof def.value;
    if (parsedType2 !== "bigint" && parsedType2 !== "number" && parsedType2 !== "boolean" && parsedType2 !== "string") {
        return {
            type: Array.isArray(def.value) ? "array" : "object"
        };
    }
    if (refs.target === "openApi3") {
        return {
            type: parsedType2 === "bigint" ? "integer" : parsedType2,
            enum: [
                def.value
            ]
        };
    }
    return {
        type: parsedType2 === "bigint" ? "integer" : parsedType2,
        const: def.value
    };
}
export function parseStringDef(def, refs) {
    const res = {
        type: "string"
    };
    if (def.checks) {
        for (const check2 of def.checks){
            switch(check2.kind){
                case "min":
                    setResponseValueAndErrors(res, "minLength", typeof res.minLength === "number" ? Math.max(res.minLength, check2.value) : check2.value, check2.message, refs);
                    break;
                case "max":
                    setResponseValueAndErrors(res, "maxLength", typeof res.maxLength === "number" ? Math.min(res.maxLength, check2.value) : check2.value, check2.message, refs);
                    break;
                case "email":
                    switch(refs.emailStrategy){
                        case "format:email":
                            addFormat(res, "email", check2.message, refs);
                            break;
                        case "format:idn-email":
                            addFormat(res, "idn-email", check2.message, refs);
                            break;
                        case "pattern:zod":
                            addPattern(res, zodPatterns.email, check2.message, refs);
                            break;
                    }
                    break;
                case "url":
                    addFormat(res, "uri", check2.message, refs);
                    break;
                case "uuid":
                    addFormat(res, "uuid", check2.message, refs);
                    break;
                case "regex":
                    addPattern(res, check2.regex, check2.message, refs);
                    break;
                case "cuid":
                    addPattern(res, zodPatterns.cuid, check2.message, refs);
                    break;
                case "cuid2":
                    addPattern(res, zodPatterns.cuid2, check2.message, refs);
                    break;
                case "startsWith":
                    addPattern(res, RegExp(`^${escapeLiteralCheckValue(check2.value, refs)}`), check2.message, refs);
                    break;
                case "endsWith":
                    addPattern(res, RegExp(`${escapeLiteralCheckValue(check2.value, refs)}$`), check2.message, refs);
                    break;
                case "datetime":
                    addFormat(res, "date-time", check2.message, refs);
                    break;
                case "date":
                    addFormat(res, "date", check2.message, refs);
                    break;
                case "time":
                    addFormat(res, "time", check2.message, refs);
                    break;
                case "duration":
                    addFormat(res, "duration", check2.message, refs);
                    break;
                case "length":
                    setResponseValueAndErrors(res, "minLength", typeof res.minLength === "number" ? Math.max(res.minLength, check2.value) : check2.value, check2.message, refs);
                    setResponseValueAndErrors(res, "maxLength", typeof res.maxLength === "number" ? Math.min(res.maxLength, check2.value) : check2.value, check2.message, refs);
                    break;
                case "includes":
                    {
                        addPattern(res, RegExp(escapeLiteralCheckValue(check2.value, refs)), check2.message, refs);
                        break;
                    }
                case "ip":
                    {
                        if (check2.version !== "v6") {
                            addFormat(res, "ipv4", check2.message, refs);
                        }
                        if (check2.version !== "v4") {
                            addFormat(res, "ipv6", check2.message, refs);
                        }
                        break;
                    }
                case "base64url":
                    addPattern(res, zodPatterns.base64url, check2.message, refs);
                    break;
                case "jwt":
                    addPattern(res, zodPatterns.jwt, check2.message, refs);
                    break;
                case "cidr":
                    {
                        if (check2.version !== "v6") {
                            addPattern(res, zodPatterns.ipv4Cidr, check2.message, refs);
                        }
                        if (check2.version !== "v4") {
                            addPattern(res, zodPatterns.ipv6Cidr, check2.message, refs);
                        }
                        break;
                    }
                case "emoji":
                    addPattern(res, zodPatterns.emoji(), check2.message, refs);
                    break;
                case "ulid":
                    {
                        addPattern(res, zodPatterns.ulid, check2.message, refs);
                        break;
                    }
                case "base64":
                    {
                        switch(refs.base64Strategy){
                            case "format:binary":
                                {
                                    addFormat(res, "binary", check2.message, refs);
                                    break;
                                }
                            case "contentEncoding:base64":
                                {
                                    setResponseValueAndErrors(res, "contentEncoding", "base64", check2.message, refs);
                                    break;
                                }
                            case "pattern:zod":
                                {
                                    addPattern(res, zodPatterns.base64, check2.message, refs);
                                    break;
                                }
                        }
                        break;
                    }
                case "nanoid":
                    {
                        addPattern(res, zodPatterns.nanoid, check2.message, refs);
                    }
                case "toLowerCase":
                case "toUpperCase":
                case "trim":
                    break;
                default:
                    ((_2)=>{})(check2);
            }
        }
    }
    return res;
}
function escapeLiteralCheckValue(literal3, refs) {
    return refs.patternStrategy === "escape" ? escapeNonAlphaNumeric(literal3) : literal3;
}
function escapeNonAlphaNumeric(source) {
    let result = "";
    for(let i = 0; i < source.length; i++){
        if (!ALPHA_NUMERIC.has(source[i])) {
            result += "\\";
        }
        result += source[i];
    }
    return result;
}
function addFormat(schema2, value, message, refs) {
    if (schema2.format || schema2.anyOf?.some((x)=>x.format)) {
        if (!schema2.anyOf) {
            schema2.anyOf = [];
        }
        if (schema2.format) {
            schema2.anyOf.push({
                format: schema2.format,
                ...schema2.errorMessage && refs.errorMessages && {
                    errorMessage: {
                        format: schema2.errorMessage.format
                    }
                }
            });
            delete schema2.format;
            if (schema2.errorMessage) {
                delete schema2.errorMessage.format;
                if (Object.keys(schema2.errorMessage).length === 0) {
                    delete schema2.errorMessage;
                }
            }
        }
        schema2.anyOf.push({
            format: value,
            ...message && refs.errorMessages && {
                errorMessage: {
                    format: message
                }
            }
        });
    } else {
        setResponseValueAndErrors(schema2, "format", value, message, refs);
    }
}
function addPattern(schema2, regex, message, refs) {
    if (schema2.pattern || schema2.allOf?.some((x)=>x.pattern)) {
        if (!schema2.allOf) {
            schema2.allOf = [];
        }
        if (schema2.pattern) {
            schema2.allOf.push({
                pattern: schema2.pattern,
                ...schema2.errorMessage && refs.errorMessages && {
                    errorMessage: {
                        pattern: schema2.errorMessage.pattern
                    }
                }
            });
            delete schema2.pattern;
            if (schema2.errorMessage) {
                delete schema2.errorMessage.pattern;
                if (Object.keys(schema2.errorMessage).length === 0) {
                    delete schema2.errorMessage;
                }
            }
        }
        schema2.allOf.push({
            pattern: stringifyRegExpWithFlags(regex, refs),
            ...message && refs.errorMessages && {
                errorMessage: {
                    pattern: message
                }
            }
        });
    } else {
        setResponseValueAndErrors(schema2, "pattern", stringifyRegExpWithFlags(regex, refs), message, refs);
    }
}
function stringifyRegExpWithFlags(regex, refs) {
    if (!refs.applyRegexFlags || !regex.flags) {
        return regex.source;
    }
    const flags = {
        i: regex.flags.includes("i"),
        m: regex.flags.includes("m"),
        s: regex.flags.includes("s")
    };
    const source = flags.i ? regex.source.toLowerCase() : regex.source;
    let pattern = "";
    let isEscaped = false;
    let inCharGroup = false;
    let inCharRange = false;
    for(let i = 0; i < source.length; i++){
        if (isEscaped) {
            pattern += source[i];
            isEscaped = false;
            continue;
        }
        if (flags.i) {
            if (inCharGroup) {
                if (source[i].match(/[a-z]/)) {
                    if (inCharRange) {
                        pattern += source[i];
                        pattern += `${source[i - 2]}-${source[i]}`.toUpperCase();
                        inCharRange = false;
                    } else if (source[i + 1] === "-" && source[i + 2]?.match(/[a-z]/)) {
                        pattern += source[i];
                        inCharRange = true;
                    } else {
                        pattern += `${source[i]}${source[i].toUpperCase()}`;
                    }
                    continue;
                }
            } else if (source[i].match(/[a-z]/)) {
                pattern += `[${source[i]}${source[i].toUpperCase()}]`;
                continue;
            }
        }
        if (flags.m) {
            if (source[i] === "^") {
                pattern += `(^|(?<=[\r
]))`;
                continue;
            } else if (source[i] === "$") {
                pattern += `($|(?=[\r
]))`;
                continue;
            }
        }
        if (flags.s && source[i] === ".") {
            pattern += inCharGroup ? `${source[i]}\r
` : `[${source[i]}\r
]`;
            continue;
        }
        pattern += source[i];
        if (source[i] === "\\") {
            isEscaped = true;
        } else if (inCharGroup && source[i] === "]") {
            inCharGroup = false;
        } else if (!inCharGroup && source[i] === "[") {
            inCharGroup = true;
        }
    }
    try {
        new RegExp(pattern);
    } catch  {
        console.warn(`Could not convert regex pattern at ${refs.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`);
        return regex.source;
    }
    return pattern;
}
export function parseRecordDef(def, refs) {
    if (refs.target === "openAi") {
        console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead.");
    }
    if (refs.target === "openApi3" && def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodEnum) {
        return {
            type: "object",
            required: def.keyType._def.values,
            properties: def.keyType._def.values.reduce((acc, key)=>({
                    ...acc,
                    [key]: parseDef(def.valueType._def, {
                        ...refs,
                        currentPath: [
                            ...refs.currentPath,
                            "properties",
                            key
                        ]
                    }) ?? {}
                }), {}),
            additionalProperties: refs.rejectedAdditionalProperties
        };
    }
    const schema2 = {
        type: "object",
        additionalProperties: parseDef(def.valueType._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "additionalProperties"
            ]
        }) ?? refs.allowedAdditionalProperties
    };
    if (refs.target === "openApi3") {
        return schema2;
    }
    if (def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodString && def.keyType._def.checks?.length) {
        const { type: type2, ...keyType } = parseStringDef(def.keyType._def, refs);
        return {
            ...schema2,
            propertyNames: keyType
        };
    } else if (def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodEnum) {
        return {
            ...schema2,
            propertyNames: {
                enum: def.keyType._def.values
            }
        };
    } else if (def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodBranded && def.keyType._def.type._def.typeName === ZodFirstPartyTypeKind.ZodString && def.keyType._def.type._def.checks?.length) {
        const { type: type2, ...keyType } = parseBrandedDef(def.keyType._def, refs);
        return {
            ...schema2,
            propertyNames: keyType
        };
    }
    return schema2;
}
export function parseMapDef(def, refs) {
    if (refs.mapStrategy === "record") {
        return parseRecordDef(def, refs);
    }
    const keys = parseDef(def.keyType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "items",
            "items",
            "0"
        ]
    }) || {};
    const values = parseDef(def.valueType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "items",
            "items",
            "1"
        ]
    }) || {};
    return {
        type: "array",
        maxItems: 125,
        items: {
            type: "array",
            items: [
                keys,
                values
            ],
            minItems: 2,
            maxItems: 2
        }
    };
}
export function parseNativeEnumDef(def) {
    const object4 = def.values;
    const actualKeys = Object.keys(def.values).filter((key)=>{
        return typeof object4[object4[key]] !== "number";
    });
    const actualValues = actualKeys.map((key)=>object4[key]);
    const parsedTypes = Array.from(new Set(actualValues.map((values)=>typeof values)));
    return {
        type: parsedTypes.length === 1 ? parsedTypes[0] === "string" ? "string" : "number" : [
            "string",
            "number"
        ],
        enum: actualValues
    };
}
export function parseNeverDef() {
    return {
        not: {}
    };
}
export function parseNullDef(refs) {
    return refs.target === "openApi3" ? {
        enum: [
            "null"
        ],
        nullable: true
    } : {
        type: "null"
    };
}
export function parseUnionDef(def, refs) {
    if (refs.target === "openApi3") return asAnyOf(def, refs);
    const options2 = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
    if (options2.every((x)=>x._def.typeName in primitiveMappings && (!x._def.checks || !x._def.checks.length))) {
        const types3 = options2.reduce((types4, x)=>{
            const type2 = primitiveMappings[x._def.typeName];
            return type2 && !types4.includes(type2) ? [
                ...types4,
                type2
            ] : types4;
        }, []);
        return {
            type: types3.length > 1 ? types3 : types3[0]
        };
    } else if (options2.every((x)=>x._def.typeName === "ZodLiteral" && !x.description)) {
        const types3 = options2.reduce((acc, x)=>{
            const type2 = typeof x._def.value;
            switch(type2){
                case "string":
                case "number":
                case "boolean":
                    return [
                        ...acc,
                        type2
                    ];
                case "bigint":
                    return [
                        ...acc,
                        "integer"
                    ];
                case "object":
                    if (x._def.value === null) return [
                        ...acc,
                        "null"
                    ];
                case "symbol":
                case "undefined":
                case "function":
                default:
                    return acc;
            }
        }, []);
        if (types3.length === options2.length) {
            const uniqueTypes = types3.filter((x, i, a)=>a.indexOf(x) === i);
            return {
                type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
                enum: options2.reduce((acc, x)=>{
                    return acc.includes(x._def.value) ? acc : [
                        ...acc,
                        x._def.value
                    ];
                }, [])
            };
        }
    } else if (options2.every((x)=>x._def.typeName === "ZodEnum")) {
        return {
            type: "string",
            enum: options2.reduce((acc, x)=>[
                    ...acc,
                    ...x._def.values.filter((x2)=>!acc.includes(x2))
                ], [])
        };
    }
    return asAnyOf(def, refs);
}
export function parseNullableDef(def, refs) {
    if ([
        "ZodString",
        "ZodNumber",
        "ZodBigInt",
        "ZodBoolean",
        "ZodNull"
    ].includes(def.innerType._def.typeName) && (!def.innerType._def.checks || !def.innerType._def.checks.length)) {
        if (refs.target === "openApi3") {
            return {
                type: primitiveMappings[def.innerType._def.typeName],
                nullable: true
            };
        }
        return {
            type: [
                primitiveMappings[def.innerType._def.typeName],
                "null"
            ]
        };
    }
    if (refs.target === "openApi3") {
        const base2 = parseDef(def.innerType._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath
            ]
        });
        if (base2 && "$ref" in base2) return {
            allOf: [
                base2
            ],
            nullable: true
        };
        return base2 && {
            ...base2,
            nullable: true
        };
    }
    const base = parseDef(def.innerType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "anyOf",
            "0"
        ]
    });
    return base && {
        anyOf: [
            base,
            {
                type: "null"
            }
        ]
    };
}
export function parseNumberDef(def, refs) {
    const res = {
        type: "number"
    };
    if (!def.checks) return res;
    for (const check2 of def.checks){
        switch(check2.kind){
            case "int":
                res.type = "integer";
                addErrorMessage(res, "type", check2.message, refs);
                break;
            case "min":
                if (refs.target === "jsonSchema7") {
                    if (check2.inclusive) {
                        setResponseValueAndErrors(res, "minimum", check2.value, check2.message, refs);
                    } else {
                        setResponseValueAndErrors(res, "exclusiveMinimum", check2.value, check2.message, refs);
                    }
                } else {
                    if (!check2.inclusive) {
                        res.exclusiveMinimum = true;
                    }
                    setResponseValueAndErrors(res, "minimum", check2.value, check2.message, refs);
                }
                break;
            case "max":
                if (refs.target === "jsonSchema7") {
                    if (check2.inclusive) {
                        setResponseValueAndErrors(res, "maximum", check2.value, check2.message, refs);
                    } else {
                        setResponseValueAndErrors(res, "exclusiveMaximum", check2.value, check2.message, refs);
                    }
                } else {
                    if (!check2.inclusive) {
                        res.exclusiveMaximum = true;
                    }
                    setResponseValueAndErrors(res, "maximum", check2.value, check2.message, refs);
                }
                break;
            case "multipleOf":
                setResponseValueAndErrors(res, "multipleOf", check2.value, check2.message, refs);
                break;
        }
    }
    return res;
}
export function parseObjectDef(def, refs) {
    const forceOptionalIntoNullable = refs.target === "openAi";
    const result = {
        type: "object",
        properties: {}
    };
    const required2 = [];
    const shape = def.shape();
    for(const propName in shape){
        let propDef = shape[propName];
        if (propDef === void 0 || propDef._def === void 0) {
            continue;
        }
        let propOptional = safeIsOptional(propDef);
        if (propOptional && forceOptionalIntoNullable) {
            if (propDef instanceof ZodOptional) {
                propDef = propDef._def.innerType;
            }
            if (!propDef.isNullable()) {
                propDef = propDef.nullable();
            }
            propOptional = false;
        }
        const parsedDef = parseDef(propDef._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "properties",
                propName
            ],
            propertyPath: [
                ...refs.currentPath,
                "properties",
                propName
            ]
        });
        if (parsedDef === void 0) {
            continue;
        }
        result.properties[propName] = parsedDef;
        if (!propOptional) {
            required2.push(propName);
        }
    }
    if (required2.length) {
        result.required = required2;
    }
    const additionalProperties = decideAdditionalProperties(def, refs);
    if (additionalProperties !== void 0) {
        result.additionalProperties = additionalProperties;
    }
    return result;
}
function decideAdditionalProperties(def, refs) {
    if (def.catchall._def.typeName !== "ZodNever") {
        return parseDef(def.catchall._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "additionalProperties"
            ]
        });
    }
    switch(def.unknownKeys){
        case "passthrough":
            return refs.allowedAdditionalProperties;
        case "strict":
            return refs.rejectedAdditionalProperties;
        case "strip":
            return refs.removeAdditionalStrategy === "strict" ? refs.allowedAdditionalProperties : refs.rejectedAdditionalProperties;
    }
}
function safeIsOptional(schema2) {
    try {
        return schema2.isOptional();
    } catch  {
        return true;
    }
}
export function parsePromiseDef(def, refs) {
    return parseDef(def.type._def, refs);
}
export function parseSetDef(def, refs) {
    const items = parseDef(def.valueType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "items"
        ]
    });
    const schema2 = {
        type: "array",
        uniqueItems: true,
        items
    };
    if (def.minSize) {
        setResponseValueAndErrors(schema2, "minItems", def.minSize.value, def.minSize.message, refs);
    }
    if (def.maxSize) {
        setResponseValueAndErrors(schema2, "maxItems", def.maxSize.value, def.maxSize.message, refs);
    }
    return schema2;
}
export function parseTupleDef(def, refs) {
    if (def.rest) {
        return {
            type: "array",
            minItems: def.items.length,
            items: def.items.map((x, i)=>parseDef(x._def, {
                    ...refs,
                    currentPath: [
                        ...refs.currentPath,
                        "items",
                        `${i}`
                    ]
                })).reduce((acc, x)=>x === void 0 ? acc : [
                    ...acc,
                    x
                ], []),
            additionalItems: parseDef(def.rest._def, {
                ...refs,
                currentPath: [
                    ...refs.currentPath,
                    "additionalItems"
                ]
            })
        };
    } else {
        return {
            type: "array",
            minItems: def.items.length,
            maxItems: def.items.length,
            items: def.items.map((x, i)=>parseDef(x._def, {
                    ...refs,
                    currentPath: [
                        ...refs.currentPath,
                        "items",
                        `${i}`
                    ]
                })).reduce((acc, x)=>x === void 0 ? acc : [
                    ...acc,
                    x
                ], [])
        };
    }
}
export function parseUndefinedDef() {
    return {
        not: {}
    };
}
export function parseUnknownDef() {
    return {};
}
export function parseDef(def, refs, forceResolution = false) {
    const seenItem = refs.seen.get(def);
    if (refs.override) {
        const overrideResult = refs.override?.(def, refs, seenItem, forceResolution);
        if (overrideResult !== ignoreOverride) {
            return overrideResult;
        }
    }
    if (seenItem && !forceResolution) {
        const seenSchema = get$ref(seenItem, refs);
        if (seenSchema !== void 0) {
            return seenSchema;
        }
    }
    const newItem = {
        def,
        path: refs.currentPath,
        jsonSchema: void 0
    };
    refs.seen.set(def, newItem);
    const jsonSchemaOrGetter = selectParser(def, def.typeName, refs);
    const jsonSchema2 = typeof jsonSchemaOrGetter === "function" ? parseDef(jsonSchemaOrGetter(), refs) : jsonSchemaOrGetter;
    if (jsonSchema2) {
        addMeta(def, refs, jsonSchema2);
    }
    if (refs.postProcess) {
        const postProcessResult = refs.postProcess(jsonSchema2, def, refs);
        newItem.jsonSchema = jsonSchema2;
        return postProcessResult;
    }
    newItem.jsonSchema = jsonSchema2;
    return jsonSchema2;
}
export function getMethodLiteral(schema2) {
    const shape = getObjectShape(schema2);
    const methodSchema = shape?.method;
    if (!methodSchema) {
        throw new Error("Schema is missing a method literal");
    }
    const value = getLiteralValue(methodSchema);
    if (typeof value !== "string") {
        throw new Error("Schema method literal must be a string");
    }
    return value;
}
export function parseWithCompat(schema2, data) {
    const result = safeParse3(schema2, data);
    if (!result.success) {
        throw result.error;
    }
    return result.data;
}
function isPlainObject2(value) {
    return value !== null && typeof value === "object" && !Array.isArray(value);
}
export function mergeCapabilities(base, additional) {
    const result = {
        ...base
    };
    for(const key in additional){
        const k2 = key;
        const addValue = additional[k2];
        if (addValue === void 0) continue;
        const baseValue = result[k2];
        if (isPlainObject2(baseValue) && isPlainObject2(addValue)) {
            result[k2] = {
                ...baseValue,
                ...addValue
            };
        } else {
            result[k2] = addValue;
        }
    }
    return result;
}
export function createDefaultAjvInstance() {
    const ajv2 = new import_ajv2.default({
        strict: false,
        validateFormats: true,
        validateSchema: false,
        allErrors: true
    });
    const addFormats = import_ajv_formats.default;
    addFormats(ajv2);
    return ajv2;
}
export function assertToolsCallTaskCapability(requests, method, entityName) {
    if (!requests) {
        throw new Error(`${entityName} does not support task creation (required for ${method})`);
    }
    switch(method){
        case "tools/call":
            if (!requests.tools?.call) {
                throw new Error(`${entityName} does not support task creation for tools/call (required for ${method})`);
            }
            break;
        default:
            break;
    }
}
export function assertClientRequestTaskCapability(requests, method, entityName) {
    if (!requests) {
        throw new Error(`${entityName} does not support task creation (required for ${method})`);
    }
    switch(method){
        case "sampling/createMessage":
            if (!requests.sampling?.createMessage) {
                throw new Error(`${entityName} does not support task creation for sampling/createMessage (required for ${method})`);
            }
            break;
        case "elicitation/create":
            if (!requests.elicitation?.create) {
                throw new Error(`${entityName} does not support task creation for elicitation/create (required for ${method})`);
            }
            break;
        default:
            break;
    }
}
export function applyElicitationDefaults(schema2, data) {
    if (!schema2 || data === null || typeof data !== "object") return;
    if (schema2.type === "object" && schema2.properties && typeof schema2.properties === "object") {
        const obj = data;
        const props = schema2.properties;
        for (const key of Object.keys(props)){
            const propSchema = props[key];
            if (obj[key] === void 0 && Object.prototype.hasOwnProperty.call(propSchema, "default")) {
                obj[key] = propSchema.default;
            }
            if (obj[key] !== void 0) {
                applyElicitationDefaults(propSchema, obj[key]);
            }
        }
    }
    if (Array.isArray(schema2.anyOf)) {
        for (const sub of schema2.anyOf){
            if (typeof sub !== "boolean") {
                applyElicitationDefaults(sub, data);
            }
        }
    }
    if (Array.isArray(schema2.oneOf)) {
        for (const sub of schema2.oneOf){
            if (typeof sub !== "boolean") {
                applyElicitationDefaults(sub, data);
            }
        }
    }
}
export function getSupportedElicitationModes(capabilities) {
    if (!capabilities) {
        return {
            supportsFormMode: false,
            supportsUrlMode: false
        };
    }
    const hasFormCapability = capabilities.form !== void 0;
    const hasUrlCapability = capabilities.url !== void 0;
    const supportsFormMode = hasFormCapability || !hasFormCapability && !hasUrlCapability;
    const supportsUrlMode = hasUrlCapability;
    return {
        supportsFormMode,
        supportsUrlMode
    };
}
function noop(_arg) {}
export function createParser(callbacks) {
    if (typeof callbacks == "function") throw new TypeError("`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?");
    const { onEvent = noop, onError = noop, onRetry = noop, onComment } = callbacks, pendingFragments = [];
    let isFirstChunk = true, id, data = "", dataLines = 0, eventType;
    function feed(chunk) {
        if (isFirstChunk && (isFirstChunk = false, chunk.charCodeAt(0) === 239 && chunk.charCodeAt(1) === 187 && chunk.charCodeAt(2) === 191 && (chunk = chunk.slice(3))), pendingFragments.length === 0) {
            const trailing2 = processLines(chunk);
            trailing2 !== "" && pendingFragments.push(trailing2);
            return;
        }
        if (chunk.indexOf(`
`) === -1 && chunk.indexOf("\r") === -1) {
            pendingFragments.push(chunk);
            return;
        }
        pendingFragments.push(chunk);
        const input = pendingFragments.join("");
        pendingFragments.length = 0;
        const trailing = processLines(input);
        trailing !== "" && pendingFragments.push(trailing);
    }
    function processLines(chunk) {
        let searchIndex = 0;
        if (chunk.indexOf("\r") === -1) {
            let lfIndex = chunk.indexOf(`
`, searchIndex);
            for(; lfIndex !== -1;){
                if (searchIndex === lfIndex) {
                    dataLines > 0 && onEvent({
                        id,
                        event: eventType,
                        data
                    }), id = void 0, data = "", dataLines = 0, eventType = void 0, searchIndex = lfIndex + 1, lfIndex = chunk.indexOf(`
`, searchIndex);
                    continue;
                }
                const firstCharCode = chunk.charCodeAt(searchIndex);
                if (isDataPrefix(chunk, searchIndex, firstCharCode)) {
                    const valueStart = chunk.charCodeAt(searchIndex + 5) === SPACE ? searchIndex + 6 : searchIndex + 5, value = chunk.slice(valueStart, lfIndex);
                    if (dataLines === 0 && chunk.charCodeAt(lfIndex + 1) === LF) {
                        onEvent({
                            id,
                            event: eventType,
                            data: value
                        }), id = void 0, data = "", eventType = void 0, searchIndex = lfIndex + 2, lfIndex = chunk.indexOf(`
`, searchIndex);
                        continue;
                    }
                    data = dataLines === 0 ? value : `${data}
${value}`, dataLines++;
                } else isEventPrefix(chunk, searchIndex, firstCharCode) ? eventType = chunk.slice(chunk.charCodeAt(searchIndex + 6) === SPACE ? searchIndex + 7 : searchIndex + 6, lfIndex) || void 0 : parseLine(chunk, searchIndex, lfIndex);
                searchIndex = lfIndex + 1, lfIndex = chunk.indexOf(`
`, searchIndex);
            }
            return chunk.slice(searchIndex);
        }
        for(; searchIndex < chunk.length;){
            const crIndex = chunk.indexOf("\r", searchIndex), lfIndex = chunk.indexOf(`
`, searchIndex);
            let lineEnd = -1;
            if (crIndex !== -1 && lfIndex !== -1 ? lineEnd = crIndex < lfIndex ? crIndex : lfIndex : crIndex !== -1 ? crIndex === chunk.length - 1 ? lineEnd = -1 : lineEnd = crIndex : lfIndex !== -1 && (lineEnd = lfIndex), lineEnd === -1) break;
            parseLine(chunk, searchIndex, lineEnd), searchIndex = lineEnd + 1, chunk.charCodeAt(searchIndex - 1) === CR && chunk.charCodeAt(searchIndex) === LF && searchIndex++;
        }
        return chunk.slice(searchIndex);
    }
    function parseLine(chunk, start, end) {
        if (start === end) {
            dispatchEvent();
            return;
        }
        const firstCharCode = chunk.charCodeAt(start);
        if (isDataPrefix(chunk, start, firstCharCode)) {
            const valueStart = chunk.charCodeAt(start + 5) === SPACE ? start + 6 : start + 5, value2 = chunk.slice(valueStart, end);
            data = dataLines === 0 ? value2 : `${data}
${value2}`, dataLines++;
            return;
        }
        if (isEventPrefix(chunk, start, firstCharCode)) {
            eventType = chunk.slice(chunk.charCodeAt(start + 6) === SPACE ? start + 7 : start + 6, end) || void 0;
            return;
        }
        if (firstCharCode === 105 && chunk.charCodeAt(start + 1) === 100 && chunk.charCodeAt(start + 2) === 58) {
            const value2 = chunk.slice(chunk.charCodeAt(start + 3) === SPACE ? start + 4 : start + 3, end);
            id = value2.includes("\0") ? void 0 : value2;
            return;
        }
        if (firstCharCode === 58) {
            if (onComment) {
                const line2 = chunk.slice(start, end);
                onComment(line2.slice(chunk.charCodeAt(start + 1) === SPACE ? 2 : 1));
            }
            return;
        }
        const line = chunk.slice(start, end), fieldSeparatorIndex = line.indexOf(":");
        if (fieldSeparatorIndex === -1) {
            processField(line, "", line);
            return;
        }
        const field4 = line.slice(0, fieldSeparatorIndex), offset = line.charCodeAt(fieldSeparatorIndex + 1) === SPACE ? 2 : 1, value = line.slice(fieldSeparatorIndex + offset);
        processField(field4, value, line);
    }
    function processField(field4, value, line) {
        switch(field4){
            case "event":
                eventType = value || void 0;
                break;
            case "data":
                data = dataLines === 0 ? value : `${data}
${value}`, dataLines++;
                break;
            case "id":
                id = value.includes("\0") ? void 0 : value;
                break;
            case "retry":
                /^\d+$/.test(value) ? onRetry(parseInt(value, 10)) : onError(new ParseError(`Invalid \`retry\` value: "${value}"`, {
                    type: "invalid-retry",
                    value,
                    line
                }));
                break;
            default:
                onError(new ParseError(`Unknown field "${field4.length > 20 ? `${field4.slice(0, 20)}\u2026` : field4}"`, {
                    type: "unknown-field",
                    field: field4,
                    value,
                    line
                }));
                break;
        }
    }
    function dispatchEvent() {
        dataLines > 0 && onEvent({
            id,
            event: eventType,
            data
        }), id = void 0, data = "", dataLines = 0, eventType = void 0;
    }
    function reset(options2 = {}) {
        if (options2.consume && pendingFragments.length > 0) {
            const incompleteLine = pendingFragments.join("");
            parseLine(incompleteLine, 0, incompleteLine.length);
        }
        isFirstChunk = true, id = void 0, data = "", dataLines = 0, eventType = void 0, pendingFragments.length = 0;
    }
    return {
        feed,
        reset
    };
}
function isDataPrefix(chunk, i, firstCharCode) {
    return firstCharCode === 100 && chunk.charCodeAt(i + 1) === 97 && chunk.charCodeAt(i + 2) === 116 && chunk.charCodeAt(i + 3) === 97 && chunk.charCodeAt(i + 4) === 58;
}
function isEventPrefix(chunk, i, firstCharCode) {
    return firstCharCode === 101 && chunk.charCodeAt(i + 1) === 118 && chunk.charCodeAt(i + 2) === 101 && chunk.charCodeAt(i + 3) === 110 && chunk.charCodeAt(i + 4) === 116 && chunk.charCodeAt(i + 5) === 58;
}
export function syntaxError(message) {
    const DomException = globalThis.DOMException;
    return typeof DomException == "function" ? new DomException(message, "SyntaxError") : new SyntaxError(message);
}
export function flattenError2(err) {
    return err instanceof Error ? "errors" in err && Array.isArray(err.errors) ? err.errors.map(flattenError2).join(", ") : "cause" in err && err.cause instanceof Error ? `${err}: ${flattenError2(err.cause)}` : err.message : `${err}`;
}
export function inspectableError(err) {
    return {
        type: err.type,
        message: err.message,
        code: err.code,
        defaultPrevented: err.defaultPrevented,
        cancelable: err.cancelable,
        timeStamp: err.timeStamp
    };
}
export function getBaseURL() {
    const doc = "document" in globalThis ? globalThis.document : void 0;
    return doc && typeof doc == "object" && "baseURI" in doc && typeof doc.baseURI == "string" ? doc.baseURI : void 0;
}
export function normalizeHeaders(headers) {
    if (!headers) return {};
    if (headers instanceof Headers) {
        return Object.fromEntries(headers.entries());
    }
    if (Array.isArray(headers)) {
        return Object.fromEntries(headers);
    }
    return {
        ...headers
    };
}
export function createFetchWithInit(baseFetch = fetch, baseInit) {
    if (!baseInit) {
        return baseFetch;
    }
    return async (url2, init)=>{
        const mergedInit = {
            ...baseInit,
            ...init,
            headers: init?.headers ? {
                ...normalizeHeaders(baseInit.headers),
                ...normalizeHeaders(init.headers)
            } : baseInit.headers
        };
        return baseFetch(url2, mergedInit);
    };
}
export function deserializeMessage(line) {
    return JSONRPCMessageSchema.parse(JSON.parse(line));
}
export function serializeMessage(message) {
    return JSON.stringify(message) + "\n";
}
export function getDefaultEnvironment() {
    const env = {};
    for (const key of DEFAULT_INHERITED_ENV_VARS){
        const value = import_node_process.default.env[key];
        if (value === void 0) {
            continue;
        }
        if (value.startsWith("()")) {
            continue;
        }
        env[key] = value;
    }
    return env;
}
export function isElectron() {
    return "type" in import_node_process.default;
}
export async function terminateStreamableHttpSession(transport, options2) {
    const result = await sendSessionDelete(transport, options2);
    try {
        options2.onResult?.(result);
    } catch  {}
    return result;
}
async function sendSessionDelete(transport, options2) {
    if (transport.sessionId === void 0) {
        return {
            outcome: "no_session",
            durationMs: 0
        };
    }
    const startMs = Date.now();
    const deletion = transport.terminateSession();
    deletion.catch(()=>void 0);
    try {
        await withTimeout(deletion, options2.timeoutMs);
    } catch (error3) {
        const durationMs2 = Date.now() - startMs;
        if (error3 instanceof TimeoutError) {
            return {
                outcome: "timeout",
                durationMs: durationMs2
            };
        }
        if (error3 instanceof StreamableHTTPError && error3.code !== void 0 && error3.code > 0) {
            return {
                outcome: "rejected",
                durationMs: durationMs2,
                httpStatus: error3.code,
                error: error3.message
            };
        }
        return {
            outcome: "failed",
            durationMs: durationMs2,
            error: String(error3)
        };
    }
    const httpStatus = options2.deleteObserver?.lastDeleteStatus;
    return {
        outcome: httpStatus === 405 ? "unsupported" : "terminated",
        durationMs: Date.now() - startMs,
        ...httpStatus !== void 0 ? {
            httpStatus
        } : {}
    };
}
export function mcpCredentialFingerprint(args) {
    const headers = Object.entries(args.headers ?? {}).map(([name17, value])=>[
            name17.toLowerCase(),
            value
        ]).sort(([a], [b2])=>a < b2 ? -1 : a > b2 ? 1 : 0);
    return (0, import_node_crypto14.createHash)("sha256").update(JSON.stringify([
        args.url,
        headers,
        args.accessToken ?? null
    ])).digest("hex");
}
export function sessionlessInitializeOf(client, transport, credentialFingerprint) {
    const protocolVersion2 = transport.protocolVersion;
    if (transport.sessionId !== void 0 || protocolVersion2 === void 0) {
        return void 0;
    }
    const capabilities = client.getServerCapabilities();
    const serverInfo = client.getServerVersion();
    if (capabilities === void 0 || serverInfo === void 0) {
        return void 0;
    }
    const instructions = client.getInstructions();
    return {
        result: {
            protocolVersion: protocolVersion2,
            capabilities,
            serverInfo,
            ...instructions === void 0 ? {} : {
                instructions
            }
        },
        credentialFingerprint: credentialFingerprint()
    };
}
export function captureStdioStderr(stderr) {
    let captured = "";
    let ended = stderr === null;
    if (stderr !== null) {
        stderr.on("data", (chunk)=>{
            const remaining = STDIO_CONNECT_STDERR_CAPTURE_MAX_BYTES - captured.length;
            if (remaining <= 0) {
                return;
            }
            captured += chunk.toString().slice(0, remaining);
        });
        stderr.once("end", ()=>{
            ended = true;
        });
    }
    return {
        read: ()=>sanitizeErrorMessageForLog(captured.replace(/\s+/g, " ").trim(), {
                maxLength: STDIO_CONNECT_STDERR_CAPTURE_MAX_BYTES
            }),
        waitForFlush: async ()=>{
            if (ended || stderr === null) {
                return;
            }
            await new Promise((resolve36)=>{
                let timer2;
                const finish = ()=>{
                    if (timer2 !== void 0) {
                        clearTimeout(timer2);
                    }
                    stderr.off("end", finish);
                    resolve36();
                };
                timer2 = setTimeout(finish, STDERR_FLUSH_TIMEOUT_MS);
                timer2.unref();
                stderr.once("end", finish);
            });
        }
    };
}
export function annotateMcpStdioConnectError(error3, stderrTail) {
    if (stderrTail === "") {
        return error3;
    }
    const annotated = error3 instanceof Error ? error3 : new Error(String(error3));
    annotated.message = `${annotated.message}; stderr: ${stderrTail}`;
    Object.defineProperty(annotated, STDERR_TAIL_PROPERTY, {
        value: stderrTail,
        enumerable: false,
        configurable: true,
        writable: true
    });
    return annotated;
}
export function getMcpStdioStderrTail(error3) {
    if (!(error3 instanceof Error)) {
        return void 0;
    }
    const tail = error3[STDERR_TAIL_PROPERTY];
    return typeof tail === "string" ? tail : void 0;
}
export function mcpTransportOf(config2) {
    if (config2 === void 0) return "unknown";
    return "url" in config2 ? "http" : "stdio";
}
export function getMcpOAuthCallbackOwner(redirectUrl) {
    return {
        workspaceId: redirectUrl
    };
}
export function encodeMcpOAuthState(identifier2, owner, attemptId) {
    const payload = {
        id: identifier2,
        owner,
        ...attemptId ? {
            attemptId
        } : {}
    };
    return Buffer.from(JSON.stringify(payload), "utf8").toString("base64url");
}
function buildStaticClientInformation(authConfig, redirectUrl) {
    const clientId = resolvedOAuthClientId(authConfig?.CLIENT_ID);
    if (clientId === void 0) {
        return void 0;
    }
    return {
        client_id: clientId,
        ...authConfig?.CLIENT_SECRET ? {
            client_secret: authConfig.CLIENT_SECRET
        } : {},
        redirect_uris: getCanonicalMcpOAuthRedirectUris(redirectUrl),
        grant_types: [
            ...OAUTH_GRANT_TYPES
        ],
        response_types: [
            ...OAUTH_RESPONSE_TYPES
        ],
        token_endpoint_auth_method: "none"
    };
}
function resolveClientInformation({ storedClientInformation, staticClientInformation }) {
    if (!staticClientInformation) {
        return storedClientInformation;
    }
    if (storedClientInformation && storedClientInformation.client_id === staticClientInformation.client_id) {
        return {
            ...staticClientInformation,
            ...storedClientInformation,
            client_secret: staticClientInformation.client_secret ?? storedClientInformation.client_secret,
            redirect_uris: staticClientInformation.redirect_uris,
            grant_types: storedClientInformation.grant_types ?? staticClientInformation.grant_types,
            response_types: storedClientInformation.response_types ?? staticClientInformation.response_types,
            token_endpoint_auth_method: storedClientInformation.token_endpoint_auth_method ?? staticClientInformation.token_endpoint_auth_method
        };
    }
    return staticClientInformation;
}
export async function createInMemoryOAuthClientProvider(args) {
    const { serverName, config: config2, tokenStorage } = args;
    const restMcpProviderMetadata = await resolveRestMcpProviderMetadataFromPrm(config2.url, args.fetchImpl);
    const authRedirectUrl = mcpOAuthLoopbackRedirectUrl({
        loopbackIpv4: restMcpProviderMetadata?.loopbackIpv4,
        redirectUrl: args.authRedirectUrl
    });
    const staticClientInformation = buildStaticClientInformation(config2.auth, authRedirectUrl);
    const clientInformation = resolveClientInformation({
        storedClientInformation: await tokenStorage.loadClientInformation(),
        staticClientInformation
    });
    return new InMemoryOAuthClientProvider({
        identifier: serverName,
        redirectUrl: authRedirectUrl,
        serverUrl: config2.url,
        restMcpProviderMetadata,
        clientMetadata: {
            redirect_uris: getCanonicalMcpOAuthRedirectUris(authRedirectUrl),
            token_endpoint_auth_method: "none",
            grant_types: [
                ...OAUTH_GRANT_TYPES
            ],
            response_types: [
                ...OAUTH_RESPONSE_TYPES
            ],
            client_name: "Cursor",
            logo_uri: MCP_OAUTH_CLIENT_LOGO_URI
        },
        scopes: config2.auth?.scopes,
        tokens: await tokenStorage.loadTokens(),
        clientInformation,
        saveTokens: (newTokens)=>tokenStorage.saveTokens(newTokens),
        prepareForRefresh: ()=>tokenStorage.prepareForRefresh?.() ?? Promise.resolve(),
        releaseRefreshLeaseOnError: (underlyingError)=>tokenStorage.releaseRefreshLeaseOnError?.(underlyingError) ?? Promise.resolve(),
        invalidateCredentials: tokenStorage.invalidateCredentials ? (scope)=>tokenStorage.invalidateCredentials(scope) : void 0,
        saveClientInformation: (clientInfo)=>tokenStorage.saveClientInformation(clientInfo),
        addClientAuthentication: tokenStorage.tokenEndpointAuth?.({
            clientId: clientInformation?.client_id
        })
    });
}
function killRegisteredStdioMcpChildren() {
    for (const childPid of liveStdioMcpChildPids){
        try {
            process.kill(childPid, "SIGKILL");
        } catch  {}
    }
}
export function registerStdioMcpChildPid(pid) {
    liveStdioMcpChildPids.add(pid);
    if (stdioMcpKillOnExitInstalled) {
        return;
    }
    stdioMcpKillOnExitInstalled = true;
    process.on("exit", killRegisteredStdioMcpChildren);
}
export function unregisterStdioMcpChildPid(pid) {
    liveStdioMcpChildPids.delete(pid);
}
export function wrapDefaultStdioSpawnAsWorkload(base) {
    if (base !== void 0 || process.platform !== "linux") {
        return base;
    }
    return (command, args, opts)=>spawnWorkload(import_node_child_process12.spawn, command, args, opts);
}
export function structuredContentOf(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value) ? value : void 0;
}
export function restMcpTransportFetch(url2, headers, fetch2) {
    const cursorAuthSplit = splitRestMcpCursorAuthHeader(url2, headers);
    const rawFetch = fetch2 ?? (globalThis.fetch ? globalThis.fetch.bind(globalThis) : void 0);
    const baseFetch = cursorAuthSplit.cursorAuthHeaderValue !== void 0 && cursorAuthSplit.cursorAuthOrigin !== void 0 && rawFetch !== void 0 ? wrapFetchWithRestMcpCursorAuthHeader(()=>cursorAuthSplit.cursorAuthHeaderValue, cursorAuthSplit.cursorAuthOrigin, rawFetch) : rawFetch;
    return {
        transportHeaders: cursorAuthSplit.headers,
        baseFetch
    };
}
export function isMcpToolNotFoundError(error3) {
    if (error3 instanceof McpToolNotFoundError) {
        return true;
    }
    if (!(error3 instanceof Error) || error3.name !== "McpToolNotFoundError") {
        return false;
    }
    const candidate = error3;
    return typeof candidate.toolName === "string" && Array.isArray(candidate.availableTools);
}
function structuredLoggerToMcpOAuthLifecycleLogger(args) {
    const { logger: logger146, ctx } = args;
    return {
        debug: (message, metadata)=>logger146.debug(ctx, message, metadata),
        info: (message, metadata)=>logger146.info(ctx, message, metadata),
        warn: (message, metadata)=>logger146.warn(ctx, message, metadata),
        error: (message, error3, metadata)=>logger146.error(ctx, message, error3, metadata)
    };
}
export function createContextStructuredLifecycleLogger(ctx, logger146) {
    return structuredLoggerToMcpOAuthLifecycleLogger({
        ctx,
        logger: logger146
    });
}

export var coerce_exports = {};
Object.defineProperty(coerce_exports, "bigint", {
    enumerable: true,
    get: ()=>bigint2
});
Object.defineProperty(coerce_exports, "boolean", {
    enumerable: true,
    get: ()=>boolean3
});
Object.defineProperty(coerce_exports, "date", {
    enumerable: true,
    get: ()=>date3
});
Object.defineProperty(coerce_exports, "number", {
    enumerable: true,
    get: ()=>number3
});
Object.defineProperty(coerce_exports, "string", {
    enumerable: true,
    get: ()=>string3
});

import { createSpan } from "./agent-kv/dist/controlled.js";
import { init_dist2 } from "./constants/dist/index.js";
import { MCP_OAUTH_LOOPBACK_CALLBACK_URL } from "./constants/dist/mcp.js";
import { init_dist } from "./context/dist/index.js";
import { asyncMapValues } from "./dist_exports.js";
import { buildOAuthTokensSnapshotForLog, collectPaginatedMcpList, createLoggedMcpHttpFetch, emitMcpOAuthLifecycleLog, getMcpOAuthErrorLogMetadata, snapshotServerUrlForLog } from "./esm_exports8.js";
import { init_mcp_session_termination } from "./mcp-agent-exec/dist/mcp-session-termination.js";
import { ReplayedInitializeTransport, init_mcp_sessionless_initialize } from "./mcp-agent-exec/dist/mcp-sessionless-initialize.js";
import { init_shared_json_schema_validator, sharedJsonSchemaValidator } from "./mcp-agent-exec/dist/shared-json-schema-validator.js";
import { init_stdio_stderr } from "./mcp-agent-exec/dist/stdio-stderr.js";
import { AsyncCache } from "./mcp-core/dist/async-cache.js";
import { init_dist15 } from "./mcp-core/dist/index.js";
import { UnauthorizedError, init_auth3 } from "./node_modules/.pnpm/_f57967f111cc31bce3ae8564d9ceaa93/node_modules/@modelcontextprotocol/sdk/dist/esm/client/auth.js";
import { Client, init_client2 } from "./node_modules/.pnpm/_f57967f111cc31bce3ae8564d9ceaa93/node_modules/@modelcontextprotocol/sdk/dist/esm/client/index.js";
import { SSEClientTransport, init_sse } from "./node_modules/.pnpm/_f57967f111cc31bce3ae8564d9ceaa93/node_modules/@modelcontextprotocol/sdk/dist/esm/client/sse.js";
import { StdioClientTransport, init_stdio2 } from "./node_modules/.pnpm/_f57967f111cc31bce3ae8564d9ceaa93/node_modules/@modelcontextprotocol/sdk/dist/esm/client/stdio.js";
import { StreamableHTTPClientTransport, init_streamableHttp } from "./node_modules/.pnpm/_f57967f111cc31bce3ae8564d9ceaa93/node_modules/@modelcontextprotocol/sdk/dist/esm/client/streamableHttp.js";
import { ElicitRequestSchema, init_types8 } from "./node_modules/.pnpm/_f57967f111cc31bce3ae8564d9ceaa93/node_modules/@modelcontextprotocol/sdk/dist/esm/types.js";
import { McpInstructions, init_mcp_pb } from "./proto/dist/generated/agent/v1/mcp_pb.js";
import { init_dist3 } from "./utils/dist/index.js";
import { applyMcpOAuthProviderAuthorizationParams, isEntraAuthorizationUrl, mcpResourceUrlValidatorForUrl, stripConsentPrompt } from "./utils_pb_exports.js";
var import_node_child_process12, import_node_crypto16, __addDisposableResource23, __disposeResources23, COMMAND_MCP_CONNECT_TIMEOUT_MS, OAUTH_GRANT_TYPES, OAUTH_RESPONSE_TYPES, InMemoryOAuthClientProvider, liveStdioMcpChildPids, stdioMcpKillOnExitInstalled, McpSdkClient, McpToolNotFoundError, McpServerNotFoundError, ExecutableMcpToolSet, NoopMcpLease, ManagerMcpLease, McpManager;
export { COMMAND_MCP_CONNECT_TIMEOUT_MS, ExecutableMcpToolSet, InMemoryOAuthClientProvider, ManagerMcpLease, McpManager, McpSdkClient, McpServerNotFoundError, McpToolNotFoundError, NoopMcpLease, OAUTH_GRANT_TYPES, OAUTH_RESPONSE_TYPES, __addDisposableResource23, __disposeResources23, import_node_child_process12, import_node_crypto16, liveStdioMcpChildPids, stdioMcpKillOnExitInstalled };
var __wakaru_init_mcp4_initialized = false;
export function init_mcp4() {
if (__wakaru_init_mcp4_initialized) return;
__wakaru_init_mcp4_initialized = true;
"use strict";
import_node_child_process12 = require("node:child_process");
import_node_crypto16 = require("node:crypto");
init_dist2();
init_dist();
init_dist15();
init_mcp_pb();
init_dist3();
init_auth3();
init_client2();
init_sse();
init_stdio2();
init_streamableHttp();
init_types8();
init_mcp_session_termination();
init_mcp_sessionless_initialize();
init_shared_json_schema_validator();
init_stdio_stderr();
__addDisposableResource23 = function(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose2, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose2 = value[Symbol.asyncDispose];
        }
        if (dispose2 === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose2 = value[Symbol.dispose];
            if (async) inner = dispose2;
        }
        if (typeof dispose2 !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose2 = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value,
            dispose: dispose2,
            async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
};
__disposeResources23 = (function(SuppressedError2) {
    return function(env) {
        function fail3(e) {
            env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s3 = 0;
        function next() {
            while(r = env.stack.pop()){
                try {
                    if (!r.async && s3 === 1) return s3 = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s3 |= 2, Promise.resolve(result).then(next, function(e) {
                            fail3(e);
                            return next();
                        });
                    } else s3 |= 1;
                } catch (e) {
                    fail3(e);
                }
            }
            if (s3 === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function(error3, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error3, e.suppressed = suppressed, e;
});
COMMAND_MCP_CONNECT_TIMEOUT_MS = 6e4;
OAUTH_GRANT_TYPES = [
    "authorization_code",
    "refresh_token"
];
OAUTH_RESPONSE_TYPES = [
    "code"
];
InMemoryOAuthClientProvider = class {
    constructor(options2){
        this._identifier = options2.identifier;
        this._redirectUrl = options2.redirectUrl;
        this._serverUrl = options2.serverUrl;
        this._restMcpProviderMetadata = options2.restMcpProviderMetadata;
        this.validateResourceURL = options2.restMcpProviderMetadata?.omitResourceIndicator === true ? async ()=>void 0 : mcpResourceUrlValidatorForUrl(options2.serverUrl);
        this._clientMetadata = options2.clientMetadata;
        this._scopes = options2.scopes;
        this._tokens = options2.tokens;
        this._clientInformation = options2.clientInformation;
        this._saveTokens = options2.saveTokens;
        this._prepareForRefresh = options2.prepareForRefresh;
        this._releaseRefreshLeaseOnError = options2.releaseRefreshLeaseOnError;
        this._invalidateCredentials = options2.invalidateCredentials;
        this._saveClientInformation = options2.saveClientInformation;
        this.addClientAuthentication = options2.addClientAuthentication;
    }
    get redirectUrl() {
        return this._redirectUrl;
    }
    get clientMetadata() {
        return this._clientMetadata;
    }
    state() {
        this._oauthAttemptId = (0, import_node_crypto16.randomUUID)();
        this._oauthState = encodeMcpOAuthState(this._identifier, getMcpOAuthCallbackOwner(this._redirectUrl), this._oauthAttemptId);
        return this._oauthState;
    }
    clientInformation() {
        return this._clientInformation;
    }
    hasClientInformation() {
        return this._clientInformation !== void 0;
    }
    async saveClientInformation(info2) {
        this._clientInformation = info2;
        await this._saveClientInformation(info2);
    }
    tokens() {
        return this._tokens;
    }
    async saveTokens(tokens) {
        this._tokens = tokens;
        await this._saveTokens(tokens);
    }
    async prepareForRefresh() {
        await this._prepareForRefresh?.();
    }
    async releaseRefreshLeaseOnError(underlyingError) {
        await this._releaseRefreshLeaseOnError?.(underlyingError);
    }
    async invalidateCredentials(scope) {
        switch(scope){
            case "tokens":
                this._tokens = void 0;
                break;
            case "client":
                this._clientInformation = void 0;
                break;
            case "verifier":
                this._codeVerifier = void 0;
                this._oauthState = void 0;
                this._oauthAttemptId = void 0;
                break;
            case "all":
                this._tokens = void 0;
                this._clientInformation = void 0;
                this._codeVerifier = void 0;
                this._oauthState = void 0;
                this._oauthAttemptId = void 0;
                this._lastRedirectUrl = void 0;
                break;
            default:
                {
                    const _exhaustiveCheck = scope;
                    return _exhaustiveCheck;
                }
        }
        await this._invalidateCredentials?.(scope);
    }
    redirectToAuthorization(authorizationUrl) {
        applyConfiguredOAuthScopeOverride(authorizationUrl, this._scopes);
        if (this._serverUrl !== void 0) {
            applyMcpOAuthProviderAuthorizationParams(authorizationUrl, this._serverUrl);
        }
        for (const [key, value] of Object.entries(this._restMcpProviderMetadata?.authorizationParams ?? {})){
            authorizationUrl.searchParams.set(key, value);
        }
        if (this._restMcpProviderMetadata?.omitConsentPrompt === true || isEntraAuthorizationUrl(authorizationUrl)) {
            stripConsentPrompt(authorizationUrl);
        }
        this._lastRedirectUrl = authorizationUrl;
    }
    get lastRedirectUrl() {
        return this._lastRedirectUrl;
    }
    async saveCodeVerifier(codeVerifier) {
        this._codeVerifier = codeVerifier;
    }
    codeVerifier() {
        if (!this._codeVerifier) {
            throw new Error("No code verifier saved");
        }
        return this._codeVerifier;
    }
};
liveStdioMcpChildPids = new Set();
stdioMcpKillOnExitInstalled = false;
McpSdkClient = class _McpSdkClient {
    constructor(serverName, client, options2){
        this._callToolLock = Promise.resolve();
        this._callToolQueueDepth = 0;
        this._stateEnteredAtMs = Date.now();
        this._terminatingSession = false;
        this.serverName = serverName;
        this.client = client;
        this.tools = new AsyncCache();
        this.stateValue = options2.initialState;
        this._authProvider = options2.authProvider;
        this._authCodeExchange = options2.authCodeExchange;
        this._sessionId = options2.sessionId;
        this._protocolVersion = options2.protocolVersion;
        this._resumedInstructions = options2.resumedInstructions;
        this._sessionlessInitialize = options2.sessionlessInitialize;
        this.config = options2.config;
        this._oauthLifecycleLogger = options2.oauthLifecycleLogger;
        this._stdioChildPid = options2.stdioChildPid;
        this.setupElicitationHandler();
    }
    _stateKindLabel(state) {
        return state.kind === "requires_authentication" ? "needsAuth" : state.kind;
    }
    _logStateTransition(from2, to3, cause, errorMeta) {
        if (!this._oauthLifecycleLogger) {
            return;
        }
        const fromKind = this._stateKindLabel(from2);
        const toKind = this._stateKindLabel(to3);
        if (fromKind === toKind) {
            return;
        }
        const previousStateDurationMs = Date.now() - this._stateEnteredAtMs;
        const serverUrlHost = (()=>{
            try {
                const url2 = this.config && "url" in this.config ? this.config.url : void 0;
                return url2 ? new URL(url2).host : void 0;
            } catch  {
                return void 0;
            }
        })();
        emitMcpOAuthLifecycleLog({
            logger: this._oauthLifecycleLogger,
            event: "mcp_oauth_state_transition",
            metadata: {
                identifier: this.serverName,
                from: fromKind,
                to: toKind,
                cause,
                serverUrlHost,
                previousStateDurationMs,
                ...errorMeta
            }
        });
    }
    static createClient() {
        return new Client({
            name: "Cursor",
            version: "1.0.0"
        }, {
            capabilities: {
                elicitation: {
                    form: {}
                }
            },
            jsonSchemaValidator: sharedJsonSchemaValidator
        });
    }
    setupElicitationHandler() {
        this.client.setRequestHandler(ElicitRequestSchema, async (request3)=>{
            if (!this._currentElicitationProvider) {
                return {
                    action: "decline"
                };
            }
            if (!("requestedSchema" in request3.params)) {
                return {
                    action: "decline"
                };
            }
            try {
                const response = await this._currentElicitationProvider.elicit({
                    message: request3.params.message,
                    requestedSchema: request3.params.requestedSchema
                });
                return {
                    action: response.action,
                    content: response.content
                };
            } catch (_error) {
                return {
                    action: "decline"
                };
            }
        });
    }
    static async fromStreamableHttp(serverName, config2, tokenStorage, headers, authRedirectUrl, fetch2, httpExchangeLogging, oauthLifecycleLogger) {
        const url2 = new URL(config2.url);
        authRedirectUrl = authRedirectUrl ?? MCP_OAUTH_LOOPBACK_CALLBACK_URL;
        const oauthProvider = await createInMemoryOAuthClientProvider({
            serverName,
            config: config2,
            tokenStorage,
            authRedirectUrl,
            fetchImpl: fetch2
        });
        const tokens = oauthProvider.tokens();
        const cursorAuthSplit = splitRestMcpCursorAuthHeader(config2.url, headers);
        const transportHeaders = cursorAuthSplit.headers;
        const rawFetch = fetch2 ?? (globalThis.fetch ? globalThis.fetch.bind(globalThis) : void 0);
        const baseFetch = cursorAuthSplit.cursorAuthHeaderValue !== void 0 && cursorAuthSplit.cursorAuthOrigin !== void 0 && rawFetch !== void 0 ? wrapFetchWithRestMcpCursorAuthHeader(()=>cursorAuthSplit.cursorAuthHeaderValue, cursorAuthSplit.cursorAuthOrigin, rawFetch) : rawFetch;
        const buildLoggedFetch = (transportType)=>{
            if (baseFetch === void 0 || httpExchangeLogging === void 0) {
                return baseFetch;
            }
            return createLoggedMcpHttpFetch({
                fetch: baseFetch,
                logger: httpExchangeLogging.logger,
                metadata: {
                    ...httpExchangeLogging.metadata,
                    transportType
                }
            });
        };
        const createSseTransport = ()=>new SSEClientTransport(url2, {
                authProvider: oauthProvider,
                requestInit: {
                    headers: {
                        "User-Agent": "Cursor/1.0.0",
                        ...transportHeaders ?? {}
                    }
                },
                fetch: buildLoggedFetch("sse")
            });
        const client = _McpSdkClient.createClient();
        const isConnectAuthFailure = (error3)=>error3 instanceof UnauthorizedError || isOAuthCredentialRejectionError(error3);
        const exchangeAuthorizationCode = async (code)=>{
            if (!oauthProvider.hasClientInformation()) {
                throw new Error("OAuth client registration has not completed. The MCP server may not support dynamic client registration or the registration failed.");
            }
            await auth(oauthProvider, {
                serverUrl: url2.toString(),
                authorizationCode: code,
                ...baseFetch !== void 0 ? {
                    fetchFn: baseFetch
                } : {}
            });
            if (oauthLifecycleLogger) {
                emitMcpOAuthLifecycleLog({
                    logger: oauthLifecycleLogger,
                    event: "mcp_oauth_callback_completion",
                    metadata: {
                        identifier: serverName,
                        ...snapshotServerUrlForLog(url2.toString()),
                        ...buildOAuthTokensSnapshotForLog(oauthProvider.tokens(), {
                            expiresInIsFresh: true
                        })
                    }
                });
            }
        };
        const createRequiresAuthenticationClient = (sessionId)=>{
            const authUrl = oauthProvider.lastRedirectUrl?.toString?.() ?? "";
            const mcpClient = new _McpSdkClient(serverName, client, {
                oauthLifecycleLogger,
                initialState: {
                    kind: "requires_authentication",
                    url: authUrl,
                    callback: async (code)=>{
                        try {
                            await exchangeAuthorizationCode(code);
                            mcpClient.updateState({
                                kind: "ready"
                            });
                        } catch (authError) {
                            const errorMessage4 = authError instanceof Error ? authError.message : "Authentication failed";
                            throw new Error(`Authentication callback failed: ${errorMessage4}`);
                        }
                    }
                },
                authProvider: oauthProvider,
                authCodeExchange: exchangeAuthorizationCode,
                sessionId,
                config: config2
            });
            return mcpClient;
        };
        const connectSse = async ()=>{
            const sseTransport = createSseTransport();
            try {
                await client.connect(sseTransport);
                return new _McpSdkClient(serverName, client, {
                    initialState: {
                        kind: "ready"
                    },
                    authProvider: oauthProvider,
                    authCodeExchange: exchangeAuthorizationCode,
                    config: config2,
                    oauthLifecycleLogger
                });
            } catch (sseError) {
                await sseTransport.close().catch(()=>void 0);
                if (isConnectAuthFailure(sseError)) {
                    if (oauthLifecycleLogger) {
                        emitMcpOAuthLifecycleLog({
                            logger: oauthLifecycleLogger,
                            event: "mcp_oauth_state_transition",
                            metadata: {
                                identifier: serverName,
                                from: "connecting",
                                to: "needsAuth",
                                cause: "connect_auth_error",
                                transport: "sse",
                                refreshTokenPresent: Boolean(tokens?.refresh_token),
                                ...snapshotServerUrlForLog(url2.toString()),
                                ...getMcpOAuthErrorLogMetadata(sseError)
                            }
                        });
                    }
                    return createRequiresAuthenticationClient();
                }
                throw sseError;
            }
        };
        if (config2.type === "sse") {
            return connectSse();
        }
        const transport = new StreamableHTTPClientTransport(url2, {
            authProvider: oauthProvider,
            requestInit: {
                headers: {
                    "User-Agent": "Cursor/1.0.0",
                    ...transportHeaders ?? {}
                }
            },
            fetch: buildLoggedFetch("streamableHttp")
        });
        try {
            await client.connect(transport);
            const sessionlessInitialize = sessionlessInitializeOf(client, transport, ()=>mcpCredentialFingerprint({
                    url: config2.url,
                    headers,
                    accessToken: oauthProvider.tokens()?.access_token
                }));
            return new _McpSdkClient(serverName, client, {
                initialState: {
                    kind: "ready"
                },
                authProvider: oauthProvider,
                authCodeExchange: exchangeAuthorizationCode,
                sessionId: transport.sessionId,
                protocolVersion: transport.protocolVersion,
                ...sessionlessInitialize === void 0 ? {} : {
                    sessionlessInitialize
                },
                config: config2,
                oauthLifecycleLogger
            });
        } catch (error3) {
            if (isConnectAuthFailure(error3)) {
                if (oauthLifecycleLogger) {
                    emitMcpOAuthLifecycleLog({
                        logger: oauthLifecycleLogger,
                        event: "mcp_oauth_state_transition",
                        metadata: {
                            identifier: serverName,
                            from: "connecting",
                            to: "needsAuth",
                            cause: "connect_auth_error",
                            transport: "streamableHttp",
                            refreshTokenPresent: Boolean(tokens?.refresh_token),
                            ...snapshotServerUrlForLog(url2.toString()),
                            ...getMcpOAuthErrorLogMetadata(error3)
                        }
                    });
                }
                return createRequiresAuthenticationClient(transport.sessionId);
            }
            if (isSseFallbackAppropriate(error3)) {
                return connectSse();
            }
            throw error3;
        }
    }
    static async fromStreamableHttpWithoutOAuth(serverName, config2, fetch2) {
        const client = _McpSdkClient.createClient();
        const transport = new StreamableHTTPClientTransport(new URL(config2.url), {
            requestInit: {
                headers: {
                    "User-Agent": "Cursor/1.0.0",
                    ...config2.headers
                }
            },
            fetch: fetch2
        });
        await client.connect(transport);
        return new _McpSdkClient(serverName, client, {
            initialState: {
                kind: "ready"
            },
            sessionId: transport.sessionId,
            protocolVersion: transport.protocolVersion,
            config: config2
        });
    }
    static async fromCachedSession(serverName, config2, cachedSession, tokenStorage, headers, authRedirectUrl = MCP_OAUTH_LOOPBACK_CALLBACK_URL, fetch2, httpExchangeLogging, oauthLifecycleLogger) {
        const url2 = new URL(config2.url);
        const oauthProvider = await createInMemoryOAuthClientProvider({
            serverName,
            config: config2,
            tokenStorage,
            authRedirectUrl,
            fetchImpl: fetch2
        });
        const { transportHeaders, baseFetch } = restMcpTransportFetch(config2.url, headers, fetch2);
        const transport = new StreamableHTTPClientTransport(url2, {
            authProvider: oauthProvider,
            sessionId: cachedSession.sessionId,
            requestInit: {
                headers: {
                    "User-Agent": "Cursor/1.0.0",
                    ...transportHeaders ?? {}
                }
            },
            fetch: baseFetch !== void 0 && httpExchangeLogging !== void 0 ? createLoggedMcpHttpFetch({
                fetch: baseFetch,
                logger: httpExchangeLogging.logger,
                metadata: {
                    ...httpExchangeLogging.metadata,
                    transportType: "streamableHttp"
                }
            }) : baseFetch
        });
        transport.setProtocolVersion(cachedSession.protocolVersion);
        const client = _McpSdkClient.createClient();
        await client.connect(transport);
        return new _McpSdkClient(serverName, client, {
            initialState: {
                kind: "ready"
            },
            authProvider: oauthProvider,
            sessionId: transport.sessionId,
            protocolVersion: cachedSession.protocolVersion,
            ...cachedSession.instructions === void 0 ? {} : {
                resumedInstructions: cachedSession.instructions
            },
            config: config2,
            oauthLifecycleLogger
        });
    }
    static async fromSessionlessInitialize(serverName, config2, sessionlessInitialize, tokenStorage, headers, authRedirectUrl = MCP_OAUTH_LOOPBACK_CALLBACK_URL, fetch2) {
        const oauthProvider = await createInMemoryOAuthClientProvider({
            serverName,
            config: config2,
            tokenStorage,
            authRedirectUrl,
            fetchImpl: fetch2
        });
        const credentialFingerprint = mcpCredentialFingerprint({
            url: config2.url,
            headers,
            accessToken: oauthProvider.tokens()?.access_token
        });
        if (credentialFingerprint !== sessionlessInitialize.credentialFingerprint) {
            return void 0;
        }
        const { transportHeaders, baseFetch } = restMcpTransportFetch(config2.url, headers, fetch2);
        const transport = new StreamableHTTPClientTransport(new URL(config2.url), {
            authProvider: oauthProvider,
            requestInit: {
                headers: {
                    "User-Agent": "Cursor/1.0.0",
                    ...transportHeaders ?? {}
                }
            },
            fetch: baseFetch
        });
        const client = _McpSdkClient.createClient();
        await client.connect(new ReplayedInitializeTransport(transport, sessionlessInitialize.result));
        return new _McpSdkClient(serverName, client, {
            initialState: {
                kind: "ready"
            },
            authProvider: oauthProvider,
            sessionlessInitialize,
            config: config2
        });
    }
    get sessionId() {
        return this._sessionId;
    }
    get protocolVersion() {
        return this._protocolVersion;
    }
    get sessionlessInitialize() {
        return this._sessionlessInitialize;
    }
    get holdsOAuthAccessToken() {
        return Boolean(this._authProvider?.tokens()?.access_token);
    }
    static async fromCommand(ctx, serverName, config2, env, options2) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _span = __addDisposableResource23(env_1, createSpan(ctx.withName("McpSdkClient.fromCommand")), false);
            const spawnFn = wrapDefaultStdioSpawnAsWorkload(options2?.spawn);
            const transport = new StdioClientTransport({
                command: config2.command,
                args: config2.args ?? [],
                env,
                cwd: config2.cwd,
                stderr: "pipe",
                ...spawnFn && {
                    spawn: spawnFn
                }
            });
            const stderrCapture = captureStdioStderr(transport.stderr);
            const client = _McpSdkClient.createClient();
            const connection = client.connect(transport);
            const connectTimeoutMs = options2?.connectTimeoutMs ?? COMMAND_MCP_CONNECT_TIMEOUT_MS;
            let timeoutHandle;
            const timeout2 = new Promise((_resolve, reject2)=>{
                timeoutHandle = setTimeout(()=>reject2(new Error(`MCP server connection timed out after ${connectTimeoutMs}ms: ${serverName}`)), connectTimeoutMs);
            });
            try {
                await Promise.race([
                    connection,
                    timeout2
                ]);
            } catch (error3) {
                connection.catch(()=>{});
                await transport.close().catch(()=>{});
                await stderrCapture.waitForFlush();
                throw annotateMcpStdioConnectError(error3, stderrCapture.read());
            } finally{
                if (timeoutHandle !== void 0) {
                    clearTimeout(timeoutHandle);
                }
            }
            const stdioChildPid = transport.pid ?? void 0;
            if (typeof stdioChildPid === "number") {
                registerStdioMcpChildPid(stdioChildPid);
            }
            return new _McpSdkClient(serverName, client, {
                initialState: {
                    kind: "ready"
                },
                config: config2,
                stdioChildPid
            });
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources23(env_1);
        }
    }
    terminateSessionOnClose(options2) {
        this._sessionTermination = options2;
    }
    setToolCallRequestOptions(build2) {
        this._toolCallRequestOptions = build2;
    }
    async close() {
        if (this._stdioChildPid !== void 0) {
            unregisterStdioMcpChildPid(this._stdioChildPid);
        }
        if (this._terminatingSession) {
            return;
        }
        const termination = this._sessionTermination;
        const transport = this.client.transport;
        if (termination !== void 0 && transport instanceof StreamableHTTPClientTransport) {
            this._terminatingSession = true;
            void (async ()=>{
                await terminateStreamableHttpSession(transport, termination);
                await this.client.close();
            })().catch(()=>void 0);
            return;
        }
        await this.client.close();
    }
    async getTools(ctx) {
        const env_2 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource23(env_2, createSpan(ctx.withName("McpSdkClient.getTools")), false);
            span.span.setAttribute("serverName", this.serverName);
            span.span.setAttribute("mcp.transport", mcpTransportOf(this.config));
            if (this.stateValue.kind === "requires_authentication") {
                span.span.setAttribute("mcp.tools.requires_authentication", true);
                return [];
            }
            let pages = 0;
            try {
                const tools = await this.tools.get(async ()=>{
                    const listed = await collectPaginatedMcpList({
                        fetchPage: (cursor)=>{
                            pages++;
                            return this.client.listTools({
                                cursor
                            });
                        },
                        itemsOf: (page)=>page.tools,
                        nextCursorOf: (page)=>page.nextCursor
                    });
                    return listed.map((tool)=>({
                            ...tool,
                            inputSchema: tool.inputSchema,
                            outputSchema: tool.outputSchema
                        }));
                });
                span.span.setAttribute("mcp.tools.fetched", pages > 0);
                span.span.setAttribute("mcp.tools.pages", pages);
                span.span.setAttribute("mcp.tools.count", tools.length);
                return tools;
            } catch (error3) {
                span.span.setAttribute("mcp.tools.fetched", pages > 0);
                span.span.setAttribute("mcp.tools.pages", pages);
                if (error3 instanceof UnauthorizedError && this.stateValue.kind === "ready") {
                    const previousState = this.stateValue;
                    const redirectUrl = this._authProvider?.lastRedirectUrl?.toString() ?? "";
                    this.stateValue = {
                        kind: "requires_authentication",
                        url: redirectUrl,
                        callback: (code)=>this.completeRuntimeAuthorization(code)
                    };
                    this._logStateTransition(previousState, this.stateValue, "runtime_unauthorized", {
                        ...getMcpOAuthErrorLogMetadata(error3)
                    });
                    this._stateEnteredAtMs = Date.now();
                }
                throw error3;
            }
        } catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
        } finally{
            __disposeResources23(env_2);
        }
    }
    async callTool(ctx, name17, args, toolCallId, elicitationProvider) {
        const env_3 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource23(env_3, createSpan(ctx.withName("McpSdkClient.callTool")), false);
            span.span.setAttribute("toolName", name17);
            span.span.setAttribute("serverName", this.serverName);
            span.span.setAttribute("mcp.transport", mcpTransportOf(this.config));
            const previousLock = this._callToolLock;
            const queuedAhead = this._callToolQueueDepth;
            this._callToolQueueDepth++;
            let releaseLock;
            this._callToolLock = new Promise((resolve36)=>{
                releaseLock = resolve36;
            });
            try {
                {
                    const env_4 = {
                        stack: [],
                        error: void 0,
                        hasError: false
                    };
                    try {
                        const lockSpan = __addDisposableResource23(env_4, createSpan(span.ctx.withName("McpSdkClient.callTool.lockWait")), false);
                        lockSpan.span.setAttribute("serverName", this.serverName);
                        lockSpan.span.setAttribute("mcp.call_tool.queued_ahead", queuedAhead);
                        const lockWaitStartMs = performance.now();
                        await previousLock;
                        const lockWaitMs = performance.now() - lockWaitStartMs;
                        lockSpan.span.setAttribute("mcp.call_tool.lock_wait_ms", lockWaitMs);
                        span.span.setAttribute("mcp.call_tool.lock_wait_ms", lockWaitMs);
                        span.span.setAttribute("mcp.call_tool.queued_ahead", queuedAhead);
                    } catch (e_3) {
                        env_4.error = e_3;
                        env_4.hasError = true;
                    } finally{
                        __disposeResources23(env_4);
                    }
                }
                if (this.stateValue.kind === "requires_authentication") {
                    throw new UnauthorizedError(`MCP server "${this.serverName}" requires authentication`);
                }
                this._currentToolCallId = toolCallId;
                this._currentToolName = name17;
                this._currentElicitationProvider = elicitationProvider;
                try {
                    const env_5 = {
                        stack: [],
                        error: void 0,
                        hasError: false
                    };
                    try {
                        const sdkSpan = __addDisposableResource23(env_5, createSpan(span.ctx.withName("McpSdkClient.callTool.sdk")), false);
                        sdkSpan.span.setAttribute("toolName", name17);
                        sdkSpan.span.setAttribute("serverName", this.serverName);
                        const params = {
                            name: name17,
                            arguments: args
                        };
                        const requestOptions = this._toolCallRequestOptions?.();
                        const response = requestOptions === void 0 ? await this.client.callTool(params) : await this.client.callTool(params, void 0, requestOptions);
                        sdkSpan.span.setAttribute("mcp.call_tool.is_error", response.isError === true);
                        return {
                            content: response.content,
                            isError: response.isError === true,
                            structuredContent: structuredContentOf(response.structuredContent)
                        };
                    } catch (e_4) {
                        env_5.error = e_4;
                        env_5.hasError = true;
                    } finally{
                        __disposeResources23(env_5);
                    }
                } catch (error3) {
                    if (error3 instanceof UnauthorizedError && this.stateValue.kind === "ready") {
                        const previousState = this.stateValue;
                        const redirectUrl = this._authProvider?.lastRedirectUrl?.toString() ?? "";
                        this.stateValue = {
                            kind: "requires_authentication",
                            url: redirectUrl,
                            callback: (code)=>this.completeRuntimeAuthorization(code)
                        };
                        this._logStateTransition(previousState, this.stateValue, "runtime_unauthorized", {
                            ...getMcpOAuthErrorLogMetadata(error3)
                        });
                        this._stateEnteredAtMs = Date.now();
                    }
                    throw error3;
                } finally{
                    this._currentElicitationProvider = void 0;
                    this._currentToolCallId = void 0;
                    this._currentToolName = void 0;
                }
            } finally{
                this._callToolQueueDepth--;
                void previousLock.then(releaseLock);
            }
        } catch (e_5) {
            env_3.error = e_5;
            env_3.hasError = true;
        } finally{
            __disposeResources23(env_3);
        }
    }
    async getInstructions(ctx) {
        const env_6 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource23(env_6, createSpan(ctx.withName("McpSdkClient.getInstructions")), false);
            span.span.setAttribute("serverName", this.serverName);
            if (this.stateValue.kind === "requires_authentication") {
                return void 0;
            }
            return this.client.getInstructions() ?? this._resumedInstructions;
        } catch (e_6) {
            env_6.error = e_6;
            env_6.hasError = true;
        } finally{
            __disposeResources23(env_6);
        }
    }
    async listResources(ctx) {
        const env_7 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _span = __addDisposableResource23(env_7, createSpan(ctx.withName("McpSdkClient.listResources")), false);
            if (this.stateValue.kind === "requires_authentication") {
                return {
                    resources: []
                };
            }
            const capabilities = this.client.getServerCapabilities();
            if (!capabilities?.resources) {
                return {
                    resources: []
                };
            }
            const resources = await collectPaginatedMcpList({
                fetchPage: (cursor)=>this.client.listResources({
                        cursor
                    }),
                itemsOf: (page)=>page.resources,
                nextCursorOf: (page)=>page.nextCursor
            });
            return {
                resources
            };
        } catch (e_7) {
            env_7.error = e_7;
            env_7.hasError = true;
        } finally{
            __disposeResources23(env_7);
        }
    }
    async readResource(ctx, args) {
        const env_8 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _span = __addDisposableResource23(env_8, createSpan(ctx.withName("McpSdkClient.readResource")), false);
            if (this.stateValue.kind === "requires_authentication") {
                return {
                    contents: []
                };
            }
            const response = await this.client.readResource({
                uri: args.uri
            });
            return {
                contents: response.contents
            };
        } catch (e_8) {
            env_8.error = e_8;
            env_8.hasError = true;
        } finally{
            __disposeResources23(env_8);
        }
    }
    async listPrompts(ctx) {
        const env_9 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _span = __addDisposableResource23(env_9, createSpan(ctx.withName("McpSdkClient.listPrompts")), false);
            if (this.stateValue.kind === "requires_authentication") {
                return [];
            }
            const capabilities = this.client.getServerCapabilities() ?? {
                prompts: false
            };
            if (!capabilities.prompts) {
                return [];
            }
            const prompts = await collectPaginatedMcpList({
                fetchPage: (cursor)=>this.client.listPrompts({
                        cursor
                    }),
                itemsOf: (page)=>page.prompts,
                nextCursorOf: (page)=>page.nextCursor
            });
            return prompts.map((prompt)=>({
                    name: prompt.name,
                    description: prompt.description,
                    arguments: prompt.arguments?.map((arg)=>({
                            name: arg.name,
                            description: arg.description,
                            required: arg.required
                        }))
                }));
        } catch (e_9) {
            env_9.error = e_9;
            env_9.hasError = true;
        } finally{
            __disposeResources23(env_9);
        }
    }
    async getPrompt(ctx, name17, args) {
        const env_10 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _span = __addDisposableResource23(env_10, createSpan(ctx.withName("McpSdkClient.getPrompt")), false);
            if (this.stateValue.kind === "requires_authentication") {
                return {
                    messages: []
                };
            }
            const response = await this.client.getPrompt({
                name: name17,
                arguments: args
            });
            return {
                messages: response.messages.map((msg)=>({
                        role: msg.role,
                        content: Array.isArray(msg.content) ? msg.content.map((content)=>{
                            if (content.type === "text") {
                                return {
                                    type: "text",
                                    text: content.text
                                };
                            }
                            if (content.type === "image") {
                                return {
                                    type: "image",
                                    data: content.data,
                                    mimeType: content.mimeType
                                };
                            }
                            return {
                                type: "text",
                                text: JSON.stringify(content)
                            };
                        }) : [
                            {
                                type: "text",
                                text: typeof msg.content === "string" ? msg.content : JSON.stringify(msg.content)
                            }
                        ]
                    }))
            };
        } catch (e_10) {
            env_10.error = e_10;
            env_10.hasError = true;
        } finally{
            __disposeResources23(env_10);
        }
    }
    getCurrentToolCallContext() {
        if (this._currentToolName) {
            return {
                toolName: this._currentToolName,
                toolCallId: this._currentToolCallId
            };
        }
        return void 0;
    }
    async getState(_ctx) {
        return this.stateValue;
    }
    async completeRuntimeAuthorization(code) {
        if (!this._authCodeExchange) {
            throw new Error(`MCP server "${this.serverName}" cannot complete authorization: no code exchange is configured for this client.`);
        }
        try {
            await this._authCodeExchange(code);
        } catch (authError) {
            const errorMessage4 = authError instanceof Error ? authError.message : "Authentication failed";
            throw new Error(`Authentication callback failed: ${errorMessage4}`);
        }
        this.updateState({
            kind: "ready"
        }, "runtime_authorization_completed");
    }
    updateState(newState, cause) {
        const oldState = this.stateValue;
        this.stateValue = newState;
        this._logStateTransition(oldState, newState, cause ?? "explicit_update");
        this._stateEnteredAtMs = Date.now();
    }
};
McpToolNotFoundError = class extends Error {
    constructor(toolName, availableTools){
        super(`Tool ${toolName} not found, available tools: ${availableTools.join(", ")}`);
        this.toolName = toolName;
        this.availableTools = availableTools;
        this.name = "McpToolNotFoundError";
    }
};
McpServerNotFoundError = class extends Error {
    constructor(serverName, availableServers){
        super(`MCP server ${serverName} not found, available servers: ${availableServers.join(", ")}`);
        this.serverName = serverName;
        this.availableServers = availableServers;
        this.name = "McpServerNotFoundError";
    }
};
ExecutableMcpToolSet = class {
    constructor(tools){
        this.tools = tools;
    }
    async execute(name17, args, toolCallId, elicitationFactory) {
        const tool = this.tools[name17];
        if (!tool) {
            throw new McpToolNotFoundError(name17, Object.keys(this.tools));
        }
        return tool.execute(args, toolCallId, elicitationFactory);
    }
    getTools() {
        return Object.entries(this.tools).map(([name17, tool])=>({
                ...tool.definition,
                name: name17
            }));
    }
};
NoopMcpLease = class {
    async getClients(_ctx) {
        return {};
    }
    async getClient(_ctx, _name) {
        return void 0;
    }
    async getInstructions(_ctx) {
        return [];
    }
    async getToolSet(_ctx) {
        return new ExecutableMcpToolSet({});
    }
    async getTools(_ctx) {
        return [];
    }
    async getToolsForServers(_ctx, _serverIdentifiers) {
        return [];
    }
};
ManagerMcpLease = class {
    constructor(manager){
        this.manager = manager;
    }
    async getClients(_ctx) {
        return this.manager.getClients();
    }
    async getClient(_ctx, name17) {
        return this.manager.getClient(name17);
    }
    async getInstructions(ctx) {
        const env_12 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource23(env_12, createSpan(ctx.withName("ManagerMcpLease.getInstructions")), false);
            return await this.manager.getInstructions(span.ctx);
        } catch (e_12) {
            env_12.error = e_12;
            env_12.hasError = true;
        } finally{
            __disposeResources23(env_12);
        }
    }
    async getToolSet(ctx) {
        const env_13 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource23(env_13, createSpan(ctx.withName("ManagerMcpLease.getToolSet")), false);
            return await this.manager.getToolSet(span.ctx);
        } catch (e_13) {
            env_13.error = e_13;
            env_13.hasError = true;
        } finally{
            __disposeResources23(env_13);
        }
    }
    async getTools(ctx) {
        const env_14 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource23(env_14, createSpan(ctx.withName("ManagerMcpLease.getTools")), false);
            const toolSet = await this.getToolSet(span.ctx);
            return toolSet.getTools();
        } catch (e_14) {
            env_14.error = e_14;
            env_14.hasError = true;
        } finally{
            __disposeResources23(env_14);
        }
    }
    async getToolsForServers(ctx, serverIdentifiers) {
        const requestedServerIds = new Set(serverIdentifiers);
        const allTools = await this.getTools(ctx);
        return allTools.filter((tool)=>requestedServerIds.has(tool.clientKey));
    }
    onDidChange(listener) {
        const unsubscribe = this.manager.onDidChange(()=>listener(void 0));
        return {
            dispose: unsubscribe
        };
    }
    async reconcileSelection(ctx, changes, loadClient) {
        for (const identifier2 of changes.removed){
            const existing = this.manager.getClient(identifier2);
            this.manager.deleteClient(identifier2);
            try {
                await existing?.close?.();
            } catch  {}
        }
        for (const identifier2 of changes.added){
            if (this.manager.getClient(identifier2)) {
                continue;
            }
            const client = await loadClient(ctx, identifier2);
            this.manager.setClient(identifier2, client);
        }
    }
};
McpManager = class {
    constructor(clients, elicitationFactory){
        this.clients = clients;
        this.elicitationFactory = elicitationFactory;
        this.changeListeners = new Set();
    }
    onDidChange(listener) {
        this.changeListeners.add(listener);
        return ()=>{
            this.changeListeners.delete(listener);
        };
    }
    fireDidChange() {
        for (const listener of this.changeListeners){
            try {
                listener();
            } catch (e) {
                console.error("Error in McpManager change listener:", e);
            }
        }
    }
    getClients() {
        return this.clients;
    }
    getClient(name17) {
        return this.clients[name17];
    }
    setClient(name17, client) {
        this.clients[name17] = client;
        this.fireDidChange();
    }
    deleteClient(name17) {
        delete this.clients[name17];
        this.fireDidChange();
    }
    async closeAllClients() {
        const clients = Object.values(this.clients);
        await Promise.all(clients.map(async (client)=>{
            try {
                await client.close?.();
            } catch  {}
        }));
    }
    async getToolSet(ctx) {
        const env_15 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource23(env_15, createSpan(ctx.withName("McpManager.getToolSet")), false);
            const clientTools = await asyncMapValues(Object.entries(this.clients), ([key, client])=>client.getTools(span.ctx).then((tools2)=>tools2.map((tool)=>({
                            ...tool,
                            clientKey: key,
                            clientName: client.serverName,
                            client
                        }))).catch(()=>[]), {
                max: 4
            });
            const tools = Array.from(clientTools.values()).flat();
            const toolsMap = {};
            for (const tool of tools){
                toolsMap[`${tool.clientName}-${tool.name}`] = {
                    definition: {
                        ...tool,
                        clientKey: tool.clientKey,
                        providerIdentifier: tool.clientName,
                        toolName: tool.name
                    },
                    execute: async (args, toolCallId, elicitationFactory)=>{
                        const elicitationProvider = elicitationFactory?.createProvider(tool.clientName, tool.name, toolCallId);
                        const result = await tool.client.callTool(span.ctx, tool.name, args, toolCallId, elicitationProvider);
                        return result;
                    }
                };
            }
            return new ExecutableMcpToolSet(toolsMap);
        } catch (e_15) {
            env_15.error = e_15;
            env_15.hasError = true;
        } finally{
            __disposeResources23(env_15);
        }
    }
    async getInstructions(ctx) {
        const env_16 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource23(env_16, createSpan(ctx.withName("McpManager.getInstructions")), false);
            const instructionResults = await asyncMapValues(Object.entries(this.clients), ([_2, client])=>client.getInstructions(span.ctx).then((instructions)=>{
                    if (!instructions || instructions.trim().length === 0) {
                        return null;
                    }
                    return new McpInstructions({
                        serverName: client.serverName,
                        instructions: instructions.trim()
                    });
                }).catch(()=>null), {
                max: 4
            });
            return Array.from(instructionResults.values()).filter((result)=>result !== null);
        } catch (e_16) {
            env_16.error = e_16;
            env_16.hasError = true;
        } finally{
            __disposeResources23(env_16);
        }
    }
};

}
