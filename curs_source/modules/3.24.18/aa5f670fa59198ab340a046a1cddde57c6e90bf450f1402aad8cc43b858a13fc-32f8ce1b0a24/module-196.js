require.r(exports);
require.d(exports, {
    selectCursorServerConnectionToken: ()=>selectCursorServerConnectionToken
});
function selectCursorServerConnectionToken(args) {
    return args.returnedToken || args.mintedToken;
}
