require.r(exports);
require.d(exports, {
    socketEndpointSource: ()=>socketEndpointSource,
    usesRelayPath: ()=>usesRelayPath
});
function usesRelayPath(endpoint) {
    return endpoint.upgradePath !== void 0 && endpoint.upgradePath !== "";
}
function socketEndpointSource(resolved, fetchCurrent) {
    return usesRelayPath(resolved) ? fetchCurrent : async ()=>resolved;
}
