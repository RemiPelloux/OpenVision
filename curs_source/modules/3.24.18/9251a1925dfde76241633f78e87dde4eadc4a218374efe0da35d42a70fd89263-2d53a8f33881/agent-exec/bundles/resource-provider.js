var RESOURCE_SYMBOL_PREFIX, RemoteResourceAccessor, ResourceDescriptor, RegistryResourceAccessor, CombinedResourceAccessor, ListableCombinedResourceAccessor;
export { CombinedResourceAccessor, ListableCombinedResourceAccessor, RESOURCE_SYMBOL_PREFIX, RegistryResourceAccessor, RemoteResourceAccessor, ResourceDescriptor };
var __wakaru_init_resource_provider_initialized = false;
export function init_resource_provider() {
if (__wakaru_init_resource_provider_initialized) return;
__wakaru_init_resource_provider_initialized = true;
"use strict";
RESOURCE_SYMBOL_PREFIX = "@anysphere/agent-exec/resource/";
RemoteResourceAccessor = class {
    constructor(remoteExecManager){
        this.remoteExecManager = remoteExecManager;
    }
    get(resource) {
        return resource.remoteImplementation(this.remoteExecManager);
    }
};
ResourceDescriptor = class {
    constructor(resource, value){
        this.resource = resource;
        this.value = value;
    }
};
RegistryResourceAccessor = class {
    constructor(){
        this.resources = new Map();
    }
    register(resource, value) {
        this.resources.set(resource.symbol, new ResourceDescriptor(resource, value));
    }
    get(resource) {
        return this.resources.get(resource.symbol)?.value;
    }
    entries() {
        return Array.from(this.resources.values()).map((value)=>[
                value.resource,
                value.value
            ]);
    }
};
CombinedResourceAccessor = class {
    constructor(baseAccessor, localResourceEntries){
        this.baseAccessor = baseAccessor;
        this.localResources = new Map();
        for (const [resource, implementation] of localResourceEntries){
            this.localResources.set(resource.symbol, {
                resource,
                implementation
            });
        }
    }
    get(resource) {
        const localEntry = this.localResources.get(resource.symbol);
        if (localEntry) {
            return localEntry.implementation;
        }
        return this.baseAccessor.get(resource);
    }
};
ListableCombinedResourceAccessor = class {
    constructor(remoteAccessor, localResourceEntries){
        this.remoteAccessor = remoteAccessor;
        this.localResources = new Map();
        for (const [resource, implementation] of localResourceEntries){
            this.localResources.set(resource.symbol, {
                resource,
                implementation
            });
        }
    }
    get(resource) {
        const localEntry = this.localResources.get(resource.symbol);
        if (localEntry) {
            return localEntry.implementation;
        }
        return this.remoteAccessor.get(resource);
    }
    *entries() {
        for (const { resource, implementation } of this.localResources.values()){
            yield [
                resource,
                implementation
            ];
        }
        for (const entry of this.remoteAccessor.entries()){
            if (!this.localResources.has(entry[0].symbol)) {
                yield entry;
            }
        }
    }
};

}
