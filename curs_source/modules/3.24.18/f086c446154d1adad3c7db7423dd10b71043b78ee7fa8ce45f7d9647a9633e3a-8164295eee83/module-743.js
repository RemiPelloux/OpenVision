Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.resolveHttpAuthRuntimeConfig = exports.getHttpAuthExtensionConfiguration = void 0;
exports.getHttpAuthExtensionConfiguration = (e)=>{
    const t = e.httpAuthSchemes;
    let n = e.httpAuthSchemeProvider, i = e.credentials;
    return {
        setHttpAuthScheme (e) {
            const n = t.findIndex((t)=>t.schemeId === e.schemeId);
            -1 === n ? t.push(e) : t.splice(n, 1, e);
        },
        httpAuthSchemes: ()=>t,
        setHttpAuthSchemeProvider (e) {
            n = e;
        },
        httpAuthSchemeProvider: ()=>n,
        setCredentials (e) {
            i = e;
        },
        credentials: ()=>i
    };
};
exports.resolveHttpAuthRuntimeConfig = (e)=>({
        httpAuthSchemes: e.httpAuthSchemes(),
        httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
        credentials: e.credentials()
    });
