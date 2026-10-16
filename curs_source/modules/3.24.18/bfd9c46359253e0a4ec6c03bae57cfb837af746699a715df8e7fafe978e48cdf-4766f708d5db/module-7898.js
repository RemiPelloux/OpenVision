var t;
t = function() {
    return function(e) {
        var t = {};
        function r(n) {
            if (t[n]) return t[n].exports;
            var s = t[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return e[n].call(s.exports, s, s.exports, r), s.loaded = !0, s.exports;
        }
        return r.m = e, r.c = t, r.p = "", r(0);
    }([
        function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(1), s = r(3), o = r(8), i = r(15);
            function a(e, t, r) {
                var i = null, a = function(e, t) {
                    r && r(e, t), i && i.visit(e, t);
                }, c = "function" == typeof r ? a : null, l = !1;
                if (t) {
                    l = "boolean" == typeof t.comment && t.comment;
                    var u = "boolean" == typeof t.attachComment && t.attachComment;
                    (l || u) && ((i = new n.CommentHandler).attach = u, t.comment = !0, c = a);
                }
                var d, p = !1;
                t && "string" == typeof t.sourceType && (p = "module" === t.sourceType), d = t && "boolean" == typeof t.jsx && t.jsx ? new s.JSXParser(e, t, c) : new o.Parser(e, t, c);
                var m = p ? d.parseModule() : d.parseScript();
                return l && i && (m.comments = i.comments), d.config.tokens && (m.tokens = d.tokens), d.config.tolerant && (m.errors = d.errorHandler.errors), m;
            }
            t.parse = a, t.parseModule = function(e, t, r) {
                var n = t || {};
                return n.sourceType = "module", a(e, n, r);
            }, t.parseScript = function(e, t, r) {
                var n = t || {};
                return n.sourceType = "script", a(e, n, r);
            }, t.tokenize = function(e, t, r) {
                var n, s = new i.Tokenizer(e, t);
                n = [];
                try {
                    for(;;){
                        var o = s.getNextToken();
                        if (!o) break;
                        r && (o = r(o)), n.push(o);
                    }
                } catch (e) {
                    s.errorHandler.tolerate(e);
                }
                return s.errorHandler.tolerant && (n.errors = s.errors()), n;
            };
            var c = r(2);
            t.Syntax = c.Syntax, t.version = "4.0.1";
        },
        function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(2), s = function() {
                function e() {
                    this.attach = !1, this.comments = [], this.stack = [], this.leading = [], this.trailing = [];
                }
                return e.prototype.insertInnerComments = function(e, t) {
                    if (e.type === n.Syntax.BlockStatement && 0 === e.body.length) {
                        for(var r = [], s = this.leading.length - 1; s >= 0; --s){
                            var o = this.leading[s];
                            t.end.offset >= o.start && (r.unshift(o.comment), this.leading.splice(s, 1), this.trailing.splice(s, 1));
                        }
                        r.length && (e.innerComments = r);
                    }
                }, e.prototype.findTrailingComments = function(e) {
                    var t = [];
                    if (this.trailing.length > 0) {
                        for(var r = this.trailing.length - 1; r >= 0; --r){
                            var n = this.trailing[r];
                            n.start >= e.end.offset && t.unshift(n.comment);
                        }
                        return this.trailing.length = 0, t;
                    }
                    var s = this.stack[this.stack.length - 1];
                    if (s && s.node.trailingComments) {
                        var o = s.node.trailingComments[0];
                        o && o.range[0] >= e.end.offset && (t = s.node.trailingComments, delete s.node.trailingComments);
                    }
                    return t;
                }, e.prototype.findLeadingComments = function(e) {
                    for(var t, r = []; this.stack.length > 0 && (o = this.stack[this.stack.length - 1]) && o.start >= e.start.offset;)t = o.node, this.stack.pop();
                    if (t) {
                        for(var n = (t.leadingComments ? t.leadingComments.length : 0) - 1; n >= 0; --n){
                            var s = t.leadingComments[n];
                            s.range[1] <= e.start.offset && (r.unshift(s), t.leadingComments.splice(n, 1));
                        }
                        return t.leadingComments && 0 === t.leadingComments.length && delete t.leadingComments, r;
                    }
                    for(n = this.leading.length - 1; n >= 0; --n){
                        var o;
                        (o = this.leading[n]).start <= e.start.offset && (r.unshift(o.comment), this.leading.splice(n, 1));
                    }
                    return r;
                }, e.prototype.visitNode = function(e, t) {
                    if (!(e.type === n.Syntax.Program && e.body.length > 0)) {
                        this.insertInnerComments(e, t);
                        var r = this.findTrailingComments(t), s = this.findLeadingComments(t);
                        s.length > 0 && (e.leadingComments = s), r.length > 0 && (e.trailingComments = r), this.stack.push({
                            node: e,
                            start: t.start.offset
                        });
                    }
                }, e.prototype.visitComment = function(e, t) {
                    var r = "L" === e.type[0] ? "Line" : "Block", n = {
                        type: r,
                        value: e.value
                    };
                    if (e.range && (n.range = e.range), e.loc && (n.loc = e.loc), this.comments.push(n), this.attach) {
                        var s = {
                            comment: {
                                type: r,
                                value: e.value,
                                range: [
                                    t.start.offset,
                                    t.end.offset
                                ]
                            },
                            start: t.start.offset
                        };
                        e.loc && (s.comment.loc = e.loc), e.type = r, this.leading.push(s), this.trailing.push(s);
                    }
                }, e.prototype.visit = function(e, t) {
                    "LineComment" === e.type || "BlockComment" === e.type ? this.visitComment(e, t) : this.attach && this.visitNode(e, t);
                }, e;
            }();
            t.CommentHandler = s;
        },
        function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Syntax = {
                AssignmentExpression: "AssignmentExpression",
                AssignmentPattern: "AssignmentPattern",
                ArrayExpression: "ArrayExpression",
                ArrayPattern: "ArrayPattern",
                ArrowFunctionExpression: "ArrowFunctionExpression",
                AwaitExpression: "AwaitExpression",
                BlockStatement: "BlockStatement",
                BinaryExpression: "BinaryExpression",
                BreakStatement: "BreakStatement",
                CallExpression: "CallExpression",
                CatchClause: "CatchClause",
                ClassBody: "ClassBody",
                ClassDeclaration: "ClassDeclaration",
                ClassExpression: "ClassExpression",
                ConditionalExpression: "ConditionalExpression",
                ContinueStatement: "ContinueStatement",
                DoWhileStatement: "DoWhileStatement",
                DebuggerStatement: "DebuggerStatement",
                EmptyStatement: "EmptyStatement",
                ExportAllDeclaration: "ExportAllDeclaration",
                ExportDefaultDeclaration: "ExportDefaultDeclaration",
                ExportNamedDeclaration: "ExportNamedDeclaration",
                ExportSpecifier: "ExportSpecifier",
                ExpressionStatement: "ExpressionStatement",
                ForStatement: "ForStatement",
                ForOfStatement: "ForOfStatement",
                ForInStatement: "ForInStatement",
                FunctionDeclaration: "FunctionDeclaration",
                FunctionExpression: "FunctionExpression",
                Identifier: "Identifier",
                IfStatement: "IfStatement",
                ImportDeclaration: "ImportDeclaration",
                ImportDefaultSpecifier: "ImportDefaultSpecifier",
                ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
                ImportSpecifier: "ImportSpecifier",
                Literal: "Literal",
                LabeledStatement: "LabeledStatement",
                LogicalExpression: "LogicalExpression",
                MemberExpression: "MemberExpression",
                MetaProperty: "MetaProperty",
                MethodDefinition: "MethodDefinition",
                NewExpression: "NewExpression",
                ObjectExpression: "ObjectExpression",
                ObjectPattern: "ObjectPattern",
                Program: "Program",
                Property: "Property",
                RestElement: "RestElement",
                ReturnStatement: "ReturnStatement",
                SequenceExpression: "SequenceExpression",
                SpreadElement: "SpreadElement",
                Super: "Super",
                SwitchCase: "SwitchCase",
                SwitchStatement: "SwitchStatement",
                TaggedTemplateExpression: "TaggedTemplateExpression",
                TemplateElement: "TemplateElement",
                TemplateLiteral: "TemplateLiteral",
                ThisExpression: "ThisExpression",
                ThrowStatement: "ThrowStatement",
                TryStatement: "TryStatement",
                UnaryExpression: "UnaryExpression",
                UpdateExpression: "UpdateExpression",
                VariableDeclaration: "VariableDeclaration",
                VariableDeclarator: "VariableDeclarator",
                WhileStatement: "WhileStatement",
                WithStatement: "WithStatement",
                YieldExpression: "YieldExpression"
            };
        },
        function(e, t, r) {
            "use strict";
            var n, s = this && this.__extends || (n = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for(var r in t)t.hasOwnProperty(r) && (e[r] = t[r]);
            }, function(e, t) {
                function r() {
                    this.constructor = e;
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
            });
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = r(4), i = r(5), a = r(6), c = r(7), l = r(8), u = r(13), d = r(14);
            function p(e) {
                var t;
                switch(e.type){
                    case a.JSXSyntax.JSXIdentifier:
                        t = e.name;
                        break;
                    case a.JSXSyntax.JSXNamespacedName:
                        var r = e;
                        t = p(r.namespace) + ":" + p(r.name);
                        break;
                    case a.JSXSyntax.JSXMemberExpression:
                        var n = e;
                        t = p(n.object) + "." + p(n.property);
                }
                return t;
            }
            u.TokenName[100] = "JSXIdentifier", u.TokenName[101] = "JSXText";
            var m = function(e) {
                function t(t, r, n) {
                    return e.call(this, t, r, n) || this;
                }
                return s(t, e), t.prototype.parsePrimaryExpression = function() {
                    return this.match("<") ? this.parseJSXRoot() : e.prototype.parsePrimaryExpression.call(this);
                }, t.prototype.startJSX = function() {
                    this.scanner.index = this.startMarker.index, this.scanner.lineNumber = this.startMarker.line, this.scanner.lineStart = this.startMarker.index - this.startMarker.column;
                }, t.prototype.finishJSX = function() {
                    this.nextToken();
                }, t.prototype.reenterJSX = function() {
                    this.startJSX(), this.expectJSX("}"), this.config.tokens && this.tokens.pop();
                }, t.prototype.createJSXNode = function() {
                    return this.collectComments(), {
                        index: this.scanner.index,
                        line: this.scanner.lineNumber,
                        column: this.scanner.index - this.scanner.lineStart
                    };
                }, t.prototype.createJSXChildNode = function() {
                    return {
                        index: this.scanner.index,
                        line: this.scanner.lineNumber,
                        column: this.scanner.index - this.scanner.lineStart
                    };
                }, t.prototype.scanXHTMLEntity = function(e) {
                    for(var t = "&", r = !0, n = !1, s = !1, i = !1; !this.scanner.eof() && r && !n;){
                        var a = this.scanner.source[this.scanner.index];
                        if (a === e) break;
                        if (n = ";" === a, t += a, ++this.scanner.index, !n) switch(t.length){
                            case 2:
                                s = "#" === a;
                                break;
                            case 3:
                                s && (r = (i = "x" === a) || o.Character.isDecimalDigit(a.charCodeAt(0)), s = s && !i);
                                break;
                            default:
                                r = (r = r && !(s && !o.Character.isDecimalDigit(a.charCodeAt(0)))) && !(i && !o.Character.isHexDigit(a.charCodeAt(0)));
                        }
                    }
                    if (r && n && t.length > 2) {
                        var c = t.substr(1, t.length - 2);
                        s && c.length > 1 ? t = String.fromCharCode(parseInt(c.substr(1), 10)) : i && c.length > 2 ? t = String.fromCharCode(parseInt("0" + c.substr(1), 16)) : s || i || !d.XHTMLEntities[c] || (t = d.XHTMLEntities[c]);
                    }
                    return t;
                }, t.prototype.lexJSX = function() {
                    var e = this.scanner.source.charCodeAt(this.scanner.index);
                    if (60 === e || 62 === e || 47 === e || 58 === e || 61 === e || 123 === e || 125 === e) return {
                        type: 7,
                        value: a = this.scanner.source[this.scanner.index++],
                        lineNumber: this.scanner.lineNumber,
                        lineStart: this.scanner.lineStart,
                        start: this.scanner.index - 1,
                        end: this.scanner.index
                    };
                    if (34 === e || 39 === e) {
                        for(var t = this.scanner.index, r = this.scanner.source[this.scanner.index++], n = ""; !this.scanner.eof() && (c = this.scanner.source[this.scanner.index++]) !== r;)n += "&" === c ? this.scanXHTMLEntity(r) : c;
                        return {
                            type: 8,
                            value: n,
                            lineNumber: this.scanner.lineNumber,
                            lineStart: this.scanner.lineStart,
                            start: t,
                            end: this.scanner.index
                        };
                    }
                    if (46 === e) {
                        var s = this.scanner.source.charCodeAt(this.scanner.index + 1), i = this.scanner.source.charCodeAt(this.scanner.index + 2), a = 46 === s && 46 === i ? "..." : ".";
                        return t = this.scanner.index, this.scanner.index += a.length, {
                            type: 7,
                            value: a,
                            lineNumber: this.scanner.lineNumber,
                            lineStart: this.scanner.lineStart,
                            start: t,
                            end: this.scanner.index
                        };
                    }
                    if (96 === e) return {
                        type: 10,
                        value: "",
                        lineNumber: this.scanner.lineNumber,
                        lineStart: this.scanner.lineStart,
                        start: this.scanner.index,
                        end: this.scanner.index
                    };
                    if (o.Character.isIdentifierStart(e) && 92 !== e) {
                        for(t = this.scanner.index, ++this.scanner.index; !this.scanner.eof();){
                            var c = this.scanner.source.charCodeAt(this.scanner.index);
                            if (o.Character.isIdentifierPart(c) && 92 !== c) ++this.scanner.index;
                            else {
                                if (45 !== c) break;
                                ++this.scanner.index;
                            }
                        }
                        return {
                            type: 100,
                            value: this.scanner.source.slice(t, this.scanner.index),
                            lineNumber: this.scanner.lineNumber,
                            lineStart: this.scanner.lineStart,
                            start: t,
                            end: this.scanner.index
                        };
                    }
                    return this.scanner.lex();
                }, t.prototype.nextJSXToken = function() {
                    this.collectComments(), this.startMarker.index = this.scanner.index, this.startMarker.line = this.scanner.lineNumber, this.startMarker.column = this.scanner.index - this.scanner.lineStart;
                    var e = this.lexJSX();
                    return this.lastMarker.index = this.scanner.index, this.lastMarker.line = this.scanner.lineNumber, this.lastMarker.column = this.scanner.index - this.scanner.lineStart, this.config.tokens && this.tokens.push(this.convertToken(e)), e;
                }, t.prototype.nextJSXText = function() {
                    this.startMarker.index = this.scanner.index, this.startMarker.line = this.scanner.lineNumber, this.startMarker.column = this.scanner.index - this.scanner.lineStart;
                    for(var e = this.scanner.index, t = ""; !this.scanner.eof();){
                        var r = this.scanner.source[this.scanner.index];
                        if ("{" === r || "<" === r) break;
                        ++this.scanner.index, t += r, o.Character.isLineTerminator(r.charCodeAt(0)) && (++this.scanner.lineNumber, "\r" === r && "\n" === this.scanner.source[this.scanner.index] && ++this.scanner.index, this.scanner.lineStart = this.scanner.index);
                    }
                    this.lastMarker.index = this.scanner.index, this.lastMarker.line = this.scanner.lineNumber, this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
                    var n = {
                        type: 101,
                        value: t,
                        lineNumber: this.scanner.lineNumber,
                        lineStart: this.scanner.lineStart,
                        start: e,
                        end: this.scanner.index
                    };
                    return t.length > 0 && this.config.tokens && this.tokens.push(this.convertToken(n)), n;
                }, t.prototype.peekJSXToken = function() {
                    var e = this.scanner.saveState();
                    this.scanner.scanComments();
                    var t = this.lexJSX();
                    return this.scanner.restoreState(e), t;
                }, t.prototype.expectJSX = function(e) {
                    var t = this.nextJSXToken();
                    7 === t.type && t.value === e || this.throwUnexpectedToken(t);
                }, t.prototype.matchJSX = function(e) {
                    var t = this.peekJSXToken();
                    return 7 === t.type && t.value === e;
                }, t.prototype.parseJSXIdentifier = function() {
                    var e = this.createJSXNode(), t = this.nextJSXToken();
                    return 100 !== t.type && this.throwUnexpectedToken(t), this.finalize(e, new i.JSXIdentifier(t.value));
                }, t.prototype.parseJSXElementName = function() {
                    var e = this.createJSXNode(), t = this.parseJSXIdentifier();
                    if (this.matchJSX(":")) {
                        var r = t;
                        this.expectJSX(":");
                        var n = this.parseJSXIdentifier();
                        t = this.finalize(e, new i.JSXNamespacedName(r, n));
                    } else if (this.matchJSX(".")) for(; this.matchJSX(".");){
                        var s = t;
                        this.expectJSX(".");
                        var o = this.parseJSXIdentifier();
                        t = this.finalize(e, new i.JSXMemberExpression(s, o));
                    }
                    return t;
                }, t.prototype.parseJSXAttributeName = function() {
                    var e, t = this.createJSXNode(), r = this.parseJSXIdentifier();
                    if (this.matchJSX(":")) {
                        var n = r;
                        this.expectJSX(":");
                        var s = this.parseJSXIdentifier();
                        e = this.finalize(t, new i.JSXNamespacedName(n, s));
                    } else e = r;
                    return e;
                }, t.prototype.parseJSXStringLiteralAttribute = function() {
                    var e = this.createJSXNode(), t = this.nextJSXToken();
                    8 !== t.type && this.throwUnexpectedToken(t);
                    var r = this.getTokenRaw(t);
                    return this.finalize(e, new c.Literal(t.value, r));
                }, t.prototype.parseJSXExpressionAttribute = function() {
                    var e = this.createJSXNode();
                    this.expectJSX("{"), this.finishJSX(), this.match("}") && this.tolerateError("JSX attributes must only be assigned a non-empty expression");
                    var t = this.parseAssignmentExpression();
                    return this.reenterJSX(), this.finalize(e, new i.JSXExpressionContainer(t));
                }, t.prototype.parseJSXAttributeValue = function() {
                    return this.matchJSX("{") ? this.parseJSXExpressionAttribute() : this.matchJSX("<") ? this.parseJSXElement() : this.parseJSXStringLiteralAttribute();
                }, t.prototype.parseJSXNameValueAttribute = function() {
                    var e = this.createJSXNode(), t = this.parseJSXAttributeName(), r = null;
                    return this.matchJSX("=") && (this.expectJSX("="), r = this.parseJSXAttributeValue()), this.finalize(e, new i.JSXAttribute(t, r));
                }, t.prototype.parseJSXSpreadAttribute = function() {
                    var e = this.createJSXNode();
                    this.expectJSX("{"), this.expectJSX("..."), this.finishJSX();
                    var t = this.parseAssignmentExpression();
                    return this.reenterJSX(), this.finalize(e, new i.JSXSpreadAttribute(t));
                }, t.prototype.parseJSXAttributes = function() {
                    for(var e = []; !this.matchJSX("/") && !this.matchJSX(">");){
                        var t = this.matchJSX("{") ? this.parseJSXSpreadAttribute() : this.parseJSXNameValueAttribute();
                        e.push(t);
                    }
                    return e;
                }, t.prototype.parseJSXOpeningElement = function() {
                    var e = this.createJSXNode();
                    this.expectJSX("<");
                    var t = this.parseJSXElementName(), r = this.parseJSXAttributes(), n = this.matchJSX("/");
                    return n && this.expectJSX("/"), this.expectJSX(">"), this.finalize(e, new i.JSXOpeningElement(t, n, r));
                }, t.prototype.parseJSXBoundaryElement = function() {
                    var e = this.createJSXNode();
                    if (this.expectJSX("<"), this.matchJSX("/")) {
                        this.expectJSX("/");
                        var t = this.parseJSXElementName();
                        return this.expectJSX(">"), this.finalize(e, new i.JSXClosingElement(t));
                    }
                    var r = this.parseJSXElementName(), n = this.parseJSXAttributes(), s = this.matchJSX("/");
                    return s && this.expectJSX("/"), this.expectJSX(">"), this.finalize(e, new i.JSXOpeningElement(r, s, n));
                }, t.prototype.parseJSXEmptyExpression = function() {
                    var e = this.createJSXChildNode();
                    return this.collectComments(), this.lastMarker.index = this.scanner.index, this.lastMarker.line = this.scanner.lineNumber, this.lastMarker.column = this.scanner.index - this.scanner.lineStart, this.finalize(e, new i.JSXEmptyExpression);
                }, t.prototype.parseJSXExpressionContainer = function() {
                    var e, t = this.createJSXNode();
                    return this.expectJSX("{"), this.matchJSX("}") ? (e = this.parseJSXEmptyExpression(), this.expectJSX("}")) : (this.finishJSX(), e = this.parseAssignmentExpression(), this.reenterJSX()), this.finalize(t, new i.JSXExpressionContainer(e));
                }, t.prototype.parseJSXChildren = function() {
                    for(var e = []; !this.scanner.eof();){
                        var t = this.createJSXChildNode(), r = this.nextJSXText();
                        if (r.start < r.end) {
                            var n = this.getTokenRaw(r), s = this.finalize(t, new i.JSXText(r.value, n));
                            e.push(s);
                        }
                        if ("{" !== this.scanner.source[this.scanner.index]) break;
                        var o = this.parseJSXExpressionContainer();
                        e.push(o);
                    }
                    return e;
                }, t.prototype.parseComplexJSXElement = function(e) {
                    for(var t = []; !this.scanner.eof();){
                        e.children = e.children.concat(this.parseJSXChildren());
                        var r = this.createJSXChildNode(), n = this.parseJSXBoundaryElement();
                        if (n.type === a.JSXSyntax.JSXOpeningElement) {
                            var s = n;
                            if (s.selfClosing) {
                                var o = this.finalize(r, new i.JSXElement(s, [], null));
                                e.children.push(o);
                            } else t.push(e), e = {
                                node: r,
                                opening: s,
                                closing: null,
                                children: []
                            };
                        }
                        if (n.type === a.JSXSyntax.JSXClosingElement) {
                            e.closing = n;
                            var c = p(e.opening.name);
                            if (c !== p(e.closing.name) && this.tolerateError("Expected corresponding JSX closing tag for %0", c), !(t.length > 0)) break;
                            o = this.finalize(e.node, new i.JSXElement(e.opening, e.children, e.closing)), (e = t[t.length - 1]).children.push(o), t.pop();
                        }
                    }
                    return e;
                }, t.prototype.parseJSXElement = function() {
                    var e = this.createJSXNode(), t = this.parseJSXOpeningElement(), r = [], n = null;
                    if (!t.selfClosing) {
                        var s = this.parseComplexJSXElement({
                            node: e,
                            opening: t,
                            closing: n,
                            children: r
                        });
                        r = s.children, n = s.closing;
                    }
                    return this.finalize(e, new i.JSXElement(t, r, n));
                }, t.prototype.parseJSXRoot = function() {
                    this.config.tokens && this.tokens.pop(), this.startJSX();
                    var e = this.parseJSXElement();
                    return this.finishJSX(), e;
                }, t.prototype.isStartOfExpression = function() {
                    return e.prototype.isStartOfExpression.call(this) || this.match("<");
                }, t;
            }(l.Parser);
            t.JSXParser = m;
        },
        function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
                NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
            };
            t.Character = {
                fromCodePoint: function(e) {
                    return e < 65536 ? String.fromCharCode(e) : String.fromCharCode(55296 + (e - 65536 >> 10)) + String.fromCharCode(56320 + (e - 65536 & 1023));
                },
                isWhiteSpace: function(e) {
                    return 32 === e || 9 === e || 11 === e || 12 === e || 160 === e || e >= 5760 && [
                        5760,
                        8192,
                        8193,
                        8194,
                        8195,
                        8196,
                        8197,
                        8198,
                        8199,
                        8200,
                        8201,
                        8202,
                        8239,
                        8287,
                        12288,
                        65279
                    ].indexOf(e) >= 0;
                },
                isLineTerminator: function(e) {
                    return 10 === e || 13 === e || 8232 === e || 8233 === e;
                },
                isIdentifierStart: function(e) {
                    return 36 === e || 95 === e || e >= 65 && e <= 90 || e >= 97 && e <= 122 || 92 === e || e >= 128 && r.NonAsciiIdentifierStart.test(t.Character.fromCodePoint(e));
                },
                isIdentifierPart: function(e) {
                    return 36 === e || 95 === e || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || 92 === e || e >= 128 && r.NonAsciiIdentifierPart.test(t.Character.fromCodePoint(e));
                },
                isDecimalDigit: function(e) {
                    return e >= 48 && e <= 57;
                },
                isHexDigit: function(e) {
                    return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
                },
                isOctalDigit: function(e) {
                    return e >= 48 && e <= 55;
                }
            };
        },
        function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(6), s = function(e) {
                this.type = n.JSXSyntax.JSXClosingElement, this.name = e;
            };
            t.JSXClosingElement = s;
            var o = function(e, t, r) {
                this.type = n.JSXSyntax.JSXElement, this.openingElement = e, this.children = t, this.closingElement = r;
            };
            t.JSXElement = o;
            var i = function() {
                this.type = n.JSXSyntax.JSXEmptyExpression;
            };
            t.JSXEmptyExpression = i;
            var a = function(e) {
                this.type = n.JSXSyntax.JSXExpressionContainer, this.expression = e;
            };
            t.JSXExpressionContainer = a;
            var c = function(e) {
                this.type = n.JSXSyntax.JSXIdentifier, this.name = e;
            };
            t.JSXIdentifier = c;
            var l = function(e, t) {
                this.type = n.JSXSyntax.JSXMemberExpression, this.object = e, this.property = t;
            };
            t.JSXMemberExpression = l;
            var u = function(e, t) {
                this.type = n.JSXSyntax.JSXAttribute, this.name = e, this.value = t;
            };
            t.JSXAttribute = u;
            var d = function(e, t) {
                this.type = n.JSXSyntax.JSXNamespacedName, this.namespace = e, this.name = t;
            };
            t.JSXNamespacedName = d;
            var p = function(e, t, r) {
                this.type = n.JSXSyntax.JSXOpeningElement, this.name = e, this.selfClosing = t, this.attributes = r;
            };
            t.JSXOpeningElement = p;
            var m = function(e) {
                this.type = n.JSXSyntax.JSXSpreadAttribute, this.argument = e;
            };
            t.JSXSpreadAttribute = m;
            var h = function(e, t) {
                this.type = n.JSXSyntax.JSXText, this.value = e, this.raw = t;
            };
            t.JSXText = h;
        },
        function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.JSXSyntax = {
                JSXAttribute: "JSXAttribute",
                JSXClosingElement: "JSXClosingElement",
                JSXElement: "JSXElement",
                JSXEmptyExpression: "JSXEmptyExpression",
                JSXExpressionContainer: "JSXExpressionContainer",
                JSXIdentifier: "JSXIdentifier",
                JSXMemberExpression: "JSXMemberExpression",
                JSXNamespacedName: "JSXNamespacedName",
                JSXOpeningElement: "JSXOpeningElement",
                JSXSpreadAttribute: "JSXSpreadAttribute",
                JSXText: "JSXText"
            };
        },
        function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(2), s = function(e) {
                this.type = n.Syntax.ArrayExpression, this.elements = e;
            };
            t.ArrayExpression = s;
            var o = function(e) {
                this.type = n.Syntax.ArrayPattern, this.elements = e;
            };
            t.ArrayPattern = o;
            var i = function(e, t, r) {
                this.type = n.Syntax.ArrowFunctionExpression, this.id = null, this.params = e, this.body = t, this.generator = !1, this.expression = r, this.async = !1;
            };
            t.ArrowFunctionExpression = i;
            var a = function(e, t, r) {
                this.type = n.Syntax.AssignmentExpression, this.operator = e, this.left = t, this.right = r;
            };
            t.AssignmentExpression = a;
            var c = function(e, t) {
                this.type = n.Syntax.AssignmentPattern, this.left = e, this.right = t;
            };
            t.AssignmentPattern = c;
            var l = function(e, t, r) {
                this.type = n.Syntax.ArrowFunctionExpression, this.id = null, this.params = e, this.body = t, this.generator = !1, this.expression = r, this.async = !0;
            };
            t.AsyncArrowFunctionExpression = l;
            var u = function(e, t, r) {
                this.type = n.Syntax.FunctionDeclaration, this.id = e, this.params = t, this.body = r, this.generator = !1, this.expression = !1, this.async = !0;
            };
            t.AsyncFunctionDeclaration = u;
            var d = function(e, t, r) {
                this.type = n.Syntax.FunctionExpression, this.id = e, this.params = t, this.body = r, this.generator = !1, this.expression = !1, this.async = !0;
            };
            t.AsyncFunctionExpression = d;
            var p = function(e) {
                this.type = n.Syntax.AwaitExpression, this.argument = e;
            };
            t.AwaitExpression = p;
            var m = function(e, t, r) {
                var s = "||" === e || "&&" === e;
                this.type = s ? n.Syntax.LogicalExpression : n.Syntax.BinaryExpression, this.operator = e, this.left = t, this.right = r;
            };
            t.BinaryExpression = m;
            var h = function(e) {
                this.type = n.Syntax.BlockStatement, this.body = e;
            };
            t.BlockStatement = h;
            var f = function(e) {
                this.type = n.Syntax.BreakStatement, this.label = e;
            };
            t.BreakStatement = f;
            var g = function(e, t) {
                this.type = n.Syntax.CallExpression, this.callee = e, this.arguments = t;
            };
            t.CallExpression = g;
            var y = function(e, t) {
                this.type = n.Syntax.CatchClause, this.param = e, this.body = t;
            };
            t.CatchClause = y;
            var w = function(e) {
                this.type = n.Syntax.ClassBody, this.body = e;
            };
            t.ClassBody = w;
            var v = function(e, t, r) {
                this.type = n.Syntax.ClassDeclaration, this.id = e, this.superClass = t, this.body = r;
            };
            t.ClassDeclaration = v;
            var _ = function(e, t, r) {
                this.type = n.Syntax.ClassExpression, this.id = e, this.superClass = t, this.body = r;
            };
            t.ClassExpression = _;
            var b = function(e, t) {
                this.type = n.Syntax.MemberExpression, this.computed = !0, this.object = e, this.property = t;
            };
            t.ComputedMemberExpression = b;
            var S = function(e, t, r) {
                this.type = n.Syntax.ConditionalExpression, this.test = e, this.consequent = t, this.alternate = r;
            };
            t.ConditionalExpression = S;
            var k = function(e) {
                this.type = n.Syntax.ContinueStatement, this.label = e;
            };
            t.ContinueStatement = k;
            var x = function() {
                this.type = n.Syntax.DebuggerStatement;
            };
            t.DebuggerStatement = x;
            var E = function(e, t) {
                this.type = n.Syntax.ExpressionStatement, this.expression = e, this.directive = t;
            };
            t.Directive = E;
            var I = function(e, t) {
                this.type = n.Syntax.DoWhileStatement, this.body = e, this.test = t;
            };
            t.DoWhileStatement = I;
            var T = function() {
                this.type = n.Syntax.EmptyStatement;
            };
            t.EmptyStatement = T;
            var C = function(e) {
                this.type = n.Syntax.ExportAllDeclaration, this.source = e;
            };
            t.ExportAllDeclaration = C;
            var P = function(e) {
                this.type = n.Syntax.ExportDefaultDeclaration, this.declaration = e;
            };
            t.ExportDefaultDeclaration = P;
            var A = function(e, t, r) {
                this.type = n.Syntax.ExportNamedDeclaration, this.declaration = e, this.specifiers = t, this.source = r;
            };
            t.ExportNamedDeclaration = A;
            var R = function(e, t) {
                this.type = n.Syntax.ExportSpecifier, this.exported = t, this.local = e;
            };
            t.ExportSpecifier = R;
            var M = function(e) {
                this.type = n.Syntax.ExpressionStatement, this.expression = e;
            };
            t.ExpressionStatement = M;
            var J = function(e, t, r) {
                this.type = n.Syntax.ForInStatement, this.left = e, this.right = t, this.body = r, this.each = !1;
            };
            t.ForInStatement = J;
            var O = function(e, t, r) {
                this.type = n.Syntax.ForOfStatement, this.left = e, this.right = t, this.body = r;
            };
            t.ForOfStatement = O;
            var B = function(e, t, r, s) {
                this.type = n.Syntax.ForStatement, this.init = e, this.test = t, this.update = r, this.body = s;
            };
            t.ForStatement = B;
            var D = function(e, t, r, s) {
                this.type = n.Syntax.FunctionDeclaration, this.id = e, this.params = t, this.body = r, this.generator = s, this.expression = !1, this.async = !1;
            };
            t.FunctionDeclaration = D;
            var q = function(e, t, r, s) {
                this.type = n.Syntax.FunctionExpression, this.id = e, this.params = t, this.body = r, this.generator = s, this.expression = !1, this.async = !1;
            };
            t.FunctionExpression = q;
            var N = function(e) {
                this.type = n.Syntax.Identifier, this.name = e;
            };
            t.Identifier = N;
            var F = function(e, t, r) {
                this.type = n.Syntax.IfStatement, this.test = e, this.consequent = t, this.alternate = r;
            };
            t.IfStatement = F;
            var U = function(e, t) {
                this.type = n.Syntax.ImportDeclaration, this.specifiers = e, this.source = t;
            };
            t.ImportDeclaration = U;
            var L = function(e) {
                this.type = n.Syntax.ImportDefaultSpecifier, this.local = e;
            };
            t.ImportDefaultSpecifier = L;
            var $ = function(e) {
                this.type = n.Syntax.ImportNamespaceSpecifier, this.local = e;
            };
            t.ImportNamespaceSpecifier = $;
            var j = function(e, t) {
                this.type = n.Syntax.ImportSpecifier, this.local = e, this.imported = t;
            };
            t.ImportSpecifier = j;
            var G = function(e, t) {
                this.type = n.Syntax.LabeledStatement, this.label = e, this.body = t;
            };
            t.LabeledStatement = G;
            var z = function(e, t) {
                this.type = n.Syntax.Literal, this.value = e, this.raw = t;
            };
            t.Literal = z;
            var W = function(e, t) {
                this.type = n.Syntax.MetaProperty, this.meta = e, this.property = t;
            };
            t.MetaProperty = W;
            var H = function(e, t, r, s, o) {
                this.type = n.Syntax.MethodDefinition, this.key = e, this.computed = t, this.value = r, this.kind = s, this.static = o;
            };
            t.MethodDefinition = H;
            var K = function(e) {
                this.type = n.Syntax.Program, this.body = e, this.sourceType = "module";
            };
            t.Module = K;
            var V = function(e, t) {
                this.type = n.Syntax.NewExpression, this.callee = e, this.arguments = t;
            };
            t.NewExpression = V;
            var Y = function(e) {
                this.type = n.Syntax.ObjectExpression, this.properties = e;
            };
            t.ObjectExpression = Y;
            var Q = function(e) {
                this.type = n.Syntax.ObjectPattern, this.properties = e;
            };
            t.ObjectPattern = Q;
            var X = function(e, t, r, s, o, i) {
                this.type = n.Syntax.Property, this.key = t, this.computed = r, this.value = s, this.kind = e, this.method = o, this.shorthand = i;
            };
            t.Property = X;
            var Z = function(e, t, r, s) {
                this.type = n.Syntax.Literal, this.value = e, this.raw = t, this.regex = {
                    pattern: r,
                    flags: s
                };
            };
            t.RegexLiteral = Z;
            var ee = function(e) {
                this.type = n.Syntax.RestElement, this.argument = e;
            };
            t.RestElement = ee;
            var te = function(e) {
                this.type = n.Syntax.ReturnStatement, this.argument = e;
            };
            t.ReturnStatement = te;
            var re = function(e) {
                this.type = n.Syntax.Program, this.body = e, this.sourceType = "script";
            };
            t.Script = re;
            var ne = function(e) {
                this.type = n.Syntax.SequenceExpression, this.expressions = e;
            };
            t.SequenceExpression = ne;
            var se = function(e) {
                this.type = n.Syntax.SpreadElement, this.argument = e;
            };
            t.SpreadElement = se;
            var oe = function(e, t) {
                this.type = n.Syntax.MemberExpression, this.computed = !1, this.object = e, this.property = t;
            };
            t.StaticMemberExpression = oe;
            var ie = function() {
                this.type = n.Syntax.Super;
            };
            t.Super = ie;
            var ae = function(e, t) {
                this.type = n.Syntax.SwitchCase, this.test = e, this.consequent = t;
            };
            t.SwitchCase = ae;
            var ce = function(e, t) {
                this.type = n.Syntax.SwitchStatement, this.discriminant = e, this.cases = t;
            };
            t.SwitchStatement = ce;
            var le = function(e, t) {
                this.type = n.Syntax.TaggedTemplateExpression, this.tag = e, this.quasi = t;
            };
            t.TaggedTemplateExpression = le;
            var ue = function(e, t) {
                this.type = n.Syntax.TemplateElement, this.value = e, this.tail = t;
            };
            t.TemplateElement = ue;
            var de = function(e, t) {
                this.type = n.Syntax.TemplateLiteral, this.quasis = e, this.expressions = t;
            };
            t.TemplateLiteral = de;
            var pe = function() {
                this.type = n.Syntax.ThisExpression;
            };
            t.ThisExpression = pe;
            var me = function(e) {
                this.type = n.Syntax.ThrowStatement, this.argument = e;
            };
            t.ThrowStatement = me;
            var he = function(e, t, r) {
                this.type = n.Syntax.TryStatement, this.block = e, this.handler = t, this.finalizer = r;
            };
            t.TryStatement = he;
            var fe = function(e, t) {
                this.type = n.Syntax.UnaryExpression, this.operator = e, this.argument = t, this.prefix = !0;
            };
            t.UnaryExpression = fe;
            var ge = function(e, t, r) {
                this.type = n.Syntax.UpdateExpression, this.operator = e, this.argument = t, this.prefix = r;
            };
            t.UpdateExpression = ge;
            var ye = function(e, t) {
                this.type = n.Syntax.VariableDeclaration, this.declarations = e, this.kind = t;
            };
            t.VariableDeclaration = ye;
            var we = function(e, t) {
                this.type = n.Syntax.VariableDeclarator, this.id = e, this.init = t;
            };
            t.VariableDeclarator = we;
            var ve = function(e, t) {
                this.type = n.Syntax.WhileStatement, this.test = e, this.body = t;
            };
            t.WhileStatement = ve;
            var _e = function(e, t) {
                this.type = n.Syntax.WithStatement, this.object = e, this.body = t;
            };
            t.WithStatement = _e;
            var be = function(e, t) {
                this.type = n.Syntax.YieldExpression, this.argument = e, this.delegate = t;
            };
            t.YieldExpression = be;
        },
        function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(9), s = r(10), o = r(11), i = r(7), a = r(12), c = r(2), l = r(13), u = "ArrowParameterPlaceHolder", d = function() {
                function e(e, t, r) {
                    void 0 === t && (t = {}), this.config = {
                        range: "boolean" == typeof t.range && t.range,
                        loc: "boolean" == typeof t.loc && t.loc,
                        source: null,
                        tokens: "boolean" == typeof t.tokens && t.tokens,
                        comment: "boolean" == typeof t.comment && t.comment,
                        tolerant: "boolean" == typeof t.tolerant && t.tolerant
                    }, this.config.loc && t.source && null !== t.source && (this.config.source = String(t.source)), this.delegate = r, this.errorHandler = new s.ErrorHandler, this.errorHandler.tolerant = this.config.tolerant, this.scanner = new a.Scanner(e, this.errorHandler), this.scanner.trackComment = this.config.comment, this.operatorPrecedence = {
                        ")": 0,
                        ";": 0,
                        ",": 0,
                        "=": 0,
                        "]": 0,
                        "||": 1,
                        "&&": 2,
                        "|": 3,
                        "^": 4,
                        "&": 5,
                        "==": 6,
                        "!=": 6,
                        "===": 6,
                        "!==": 6,
                        "<": 7,
                        ">": 7,
                        "<=": 7,
                        ">=": 7,
                        "<<": 8,
                        ">>": 8,
                        ">>>": 8,
                        "+": 9,
                        "-": 9,
                        "*": 11,
                        "/": 11,
                        "%": 11
                    }, this.lookahead = {
                        type: 2,
                        value: "",
                        lineNumber: this.scanner.lineNumber,
                        lineStart: 0,
                        start: 0,
                        end: 0
                    }, this.hasLineTerminator = !1, this.context = {
                        isModule: !1,
                        await: !1,
                        allowIn: !0,
                        allowStrictDirective: !0,
                        allowYield: !0,
                        firstCoverInitializedNameError: null,
                        isAssignmentTarget: !1,
                        isBindingElement: !1,
                        inFunctionBody: !1,
                        inIteration: !1,
                        inSwitch: !1,
                        labelSet: {},
                        strict: !1
                    }, this.tokens = [], this.startMarker = {
                        index: 0,
                        line: this.scanner.lineNumber,
                        column: 0
                    }, this.lastMarker = {
                        index: 0,
                        line: this.scanner.lineNumber,
                        column: 0
                    }, this.nextToken(), this.lastMarker = {
                        index: this.scanner.index,
                        line: this.scanner.lineNumber,
                        column: this.scanner.index - this.scanner.lineStart
                    };
                }
                return e.prototype.throwError = function(e) {
                    for(var t = [], r = 1; r < arguments.length; r++)t[r - 1] = arguments[r];
                    var s = Array.prototype.slice.call(arguments, 1), o = e.replace(/%(\d)/g, function(e, t) {
                        return n.assert(t < s.length, "Message reference must be in range"), s[t];
                    }), i = this.lastMarker.index, a = this.lastMarker.line, c = this.lastMarker.column + 1;
                    throw this.errorHandler.createError(i, a, c, o);
                }, e.prototype.tolerateError = function(e) {
                    for(var t = [], r = 1; r < arguments.length; r++)t[r - 1] = arguments[r];
                    var s = Array.prototype.slice.call(arguments, 1), o = e.replace(/%(\d)/g, function(e, t) {
                        return n.assert(t < s.length, "Message reference must be in range"), s[t];
                    }), i = this.lastMarker.index, a = this.scanner.lineNumber, c = this.lastMarker.column + 1;
                    this.errorHandler.tolerateError(i, a, c, o);
                }, e.prototype.unexpectedTokenError = function(e, t) {
                    var r, n = t || o.Messages.UnexpectedToken;
                    if (e ? (t || (n = 2 === e.type ? o.Messages.UnexpectedEOS : 3 === e.type ? o.Messages.UnexpectedIdentifier : 6 === e.type ? o.Messages.UnexpectedNumber : 8 === e.type ? o.Messages.UnexpectedString : 10 === e.type ? o.Messages.UnexpectedTemplate : o.Messages.UnexpectedToken, 4 === e.type && (this.scanner.isFutureReservedWord(e.value) ? n = o.Messages.UnexpectedReserved : this.context.strict && this.scanner.isStrictModeReservedWord(e.value) && (n = o.Messages.StrictReservedWord))), r = e.value) : r = "ILLEGAL", n = n.replace("%0", r), e && "number" == typeof e.lineNumber) {
                        var s = e.start, i = e.lineNumber, a = this.lastMarker.index - this.lastMarker.column, c = e.start - a + 1;
                        return this.errorHandler.createError(s, i, c, n);
                    }
                    return s = this.lastMarker.index, i = this.lastMarker.line, c = this.lastMarker.column + 1, this.errorHandler.createError(s, i, c, n);
                }, e.prototype.throwUnexpectedToken = function(e, t) {
                    throw this.unexpectedTokenError(e, t);
                }, e.prototype.tolerateUnexpectedToken = function(e, t) {
                    this.errorHandler.tolerate(this.unexpectedTokenError(e, t));
                }, e.prototype.collectComments = function() {
                    if (this.config.comment) {
                        var e = this.scanner.scanComments();
                        if (e.length > 0 && this.delegate) for(var t = 0; t < e.length; ++t){
                            var r = e[t], n = void 0;
                            n = {
                                type: r.multiLine ? "BlockComment" : "LineComment",
                                value: this.scanner.source.slice(r.slice[0], r.slice[1])
                            }, this.config.range && (n.range = r.range), this.config.loc && (n.loc = r.loc);
                            var s = {
                                start: {
                                    line: r.loc.start.line,
                                    column: r.loc.start.column,
                                    offset: r.range[0]
                                },
                                end: {
                                    line: r.loc.end.line,
                                    column: r.loc.end.column,
                                    offset: r.range[1]
                                }
                            };
                            this.delegate(n, s);
                        }
                    } else this.scanner.scanComments();
                }, e.prototype.getTokenRaw = function(e) {
                    return this.scanner.source.slice(e.start, e.end);
                }, e.prototype.convertToken = function(e) {
                    var t = {
                        type: l.TokenName[e.type],
                        value: this.getTokenRaw(e)
                    };
                    if (this.config.range && (t.range = [
                        e.start,
                        e.end
                    ]), this.config.loc && (t.loc = {
                        start: {
                            line: this.startMarker.line,
                            column: this.startMarker.column
                        },
                        end: {
                            line: this.scanner.lineNumber,
                            column: this.scanner.index - this.scanner.lineStart
                        }
                    }), 9 === e.type) {
                        var r = e.pattern, n = e.flags;
                        t.regex = {
                            pattern: r,
                            flags: n
                        };
                    }
                    return t;
                }, e.prototype.nextToken = function() {
                    var e = this.lookahead;
                    this.lastMarker.index = this.scanner.index, this.lastMarker.line = this.scanner.lineNumber, this.lastMarker.column = this.scanner.index - this.scanner.lineStart, this.collectComments(), this.scanner.index !== this.startMarker.index && (this.startMarker.index = this.scanner.index, this.startMarker.line = this.scanner.lineNumber, this.startMarker.column = this.scanner.index - this.scanner.lineStart);
                    var t = this.scanner.lex();
                    return this.hasLineTerminator = e.lineNumber !== t.lineNumber, t && this.context.strict && 3 === t.type && this.scanner.isStrictModeReservedWord(t.value) && (t.type = 4), this.lookahead = t, this.config.tokens && 2 !== t.type && this.tokens.push(this.convertToken(t)), e;
                }, e.prototype.nextRegexToken = function() {
                    this.collectComments();
                    var e = this.scanner.scanRegExp();
                    return this.config.tokens && (this.tokens.pop(), this.tokens.push(this.convertToken(e))), this.lookahead = e, this.nextToken(), e;
                }, e.prototype.createNode = function() {
                    return {
                        index: this.startMarker.index,
                        line: this.startMarker.line,
                        column: this.startMarker.column
                    };
                }, e.prototype.startNode = function(e, t) {
                    void 0 === t && (t = 0);
                    var r = e.start - e.lineStart, n = e.lineNumber;
                    return r < 0 && (r += t, n--), {
                        index: e.start,
                        line: n,
                        column: r
                    };
                }, e.prototype.finalize = function(e, t) {
                    if (this.config.range && (t.range = [
                        e.index,
                        this.lastMarker.index
                    ]), this.config.loc && (t.loc = {
                        start: {
                            line: e.line,
                            column: e.column
                        },
                        end: {
                            line: this.lastMarker.line,
                            column: this.lastMarker.column
                        }
                    }, this.config.source && (t.loc.source = this.config.source)), this.delegate) {
                        var r = {
                            start: {
                                line: e.line,
                                column: e.column,
                                offset: e.index
                            },
                            end: {
                                line: this.lastMarker.line,
                                column: this.lastMarker.column,
                                offset: this.lastMarker.index
                            }
                        };
                        this.delegate(t, r);
                    }
                    return t;
                }, e.prototype.expect = function(e) {
                    var t = this.nextToken();
                    7 === t.type && t.value === e || this.throwUnexpectedToken(t);
                }, e.prototype.expectCommaSeparator = function() {
                    if (this.config.tolerant) {
                        var e = this.lookahead;
                        7 === e.type && "," === e.value ? this.nextToken() : 7 === e.type && ";" === e.value ? (this.nextToken(), this.tolerateUnexpectedToken(e)) : this.tolerateUnexpectedToken(e, o.Messages.UnexpectedToken);
                    } else this.expect(",");
                }, e.prototype.expectKeyword = function(e) {
                    var t = this.nextToken();
                    4 === t.type && t.value === e || this.throwUnexpectedToken(t);
                }, e.prototype.match = function(e) {
                    return 7 === this.lookahead.type && this.lookahead.value === e;
                }, e.prototype.matchKeyword = function(e) {
                    return 4 === this.lookahead.type && this.lookahead.value === e;
                }, e.prototype.matchContextualKeyword = function(e) {
                    return 3 === this.lookahead.type && this.lookahead.value === e;
                }, e.prototype.matchAssign = function() {
                    if (7 !== this.lookahead.type) return !1;
                    var e = this.lookahead.value;
                    return "=" === e || "*=" === e || "**=" === e || "/=" === e || "%=" === e || "+=" === e || "-=" === e || "<<=" === e || ">>=" === e || ">>>=" === e || "&=" === e || "^=" === e || "|=" === e;
                }, e.prototype.isolateCoverGrammar = function(e) {
                    var t = this.context.isBindingElement, r = this.context.isAssignmentTarget, n = this.context.firstCoverInitializedNameError;
                    this.context.isBindingElement = !0, this.context.isAssignmentTarget = !0, this.context.firstCoverInitializedNameError = null;
                    var s = e.call(this);
                    return null !== this.context.firstCoverInitializedNameError && this.throwUnexpectedToken(this.context.firstCoverInitializedNameError), this.context.isBindingElement = t, this.context.isAssignmentTarget = r, this.context.firstCoverInitializedNameError = n, s;
                }, e.prototype.inheritCoverGrammar = function(e) {
                    var t = this.context.isBindingElement, r = this.context.isAssignmentTarget, n = this.context.firstCoverInitializedNameError;
                    this.context.isBindingElement = !0, this.context.isAssignmentTarget = !0, this.context.firstCoverInitializedNameError = null;
                    var s = e.call(this);
                    return this.context.isBindingElement = this.context.isBindingElement && t, this.context.isAssignmentTarget = this.context.isAssignmentTarget && r, this.context.firstCoverInitializedNameError = n || this.context.firstCoverInitializedNameError, s;
                }, e.prototype.consumeSemicolon = function() {
                    this.match(";") ? this.nextToken() : this.hasLineTerminator || (2 === this.lookahead.type || this.match("}") || this.throwUnexpectedToken(this.lookahead), this.lastMarker.index = this.startMarker.index, this.lastMarker.line = this.startMarker.line, this.lastMarker.column = this.startMarker.column);
                }, e.prototype.parsePrimaryExpression = function() {
                    var e, t, r, n = this.createNode();
                    switch(this.lookahead.type){
                        case 3:
                            (this.context.isModule || this.context.await) && "await" === this.lookahead.value && this.tolerateUnexpectedToken(this.lookahead), e = this.matchAsyncFunction() ? this.parseFunctionExpression() : this.finalize(n, new i.Identifier(this.nextToken().value));
                            break;
                        case 6:
                        case 8:
                            this.context.strict && this.lookahead.octal && this.tolerateUnexpectedToken(this.lookahead, o.Messages.StrictOctalLiteral), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1, t = this.nextToken(), r = this.getTokenRaw(t), e = this.finalize(n, new i.Literal(t.value, r));
                            break;
                        case 1:
                            this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1, t = this.nextToken(), r = this.getTokenRaw(t), e = this.finalize(n, new i.Literal("true" === t.value, r));
                            break;
                        case 5:
                            this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1, t = this.nextToken(), r = this.getTokenRaw(t), e = this.finalize(n, new i.Literal(null, r));
                            break;
                        case 10:
                            e = this.parseTemplateLiteral();
                            break;
                        case 7:
                            switch(this.lookahead.value){
                                case "(":
                                    this.context.isBindingElement = !1, e = this.inheritCoverGrammar(this.parseGroupExpression);
                                    break;
                                case "[":
                                    e = this.inheritCoverGrammar(this.parseArrayInitializer);
                                    break;
                                case "{":
                                    e = this.inheritCoverGrammar(this.parseObjectInitializer);
                                    break;
                                case "/":
                                case "/=":
                                    this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1, this.scanner.index = this.startMarker.index, t = this.nextRegexToken(), r = this.getTokenRaw(t), e = this.finalize(n, new i.RegexLiteral(t.regex, r, t.pattern, t.flags));
                                    break;
                                default:
                                    e = this.throwUnexpectedToken(this.nextToken());
                            }
                            break;
                        case 4:
                            !this.context.strict && this.context.allowYield && this.matchKeyword("yield") ? e = this.parseIdentifierName() : !this.context.strict && this.matchKeyword("let") ? e = this.finalize(n, new i.Identifier(this.nextToken().value)) : (this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1, this.matchKeyword("function") ? e = this.parseFunctionExpression() : this.matchKeyword("this") ? (this.nextToken(), e = this.finalize(n, new i.ThisExpression)) : e = this.matchKeyword("class") ? this.parseClassExpression() : this.throwUnexpectedToken(this.nextToken()));
                            break;
                        default:
                            e = this.throwUnexpectedToken(this.nextToken());
                    }
                    return e;
                }, e.prototype.parseSpreadElement = function() {
                    var e = this.createNode();
                    this.expect("...");
                    var t = this.inheritCoverGrammar(this.parseAssignmentExpression);
                    return this.finalize(e, new i.SpreadElement(t));
                }, e.prototype.parseArrayInitializer = function() {
                    var e = this.createNode(), t = [];
                    for(this.expect("["); !this.match("]");)if (this.match(",")) this.nextToken(), t.push(null);
                    else if (this.match("...")) {
                        var r = this.parseSpreadElement();
                        this.match("]") || (this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1, this.expect(",")), t.push(r);
                    } else t.push(this.inheritCoverGrammar(this.parseAssignmentExpression)), this.match("]") || this.expect(",");
                    return this.expect("]"), this.finalize(e, new i.ArrayExpression(t));
                }, e.prototype.parsePropertyMethod = function(e) {
                    this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;
                    var t = this.context.strict, r = this.context.allowStrictDirective;
                    this.context.allowStrictDirective = e.simple;
                    var n = this.isolateCoverGrammar(this.parseFunctionSourceElements);
                    return this.context.strict && e.firstRestricted && this.tolerateUnexpectedToken(e.firstRestricted, e.message), this.context.strict && e.stricted && this.tolerateUnexpectedToken(e.stricted, e.message), this.context.strict = t, this.context.allowStrictDirective = r, n;
                }, e.prototype.parsePropertyMethodFunction = function() {
                    var e = this.createNode(), t = this.context.allowYield;
                    this.context.allowYield = !0;
                    var r = this.parseFormalParameters(), n = this.parsePropertyMethod(r);
                    return this.context.allowYield = t, this.finalize(e, new i.FunctionExpression(null, r.params, n, !1));
                }, e.prototype.parsePropertyMethodAsyncFunction = function() {
                    var e = this.createNode(), t = this.context.allowYield, r = this.context.await;
                    this.context.allowYield = !1, this.context.await = !0;
                    var n = this.parseFormalParameters(), s = this.parsePropertyMethod(n);
                    return this.context.allowYield = t, this.context.await = r, this.finalize(e, new i.AsyncFunctionExpression(null, n.params, s));
                }, e.prototype.parseObjectPropertyKey = function() {
                    var e, t = this.createNode(), r = this.nextToken();
                    switch(r.type){
                        case 8:
                        case 6:
                            this.context.strict && r.octal && this.tolerateUnexpectedToken(r, o.Messages.StrictOctalLiteral);
                            var n = this.getTokenRaw(r);
                            e = this.finalize(t, new i.Literal(r.value, n));
                            break;
                        case 3:
                        case 1:
                        case 5:
                        case 4:
                            e = this.finalize(t, new i.Identifier(r.value));
                            break;
                        case 7:
                            "[" === r.value ? (e = this.isolateCoverGrammar(this.parseAssignmentExpression), this.expect("]")) : e = this.throwUnexpectedToken(r);
                            break;
                        default:
                            e = this.throwUnexpectedToken(r);
                    }
                    return e;
                }, e.prototype.isPropertyKey = function(e, t) {
                    return e.type === c.Syntax.Identifier && e.name === t || e.type === c.Syntax.Literal && e.value === t;
                }, e.prototype.parseObjectProperty = function(e) {
                    var t, r = this.createNode(), n = this.lookahead, s = null, a = null, c = !1, l = !1, u = !1, d = !1;
                    if (3 === n.type) {
                        var p = n.value;
                        this.nextToken(), c = this.match("["), s = (d = !(this.hasLineTerminator || "async" !== p || this.match(":") || this.match("(") || this.match("*") || this.match(","))) ? this.parseObjectPropertyKey() : this.finalize(r, new i.Identifier(p));
                    } else this.match("*") ? this.nextToken() : (c = this.match("["), s = this.parseObjectPropertyKey());
                    var m = this.qualifiedPropertyName(this.lookahead);
                    if (3 === n.type && !d && "get" === n.value && m) t = "get", c = this.match("["), s = this.parseObjectPropertyKey(), this.context.allowYield = !1, a = this.parseGetterMethod();
                    else if (3 === n.type && !d && "set" === n.value && m) t = "set", c = this.match("["), s = this.parseObjectPropertyKey(), a = this.parseSetterMethod();
                    else if (7 === n.type && "*" === n.value && m) t = "init", c = this.match("["), s = this.parseObjectPropertyKey(), a = this.parseGeneratorMethod(), l = !0;
                    else if (s || this.throwUnexpectedToken(this.lookahead), t = "init", this.match(":") && !d) !c && this.isPropertyKey(s, "__proto__") && (e.value && this.tolerateError(o.Messages.DuplicateProtoProperty), e.value = !0), this.nextToken(), a = this.inheritCoverGrammar(this.parseAssignmentExpression);
                    else if (this.match("(")) a = d ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction(), l = !0;
                    else if (3 === n.type) if (p = this.finalize(r, new i.Identifier(n.value)), this.match("=")) {
                        this.context.firstCoverInitializedNameError = this.lookahead, this.nextToken(), u = !0;
                        var h = this.isolateCoverGrammar(this.parseAssignmentExpression);
                        a = this.finalize(r, new i.AssignmentPattern(p, h));
                    } else u = !0, a = p;
                    else this.throwUnexpectedToken(this.nextToken());
                    return this.finalize(r, new i.Property(t, s, c, a, l, u));
                }, e.prototype.parseObjectInitializer = function() {
                    var e = this.createNode();
                    this.expect("{");
                    for(var t = [], r = {
                        value: !1
                    }; !this.match("}");)t.push(this.parseObjectProperty(r)), this.match("}") || this.expectCommaSeparator();
                    return this.expect("}"), this.finalize(e, new i.ObjectExpression(t));
                }, e.prototype.parseTemplateHead = function() {
                    n.assert(this.lookahead.head, "Template literal must start with a template head");
                    var e = this.createNode(), t = this.nextToken(), r = t.value, s = t.cooked;
                    return this.finalize(e, new i.TemplateElement({
                        raw: r,
                        cooked: s
                    }, t.tail));
                }, e.prototype.parseTemplateElement = function() {
                    10 !== this.lookahead.type && this.throwUnexpectedToken();
                    var e = this.createNode(), t = this.nextToken(), r = t.value, n = t.cooked;
                    return this.finalize(e, new i.TemplateElement({
                        raw: r,
                        cooked: n
                    }, t.tail));
                }, e.prototype.parseTemplateLiteral = function() {
                    var e = this.createNode(), t = [], r = [], n = this.parseTemplateHead();
                    for(r.push(n); !n.tail;)t.push(this.parseExpression()), n = this.parseTemplateElement(), r.push(n);
                    return this.finalize(e, new i.TemplateLiteral(r, t));
                }, e.prototype.reinterpretExpressionAsPattern = function(e) {
                    switch(e.type){
                        case c.Syntax.Identifier:
                        case c.Syntax.MemberExpression:
                        case c.Syntax.RestElement:
                        case c.Syntax.AssignmentPattern:
                            break;
                        case c.Syntax.SpreadElement:
                            e.type = c.Syntax.RestElement, this.reinterpretExpressionAsPattern(e.argument);
                            break;
                        case c.Syntax.ArrayExpression:
                            e.type = c.Syntax.ArrayPattern;
                            for(var t = 0; t < e.elements.length; t++)null !== e.elements[t] && this.reinterpretExpressionAsPattern(e.elements[t]);
                            break;
                        case c.Syntax.ObjectExpression:
                            for(e.type = c.Syntax.ObjectPattern, t = 0; t < e.properties.length; t++)this.reinterpretExpressionAsPattern(e.properties[t].value);
                            break;
                        case c.Syntax.AssignmentExpression:
                            e.type = c.Syntax.AssignmentPattern, delete e.operator, this.reinterpretExpressionAsPattern(e.left);
                    }
                }, e.prototype.parseGroupExpression = function() {
                    var e;
                    if (this.expect("("), this.match(")")) this.nextToken(), this.match("=>") || this.expect("=>"), e = {
                        type: u,
                        params: [],
                        async: !1
                    };
                    else {
                        var t = this.lookahead, r = [];
                        if (this.match("...")) e = this.parseRestElement(r), this.expect(")"), this.match("=>") || this.expect("=>"), e = {
                            type: u,
                            params: [
                                e
                            ],
                            async: !1
                        };
                        else {
                            var n = !1;
                            if (this.context.isBindingElement = !0, e = this.inheritCoverGrammar(this.parseAssignmentExpression), this.match(",")) {
                                var s = [];
                                for(this.context.isAssignmentTarget = !1, s.push(e); 2 !== this.lookahead.type && this.match(",");){
                                    if (this.nextToken(), this.match(")")) {
                                        this.nextToken();
                                        for(var o = 0; o < s.length; o++)this.reinterpretExpressionAsPattern(s[o]);
                                        n = !0, e = {
                                            type: u,
                                            params: s,
                                            async: !1
                                        };
                                    } else if (this.match("...")) {
                                        for(this.context.isBindingElement || this.throwUnexpectedToken(this.lookahead), s.push(this.parseRestElement(r)), this.expect(")"), this.match("=>") || this.expect("=>"), this.context.isBindingElement = !1, o = 0; o < s.length; o++)this.reinterpretExpressionAsPattern(s[o]);
                                        n = !0, e = {
                                            type: u,
                                            params: s,
                                            async: !1
                                        };
                                    } else s.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
                                    if (n) break;
                                }
                                n || (e = this.finalize(this.startNode(t), new i.SequenceExpression(s)));
                            }
                            if (!n) {
                                if (this.expect(")"), this.match("=>") && (e.type === c.Syntax.Identifier && "yield" === e.name && (n = !0, e = {
                                    type: u,
                                    params: [
                                        e
                                    ],
                                    async: !1
                                }), !n)) {
                                    if (this.context.isBindingElement || this.throwUnexpectedToken(this.lookahead), e.type === c.Syntax.SequenceExpression) for(o = 0; o < e.expressions.length; o++)this.reinterpretExpressionAsPattern(e.expressions[o]);
                                    else this.reinterpretExpressionAsPattern(e);
                                    var a = e.type === c.Syntax.SequenceExpression ? e.expressions : [
                                        e
                                    ];
                                    e = {
                                        type: u,
                                        params: a,
                                        async: !1
                                    };
                                }
                                this.context.isBindingElement = !1;
                            }
                        }
                    }
                    return e;
                }, e.prototype.parseArguments = function() {
                    this.expect("(");
                    var e = [];
                    if (!this.match(")")) for(;;){
                        var t = this.match("...") ? this.parseSpreadElement() : this.isolateCoverGrammar(this.parseAssignmentExpression);
                        if (e.push(t), this.match(")")) break;
                        if (this.expectCommaSeparator(), this.match(")")) break;
                    }
                    return this.expect(")"), e;
                }, e.prototype.isIdentifierName = function(e) {
                    return 3 === e.type || 4 === e.type || 1 === e.type || 5 === e.type;
                }, e.prototype.parseIdentifierName = function() {
                    var e = this.createNode(), t = this.nextToken();
                    return this.isIdentifierName(t) || this.throwUnexpectedToken(t), this.finalize(e, new i.Identifier(t.value));
                }, e.prototype.parseNewExpression = function() {
                    var e, t = this.createNode(), r = this.parseIdentifierName();
                    if (n.assert("new" === r.name, "New expression must start with `new`"), this.match(".")) if (this.nextToken(), 3 === this.lookahead.type && this.context.inFunctionBody && "target" === this.lookahead.value) {
                        var s = this.parseIdentifierName();
                        e = new i.MetaProperty(r, s);
                    } else this.throwUnexpectedToken(this.lookahead);
                    else {
                        var o = this.isolateCoverGrammar(this.parseLeftHandSideExpression), a = this.match("(") ? this.parseArguments() : [];
                        e = new i.NewExpression(o, a), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;
                    }
                    return this.finalize(t, e);
                }, e.prototype.parseAsyncArgument = function() {
                    var e = this.parseAssignmentExpression();
                    return this.context.firstCoverInitializedNameError = null, e;
                }, e.prototype.parseAsyncArguments = function() {
                    this.expect("(");
                    var e = [];
                    if (!this.match(")")) for(;;){
                        var t = this.match("...") ? this.parseSpreadElement() : this.isolateCoverGrammar(this.parseAsyncArgument);
                        if (e.push(t), this.match(")")) break;
                        if (this.expectCommaSeparator(), this.match(")")) break;
                    }
                    return this.expect(")"), e;
                }, e.prototype.parseLeftHandSideExpressionAllowCall = function() {
                    var e, t = this.lookahead, r = this.matchContextualKeyword("async"), n = this.context.allowIn;
                    for(this.context.allowIn = !0, this.matchKeyword("super") && this.context.inFunctionBody ? (e = this.createNode(), this.nextToken(), e = this.finalize(e, new i.Super), this.match("(") || this.match(".") || this.match("[") || this.throwUnexpectedToken(this.lookahead)) : e = this.inheritCoverGrammar(this.matchKeyword("new") ? this.parseNewExpression : this.parsePrimaryExpression);;)if (this.match(".")) {
                        this.context.isBindingElement = !1, this.context.isAssignmentTarget = !0, this.expect(".");
                        var s = this.parseIdentifierName();
                        e = this.finalize(this.startNode(t), new i.StaticMemberExpression(e, s));
                    } else if (this.match("(")) {
                        var o = r && t.lineNumber === this.lookahead.lineNumber;
                        this.context.isBindingElement = !1, this.context.isAssignmentTarget = !1;
                        var a = o ? this.parseAsyncArguments() : this.parseArguments();
                        if (e = this.finalize(this.startNode(t), new i.CallExpression(e, a)), o && this.match("=>")) {
                            for(var c = 0; c < a.length; ++c)this.reinterpretExpressionAsPattern(a[c]);
                            e = {
                                type: u,
                                params: a,
                                async: !0
                            };
                        }
                    } else if (this.match("[")) this.context.isBindingElement = !1, this.context.isAssignmentTarget = !0, this.expect("["), s = this.isolateCoverGrammar(this.parseExpression), this.expect("]"), e = this.finalize(this.startNode(t), new i.ComputedMemberExpression(e, s));
                    else {
                        if (10 !== this.lookahead.type || !this.lookahead.head) break;
                        var l = this.parseTemplateLiteral();
                        e = this.finalize(this.startNode(t), new i.TaggedTemplateExpression(e, l));
                    }
                    return this.context.allowIn = n, e;
                }, e.prototype.parseSuper = function() {
                    var e = this.createNode();
                    return this.expectKeyword("super"), this.match("[") || this.match(".") || this.throwUnexpectedToken(this.lookahead), this.finalize(e, new i.Super);
                }, e.prototype.parseLeftHandSideExpression = function() {
                    n.assert(this.context.allowIn, "callee of new expression always allow in keyword.");
                    for(var e = this.startNode(this.lookahead), t = this.matchKeyword("super") && this.context.inFunctionBody ? this.parseSuper() : this.inheritCoverGrammar(this.matchKeyword("new") ? this.parseNewExpression : this.parsePrimaryExpression);;)if (this.match("[")) {
                        this.context.isBindingElement = !1, this.context.isAssignmentTarget = !0, this.expect("[");
                        var r = this.isolateCoverGrammar(this.parseExpression);
                        this.expect("]"), t = this.finalize(e, new i.ComputedMemberExpression(t, r));
                    } else if (this.match(".")) this.context.isBindingElement = !1, this.context.isAssignmentTarget = !0, this.expect("."), r = this.parseIdentifierName(), t = this.finalize(e, new i.StaticMemberExpression(t, r));
                    else {
                        if (10 !== this.lookahead.type || !this.lookahead.head) break;
                        var s = this.parseTemplateLiteral();
                        t = this.finalize(e, new i.TaggedTemplateExpression(t, s));
                    }
                    return t;
                }, e.prototype.parseUpdateExpression = function() {
                    var e, t = this.lookahead;
                    if (this.match("++") || this.match("--")) {
                        var r = this.startNode(t), n = this.nextToken();
                        e = this.inheritCoverGrammar(this.parseUnaryExpression), this.context.strict && e.type === c.Syntax.Identifier && this.scanner.isRestrictedWord(e.name) && this.tolerateError(o.Messages.StrictLHSPrefix), this.context.isAssignmentTarget || this.tolerateError(o.Messages.InvalidLHSInAssignment);
                        var s = !0;
                        e = this.finalize(r, new i.UpdateExpression(n.value, e, s)), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;
                    } else if (e = this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall), !this.hasLineTerminator && 7 === this.lookahead.type && (this.match("++") || this.match("--"))) {
                        this.context.strict && e.type === c.Syntax.Identifier && this.scanner.isRestrictedWord(e.name) && this.tolerateError(o.Messages.StrictLHSPostfix), this.context.isAssignmentTarget || this.tolerateError(o.Messages.InvalidLHSInAssignment), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;
                        var a = this.nextToken().value;
                        s = !1, e = this.finalize(this.startNode(t), new i.UpdateExpression(a, e, s));
                    }
                    return e;
                }, e.prototype.parseAwaitExpression = function() {
                    var e = this.createNode();
                    this.nextToken();
                    var t = this.parseUnaryExpression();
                    return this.finalize(e, new i.AwaitExpression(t));
                }, e.prototype.parseUnaryExpression = function() {
                    var e;
                    if (this.match("+") || this.match("-") || this.match("~") || this.match("!") || this.matchKeyword("delete") || this.matchKeyword("void") || this.matchKeyword("typeof")) {
                        var t = this.startNode(this.lookahead), r = this.nextToken();
                        e = this.inheritCoverGrammar(this.parseUnaryExpression), e = this.finalize(t, new i.UnaryExpression(r.value, e)), this.context.strict && "delete" === e.operator && e.argument.type === c.Syntax.Identifier && this.tolerateError(o.Messages.StrictDelete), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;
                    } else e = this.context.await && this.matchContextualKeyword("await") ? this.parseAwaitExpression() : this.parseUpdateExpression();
                    return e;
                }, e.prototype.parseExponentiationExpression = function() {
                    var e = this.lookahead, t = this.inheritCoverGrammar(this.parseUnaryExpression);
                    if (t.type !== c.Syntax.UnaryExpression && this.match("**")) {
                        this.nextToken(), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;
                        var r = t, n = this.isolateCoverGrammar(this.parseExponentiationExpression);
                        t = this.finalize(this.startNode(e), new i.BinaryExpression("**", r, n));
                    }
                    return t;
                }, e.prototype.binaryPrecedence = function(e) {
                    var t = e.value;
                    return 7 === e.type ? this.operatorPrecedence[t] || 0 : 4 === e.type && ("instanceof" === t || this.context.allowIn && "in" === t) ? 7 : 0;
                }, e.prototype.parseBinaryExpression = function() {
                    var e = this.lookahead, t = this.inheritCoverGrammar(this.parseExponentiationExpression), r = this.lookahead, n = this.binaryPrecedence(r);
                    if (n > 0) {
                        this.nextToken(), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;
                        for(var s = [
                            e,
                            this.lookahead
                        ], o = t, a = this.isolateCoverGrammar(this.parseExponentiationExpression), c = [
                            o,
                            r.value,
                            a
                        ], l = [
                            n
                        ]; !((n = this.binaryPrecedence(this.lookahead)) <= 0);){
                            for(; c.length > 2 && n <= l[l.length - 1];){
                                a = c.pop();
                                var u = c.pop();
                                l.pop(), o = c.pop(), s.pop();
                                var d = this.startNode(s[s.length - 1]);
                                c.push(this.finalize(d, new i.BinaryExpression(u, o, a)));
                            }
                            c.push(this.nextToken().value), l.push(n), s.push(this.lookahead), c.push(this.isolateCoverGrammar(this.parseExponentiationExpression));
                        }
                        var p = c.length - 1;
                        t = c[p];
                        for(var m = s.pop(); p > 1;){
                            var h = s.pop(), f = m && m.lineStart;
                            d = this.startNode(h, f), u = c[p - 1], t = this.finalize(d, new i.BinaryExpression(u, c[p - 2], t)), p -= 2, m = h;
                        }
                    }
                    return t;
                }, e.prototype.parseConditionalExpression = function() {
                    var e = this.lookahead, t = this.inheritCoverGrammar(this.parseBinaryExpression);
                    if (this.match("?")) {
                        this.nextToken();
                        var r = this.context.allowIn;
                        this.context.allowIn = !0;
                        var n = this.isolateCoverGrammar(this.parseAssignmentExpression);
                        this.context.allowIn = r, this.expect(":");
                        var s = this.isolateCoverGrammar(this.parseAssignmentExpression);
                        t = this.finalize(this.startNode(e), new i.ConditionalExpression(t, n, s)), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;
                    }
                    return t;
                }, e.prototype.checkPatternParam = function(e, t) {
                    switch(t.type){
                        case c.Syntax.Identifier:
                            this.validateParam(e, t, t.name);
                            break;
                        case c.Syntax.RestElement:
                            this.checkPatternParam(e, t.argument);
                            break;
                        case c.Syntax.AssignmentPattern:
                            this.checkPatternParam(e, t.left);
                            break;
                        case c.Syntax.ArrayPattern:
                            for(var r = 0; r < t.elements.length; r++)null !== t.elements[r] && this.checkPatternParam(e, t.elements[r]);
                            break;
                        case c.Syntax.ObjectPattern:
                            for(r = 0; r < t.properties.length; r++)this.checkPatternParam(e, t.properties[r].value);
                    }
                    e.simple = e.simple && t instanceof i.Identifier;
                }, e.prototype.reinterpretAsCoverFormalsList = function(e) {
                    var t, r = [
                        e
                    ], n = !1;
                    switch(e.type){
                        case c.Syntax.Identifier:
                            break;
                        case u:
                            r = e.params, n = e.async;
                            break;
                        default:
                            return null;
                    }
                    t = {
                        simple: !0,
                        paramSet: {}
                    };
                    for(var s = 0; s < r.length; ++s)(i = r[s]).type === c.Syntax.AssignmentPattern ? i.right.type === c.Syntax.YieldExpression && (i.right.argument && this.throwUnexpectedToken(this.lookahead), i.right.type = c.Syntax.Identifier, i.right.name = "yield", delete i.right.argument, delete i.right.delegate) : n && i.type === c.Syntax.Identifier && "await" === i.name && this.throwUnexpectedToken(this.lookahead), this.checkPatternParam(t, i), r[s] = i;
                    if (this.context.strict || !this.context.allowYield) for(s = 0; s < r.length; ++s){
                        var i;
                        (i = r[s]).type === c.Syntax.YieldExpression && this.throwUnexpectedToken(this.lookahead);
                    }
                    if (t.message === o.Messages.StrictParamDupe) {
                        var a = this.context.strict ? t.stricted : t.firstRestricted;
                        this.throwUnexpectedToken(a, t.message);
                    }
                    return {
                        simple: t.simple,
                        params: r,
                        stricted: t.stricted,
                        firstRestricted: t.firstRestricted,
                        message: t.message
                    };
                }, e.prototype.parseAssignmentExpression = function() {
                    var e;
                    if (!this.context.allowYield && this.matchKeyword("yield")) e = this.parseYieldExpression();
                    else {
                        var t = this.lookahead, r = t;
                        if (e = this.parseConditionalExpression(), 3 === r.type && r.lineNumber === this.lookahead.lineNumber && "async" === r.value && (3 === this.lookahead.type || this.matchKeyword("yield"))) {
                            var n = this.parsePrimaryExpression();
                            this.reinterpretExpressionAsPattern(n), e = {
                                type: u,
                                params: [
                                    n
                                ],
                                async: !0
                            };
                        }
                        if (e.type === u || this.match("=>")) {
                            this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;
                            var s = e.async, a = this.reinterpretAsCoverFormalsList(e);
                            if (a) {
                                this.hasLineTerminator && this.tolerateUnexpectedToken(this.lookahead), this.context.firstCoverInitializedNameError = null;
                                var l = this.context.strict, d = this.context.allowStrictDirective;
                                this.context.allowStrictDirective = a.simple;
                                var p = this.context.allowYield, m = this.context.await;
                                this.context.allowYield = !0, this.context.await = s;
                                var h = this.startNode(t);
                                this.expect("=>");
                                var f = void 0;
                                if (this.match("{")) {
                                    var g = this.context.allowIn;
                                    this.context.allowIn = !0, f = this.parseFunctionSourceElements(), this.context.allowIn = g;
                                } else f = this.isolateCoverGrammar(this.parseAssignmentExpression);
                                var y = f.type !== c.Syntax.BlockStatement;
                                this.context.strict && a.firstRestricted && this.throwUnexpectedToken(a.firstRestricted, a.message), this.context.strict && a.stricted && this.tolerateUnexpectedToken(a.stricted, a.message), e = s ? this.finalize(h, new i.AsyncArrowFunctionExpression(a.params, f, y)) : this.finalize(h, new i.ArrowFunctionExpression(a.params, f, y)), this.context.strict = l, this.context.allowStrictDirective = d, this.context.allowYield = p, this.context.await = m;
                            }
                        } else if (this.matchAssign()) {
                            if (this.context.isAssignmentTarget || this.tolerateError(o.Messages.InvalidLHSInAssignment), this.context.strict && e.type === c.Syntax.Identifier) {
                                var w = e;
                                this.scanner.isRestrictedWord(w.name) && this.tolerateUnexpectedToken(r, o.Messages.StrictLHSAssignment), this.scanner.isStrictModeReservedWord(w.name) && this.tolerateUnexpectedToken(r, o.Messages.StrictReservedWord);
                            }
                            this.match("=") ? this.reinterpretExpressionAsPattern(e) : (this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1);
                            var v = (r = this.nextToken()).value, _ = this.isolateCoverGrammar(this.parseAssignmentExpression);
                            e = this.finalize(this.startNode(t), new i.AssignmentExpression(v, e, _)), this.context.firstCoverInitializedNameError = null;
                        }
                    }
                    return e;
                }, e.prototype.parseExpression = function() {
                    var e = this.lookahead, t = this.isolateCoverGrammar(this.parseAssignmentExpression);
                    if (this.match(",")) {
                        var r = [];
                        for(r.push(t); 2 !== this.lookahead.type && this.match(",");)this.nextToken(), r.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
                        t = this.finalize(this.startNode(e), new i.SequenceExpression(r));
                    }
                    return t;
                }, e.prototype.parseStatementListItem = function() {
                    var e;
                    if (this.context.isAssignmentTarget = !0, this.context.isBindingElement = !0, 4 === this.lookahead.type) switch(this.lookahead.value){
                        case "export":
                            this.context.isModule || this.tolerateUnexpectedToken(this.lookahead, o.Messages.IllegalExportDeclaration), e = this.parseExportDeclaration();
                            break;
                        case "import":
                            this.context.isModule || this.tolerateUnexpectedToken(this.lookahead, o.Messages.IllegalImportDeclaration), e = this.parseImportDeclaration();
                            break;
                        case "const":
                            e = this.parseLexicalDeclaration({
                                inFor: !1
                            });
                            break;
                        case "function":
                            e = this.parseFunctionDeclaration();
                            break;
                        case "class":
                            e = this.parseClassDeclaration();
                            break;
                        case "let":
                            e = this.isLexicalDeclaration() ? this.parseLexicalDeclaration({
                                inFor: !1
                            }) : this.parseStatement();
                            break;
                        default:
                            e = this.parseStatement();
                    }
                    else e = this.parseStatement();
                    return e;
                }, e.prototype.parseBlock = function() {
                    var e = this.createNode();
                    this.expect("{");
                    for(var t = []; !this.match("}");)t.push(this.parseStatementListItem());
                    return this.expect("}"), this.finalize(e, new i.BlockStatement(t));
                }, e.prototype.parseLexicalBinding = function(e, t) {
                    var r = this.createNode(), n = this.parsePattern([], e);
                    this.context.strict && n.type === c.Syntax.Identifier && this.scanner.isRestrictedWord(n.name) && this.tolerateError(o.Messages.StrictVarName);
                    var s = null;
                    return "const" === e ? this.matchKeyword("in") || this.matchContextualKeyword("of") || (this.match("=") ? (this.nextToken(), s = this.isolateCoverGrammar(this.parseAssignmentExpression)) : this.throwError(o.Messages.DeclarationMissingInitializer, "const")) : (!t.inFor && n.type !== c.Syntax.Identifier || this.match("=")) && (this.expect("="), s = this.isolateCoverGrammar(this.parseAssignmentExpression)), this.finalize(r, new i.VariableDeclarator(n, s));
                }, e.prototype.parseBindingList = function(e, t) {
                    for(var r = [
                        this.parseLexicalBinding(e, t)
                    ]; this.match(",");)this.nextToken(), r.push(this.parseLexicalBinding(e, t));
                    return r;
                }, e.prototype.isLexicalDeclaration = function() {
                    var e = this.scanner.saveState();
                    this.scanner.scanComments();
                    var t = this.scanner.lex();
                    return this.scanner.restoreState(e), 3 === t.type || 7 === t.type && "[" === t.value || 7 === t.type && "{" === t.value || 4 === t.type && "let" === t.value || 4 === t.type && "yield" === t.value;
                }, e.prototype.parseLexicalDeclaration = function(e) {
                    var t = this.createNode(), r = this.nextToken().value;
                    n.assert("let" === r || "const" === r, "Lexical declaration must be either let or const");
                    var s = this.parseBindingList(r, e);
                    return this.consumeSemicolon(), this.finalize(t, new i.VariableDeclaration(s, r));
                }, e.prototype.parseBindingRestElement = function(e, t) {
                    var r = this.createNode();
                    this.expect("...");
                    var n = this.parsePattern(e, t);
                    return this.finalize(r, new i.RestElement(n));
                }, e.prototype.parseArrayPattern = function(e, t) {
                    var r = this.createNode();
                    this.expect("[");
                    for(var n = []; !this.match("]");)if (this.match(",")) this.nextToken(), n.push(null);
                    else {
                        if (this.match("...")) {
                            n.push(this.parseBindingRestElement(e, t));
                            break;
                        }
                        n.push(this.parsePatternWithDefault(e, t)), this.match("]") || this.expect(",");
                    }
                    return this.expect("]"), this.finalize(r, new i.ArrayPattern(n));
                }, e.prototype.parsePropertyPattern = function(e, t) {
                    var r, n, s = this.createNode(), o = !1, a = !1;
                    if (3 === this.lookahead.type) {
                        var c = this.lookahead;
                        r = this.parseVariableIdentifier();
                        var l = this.finalize(s, new i.Identifier(c.value));
                        if (this.match("=")) {
                            e.push(c), a = !0, this.nextToken();
                            var u = this.parseAssignmentExpression();
                            n = this.finalize(this.startNode(c), new i.AssignmentPattern(l, u));
                        } else this.match(":") ? (this.expect(":"), n = this.parsePatternWithDefault(e, t)) : (e.push(c), a = !0, n = l);
                    } else o = this.match("["), r = this.parseObjectPropertyKey(), this.expect(":"), n = this.parsePatternWithDefault(e, t);
                    return this.finalize(s, new i.Property("init", r, o, n, !1, a));
                }, e.prototype.parseObjectPattern = function(e, t) {
                    var r = this.createNode(), n = [];
                    for(this.expect("{"); !this.match("}");)n.push(this.parsePropertyPattern(e, t)), this.match("}") || this.expect(",");
                    return this.expect("}"), this.finalize(r, new i.ObjectPattern(n));
                }, e.prototype.parsePattern = function(e, t) {
                    var r;
                    return this.match("[") ? r = this.parseArrayPattern(e, t) : this.match("{") ? r = this.parseObjectPattern(e, t) : (!this.matchKeyword("let") || "const" !== t && "let" !== t || this.tolerateUnexpectedToken(this.lookahead, o.Messages.LetInLexicalBinding), e.push(this.lookahead), r = this.parseVariableIdentifier(t)), r;
                }, e.prototype.parsePatternWithDefault = function(e, t) {
                    var r = this.lookahead, n = this.parsePattern(e, t);
                    if (this.match("=")) {
                        this.nextToken();
                        var s = this.context.allowYield;
                        this.context.allowYield = !0;
                        var o = this.isolateCoverGrammar(this.parseAssignmentExpression);
                        this.context.allowYield = s, n = this.finalize(this.startNode(r), new i.AssignmentPattern(n, o));
                    }
                    return n;
                }, e.prototype.parseVariableIdentifier = function(e) {
                    var t = this.createNode(), r = this.nextToken();
                    return 4 === r.type && "yield" === r.value ? this.context.strict ? this.tolerateUnexpectedToken(r, o.Messages.StrictReservedWord) : this.context.allowYield || this.throwUnexpectedToken(r) : 3 !== r.type ? this.context.strict && 4 === r.type && this.scanner.isStrictModeReservedWord(r.value) ? this.tolerateUnexpectedToken(r, o.Messages.StrictReservedWord) : (this.context.strict || "let" !== r.value || "var" !== e) && this.throwUnexpectedToken(r) : (this.context.isModule || this.context.await) && 3 === r.type && "await" === r.value && this.tolerateUnexpectedToken(r), this.finalize(t, new i.Identifier(r.value));
                }, e.prototype.parseVariableDeclaration = function(e) {
                    var t = this.createNode(), r = this.parsePattern([], "var");
                    this.context.strict && r.type === c.Syntax.Identifier && this.scanner.isRestrictedWord(r.name) && this.tolerateError(o.Messages.StrictVarName);
                    var n = null;
                    return this.match("=") ? (this.nextToken(), n = this.isolateCoverGrammar(this.parseAssignmentExpression)) : r.type === c.Syntax.Identifier || e.inFor || this.expect("="), this.finalize(t, new i.VariableDeclarator(r, n));
                }, e.prototype.parseVariableDeclarationList = function(e) {
                    var t = {
                        inFor: e.inFor
                    }, r = [];
                    for(r.push(this.parseVariableDeclaration(t)); this.match(",");)this.nextToken(), r.push(this.parseVariableDeclaration(t));
                    return r;
                }, e.prototype.parseVariableStatement = function() {
                    var e = this.createNode();
                    this.expectKeyword("var");
                    var t = this.parseVariableDeclarationList({
                        inFor: !1
                    });
                    return this.consumeSemicolon(), this.finalize(e, new i.VariableDeclaration(t, "var"));
                }, e.prototype.parseEmptyStatement = function() {
                    var e = this.createNode();
                    return this.expect(";"), this.finalize(e, new i.EmptyStatement);
                }, e.prototype.parseExpressionStatement = function() {
                    var e = this.createNode(), t = this.parseExpression();
                    return this.consumeSemicolon(), this.finalize(e, new i.ExpressionStatement(t));
                }, e.prototype.parseIfClause = function() {
                    return this.context.strict && this.matchKeyword("function") && this.tolerateError(o.Messages.StrictFunction), this.parseStatement();
                }, e.prototype.parseIfStatement = function() {
                    var e, t = this.createNode(), r = null;
                    this.expectKeyword("if"), this.expect("(");
                    var n = this.parseExpression();
                    return !this.match(")") && this.config.tolerant ? (this.tolerateUnexpectedToken(this.nextToken()), e = this.finalize(this.createNode(), new i.EmptyStatement)) : (this.expect(")"), e = this.parseIfClause(), this.matchKeyword("else") && (this.nextToken(), r = this.parseIfClause())), this.finalize(t, new i.IfStatement(n, e, r));
                }, e.prototype.parseDoWhileStatement = function() {
                    var e = this.createNode();
                    this.expectKeyword("do");
                    var t = this.context.inIteration;
                    this.context.inIteration = !0;
                    var r = this.parseStatement();
                    this.context.inIteration = t, this.expectKeyword("while"), this.expect("(");
                    var n = this.parseExpression();
                    return !this.match(")") && this.config.tolerant ? this.tolerateUnexpectedToken(this.nextToken()) : (this.expect(")"), this.match(";") && this.nextToken()), this.finalize(e, new i.DoWhileStatement(r, n));
                }, e.prototype.parseWhileStatement = function() {
                    var e, t = this.createNode();
                    this.expectKeyword("while"), this.expect("(");
                    var r = this.parseExpression();
                    if (!this.match(")") && this.config.tolerant) this.tolerateUnexpectedToken(this.nextToken()), e = this.finalize(this.createNode(), new i.EmptyStatement);
                    else {
                        this.expect(")");
                        var n = this.context.inIteration;
                        this.context.inIteration = !0, e = this.parseStatement(), this.context.inIteration = n;
                    }
                    return this.finalize(t, new i.WhileStatement(r, e));
                }, e.prototype.parseForStatement = function() {
                    var e, t, r, n = null, s = null, a = null, l = !0, u = this.createNode();
                    if (this.expectKeyword("for"), this.expect("("), this.match(";")) this.nextToken();
                    else if (this.matchKeyword("var")) {
                        n = this.createNode(), this.nextToken();
                        var d = this.context.allowIn;
                        this.context.allowIn = !1;
                        var p = this.parseVariableDeclarationList({
                            inFor: !0
                        });
                        if (this.context.allowIn = d, 1 === p.length && this.matchKeyword("in")) {
                            var m = p[0];
                            m.init && (m.id.type === c.Syntax.ArrayPattern || m.id.type === c.Syntax.ObjectPattern || this.context.strict) && this.tolerateError(o.Messages.ForInOfLoopInitializer, "for-in"), n = this.finalize(n, new i.VariableDeclaration(p, "var")), this.nextToken(), e = n, t = this.parseExpression(), n = null;
                        } else 1 === p.length && null === p[0].init && this.matchContextualKeyword("of") ? (n = this.finalize(n, new i.VariableDeclaration(p, "var")), this.nextToken(), e = n, t = this.parseAssignmentExpression(), n = null, l = !1) : (n = this.finalize(n, new i.VariableDeclaration(p, "var")), this.expect(";"));
                    } else if (this.matchKeyword("const") || this.matchKeyword("let")) {
                        n = this.createNode();
                        var h = this.nextToken().value;
                        this.context.strict || "in" !== this.lookahead.value ? (d = this.context.allowIn, this.context.allowIn = !1, p = this.parseBindingList(h, {
                            inFor: !0
                        }), this.context.allowIn = d, 1 === p.length && null === p[0].init && this.matchKeyword("in") ? (n = this.finalize(n, new i.VariableDeclaration(p, h)), this.nextToken(), e = n, t = this.parseExpression(), n = null) : 1 === p.length && null === p[0].init && this.matchContextualKeyword("of") ? (n = this.finalize(n, new i.VariableDeclaration(p, h)), this.nextToken(), e = n, t = this.parseAssignmentExpression(), n = null, l = !1) : (this.consumeSemicolon(), n = this.finalize(n, new i.VariableDeclaration(p, h)))) : (n = this.finalize(n, new i.Identifier(h)), this.nextToken(), e = n, t = this.parseExpression(), n = null);
                    } else {
                        var f = this.lookahead;
                        if (d = this.context.allowIn, this.context.allowIn = !1, n = this.inheritCoverGrammar(this.parseAssignmentExpression), this.context.allowIn = d, this.matchKeyword("in")) this.context.isAssignmentTarget && n.type !== c.Syntax.AssignmentExpression || this.tolerateError(o.Messages.InvalidLHSInForIn), this.nextToken(), this.reinterpretExpressionAsPattern(n), e = n, t = this.parseExpression(), n = null;
                        else if (this.matchContextualKeyword("of")) this.context.isAssignmentTarget && n.type !== c.Syntax.AssignmentExpression || this.tolerateError(o.Messages.InvalidLHSInForLoop), this.nextToken(), this.reinterpretExpressionAsPattern(n), e = n, t = this.parseAssignmentExpression(), n = null, l = !1;
                        else {
                            if (this.match(",")) {
                                for(var g = [
                                    n
                                ]; this.match(",");)this.nextToken(), g.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
                                n = this.finalize(this.startNode(f), new i.SequenceExpression(g));
                            }
                            this.expect(";");
                        }
                    }
                    if (void 0 === e && (this.match(";") || (s = this.parseExpression()), this.expect(";"), this.match(")") || (a = this.parseExpression())), !this.match(")") && this.config.tolerant) this.tolerateUnexpectedToken(this.nextToken()), r = this.finalize(this.createNode(), new i.EmptyStatement);
                    else {
                        this.expect(")");
                        var y = this.context.inIteration;
                        this.context.inIteration = !0, r = this.isolateCoverGrammar(this.parseStatement), this.context.inIteration = y;
                    }
                    return void 0 === e ? this.finalize(u, new i.ForStatement(n, s, a, r)) : l ? this.finalize(u, new i.ForInStatement(e, t, r)) : this.finalize(u, new i.ForOfStatement(e, t, r));
                }, e.prototype.parseContinueStatement = function() {
                    var e = this.createNode();
                    this.expectKeyword("continue");
                    var t = null;
                    if (3 === this.lookahead.type && !this.hasLineTerminator) {
                        var r = this.parseVariableIdentifier();
                        t = r;
                        var n = "$" + r.name;
                        Object.prototype.hasOwnProperty.call(this.context.labelSet, n) || this.throwError(o.Messages.UnknownLabel, r.name);
                    }
                    return this.consumeSemicolon(), null !== t || this.context.inIteration || this.throwError(o.Messages.IllegalContinue), this.finalize(e, new i.ContinueStatement(t));
                }, e.prototype.parseBreakStatement = function() {
                    var e = this.createNode();
                    this.expectKeyword("break");
                    var t = null;
                    if (3 === this.lookahead.type && !this.hasLineTerminator) {
                        var r = this.parseVariableIdentifier(), n = "$" + r.name;
                        Object.prototype.hasOwnProperty.call(this.context.labelSet, n) || this.throwError(o.Messages.UnknownLabel, r.name), t = r;
                    }
                    return this.consumeSemicolon(), null !== t || this.context.inIteration || this.context.inSwitch || this.throwError(o.Messages.IllegalBreak), this.finalize(e, new i.BreakStatement(t));
                }, e.prototype.parseReturnStatement = function() {
                    this.context.inFunctionBody || this.tolerateError(o.Messages.IllegalReturn);
                    var e = this.createNode();
                    this.expectKeyword("return");
                    var t = (this.match(";") || this.match("}") || this.hasLineTerminator || 2 === this.lookahead.type) && 8 !== this.lookahead.type && 10 !== this.lookahead.type ? null : this.parseExpression();
                    return this.consumeSemicolon(), this.finalize(e, new i.ReturnStatement(t));
                }, e.prototype.parseWithStatement = function() {
                    this.context.strict && this.tolerateError(o.Messages.StrictModeWith);
                    var e, t = this.createNode();
                    this.expectKeyword("with"), this.expect("(");
                    var r = this.parseExpression();
                    return !this.match(")") && this.config.tolerant ? (this.tolerateUnexpectedToken(this.nextToken()), e = this.finalize(this.createNode(), new i.EmptyStatement)) : (this.expect(")"), e = this.parseStatement()), this.finalize(t, new i.WithStatement(r, e));
                }, e.prototype.parseSwitchCase = function() {
                    var e, t = this.createNode();
                    this.matchKeyword("default") ? (this.nextToken(), e = null) : (this.expectKeyword("case"), e = this.parseExpression()), this.expect(":");
                    for(var r = []; !(this.match("}") || this.matchKeyword("default") || this.matchKeyword("case"));)r.push(this.parseStatementListItem());
                    return this.finalize(t, new i.SwitchCase(e, r));
                }, e.prototype.parseSwitchStatement = function() {
                    var e = this.createNode();
                    this.expectKeyword("switch"), this.expect("(");
                    var t = this.parseExpression();
                    this.expect(")");
                    var r = this.context.inSwitch;
                    this.context.inSwitch = !0;
                    var n = [], s = !1;
                    for(this.expect("{"); !this.match("}");){
                        var a = this.parseSwitchCase();
                        null === a.test && (s && this.throwError(o.Messages.MultipleDefaultsInSwitch), s = !0), n.push(a);
                    }
                    return this.expect("}"), this.context.inSwitch = r, this.finalize(e, new i.SwitchStatement(t, n));
                }, e.prototype.parseLabelledStatement = function() {
                    var e, t = this.createNode(), r = this.parseExpression();
                    if (r.type === c.Syntax.Identifier && this.match(":")) {
                        this.nextToken();
                        var n = r, s = "$" + n.name;
                        Object.prototype.hasOwnProperty.call(this.context.labelSet, s) && this.throwError(o.Messages.Redeclaration, "Label", n.name), this.context.labelSet[s] = !0;
                        var a = void 0;
                        if (this.matchKeyword("class")) this.tolerateUnexpectedToken(this.lookahead), a = this.parseClassDeclaration();
                        else if (this.matchKeyword("function")) {
                            var l = this.lookahead, u = this.parseFunctionDeclaration();
                            this.context.strict ? this.tolerateUnexpectedToken(l, o.Messages.StrictFunction) : u.generator && this.tolerateUnexpectedToken(l, o.Messages.GeneratorInLegacyContext), a = u;
                        } else a = this.parseStatement();
                        delete this.context.labelSet[s], e = new i.LabeledStatement(n, a);
                    } else this.consumeSemicolon(), e = new i.ExpressionStatement(r);
                    return this.finalize(t, e);
                }, e.prototype.parseThrowStatement = function() {
                    var e = this.createNode();
                    this.expectKeyword("throw"), this.hasLineTerminator && this.throwError(o.Messages.NewlineAfterThrow);
                    var t = this.parseExpression();
                    return this.consumeSemicolon(), this.finalize(e, new i.ThrowStatement(t));
                }, e.prototype.parseCatchClause = function() {
                    var e = this.createNode();
                    this.expectKeyword("catch"), this.expect("("), this.match(")") && this.throwUnexpectedToken(this.lookahead);
                    for(var t = [], r = this.parsePattern(t), n = {}, s = 0; s < t.length; s++){
                        var a = "$" + t[s].value;
                        Object.prototype.hasOwnProperty.call(n, a) && this.tolerateError(o.Messages.DuplicateBinding, t[s].value), n[a] = !0;
                    }
                    this.context.strict && r.type === c.Syntax.Identifier && this.scanner.isRestrictedWord(r.name) && this.tolerateError(o.Messages.StrictCatchVariable), this.expect(")");
                    var l = this.parseBlock();
                    return this.finalize(e, new i.CatchClause(r, l));
                }, e.prototype.parseFinallyClause = function() {
                    return this.expectKeyword("finally"), this.parseBlock();
                }, e.prototype.parseTryStatement = function() {
                    var e = this.createNode();
                    this.expectKeyword("try");
                    var t = this.parseBlock(), r = this.matchKeyword("catch") ? this.parseCatchClause() : null, n = this.matchKeyword("finally") ? this.parseFinallyClause() : null;
                    return r || n || this.throwError(o.Messages.NoCatchOrFinally), this.finalize(e, new i.TryStatement(t, r, n));
                }, e.prototype.parseDebuggerStatement = function() {
                    var e = this.createNode();
                    return this.expectKeyword("debugger"), this.consumeSemicolon(), this.finalize(e, new i.DebuggerStatement);
                }, e.prototype.parseStatement = function() {
                    var e;
                    switch(this.lookahead.type){
                        case 1:
                        case 5:
                        case 6:
                        case 8:
                        case 10:
                        case 9:
                            e = this.parseExpressionStatement();
                            break;
                        case 7:
                            var t = this.lookahead.value;
                            e = "{" === t ? this.parseBlock() : "(" === t ? this.parseExpressionStatement() : ";" === t ? this.parseEmptyStatement() : this.parseExpressionStatement();
                            break;
                        case 3:
                            e = this.matchAsyncFunction() ? this.parseFunctionDeclaration() : this.parseLabelledStatement();
                            break;
                        case 4:
                            switch(this.lookahead.value){
                                case "break":
                                    e = this.parseBreakStatement();
                                    break;
                                case "continue":
                                    e = this.parseContinueStatement();
                                    break;
                                case "debugger":
                                    e = this.parseDebuggerStatement();
                                    break;
                                case "do":
                                    e = this.parseDoWhileStatement();
                                    break;
                                case "for":
                                    e = this.parseForStatement();
                                    break;
                                case "function":
                                    e = this.parseFunctionDeclaration();
                                    break;
                                case "if":
                                    e = this.parseIfStatement();
                                    break;
                                case "return":
                                    e = this.parseReturnStatement();
                                    break;
                                case "switch":
                                    e = this.parseSwitchStatement();
                                    break;
                                case "throw":
                                    e = this.parseThrowStatement();
                                    break;
                                case "try":
                                    e = this.parseTryStatement();
                                    break;
                                case "var":
                                    e = this.parseVariableStatement();
                                    break;
                                case "while":
                                    e = this.parseWhileStatement();
                                    break;
                                case "with":
                                    e = this.parseWithStatement();
                                    break;
                                default:
                                    e = this.parseExpressionStatement();
                            }
                            break;
                        default:
                            e = this.throwUnexpectedToken(this.lookahead);
                    }
                    return e;
                }, e.prototype.parseFunctionSourceElements = function() {
                    var e = this.createNode();
                    this.expect("{");
                    var t = this.parseDirectivePrologues(), r = this.context.labelSet, n = this.context.inIteration, s = this.context.inSwitch, o = this.context.inFunctionBody;
                    for(this.context.labelSet = {}, this.context.inIteration = !1, this.context.inSwitch = !1, this.context.inFunctionBody = !0; 2 !== this.lookahead.type && !this.match("}");)t.push(this.parseStatementListItem());
                    return this.expect("}"), this.context.labelSet = r, this.context.inIteration = n, this.context.inSwitch = s, this.context.inFunctionBody = o, this.finalize(e, new i.BlockStatement(t));
                }, e.prototype.validateParam = function(e, t, r) {
                    var n = "$" + r;
                    this.context.strict ? (this.scanner.isRestrictedWord(r) && (e.stricted = t, e.message = o.Messages.StrictParamName), Object.prototype.hasOwnProperty.call(e.paramSet, n) && (e.stricted = t, e.message = o.Messages.StrictParamDupe)) : e.firstRestricted || (this.scanner.isRestrictedWord(r) ? (e.firstRestricted = t, e.message = o.Messages.StrictParamName) : this.scanner.isStrictModeReservedWord(r) ? (e.firstRestricted = t, e.message = o.Messages.StrictReservedWord) : Object.prototype.hasOwnProperty.call(e.paramSet, n) && (e.stricted = t, e.message = o.Messages.StrictParamDupe)), "function" == typeof Object.defineProperty ? Object.defineProperty(e.paramSet, n, {
                        value: !0,
                        enumerable: !0,
                        writable: !0,
                        configurable: !0
                    }) : e.paramSet[n] = !0;
                }, e.prototype.parseRestElement = function(e) {
                    var t = this.createNode();
                    this.expect("...");
                    var r = this.parsePattern(e);
                    return this.match("=") && this.throwError(o.Messages.DefaultRestParameter), this.match(")") || this.throwError(o.Messages.ParameterAfterRestParameter), this.finalize(t, new i.RestElement(r));
                }, e.prototype.parseFormalParameter = function(e) {
                    for(var t = [], r = this.match("...") ? this.parseRestElement(t) : this.parsePatternWithDefault(t), n = 0; n < t.length; n++)this.validateParam(e, t[n], t[n].value);
                    e.simple = e.simple && r instanceof i.Identifier, e.params.push(r);
                }, e.prototype.parseFormalParameters = function(e) {
                    var t;
                    if (t = {
                        simple: !0,
                        params: [],
                        firstRestricted: e
                    }, this.expect("("), !this.match(")")) for(t.paramSet = {}; 2 !== this.lookahead.type && (this.parseFormalParameter(t), !this.match(")")) && (this.expect(","), !this.match(")")););
                    return this.expect(")"), {
                        simple: t.simple,
                        params: t.params,
                        stricted: t.stricted,
                        firstRestricted: t.firstRestricted,
                        message: t.message
                    };
                }, e.prototype.matchAsyncFunction = function() {
                    var e = this.matchContextualKeyword("async");
                    if (e) {
                        var t = this.scanner.saveState();
                        this.scanner.scanComments();
                        var r = this.scanner.lex();
                        this.scanner.restoreState(t), e = t.lineNumber === r.lineNumber && 4 === r.type && "function" === r.value;
                    }
                    return e;
                }, e.prototype.parseFunctionDeclaration = function(e) {
                    var t = this.createNode(), r = this.matchContextualKeyword("async");
                    r && this.nextToken(), this.expectKeyword("function");
                    var n, s = !r && this.match("*");
                    s && this.nextToken();
                    var a = null, c = null;
                    if (!e || !this.match("(")) {
                        var l = this.lookahead;
                        a = this.parseVariableIdentifier(), this.context.strict ? this.scanner.isRestrictedWord(l.value) && this.tolerateUnexpectedToken(l, o.Messages.StrictFunctionName) : this.scanner.isRestrictedWord(l.value) ? (c = l, n = o.Messages.StrictFunctionName) : this.scanner.isStrictModeReservedWord(l.value) && (c = l, n = o.Messages.StrictReservedWord);
                    }
                    var u = this.context.await, d = this.context.allowYield;
                    this.context.await = r, this.context.allowYield = !s;
                    var p = this.parseFormalParameters(c), m = p.params, h = p.stricted;
                    c = p.firstRestricted, p.message && (n = p.message);
                    var f = this.context.strict, g = this.context.allowStrictDirective;
                    this.context.allowStrictDirective = p.simple;
                    var y = this.parseFunctionSourceElements();
                    return this.context.strict && c && this.throwUnexpectedToken(c, n), this.context.strict && h && this.tolerateUnexpectedToken(h, n), this.context.strict = f, this.context.allowStrictDirective = g, this.context.await = u, this.context.allowYield = d, r ? this.finalize(t, new i.AsyncFunctionDeclaration(a, m, y)) : this.finalize(t, new i.FunctionDeclaration(a, m, y, s));
                }, e.prototype.parseFunctionExpression = function() {
                    var e = this.createNode(), t = this.matchContextualKeyword("async");
                    t && this.nextToken(), this.expectKeyword("function");
                    var r, n = !t && this.match("*");
                    n && this.nextToken();
                    var s, a = null, c = this.context.await, l = this.context.allowYield;
                    if (this.context.await = t, this.context.allowYield = !n, !this.match("(")) {
                        var u = this.lookahead;
                        a = this.context.strict || n || !this.matchKeyword("yield") ? this.parseVariableIdentifier() : this.parseIdentifierName(), this.context.strict ? this.scanner.isRestrictedWord(u.value) && this.tolerateUnexpectedToken(u, o.Messages.StrictFunctionName) : this.scanner.isRestrictedWord(u.value) ? (s = u, r = o.Messages.StrictFunctionName) : this.scanner.isStrictModeReservedWord(u.value) && (s = u, r = o.Messages.StrictReservedWord);
                    }
                    var d = this.parseFormalParameters(s), p = d.params, m = d.stricted;
                    s = d.firstRestricted, d.message && (r = d.message);
                    var h = this.context.strict, f = this.context.allowStrictDirective;
                    this.context.allowStrictDirective = d.simple;
                    var g = this.parseFunctionSourceElements();
                    return this.context.strict && s && this.throwUnexpectedToken(s, r), this.context.strict && m && this.tolerateUnexpectedToken(m, r), this.context.strict = h, this.context.allowStrictDirective = f, this.context.await = c, this.context.allowYield = l, t ? this.finalize(e, new i.AsyncFunctionExpression(a, p, g)) : this.finalize(e, new i.FunctionExpression(a, p, g, n));
                }, e.prototype.parseDirective = function() {
                    var e = this.lookahead, t = this.createNode(), r = this.parseExpression(), n = r.type === c.Syntax.Literal ? this.getTokenRaw(e).slice(1, -1) : null;
                    return this.consumeSemicolon(), this.finalize(t, n ? new i.Directive(r, n) : new i.ExpressionStatement(r));
                }, e.prototype.parseDirectivePrologues = function() {
                    for(var e = null, t = [];;){
                        var r = this.lookahead;
                        if (8 !== r.type) break;
                        var n = this.parseDirective();
                        t.push(n);
                        var s = n.directive;
                        if ("string" != typeof s) break;
                        "use strict" === s ? (this.context.strict = !0, e && this.tolerateUnexpectedToken(e, o.Messages.StrictOctalLiteral), this.context.allowStrictDirective || this.tolerateUnexpectedToken(r, o.Messages.IllegalLanguageModeDirective)) : !e && r.octal && (e = r);
                    }
                    return t;
                }, e.prototype.qualifiedPropertyName = function(e) {
                    switch(e.type){
                        case 3:
                        case 8:
                        case 1:
                        case 5:
                        case 6:
                        case 4:
                            return !0;
                        case 7:
                            return "[" === e.value;
                    }
                    return !1;
                }, e.prototype.parseGetterMethod = function() {
                    var e = this.createNode(), t = !1, r = this.context.allowYield;
                    this.context.allowYield = !0;
                    var n = this.parseFormalParameters();
                    n.params.length > 0 && this.tolerateError(o.Messages.BadGetterArity);
                    var s = this.parsePropertyMethod(n);
                    return this.context.allowYield = r, this.finalize(e, new i.FunctionExpression(null, n.params, s, t));
                }, e.prototype.parseSetterMethod = function() {
                    var e = this.createNode(), t = !1, r = this.context.allowYield;
                    this.context.allowYield = !0;
                    var n = this.parseFormalParameters();
                    1 !== n.params.length ? this.tolerateError(o.Messages.BadSetterArity) : n.params[0] instanceof i.RestElement && this.tolerateError(o.Messages.BadSetterRestParameter);
                    var s = this.parsePropertyMethod(n);
                    return this.context.allowYield = r, this.finalize(e, new i.FunctionExpression(null, n.params, s, t));
                }, e.prototype.parseGeneratorMethod = function() {
                    var e = this.createNode(), t = this.context.allowYield;
                    this.context.allowYield = !0;
                    var r = this.parseFormalParameters();
                    this.context.allowYield = !1;
                    var n = this.parsePropertyMethod(r);
                    return this.context.allowYield = t, this.finalize(e, new i.FunctionExpression(null, r.params, n, !0));
                }, e.prototype.isStartOfExpression = function() {
                    var e = !0, t = this.lookahead.value;
                    switch(this.lookahead.type){
                        case 7:
                            e = "[" === t || "(" === t || "{" === t || "+" === t || "-" === t || "!" === t || "~" === t || "++" === t || "--" === t || "/" === t || "/=" === t;
                            break;
                        case 4:
                            e = "class" === t || "delete" === t || "function" === t || "let" === t || "new" === t || "super" === t || "this" === t || "typeof" === t || "void" === t || "yield" === t;
                    }
                    return e;
                }, e.prototype.parseYieldExpression = function() {
                    var e = this.createNode();
                    this.expectKeyword("yield");
                    var t = null, r = !1;
                    if (!this.hasLineTerminator) {
                        var n = this.context.allowYield;
                        this.context.allowYield = !1, (r = this.match("*")) ? (this.nextToken(), t = this.parseAssignmentExpression()) : this.isStartOfExpression() && (t = this.parseAssignmentExpression()), this.context.allowYield = n;
                    }
                    return this.finalize(e, new i.YieldExpression(t, r));
                }, e.prototype.parseClassElement = function(e) {
                    var t = this.lookahead, r = this.createNode(), n = "", s = null, a = null, c = !1, l = !1, u = !1, d = !1;
                    if (this.match("*")) this.nextToken();
                    else if (c = this.match("["), "static" === (s = this.parseObjectPropertyKey()).name && (this.qualifiedPropertyName(this.lookahead) || this.match("*")) && (t = this.lookahead, u = !0, c = this.match("["), this.match("*") ? this.nextToken() : s = this.parseObjectPropertyKey()), 3 === t.type && !this.hasLineTerminator && "async" === t.value) {
                        var p = this.lookahead.value;
                        ":" !== p && "(" !== p && "*" !== p && (d = !0, t = this.lookahead, s = this.parseObjectPropertyKey(), 3 === t.type && "constructor" === t.value && this.tolerateUnexpectedToken(t, o.Messages.ConstructorIsAsync));
                    }
                    var m = this.qualifiedPropertyName(this.lookahead);
                    return 3 === t.type ? "get" === t.value && m ? (n = "get", c = this.match("["), s = this.parseObjectPropertyKey(), this.context.allowYield = !1, a = this.parseGetterMethod()) : "set" === t.value && m && (n = "set", c = this.match("["), s = this.parseObjectPropertyKey(), a = this.parseSetterMethod()) : 7 === t.type && "*" === t.value && m && (n = "init", c = this.match("["), s = this.parseObjectPropertyKey(), a = this.parseGeneratorMethod(), l = !0), !n && s && this.match("(") && (n = "init", a = d ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction(), l = !0), n || this.throwUnexpectedToken(this.lookahead), "init" === n && (n = "method"), c || (u && this.isPropertyKey(s, "prototype") && this.throwUnexpectedToken(t, o.Messages.StaticPrototype), !u && this.isPropertyKey(s, "constructor") && (("method" !== n || !l || a && a.generator) && this.throwUnexpectedToken(t, o.Messages.ConstructorSpecialMethod), e.value ? this.throwUnexpectedToken(t, o.Messages.DuplicateConstructor) : e.value = !0, n = "constructor")), this.finalize(r, new i.MethodDefinition(s, c, a, n, u));
                }, e.prototype.parseClassElementList = function() {
                    var e = [], t = {
                        value: !1
                    };
                    for(this.expect("{"); !this.match("}");)this.match(";") ? this.nextToken() : e.push(this.parseClassElement(t));
                    return this.expect("}"), e;
                }, e.prototype.parseClassBody = function() {
                    var e = this.createNode(), t = this.parseClassElementList();
                    return this.finalize(e, new i.ClassBody(t));
                }, e.prototype.parseClassDeclaration = function(e) {
                    var t = this.createNode(), r = this.context.strict;
                    this.context.strict = !0, this.expectKeyword("class");
                    var n = e && 3 !== this.lookahead.type ? null : this.parseVariableIdentifier(), s = null;
                    this.matchKeyword("extends") && (this.nextToken(), s = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall));
                    var o = this.parseClassBody();
                    return this.context.strict = r, this.finalize(t, new i.ClassDeclaration(n, s, o));
                }, e.prototype.parseClassExpression = function() {
                    var e = this.createNode(), t = this.context.strict;
                    this.context.strict = !0, this.expectKeyword("class");
                    var r = 3 === this.lookahead.type ? this.parseVariableIdentifier() : null, n = null;
                    this.matchKeyword("extends") && (this.nextToken(), n = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall));
                    var s = this.parseClassBody();
                    return this.context.strict = t, this.finalize(e, new i.ClassExpression(r, n, s));
                }, e.prototype.parseModule = function() {
                    this.context.strict = !0, this.context.isModule = !0, this.scanner.isModule = !0;
                    for(var e = this.createNode(), t = this.parseDirectivePrologues(); 2 !== this.lookahead.type;)t.push(this.parseStatementListItem());
                    return this.finalize(e, new i.Module(t));
                }, e.prototype.parseScript = function() {
                    for(var e = this.createNode(), t = this.parseDirectivePrologues(); 2 !== this.lookahead.type;)t.push(this.parseStatementListItem());
                    return this.finalize(e, new i.Script(t));
                }, e.prototype.parseModuleSpecifier = function() {
                    var e = this.createNode();
                    8 !== this.lookahead.type && this.throwError(o.Messages.InvalidModuleSpecifier);
                    var t = this.nextToken(), r = this.getTokenRaw(t);
                    return this.finalize(e, new i.Literal(t.value, r));
                }, e.prototype.parseImportSpecifier = function() {
                    var e, t, r = this.createNode();
                    return 3 === this.lookahead.type ? (t = e = this.parseVariableIdentifier(), this.matchContextualKeyword("as") && (this.nextToken(), t = this.parseVariableIdentifier())) : (t = e = this.parseIdentifierName(), this.matchContextualKeyword("as") ? (this.nextToken(), t = this.parseVariableIdentifier()) : this.throwUnexpectedToken(this.nextToken())), this.finalize(r, new i.ImportSpecifier(t, e));
                }, e.prototype.parseNamedImports = function() {
                    this.expect("{");
                    for(var e = []; !this.match("}");)e.push(this.parseImportSpecifier()), this.match("}") || this.expect(",");
                    return this.expect("}"), e;
                }, e.prototype.parseImportDefaultSpecifier = function() {
                    var e = this.createNode(), t = this.parseIdentifierName();
                    return this.finalize(e, new i.ImportDefaultSpecifier(t));
                }, e.prototype.parseImportNamespaceSpecifier = function() {
                    var e = this.createNode();
                    this.expect("*"), this.matchContextualKeyword("as") || this.throwError(o.Messages.NoAsAfterImportNamespace), this.nextToken();
                    var t = this.parseIdentifierName();
                    return this.finalize(e, new i.ImportNamespaceSpecifier(t));
                }, e.prototype.parseImportDeclaration = function() {
                    this.context.inFunctionBody && this.throwError(o.Messages.IllegalImportDeclaration);
                    var e, t = this.createNode();
                    this.expectKeyword("import");
                    var r = [];
                    if (8 === this.lookahead.type) e = this.parseModuleSpecifier();
                    else {
                        if (this.match("{") ? r = r.concat(this.parseNamedImports()) : this.match("*") ? r.push(this.parseImportNamespaceSpecifier()) : this.isIdentifierName(this.lookahead) && !this.matchKeyword("default") ? (r.push(this.parseImportDefaultSpecifier()), this.match(",") && (this.nextToken(), this.match("*") ? r.push(this.parseImportNamespaceSpecifier()) : this.match("{") ? r = r.concat(this.parseNamedImports()) : this.throwUnexpectedToken(this.lookahead))) : this.throwUnexpectedToken(this.nextToken()), !this.matchContextualKeyword("from")) {
                            var n = this.lookahead.value ? o.Messages.UnexpectedToken : o.Messages.MissingFromClause;
                            this.throwError(n, this.lookahead.value);
                        }
                        this.nextToken(), e = this.parseModuleSpecifier();
                    }
                    return this.consumeSemicolon(), this.finalize(t, new i.ImportDeclaration(r, e));
                }, e.prototype.parseExportSpecifier = function() {
                    var e = this.createNode(), t = this.parseIdentifierName(), r = t;
                    return this.matchContextualKeyword("as") && (this.nextToken(), r = this.parseIdentifierName()), this.finalize(e, new i.ExportSpecifier(t, r));
                }, e.prototype.parseExportDeclaration = function() {
                    this.context.inFunctionBody && this.throwError(o.Messages.IllegalExportDeclaration);
                    var e, t = this.createNode();
                    if (this.expectKeyword("export"), this.matchKeyword("default")) if (this.nextToken(), this.matchKeyword("function")) {
                        var r = this.parseFunctionDeclaration(!0);
                        e = this.finalize(t, new i.ExportDefaultDeclaration(r));
                    } else this.matchKeyword("class") ? (r = this.parseClassDeclaration(!0), e = this.finalize(t, new i.ExportDefaultDeclaration(r))) : this.matchContextualKeyword("async") ? (r = this.matchAsyncFunction() ? this.parseFunctionDeclaration(!0) : this.parseAssignmentExpression(), e = this.finalize(t, new i.ExportDefaultDeclaration(r))) : (this.matchContextualKeyword("from") && this.throwError(o.Messages.UnexpectedToken, this.lookahead.value), r = this.match("{") ? this.parseObjectInitializer() : this.match("[") ? this.parseArrayInitializer() : this.parseAssignmentExpression(), this.consumeSemicolon(), e = this.finalize(t, new i.ExportDefaultDeclaration(r)));
                    else if (this.match("*")) {
                        if (this.nextToken(), !this.matchContextualKeyword("from")) {
                            var n = this.lookahead.value ? o.Messages.UnexpectedToken : o.Messages.MissingFromClause;
                            this.throwError(n, this.lookahead.value);
                        }
                        this.nextToken();
                        var s = this.parseModuleSpecifier();
                        this.consumeSemicolon(), e = this.finalize(t, new i.ExportAllDeclaration(s));
                    } else if (4 === this.lookahead.type) {
                        switch(r = void 0, this.lookahead.value){
                            case "let":
                            case "const":
                                r = this.parseLexicalDeclaration({
                                    inFor: !1
                                });
                                break;
                            case "var":
                            case "class":
                            case "function":
                                r = this.parseStatementListItem();
                                break;
                            default:
                                this.throwUnexpectedToken(this.lookahead);
                        }
                        e = this.finalize(t, new i.ExportNamedDeclaration(r, [], null));
                    } else if (this.matchAsyncFunction()) r = this.parseFunctionDeclaration(), e = this.finalize(t, new i.ExportNamedDeclaration(r, [], null));
                    else {
                        var a = [], c = null, l = !1;
                        for(this.expect("{"); !this.match("}");)l = l || this.matchKeyword("default"), a.push(this.parseExportSpecifier()), this.match("}") || this.expect(",");
                        this.expect("}"), this.matchContextualKeyword("from") ? (this.nextToken(), c = this.parseModuleSpecifier(), this.consumeSemicolon()) : l ? (n = this.lookahead.value ? o.Messages.UnexpectedToken : o.Messages.MissingFromClause, this.throwError(n, this.lookahead.value)) : this.consumeSemicolon(), e = this.finalize(t, new i.ExportNamedDeclaration(null, a, c));
                    }
                    return e;
                }, e;
            }();
            t.Parser = d;
        },
        function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.assert = function(e, t) {
                if (!e) throw new Error("ASSERT: " + t);
            };
        },
        function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                function e() {
                    this.errors = [], this.tolerant = !1;
                }
                return e.prototype.recordError = function(e) {
                    this.errors.push(e);
                }, e.prototype.tolerate = function(e) {
                    if (!this.tolerant) throw e;
                    this.recordError(e);
                }, e.prototype.constructError = function(e, t) {
                    var r = new Error(e);
                    try {
                        throw r;
                    } catch (e) {
                        Object.create && Object.defineProperty && (r = Object.create(e), Object.defineProperty(r, "column", {
                            value: t
                        }));
                    }
                    return r;
                }, e.prototype.createError = function(e, t, r, n) {
                    var s = "Line " + t + ": " + n, o = this.constructError(s, r);
                    return o.index = e, o.lineNumber = t, o.description = n, o;
                }, e.prototype.throwError = function(e, t, r, n) {
                    throw this.createError(e, t, r, n);
                }, e.prototype.tolerateError = function(e, t, r, n) {
                    var s = this.createError(e, t, r, n);
                    if (!this.tolerant) throw s;
                    this.recordError(s);
                }, e;
            }();
            t.ErrorHandler = r;
        },
        function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Messages = {
                BadGetterArity: "Getter must not have any formal parameters",
                BadSetterArity: "Setter must have exactly one formal parameter",
                BadSetterRestParameter: "Setter function argument must not be a rest parameter",
                ConstructorIsAsync: "Class constructor may not be an async method",
                ConstructorSpecialMethod: "Class constructor may not be an accessor",
                DeclarationMissingInitializer: "Missing initializer in %0 declaration",
                DefaultRestParameter: "Unexpected token =",
                DuplicateBinding: "Duplicate binding %0",
                DuplicateConstructor: "A class may only have one constructor",
                DuplicateProtoProperty: "Duplicate __proto__ fields are not allowed in object literals",
                ForInOfLoopInitializer: "%0 loop variable declaration may not have an initializer",
                GeneratorInLegacyContext: "Generator declarations are not allowed in legacy contexts",
                IllegalBreak: "Illegal break statement",
                IllegalContinue: "Illegal continue statement",
                IllegalExportDeclaration: "Unexpected token",
                IllegalImportDeclaration: "Unexpected token",
                IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list",
                IllegalReturn: "Illegal return statement",
                InvalidEscapedReservedWord: "Keyword must not contain escaped characters",
                InvalidHexEscapeSequence: "Invalid hexadecimal escape sequence",
                InvalidLHSInAssignment: "Invalid left-hand side in assignment",
                InvalidLHSInForIn: "Invalid left-hand side in for-in",
                InvalidLHSInForLoop: "Invalid left-hand side in for-loop",
                InvalidModuleSpecifier: "Unexpected token",
                InvalidRegExp: "Invalid regular expression",
                LetInLexicalBinding: "let is disallowed as a lexically bound name",
                MissingFromClause: "Unexpected token",
                MultipleDefaultsInSwitch: "More than one default clause in switch statement",
                NewlineAfterThrow: "Illegal newline after throw",
                NoAsAfterImportNamespace: "Unexpected token",
                NoCatchOrFinally: "Missing catch or finally after try",
                ParameterAfterRestParameter: "Rest parameter must be last formal parameter",
                Redeclaration: "%0 '%1' has already been declared",
                StaticPrototype: "Classes may not have static property named prototype",
                StrictCatchVariable: "Catch variable may not be eval or arguments in strict mode",
                StrictDelete: "Delete of an unqualified identifier in strict mode.",
                StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block",
                StrictFunctionName: "Function name may not be eval or arguments in strict mode",
                StrictLHSAssignment: "Assignment to eval or arguments is not allowed in strict mode",
                StrictLHSPostfix: "Postfix increment/decrement may not have eval or arguments operand in strict mode",
                StrictLHSPrefix: "Prefix increment/decrement may not have eval or arguments operand in strict mode",
                StrictModeWith: "Strict mode code may not include a with statement",
                StrictOctalLiteral: "Octal literals are not allowed in strict mode.",
                StrictParamDupe: "Strict mode function may not have duplicate parameter names",
                StrictParamName: "Parameter name eval or arguments is not allowed in strict mode",
                StrictReservedWord: "Use of future reserved word in strict mode",
                StrictVarName: "Variable name may not be eval or arguments in strict mode",
                TemplateOctalLiteral: "Octal literals are not allowed in template strings.",
                UnexpectedEOS: "Unexpected end of input",
                UnexpectedIdentifier: "Unexpected identifier",
                UnexpectedNumber: "Unexpected number",
                UnexpectedReserved: "Unexpected reserved word",
                UnexpectedString: "Unexpected string",
                UnexpectedTemplate: "Unexpected quasi %0",
                UnexpectedToken: "Unexpected token %0",
                UnexpectedTokenIllegal: "Unexpected token ILLEGAL",
                UnknownLabel: "Undefined label '%0'",
                UnterminatedRegExp: "Invalid regular expression: missing /"
            };
        },
        function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(9), s = r(4), o = r(11);
            function i(e) {
                return "0123456789abcdef".indexOf(e.toLowerCase());
            }
            function a(e) {
                return "01234567".indexOf(e);
            }
            var c = function() {
                function e(e, t) {
                    this.source = e, this.errorHandler = t, this.trackComment = !1, this.isModule = !1, this.length = e.length, this.index = 0, this.lineNumber = e.length > 0 ? 1 : 0, this.lineStart = 0, this.curlyStack = [];
                }
                return e.prototype.saveState = function() {
                    return {
                        index: this.index,
                        lineNumber: this.lineNumber,
                        lineStart: this.lineStart
                    };
                }, e.prototype.restoreState = function(e) {
                    this.index = e.index, this.lineNumber = e.lineNumber, this.lineStart = e.lineStart;
                }, e.prototype.eof = function() {
                    return this.index >= this.length;
                }, e.prototype.throwUnexpectedToken = function(e) {
                    return void 0 === e && (e = o.Messages.UnexpectedTokenIllegal), this.errorHandler.throwError(this.index, this.lineNumber, this.index - this.lineStart + 1, e);
                }, e.prototype.tolerateUnexpectedToken = function(e) {
                    void 0 === e && (e = o.Messages.UnexpectedTokenIllegal), this.errorHandler.tolerateError(this.index, this.lineNumber, this.index - this.lineStart + 1, e);
                }, e.prototype.skipSingleLineComment = function(e) {
                    var t, r, n = [];
                    for(this.trackComment && (n = [], t = this.index - e, r = {
                        start: {
                            line: this.lineNumber,
                            column: this.index - this.lineStart - e
                        },
                        end: {}
                    }); !this.eof();){
                        var o = this.source.charCodeAt(this.index);
                        if (++this.index, s.Character.isLineTerminator(o)) {
                            if (this.trackComment) {
                                r.end = {
                                    line: this.lineNumber,
                                    column: this.index - this.lineStart - 1
                                };
                                var i = {
                                    multiLine: !1,
                                    slice: [
                                        t + e,
                                        this.index - 1
                                    ],
                                    range: [
                                        t,
                                        this.index - 1
                                    ],
                                    loc: r
                                };
                                n.push(i);
                            }
                            return 13 === o && 10 === this.source.charCodeAt(this.index) && ++this.index, ++this.lineNumber, this.lineStart = this.index, n;
                        }
                    }
                    return this.trackComment && (r.end = {
                        line: this.lineNumber,
                        column: this.index - this.lineStart
                    }, i = {
                        multiLine: !1,
                        slice: [
                            t + e,
                            this.index
                        ],
                        range: [
                            t,
                            this.index
                        ],
                        loc: r
                    }, n.push(i)), n;
                }, e.prototype.skipMultiLineComment = function() {
                    var e, t, r = [];
                    for(this.trackComment && (r = [], e = this.index - 2, t = {
                        start: {
                            line: this.lineNumber,
                            column: this.index - this.lineStart - 2
                        },
                        end: {}
                    }); !this.eof();){
                        var n = this.source.charCodeAt(this.index);
                        if (s.Character.isLineTerminator(n)) 13 === n && 10 === this.source.charCodeAt(this.index + 1) && ++this.index, ++this.lineNumber, ++this.index, this.lineStart = this.index;
                        else if (42 === n) {
                            if (47 === this.source.charCodeAt(this.index + 1)) {
                                if (this.index += 2, this.trackComment) {
                                    t.end = {
                                        line: this.lineNumber,
                                        column: this.index - this.lineStart
                                    };
                                    var o = {
                                        multiLine: !0,
                                        slice: [
                                            e + 2,
                                            this.index - 2
                                        ],
                                        range: [
                                            e,
                                            this.index
                                        ],
                                        loc: t
                                    };
                                    r.push(o);
                                }
                                return r;
                            }
                            ++this.index;
                        } else ++this.index;
                    }
                    return this.trackComment && (t.end = {
                        line: this.lineNumber,
                        column: this.index - this.lineStart
                    }, o = {
                        multiLine: !0,
                        slice: [
                            e + 2,
                            this.index
                        ],
                        range: [
                            e,
                            this.index
                        ],
                        loc: t
                    }, r.push(o)), this.tolerateUnexpectedToken(), r;
                }, e.prototype.scanComments = function() {
                    var e;
                    this.trackComment && (e = []);
                    for(var t = 0 === this.index; !this.eof();){
                        var r = this.source.charCodeAt(this.index);
                        if (s.Character.isWhiteSpace(r)) ++this.index;
                        else if (s.Character.isLineTerminator(r)) ++this.index, 13 === r && 10 === this.source.charCodeAt(this.index) && ++this.index, ++this.lineNumber, this.lineStart = this.index, t = !0;
                        else if (47 === r) if (47 === (r = this.source.charCodeAt(this.index + 1))) {
                            this.index += 2;
                            var n = this.skipSingleLineComment(2);
                            this.trackComment && (e = e.concat(n)), t = !0;
                        } else {
                            if (42 !== r) break;
                            this.index += 2, n = this.skipMultiLineComment(), this.trackComment && (e = e.concat(n));
                        }
                        else if (t && 45 === r) {
                            if (45 !== this.source.charCodeAt(this.index + 1) || 62 !== this.source.charCodeAt(this.index + 2)) break;
                            this.index += 3, n = this.skipSingleLineComment(3), this.trackComment && (e = e.concat(n));
                        } else {
                            if (60 !== r || this.isModule) break;
                            if ("!--" !== this.source.slice(this.index + 1, this.index + 4)) break;
                            this.index += 4, n = this.skipSingleLineComment(4), this.trackComment && (e = e.concat(n));
                        }
                    }
                    return e;
                }, e.prototype.isFutureReservedWord = function(e) {
                    switch(e){
                        case "enum":
                        case "export":
                        case "import":
                        case "super":
                            return !0;
                        default:
                            return !1;
                    }
                }, e.prototype.isStrictModeReservedWord = function(e) {
                    switch(e){
                        case "implements":
                        case "interface":
                        case "package":
                        case "private":
                        case "protected":
                        case "public":
                        case "static":
                        case "yield":
                        case "let":
                            return !0;
                        default:
                            return !1;
                    }
                }, e.prototype.isRestrictedWord = function(e) {
                    return "eval" === e || "arguments" === e;
                }, e.prototype.isKeyword = function(e) {
                    switch(e.length){
                        case 2:
                            return "if" === e || "in" === e || "do" === e;
                        case 3:
                            return "var" === e || "for" === e || "new" === e || "try" === e || "let" === e;
                        case 4:
                            return "this" === e || "else" === e || "case" === e || "void" === e || "with" === e || "enum" === e;
                        case 5:
                            return "while" === e || "break" === e || "catch" === e || "throw" === e || "const" === e || "yield" === e || "class" === e || "super" === e;
                        case 6:
                            return "return" === e || "typeof" === e || "delete" === e || "switch" === e || "export" === e || "import" === e;
                        case 7:
                            return "default" === e || "finally" === e || "extends" === e;
                        case 8:
                            return "function" === e || "continue" === e || "debugger" === e;
                        case 10:
                            return "instanceof" === e;
                        default:
                            return !1;
                    }
                }, e.prototype.codePointAt = function(e) {
                    var t = this.source.charCodeAt(e);
                    if (t >= 55296 && t <= 56319) {
                        var r = this.source.charCodeAt(e + 1);
                        r >= 56320 && r <= 57343 && (t = 1024 * (t - 55296) + r - 56320 + 65536);
                    }
                    return t;
                }, e.prototype.scanHexEscape = function(e) {
                    for(var t = "u" === e ? 4 : 2, r = 0, n = 0; n < t; ++n){
                        if (this.eof() || !s.Character.isHexDigit(this.source.charCodeAt(this.index))) return null;
                        r = 16 * r + i(this.source[this.index++]);
                    }
                    return String.fromCharCode(r);
                }, e.prototype.scanUnicodeCodePointEscape = function() {
                    var e = this.source[this.index], t = 0;
                    for("}" === e && this.throwUnexpectedToken(); !this.eof() && (e = this.source[this.index++], s.Character.isHexDigit(e.charCodeAt(0)));)t = 16 * t + i(e);
                    return (t > 1114111 || "}" !== e) && this.throwUnexpectedToken(), s.Character.fromCodePoint(t);
                }, e.prototype.getIdentifier = function() {
                    for(var e = this.index++; !this.eof();){
                        var t = this.source.charCodeAt(this.index);
                        if (92 === t) return this.index = e, this.getComplexIdentifier();
                        if (t >= 55296 && t < 57343) return this.index = e, this.getComplexIdentifier();
                        if (!s.Character.isIdentifierPart(t)) break;
                        ++this.index;
                    }
                    return this.source.slice(e, this.index);
                }, e.prototype.getComplexIdentifier = function() {
                    var e, t = this.codePointAt(this.index), r = s.Character.fromCodePoint(t);
                    for(this.index += r.length, 92 === t && (117 !== this.source.charCodeAt(this.index) && this.throwUnexpectedToken(), ++this.index, "{" === this.source[this.index] ? (++this.index, e = this.scanUnicodeCodePointEscape()) : null !== (e = this.scanHexEscape("u")) && "\\" !== e && s.Character.isIdentifierStart(e.charCodeAt(0)) || this.throwUnexpectedToken(), r = e); !this.eof() && (t = this.codePointAt(this.index), s.Character.isIdentifierPart(t));)r += e = s.Character.fromCodePoint(t), this.index += e.length, 92 === t && (r = r.substr(0, r.length - 1), 117 !== this.source.charCodeAt(this.index) && this.throwUnexpectedToken(), ++this.index, "{" === this.source[this.index] ? (++this.index, e = this.scanUnicodeCodePointEscape()) : null !== (e = this.scanHexEscape("u")) && "\\" !== e && s.Character.isIdentifierPart(e.charCodeAt(0)) || this.throwUnexpectedToken(), r += e);
                    return r;
                }, e.prototype.octalToDecimal = function(e) {
                    var t = "0" !== e, r = a(e);
                    return !this.eof() && s.Character.isOctalDigit(this.source.charCodeAt(this.index)) && (t = !0, r = 8 * r + a(this.source[this.index++]), "0123".indexOf(e) >= 0 && !this.eof() && s.Character.isOctalDigit(this.source.charCodeAt(this.index)) && (r = 8 * r + a(this.source[this.index++]))), {
                        code: r,
                        octal: t
                    };
                }, e.prototype.scanIdentifier = function() {
                    var e, t = this.index, r = 92 === this.source.charCodeAt(t) ? this.getComplexIdentifier() : this.getIdentifier();
                    if (3 != (e = 1 === r.length ? 3 : this.isKeyword(r) ? 4 : "null" === r ? 5 : "true" === r || "false" === r ? 1 : 3) && t + r.length !== this.index) {
                        var n = this.index;
                        this.index = t, this.tolerateUnexpectedToken(o.Messages.InvalidEscapedReservedWord), this.index = n;
                    }
                    return {
                        type: e,
                        value: r,
                        lineNumber: this.lineNumber,
                        lineStart: this.lineStart,
                        start: t,
                        end: this.index
                    };
                }, e.prototype.scanPunctuator = function() {
                    var e = this.index, t = this.source[this.index];
                    switch(t){
                        case "(":
                        case "{":
                            "{" === t && this.curlyStack.push("{"), ++this.index;
                            break;
                        case ".":
                            ++this.index, "." === this.source[this.index] && "." === this.source[this.index + 1] && (this.index += 2, t = "...");
                            break;
                        case "}":
                            ++this.index, this.curlyStack.pop();
                            break;
                        case ")":
                        case ";":
                        case ",":
                        case "[":
                        case "]":
                        case ":":
                        case "?":
                        case "~":
                            ++this.index;
                            break;
                        default:
                            ">>>=" === (t = this.source.substr(this.index, 4)) ? this.index += 4 : "===" === (t = t.substr(0, 3)) || "!==" === t || ">>>" === t || "<<=" === t || ">>=" === t || "**=" === t ? this.index += 3 : "&&" === (t = t.substr(0, 2)) || "||" === t || "==" === t || "!=" === t || "+=" === t || "-=" === t || "*=" === t || "/=" === t || "++" === t || "--" === t || "<<" === t || ">>" === t || "&=" === t || "|=" === t || "^=" === t || "%=" === t || "<=" === t || ">=" === t || "=>" === t || "**" === t ? this.index += 2 : (t = this.source[this.index], "<>=!+-*%&|^/".indexOf(t) >= 0 && ++this.index);
                    }
                    return this.index === e && this.throwUnexpectedToken(), {
                        type: 7,
                        value: t,
                        lineNumber: this.lineNumber,
                        lineStart: this.lineStart,
                        start: e,
                        end: this.index
                    };
                }, e.prototype.scanHexLiteral = function(e) {
                    for(var t = ""; !this.eof() && s.Character.isHexDigit(this.source.charCodeAt(this.index));)t += this.source[this.index++];
                    return 0 === t.length && this.throwUnexpectedToken(), s.Character.isIdentifierStart(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(), {
                        type: 6,
                        value: parseInt("0x" + t, 16),
                        lineNumber: this.lineNumber,
                        lineStart: this.lineStart,
                        start: e,
                        end: this.index
                    };
                }, e.prototype.scanBinaryLiteral = function(e) {
                    for(var t, r = ""; !this.eof() && ("0" === (t = this.source[this.index]) || "1" === t);)r += this.source[this.index++];
                    return 0 === r.length && this.throwUnexpectedToken(), this.eof() || (t = this.source.charCodeAt(this.index), (s.Character.isIdentifierStart(t) || s.Character.isDecimalDigit(t)) && this.throwUnexpectedToken()), {
                        type: 6,
                        value: parseInt(r, 2),
                        lineNumber: this.lineNumber,
                        lineStart: this.lineStart,
                        start: e,
                        end: this.index
                    };
                }, e.prototype.scanOctalLiteral = function(e, t) {
                    var r = "", n = !1;
                    for(s.Character.isOctalDigit(e.charCodeAt(0)) ? (n = !0, r = "0" + this.source[this.index++]) : ++this.index; !this.eof() && s.Character.isOctalDigit(this.source.charCodeAt(this.index));)r += this.source[this.index++];
                    return n || 0 !== r.length || this.throwUnexpectedToken(), (s.Character.isIdentifierStart(this.source.charCodeAt(this.index)) || s.Character.isDecimalDigit(this.source.charCodeAt(this.index))) && this.throwUnexpectedToken(), {
                        type: 6,
                        value: parseInt(r, 8),
                        octal: n,
                        lineNumber: this.lineNumber,
                        lineStart: this.lineStart,
                        start: t,
                        end: this.index
                    };
                }, e.prototype.isImplicitOctalLiteral = function() {
                    for(var e = this.index + 1; e < this.length; ++e){
                        var t = this.source[e];
                        if ("8" === t || "9" === t) return !1;
                        if (!s.Character.isOctalDigit(t.charCodeAt(0))) return !0;
                    }
                    return !0;
                }, e.prototype.scanNumericLiteral = function() {
                    var e = this.index, t = this.source[e];
                    n.assert(s.Character.isDecimalDigit(t.charCodeAt(0)) || "." === t, "Numeric literal must start with a decimal digit or a decimal point");
                    var r = "";
                    if ("." !== t) {
                        if (r = this.source[this.index++], t = this.source[this.index], "0" === r) {
                            if ("x" === t || "X" === t) return ++this.index, this.scanHexLiteral(e);
                            if ("b" === t || "B" === t) return ++this.index, this.scanBinaryLiteral(e);
                            if ("o" === t || "O" === t) return this.scanOctalLiteral(t, e);
                            if (t && s.Character.isOctalDigit(t.charCodeAt(0)) && this.isImplicitOctalLiteral()) return this.scanOctalLiteral(t, e);
                        }
                        for(; s.Character.isDecimalDigit(this.source.charCodeAt(this.index));)r += this.source[this.index++];
                        t = this.source[this.index];
                    }
                    if ("." === t) {
                        for(r += this.source[this.index++]; s.Character.isDecimalDigit(this.source.charCodeAt(this.index));)r += this.source[this.index++];
                        t = this.source[this.index];
                    }
                    if ("e" === t || "E" === t) if (r += this.source[this.index++], "+" !== (t = this.source[this.index]) && "-" !== t || (r += this.source[this.index++]), s.Character.isDecimalDigit(this.source.charCodeAt(this.index))) for(; s.Character.isDecimalDigit(this.source.charCodeAt(this.index));)r += this.source[this.index++];
                    else this.throwUnexpectedToken();
                    return s.Character.isIdentifierStart(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(), {
                        type: 6,
                        value: parseFloat(r),
                        lineNumber: this.lineNumber,
                        lineStart: this.lineStart,
                        start: e,
                        end: this.index
                    };
                }, e.prototype.scanStringLiteral = function() {
                    var e = this.index, t = this.source[e];
                    n.assert("'" === t || '"' === t, "String literal must starts with a quote"), ++this.index;
                    for(var r = !1, i = ""; !this.eof();){
                        var a = this.source[this.index++];
                        if (a === t) {
                            t = "";
                            break;
                        }
                        if ("\\" === a) if ((a = this.source[this.index++]) && s.Character.isLineTerminator(a.charCodeAt(0))) ++this.lineNumber, "\r" === a && "\n" === this.source[this.index] && ++this.index, this.lineStart = this.index;
                        else switch(a){
                            case "u":
                                if ("{" === this.source[this.index]) ++this.index, i += this.scanUnicodeCodePointEscape();
                                else {
                                    var c = this.scanHexEscape(a);
                                    null === c && this.throwUnexpectedToken(), i += c;
                                }
                                break;
                            case "x":
                                var l = this.scanHexEscape(a);
                                null === l && this.throwUnexpectedToken(o.Messages.InvalidHexEscapeSequence), i += l;
                                break;
                            case "n":
                                i += "\n";
                                break;
                            case "r":
                                i += "\r";
                                break;
                            case "t":
                                i += "\t";
                                break;
                            case "b":
                                i += "\b";
                                break;
                            case "f":
                                i += "\f";
                                break;
                            case "v":
                                i += "\v";
                                break;
                            case "8":
                            case "9":
                                i += a, this.tolerateUnexpectedToken();
                                break;
                            default:
                                if (a && s.Character.isOctalDigit(a.charCodeAt(0))) {
                                    var u = this.octalToDecimal(a);
                                    r = u.octal || r, i += String.fromCharCode(u.code);
                                } else i += a;
                        }
                        else {
                            if (s.Character.isLineTerminator(a.charCodeAt(0))) break;
                            i += a;
                        }
                    }
                    return "" !== t && (this.index = e, this.throwUnexpectedToken()), {
                        type: 8,
                        value: i,
                        octal: r,
                        lineNumber: this.lineNumber,
                        lineStart: this.lineStart,
                        start: e,
                        end: this.index
                    };
                }, e.prototype.scanTemplate = function() {
                    var e = "", t = !1, r = this.index, n = "`" === this.source[r], i = !1, a = 2;
                    for(++this.index; !this.eof();){
                        var c = this.source[this.index++];
                        if ("`" === c) {
                            a = 1, i = !0, t = !0;
                            break;
                        }
                        if ("$" === c) {
                            if ("{" === this.source[this.index]) {
                                this.curlyStack.push("${"), ++this.index, t = !0;
                                break;
                            }
                            e += c;
                        } else if ("\\" === c) if (c = this.source[this.index++], s.Character.isLineTerminator(c.charCodeAt(0))) ++this.lineNumber, "\r" === c && "\n" === this.source[this.index] && ++this.index, this.lineStart = this.index;
                        else switch(c){
                            case "n":
                                e += "\n";
                                break;
                            case "r":
                                e += "\r";
                                break;
                            case "t":
                                e += "\t";
                                break;
                            case "u":
                                if ("{" === this.source[this.index]) ++this.index, e += this.scanUnicodeCodePointEscape();
                                else {
                                    var l = this.index, u = this.scanHexEscape(c);
                                    null !== u ? e += u : (this.index = l, e += c);
                                }
                                break;
                            case "x":
                                var d = this.scanHexEscape(c);
                                null === d && this.throwUnexpectedToken(o.Messages.InvalidHexEscapeSequence), e += d;
                                break;
                            case "b":
                                e += "\b";
                                break;
                            case "f":
                                e += "\f";
                                break;
                            case "v":
                                e += "\v";
                                break;
                            default:
                                "0" === c ? (s.Character.isDecimalDigit(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(o.Messages.TemplateOctalLiteral), e += "\0") : s.Character.isOctalDigit(c.charCodeAt(0)) ? this.throwUnexpectedToken(o.Messages.TemplateOctalLiteral) : e += c;
                        }
                        else s.Character.isLineTerminator(c.charCodeAt(0)) ? (++this.lineNumber, "\r" === c && "\n" === this.source[this.index] && ++this.index, this.lineStart = this.index, e += "\n") : e += c;
                    }
                    return t || this.throwUnexpectedToken(), n || this.curlyStack.pop(), {
                        type: 10,
                        value: this.source.slice(r + 1, this.index - a),
                        cooked: e,
                        head: n,
                        tail: i,
                        lineNumber: this.lineNumber,
                        lineStart: this.lineStart,
                        start: r,
                        end: this.index
                    };
                }, e.prototype.testRegExp = function(e, t) {
                    var r = e, n = this;
                    t.indexOf("u") >= 0 && (r = r.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g, function(e, t, r) {
                        var s = parseInt(t || r, 16);
                        return s > 1114111 && n.throwUnexpectedToken(o.Messages.InvalidRegExp), s <= 65535 ? String.fromCharCode(s) : "￿";
                    }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "￿"));
                    try {
                        RegExp(r);
                    } catch (e) {
                        this.throwUnexpectedToken(o.Messages.InvalidRegExp);
                    }
                    try {
                        return new RegExp(e, t);
                    } catch (e) {
                        return null;
                    }
                }, e.prototype.scanRegExpBody = function() {
                    var e = this.source[this.index];
                    n.assert("/" === e, "Regular expression literal must start with a slash");
                    for(var t = this.source[this.index++], r = !1, i = !1; !this.eof();)if (t += e = this.source[this.index++], "\\" === e) e = this.source[this.index++], s.Character.isLineTerminator(e.charCodeAt(0)) && this.throwUnexpectedToken(o.Messages.UnterminatedRegExp), t += e;
                    else if (s.Character.isLineTerminator(e.charCodeAt(0))) this.throwUnexpectedToken(o.Messages.UnterminatedRegExp);
                    else if (r) "]" === e && (r = !1);
                    else {
                        if ("/" === e) {
                            i = !0;
                            break;
                        }
                        "[" === e && (r = !0);
                    }
                    return i || this.throwUnexpectedToken(o.Messages.UnterminatedRegExp), t.substr(1, t.length - 2);
                }, e.prototype.scanRegExpFlags = function() {
                    for(var e = ""; !this.eof();){
                        var t = this.source[this.index];
                        if (!s.Character.isIdentifierPart(t.charCodeAt(0))) break;
                        if (++this.index, "\\" !== t || this.eof()) e += t;
                        else if ("u" === (t = this.source[this.index])) {
                            ++this.index;
                            var r = this.index, n = this.scanHexEscape("u");
                            if (null !== n) for(e += n; r < this.index; ++r)this.source[r];
                            else this.index = r, e += "u";
                            this.tolerateUnexpectedToken();
                        } else this.tolerateUnexpectedToken();
                    }
                    return e;
                }, e.prototype.scanRegExp = function() {
                    var e = this.index, t = this.scanRegExpBody(), r = this.scanRegExpFlags();
                    return {
                        type: 9,
                        value: "",
                        pattern: t,
                        flags: r,
                        regex: this.testRegExp(t, r),
                        lineNumber: this.lineNumber,
                        lineStart: this.lineStart,
                        start: e,
                        end: this.index
                    };
                }, e.prototype.lex = function() {
                    if (this.eof()) return {
                        type: 2,
                        value: "",
                        lineNumber: this.lineNumber,
                        lineStart: this.lineStart,
                        start: this.index,
                        end: this.index
                    };
                    var e = this.source.charCodeAt(this.index);
                    return s.Character.isIdentifierStart(e) ? this.scanIdentifier() : 40 === e || 41 === e || 59 === e ? this.scanPunctuator() : 39 === e || 34 === e ? this.scanStringLiteral() : 46 === e ? s.Character.isDecimalDigit(this.source.charCodeAt(this.index + 1)) ? this.scanNumericLiteral() : this.scanPunctuator() : s.Character.isDecimalDigit(e) ? this.scanNumericLiteral() : 96 === e || 125 === e && "${" === this.curlyStack[this.curlyStack.length - 1] ? this.scanTemplate() : e >= 55296 && e < 57343 && s.Character.isIdentifierStart(this.codePointAt(this.index)) ? this.scanIdentifier() : this.scanPunctuator();
                }, e;
            }();
            t.Scanner = c;
        },
        function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TokenName = {}, t.TokenName[1] = "Boolean", t.TokenName[2] = "<end>", t.TokenName[3] = "Identifier", t.TokenName[4] = "Keyword", t.TokenName[5] = "Null", t.TokenName[6] = "Numeric", t.TokenName[7] = "Punctuator", t.TokenName[8] = "String", t.TokenName[9] = "RegularExpression", t.TokenName[10] = "Template";
        },
        function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.XHTMLEntities = {
                quot: '"',
                amp: "&",
                apos: "'",
                gt: ">",
                nbsp: " ",
                iexcl: "¡",
                cent: "¢",
                pound: "£",
                curren: "¤",
                yen: "¥",
                brvbar: "¦",
                sect: "§",
                uml: "¨",
                copy: "©",
                ordf: "ª",
                laquo: "«",
                not: "¬",
                shy: "­",
                reg: "®",
                macr: "¯",
                deg: "°",
                plusmn: "±",
                sup2: "²",
                sup3: "³",
                acute: "´",
                micro: "µ",
                para: "¶",
                middot: "·",
                cedil: "¸",
                sup1: "¹",
                ordm: "º",
                raquo: "»",
                frac14: "¼",
                frac12: "½",
                frac34: "¾",
                iquest: "¿",
                Agrave: "À",
                Aacute: "Á",
                Acirc: "Â",
                Atilde: "Ã",
                Auml: "Ä",
                Aring: "Å",
                AElig: "Æ",
                Ccedil: "Ç",
                Egrave: "È",
                Eacute: "É",
                Ecirc: "Ê",
                Euml: "Ë",
                Igrave: "Ì",
                Iacute: "Í",
                Icirc: "Î",
                Iuml: "Ï",
                ETH: "Ð",
                Ntilde: "Ñ",
                Ograve: "Ò",
                Oacute: "Ó",
                Ocirc: "Ô",
                Otilde: "Õ",
                Ouml: "Ö",
                times: "×",
                Oslash: "Ø",
                Ugrave: "Ù",
                Uacute: "Ú",
                Ucirc: "Û",
                Uuml: "Ü",
                Yacute: "Ý",
                THORN: "Þ",
                szlig: "ß",
                agrave: "à",
                aacute: "á",
                acirc: "â",
                atilde: "ã",
                auml: "ä",
                aring: "å",
                aelig: "æ",
                ccedil: "ç",
                egrave: "è",
                eacute: "é",
                ecirc: "ê",
                euml: "ë",
                igrave: "ì",
                iacute: "í",
                icirc: "î",
                iuml: "ï",
                eth: "ð",
                ntilde: "ñ",
                ograve: "ò",
                oacute: "ó",
                ocirc: "ô",
                otilde: "õ",
                ouml: "ö",
                divide: "÷",
                oslash: "ø",
                ugrave: "ù",
                uacute: "ú",
                ucirc: "û",
                uuml: "ü",
                yacute: "ý",
                thorn: "þ",
                yuml: "ÿ",
                OElig: "Œ",
                oelig: "œ",
                Scaron: "Š",
                scaron: "š",
                Yuml: "Ÿ",
                fnof: "ƒ",
                circ: "ˆ",
                tilde: "˜",
                Alpha: "Α",
                Beta: "Β",
                Gamma: "Γ",
                Delta: "Δ",
                Epsilon: "Ε",
                Zeta: "Ζ",
                Eta: "Η",
                Theta: "Θ",
                Iota: "Ι",
                Kappa: "Κ",
                Lambda: "Λ",
                Mu: "Μ",
                Nu: "Ν",
                Xi: "Ξ",
                Omicron: "Ο",
                Pi: "Π",
                Rho: "Ρ",
                Sigma: "Σ",
                Tau: "Τ",
                Upsilon: "Υ",
                Phi: "Φ",
                Chi: "Χ",
                Psi: "Ψ",
                Omega: "Ω",
                alpha: "α",
                beta: "β",
                gamma: "γ",
                delta: "δ",
                epsilon: "ε",
                zeta: "ζ",
                eta: "η",
                theta: "θ",
                iota: "ι",
                kappa: "κ",
                lambda: "λ",
                mu: "μ",
                nu: "ν",
                xi: "ξ",
                omicron: "ο",
                pi: "π",
                rho: "ρ",
                sigmaf: "ς",
                sigma: "σ",
                tau: "τ",
                upsilon: "υ",
                phi: "φ",
                chi: "χ",
                psi: "ψ",
                omega: "ω",
                thetasym: "ϑ",
                upsih: "ϒ",
                piv: "ϖ",
                ensp: " ",
                emsp: " ",
                thinsp: " ",
                zwnj: "‌",
                zwj: "‍",
                lrm: "‎",
                rlm: "‏",
                ndash: "–",
                mdash: "—",
                lsquo: "‘",
                rsquo: "’",
                sbquo: "‚",
                ldquo: "“",
                rdquo: "”",
                bdquo: "„",
                dagger: "†",
                Dagger: "‡",
                bull: "•",
                hellip: "…",
                permil: "‰",
                prime: "′",
                Prime: "″",
                lsaquo: "‹",
                rsaquo: "›",
                oline: "‾",
                frasl: "⁄",
                euro: "€",
                image: "ℑ",
                weierp: "℘",
                real: "ℜ",
                trade: "™",
                alefsym: "ℵ",
                larr: "←",
                uarr: "↑",
                rarr: "→",
                darr: "↓",
                harr: "↔",
                crarr: "↵",
                lArr: "⇐",
                uArr: "⇑",
                rArr: "⇒",
                dArr: "⇓",
                hArr: "⇔",
                forall: "∀",
                part: "∂",
                exist: "∃",
                empty: "∅",
                nabla: "∇",
                isin: "∈",
                notin: "∉",
                ni: "∋",
                prod: "∏",
                sum: "∑",
                minus: "−",
                lowast: "∗",
                radic: "√",
                prop: "∝",
                infin: "∞",
                ang: "∠",
                and: "∧",
                or: "∨",
                cap: "∩",
                cup: "∪",
                int: "∫",
                there4: "∴",
                sim: "∼",
                cong: "≅",
                asymp: "≈",
                ne: "≠",
                equiv: "≡",
                le: "≤",
                ge: "≥",
                sub: "⊂",
                sup: "⊃",
                nsub: "⊄",
                sube: "⊆",
                supe: "⊇",
                oplus: "⊕",
                otimes: "⊗",
                perp: "⊥",
                sdot: "⋅",
                lceil: "⌈",
                rceil: "⌉",
                lfloor: "⌊",
                rfloor: "⌋",
                loz: "◊",
                spades: "♠",
                clubs: "♣",
                hearts: "♥",
                diams: "♦",
                lang: "⟨",
                rang: "⟩"
            };
        },
        function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(10), s = r(12), o = r(13), i = function() {
                function e() {
                    this.values = [], this.curly = this.paren = -1;
                }
                return e.prototype.beforeFunctionExpression = function(e) {
                    return [
                        "(",
                        "{",
                        "[",
                        "in",
                        "typeof",
                        "instanceof",
                        "new",
                        "return",
                        "case",
                        "delete",
                        "throw",
                        "void",
                        "=",
                        "+=",
                        "-=",
                        "*=",
                        "**=",
                        "/=",
                        "%=",
                        "<<=",
                        ">>=",
                        ">>>=",
                        "&=",
                        "|=",
                        "^=",
                        ",",
                        "+",
                        "-",
                        "*",
                        "**",
                        "/",
                        "%",
                        "++",
                        "--",
                        "<<",
                        ">>",
                        ">>>",
                        "&",
                        "|",
                        "^",
                        "!",
                        "~",
                        "&&",
                        "||",
                        "?",
                        ":",
                        "===",
                        "==",
                        ">=",
                        "<=",
                        "<",
                        ">",
                        "!=",
                        "!=="
                    ].indexOf(e) >= 0;
                }, e.prototype.isRegexStart = function() {
                    var e = this.values[this.values.length - 1], t = null !== e;
                    switch(e){
                        case "this":
                        case "]":
                            t = !1;
                            break;
                        case ")":
                            var r = this.values[this.paren - 1];
                            t = "if" === r || "while" === r || "for" === r || "with" === r;
                            break;
                        case "}":
                            if (t = !1, "function" === this.values[this.curly - 3]) t = !!(n = this.values[this.curly - 4]) && !this.beforeFunctionExpression(n);
                            else if ("function" === this.values[this.curly - 4]) {
                                var n;
                                t = !(n = this.values[this.curly - 5]) || !this.beforeFunctionExpression(n);
                            }
                    }
                    return t;
                }, e.prototype.push = function(e) {
                    7 === e.type || 4 === e.type ? ("{" === e.value ? this.curly = this.values.length : "(" === e.value && (this.paren = this.values.length), this.values.push(e.value)) : this.values.push(null);
                }, e;
            }(), a = function() {
                function e(e, t) {
                    this.errorHandler = new n.ErrorHandler, this.errorHandler.tolerant = !!t && "boolean" == typeof t.tolerant && t.tolerant, this.scanner = new s.Scanner(e, this.errorHandler), this.scanner.trackComment = !!t && "boolean" == typeof t.comment && t.comment, this.trackRange = !!t && "boolean" == typeof t.range && t.range, this.trackLoc = !!t && "boolean" == typeof t.loc && t.loc, this.buffer = [], this.reader = new i;
                }
                return e.prototype.errors = function() {
                    return this.errorHandler.errors;
                }, e.prototype.getNextToken = function() {
                    if (0 === this.buffer.length) {
                        var e = this.scanner.scanComments();
                        if (this.scanner.trackComment) for(var t = 0; t < e.length; ++t){
                            var r = e[t], n = this.scanner.source.slice(r.slice[0], r.slice[1]), s = {
                                type: r.multiLine ? "BlockComment" : "LineComment",
                                value: n
                            };
                            this.trackRange && (s.range = r.range), this.trackLoc && (s.loc = r.loc), this.buffer.push(s);
                        }
                        if (!this.scanner.eof()) {
                            var i = void 0;
                            this.trackLoc && (i = {
                                start: {
                                    line: this.scanner.lineNumber,
                                    column: this.scanner.index - this.scanner.lineStart
                                },
                                end: {}
                            });
                            var a = "/" === this.scanner.source[this.scanner.index] && this.reader.isRegexStart() ? this.scanner.scanRegExp() : this.scanner.lex();
                            this.reader.push(a);
                            var c = {
                                type: o.TokenName[a.type],
                                value: this.scanner.source.slice(a.start, a.end)
                            };
                            if (this.trackRange && (c.range = [
                                a.start,
                                a.end
                            ]), this.trackLoc && (i.end = {
                                line: this.scanner.lineNumber,
                                column: this.scanner.index - this.scanner.lineStart
                            }, c.loc = i), 9 === a.type) {
                                var l = a.pattern, u = a.flags;
                                c.regex = {
                                    pattern: l,
                                    flags: u
                                };
                            }
                            this.buffer.push(c);
                        }
                    }
                    return this.buffer.shift();
                }, e;
            }();
            t.Tokenizer = a;
        }
    ]);
}, module.exports = t();
