var __webpack_exports__ = {};
(()=>{
    require.r(__webpack_exports__);
    require.d(__webpack_exports__, {
        activate: ()=>activate,
        deactivate: ()=>deactivate
    });
    var vscode__WEBPACK_IMPORTED_MODULE_0__ = require("./module-1.js");
    var vscode__WEBPACK_IMPORTED_MODULE_0___default = ()=>vscode__WEBPACK_IMPORTED_MODULE_0__ && vscode__WEBPACK_IMPORTED_MODULE_0__.__esModule ? vscode__WEBPACK_IMPORTED_MODULE_0__.default : vscode__WEBPACK_IMPORTED_MODULE_0__;
    var _backgroundComposerRemoteAuthorityResolver_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-2.js");
    function activate(context) {
        const outputChannel = vscode__WEBPACK_IMPORTED_MODULE_0__.window.createOutputChannel("Cursor Resolver");
        context.subscriptions.push(outputChannel);
        const isNode = typeof process !== "undefined" && !!process.versions?.node;
        outputChannel.appendLine(`[cursor-resolver] Running in ${isNode ? "Node.js" : "web-worker"} extension host`);
        const remoteAuthorityResolver = new _backgroundComposerRemoteAuthorityResolver_js__WEBPACK_IMPORTED_MODULE_1__.BackgroundComposerAuthorityResolver(vscode__WEBPACK_IMPORTED_MODULE_0__.cursor.connectionTokenProvider, outputChannel);
        context.subscriptions.push(vscode__WEBPACK_IMPORTED_MODULE_0__.workspace.registerRemoteAuthorityResolver("background-composer", remoteAuthorityResolver));
    }
    function deactivate() {}
})();
var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__)__webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", {
    value: true
});
