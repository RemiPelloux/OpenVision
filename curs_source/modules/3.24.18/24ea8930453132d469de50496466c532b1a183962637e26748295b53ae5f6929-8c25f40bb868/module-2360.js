var anObject = require("./module-8551.js");
var definePropertiesModule = require("./module-6801.js");
var enumBugKeys = require("./module-8727.js");
var hiddenKeys = require("./module-421.js");
var html = require("./module-397.js");
var documentCreateElement = require("./module-4055.js");
var sharedKey = require("./module-6119.js");
var GT = ">";
var LT = "<";
var PROTOTYPE = "prototype";
var SCRIPT = "script";
var IE_PROTO = sharedKey("IE_PROTO");
var EmptyConstructor = function() {};
var scriptTag = function(content) {
    return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
};
var NullProtoObjectViaActiveX = function(activeXDocument2) {
    activeXDocument2.write(scriptTag(""));
    activeXDocument2.close();
    var temp = activeXDocument2.parentWindow.Object;
    activeXDocument2 = null;
    return temp;
};
var NullProtoObjectViaIFrame = function() {
    var iframe = documentCreateElement("iframe");
    var JS = "java" + SCRIPT + ":";
    var iframeDocument;
    iframe.style.display = "none";
    html.appendChild(iframe);
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag("document.F=Object"));
    iframeDocument.close();
    return iframeDocument.F;
};
var activeXDocument;
var NullProtoObject = function() {
    try {
        activeXDocument = new ActiveXObject("htmlfile");
    } catch (error) {}
    NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
    var length = enumBugKeys.length;
    while(length--)delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return NullProtoObject();
};
hiddenKeys[IE_PROTO] = true;
module.exports = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        result[IE_PROTO] = O;
    } else result = NullProtoObject();
    return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
};
