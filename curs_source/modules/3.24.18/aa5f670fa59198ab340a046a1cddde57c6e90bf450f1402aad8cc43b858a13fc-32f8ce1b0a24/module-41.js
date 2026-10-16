require.r(exports);
require.d(exports, {
    createRegistry: ()=>createRegistry
});
function createRegistry(...types) {
    const messages = {};
    const enums = {};
    const services = {};
    const extensionsByName = new Map();
    const extensionsByExtendee = new Map();
    const registry = {
        findMessage (typeName) {
            return messages[typeName];
        },
        findEnum (typeName) {
            return enums[typeName];
        },
        findService (typeName) {
            return services[typeName];
        },
        findExtensionFor (typeName, no) {
            return extensionsByExtendee.get(typeName)?.get(no) ?? void 0;
        },
        findExtension (typeName) {
            return extensionsByName.get(typeName) ?? void 0;
        }
    };
    function addType(type) {
        if ("fields" in type) {
            if (!registry.findMessage(type.typeName)) {
                messages[type.typeName] = type;
                type.fields.list().forEach(addField);
            }
        } else if ("methods" in type) {
            if (!registry.findService(type.typeName)) {
                services[type.typeName] = type;
                for (const method of Object.values(type.methods)){
                    addType(method.I);
                    addType(method.O);
                }
            }
        } else if ("extendee" in type) {
            if (!extensionsByName.has(type.typeName)) {
                extensionsByName.set(type.typeName, type);
                const extendeeName = type.extendee.typeName;
                if (!extensionsByExtendee.has(extendeeName)) {
                    extensionsByExtendee.set(extendeeName, new Map());
                }
                extensionsByExtendee.get(extendeeName)?.set(type.field.no, type);
                addType(type.extendee);
                addField(type.field);
            }
        } else {
            enums[type.typeName] = type;
        }
    }
    function addField(field) {
        if (field.kind == "message") {
            addType(field.T);
        } else if (field.kind == "map" && field.V.kind == "message") {
            addType(field.V.T);
        } else if (field.kind == "enum") {
            addType(field.T);
        }
    }
    for (const type of types){
        addType(type);
    }
    return registry;
}
