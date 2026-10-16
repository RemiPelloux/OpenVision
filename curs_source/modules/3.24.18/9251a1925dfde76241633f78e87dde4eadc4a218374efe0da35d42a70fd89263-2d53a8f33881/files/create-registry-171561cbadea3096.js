var __wakaru_require_create_registry_cache;
export function require_create_registry() {
if (__wakaru_require_create_registry_cache) return __wakaru_require_create_registry_cache;
var exports2 = {};
__wakaru_require_create_registry_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.createMutableRegistry = exports2.createRegistry = void 0;
function createRegistry(...types3) {
    const mutable = createMutableRegistry(...types3);
    delete mutable.add;
    return mutable;
}
exports2.createRegistry = createRegistry;
function createMutableRegistry(...types3) {
    const messages = {};
    const enums = {};
    const services = {};
    const extensionsByName = new Map();
    const extensionsByExtendee = new Map();
    const registry2 = {
        findMessage (typeName) {
            return messages[typeName];
        },
        findEnum (typeName) {
            return enums[typeName];
        },
        findService (typeName) {
            return services[typeName];
        },
        findExtensionFor (typeName, no2) {
            var _a18, _b2;
            return (_b2 = (_a18 = extensionsByExtendee.get(typeName)) === null || _a18 === void 0 ? void 0 : _a18.get(no2)) !== null && _b2 !== void 0 ? _b2 : void 0;
        },
        findExtension (typeName) {
            var _a18;
            return (_a18 = extensionsByName.get(typeName)) !== null && _a18 !== void 0 ? _a18 : void 0;
        },
        add (type2) {
            var _a18;
            if ("fields" in type2) {
                if (!this.findMessage(type2.typeName)) {
                    messages[type2.typeName] = type2;
                    type2.fields.list().forEach(addField);
                }
            } else if ("methods" in type2) {
                if (!this.findService(type2.typeName)) {
                    services[type2.typeName] = type2;
                    for (const method of Object.values(type2.methods)){
                        this.add(method.I);
                        this.add(method.O);
                    }
                }
            } else if ("extendee" in type2) {
                if (!extensionsByName.has(type2.typeName)) {
                    extensionsByName.set(type2.typeName, type2);
                    const extendeeName = type2.extendee.typeName;
                    if (!extensionsByExtendee.has(extendeeName)) {
                        extensionsByExtendee.set(extendeeName, new Map());
                    }
                    (_a18 = extensionsByExtendee.get(extendeeName)) === null || _a18 === void 0 ? void 0 : _a18.set(type2.field.no, type2);
                    this.add(type2.extendee);
                    addField(type2.field);
                }
            } else {
                enums[type2.typeName] = type2;
            }
        }
    };
    function addField(field4) {
        if (field4.kind == "message") {
            registry2.add(field4.T);
        } else if (field4.kind == "map" && field4.V.kind == "message") {
            registry2.add(field4.V.T);
        } else if (field4.kind == "enum") {
            registry2.add(field4.T);
        }
    }
    for (const type2 of types3){
        registry2.add(type2);
    }
    return registry2;
}
exports2.createMutableRegistry = createMutableRegistry;

return exports2;
}
