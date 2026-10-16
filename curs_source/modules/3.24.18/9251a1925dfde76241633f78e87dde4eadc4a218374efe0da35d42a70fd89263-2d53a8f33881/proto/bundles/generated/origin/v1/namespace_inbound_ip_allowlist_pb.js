import { defineOwn } from "../../../../../external_exports.js";
import { Timestamp } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/timestamp_pb.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage165, __protoMessage3158, NamespaceInboundIpAllowlistEntry, GetNamespaceInboundIpAllowlistRequest, GetNamespaceInboundIpAllowlistResponse, AddNamespaceInboundIpAllowlistEntryRequest, AddNamespaceInboundIpAllowlistEntryResponse, UpdateNamespaceInboundIpAllowlistEntryRequest, UpdateNamespaceInboundIpAllowlistEntryResponse, DeleteNamespaceInboundIpAllowlistEntryRequest, DeleteNamespaceInboundIpAllowlistEntryResponse, SetNamespaceInboundIpAllowlistEnabledRequest, SetNamespaceInboundIpAllowlistEnabledResponse;
export { AddNamespaceInboundIpAllowlistEntryRequest, AddNamespaceInboundIpAllowlistEntryResponse, DeleteNamespaceInboundIpAllowlistEntryRequest, DeleteNamespaceInboundIpAllowlistEntryResponse, GetNamespaceInboundIpAllowlistRequest, GetNamespaceInboundIpAllowlistResponse, NamespaceInboundIpAllowlistEntry, SetNamespaceInboundIpAllowlistEnabledRequest, SetNamespaceInboundIpAllowlistEnabledResponse, UpdateNamespaceInboundIpAllowlistEntryRequest, UpdateNamespaceInboundIpAllowlistEntryResponse, __protoMessage3158, __protoPackage165 };
var __wakaru_init_namespace_inbound_ip_allowlist_pb_initialized = false;
export function init_namespace_inbound_ip_allowlist_pb() {
if (__wakaru_init_namespace_inbound_ip_allowlist_pb_initialized) return;
__wakaru_init_namespace_inbound_ip_allowlist_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage165 = "origin.v1.";
__protoMessage3158 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage165;
    }
};
NamespaceInboundIpAllowlistEntry = class _NamespaceInboundIpAllowlistEntry extends __protoMessage3158 {
    constructor(data){
        super();
        this.cidr = "";
        this.description = "";
        this.id = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _NamespaceInboundIpAllowlistEntry().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _NamespaceInboundIpAllowlistEntry().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _NamespaceInboundIpAllowlistEntry().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_NamespaceInboundIpAllowlistEntry, a, b2);
    }
    static $() {
        return [
            "NamespaceInboundIpAllowlistEntry|1 cidr 9|2 description 9|3 enabled 8?|4 created_at #0|5 id 9",
            Timestamp
        ];
    }
};
GetNamespaceInboundIpAllowlistRequest = class _GetNamespaceInboundIpAllowlistRequest extends __protoMessage3158 {
    constructor(data){
        super();
        this.namespaceSlug = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetNamespaceInboundIpAllowlistRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetNamespaceInboundIpAllowlistRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetNamespaceInboundIpAllowlistRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetNamespaceInboundIpAllowlistRequest, a, b2);
    }
    static $() {
        return [
            "GetNamespaceInboundIpAllowlistRequest|1 namespace_slug 9"
        ];
    }
};
GetNamespaceInboundIpAllowlistResponse = class _GetNamespaceInboundIpAllowlistResponse extends __protoMessage3158 {
    constructor(data){
        super();
        this.enabled = false;
        this.entries = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetNamespaceInboundIpAllowlistResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetNamespaceInboundIpAllowlistResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetNamespaceInboundIpAllowlistResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetNamespaceInboundIpAllowlistResponse, a, b2);
    }
    static $() {
        return [
            "GetNamespaceInboundIpAllowlistResponse|1 enabled 8|2 entries #0*",
            NamespaceInboundIpAllowlistEntry
        ];
    }
};
AddNamespaceInboundIpAllowlistEntryRequest = class _AddNamespaceInboundIpAllowlistEntryRequest extends __protoMessage3158 {
    constructor(data){
        super();
        this.namespaceSlug = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AddNamespaceInboundIpAllowlistEntryRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AddNamespaceInboundIpAllowlistEntryRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AddNamespaceInboundIpAllowlistEntryRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AddNamespaceInboundIpAllowlistEntryRequest, a, b2);
    }
    static $() {
        return [
            "AddNamespaceInboundIpAllowlistEntryRequest|1 namespace_slug 9|2 entry #0",
            NamespaceInboundIpAllowlistEntry
        ];
    }
};
AddNamespaceInboundIpAllowlistEntryResponse = class _AddNamespaceInboundIpAllowlistEntryResponse extends __protoMessage3158 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AddNamespaceInboundIpAllowlistEntryResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AddNamespaceInboundIpAllowlistEntryResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AddNamespaceInboundIpAllowlistEntryResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AddNamespaceInboundIpAllowlistEntryResponse, a, b2);
    }
    static $() {
        return [
            "AddNamespaceInboundIpAllowlistEntryResponse|1 entry #0",
            NamespaceInboundIpAllowlistEntry
        ];
    }
};
UpdateNamespaceInboundIpAllowlistEntryRequest = class _UpdateNamespaceInboundIpAllowlistEntryRequest extends __protoMessage3158 {
    constructor(data){
        super();
        this.namespaceSlug = "";
        this.cidr = "";
        this.entryId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UpdateNamespaceInboundIpAllowlistEntryRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UpdateNamespaceInboundIpAllowlistEntryRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UpdateNamespaceInboundIpAllowlistEntryRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UpdateNamespaceInboundIpAllowlistEntryRequest, a, b2);
    }
    static $() {
        return [
            "UpdateNamespaceInboundIpAllowlistEntryRequest|1 namespace_slug 9|2 cidr 9|3 next_cidr 9?|4 description 9?|5 enabled 8?|6 entry_id 9"
        ];
    }
};
UpdateNamespaceInboundIpAllowlistEntryResponse = class _UpdateNamespaceInboundIpAllowlistEntryResponse extends __protoMessage3158 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UpdateNamespaceInboundIpAllowlistEntryResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UpdateNamespaceInboundIpAllowlistEntryResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UpdateNamespaceInboundIpAllowlistEntryResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UpdateNamespaceInboundIpAllowlistEntryResponse, a, b2);
    }
    static $() {
        return [
            "UpdateNamespaceInboundIpAllowlistEntryResponse|1 entry #0",
            NamespaceInboundIpAllowlistEntry
        ];
    }
};
DeleteNamespaceInboundIpAllowlistEntryRequest = class _DeleteNamespaceInboundIpAllowlistEntryRequest extends __protoMessage3158 {
    constructor(data){
        super();
        this.namespaceSlug = "";
        this.cidr = "";
        this.entryId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _DeleteNamespaceInboundIpAllowlistEntryRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _DeleteNamespaceInboundIpAllowlistEntryRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _DeleteNamespaceInboundIpAllowlistEntryRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_DeleteNamespaceInboundIpAllowlistEntryRequest, a, b2);
    }
    static $() {
        return [
            "DeleteNamespaceInboundIpAllowlistEntryRequest|1 namespace_slug 9|2 cidr 9|3 entry_id 9"
        ];
    }
};
DeleteNamespaceInboundIpAllowlistEntryResponse = class _DeleteNamespaceInboundIpAllowlistEntryResponse extends __protoMessage3158 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _DeleteNamespaceInboundIpAllowlistEntryResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _DeleteNamespaceInboundIpAllowlistEntryResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _DeleteNamespaceInboundIpAllowlistEntryResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_DeleteNamespaceInboundIpAllowlistEntryResponse, a, b2);
    }
    static $() {
        return [
            "DeleteNamespaceInboundIpAllowlistEntryResponse"
        ];
    }
};
SetNamespaceInboundIpAllowlistEnabledRequest = class _SetNamespaceInboundIpAllowlistEnabledRequest extends __protoMessage3158 {
    constructor(data){
        super();
        this.namespaceSlug = "";
        this.enabled = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SetNamespaceInboundIpAllowlistEnabledRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SetNamespaceInboundIpAllowlistEnabledRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SetNamespaceInboundIpAllowlistEnabledRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SetNamespaceInboundIpAllowlistEnabledRequest, a, b2);
    }
    static $() {
        return [
            "SetNamespaceInboundIpAllowlistEnabledRequest|1 namespace_slug 9|2 enabled 8"
        ];
    }
};
SetNamespaceInboundIpAllowlistEnabledResponse = class _SetNamespaceInboundIpAllowlistEnabledResponse extends __protoMessage3158 {
    constructor(data){
        super();
        this.enabled = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SetNamespaceInboundIpAllowlistEnabledResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SetNamespaceInboundIpAllowlistEnabledResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SetNamespaceInboundIpAllowlistEnabledResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SetNamespaceInboundIpAllowlistEnabledResponse, a, b2);
    }
    static $() {
        return [
            "SetNamespaceInboundIpAllowlistEnabledResponse|1 enabled 8"
        ];
    }
};

}
