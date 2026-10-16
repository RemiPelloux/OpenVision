import { defineOwn } from "../../../../../external_exports.js";
import { Timestamp } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/timestamp_pb.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage164, __protoMessage3157, NamespaceSshCertificateAuthority, GetNamespaceSshCertificateAuthoritiesRequest, GetNamespaceSshCertificateAuthoritiesResponse, AddNamespaceSshCertificateAuthorityRequest, AddNamespaceSshCertificateAuthorityResponse, RemoveNamespaceSshCertificateAuthorityRequest, RemoveNamespaceSshCertificateAuthorityResponse, SetNamespaceSshRequireCertificatesRequest, SetNamespaceSshRequireCertificatesResponse;
export { AddNamespaceSshCertificateAuthorityRequest, AddNamespaceSshCertificateAuthorityResponse, GetNamespaceSshCertificateAuthoritiesRequest, GetNamespaceSshCertificateAuthoritiesResponse, NamespaceSshCertificateAuthority, RemoveNamespaceSshCertificateAuthorityRequest, RemoveNamespaceSshCertificateAuthorityResponse, SetNamespaceSshRequireCertificatesRequest, SetNamespaceSshRequireCertificatesResponse, __protoMessage3157, __protoPackage164 };
var __wakaru_init_namespace_ssh_certificate_authority_pb_initialized = false;
export function init_namespace_ssh_certificate_authority_pb() {
if (__wakaru_init_namespace_ssh_certificate_authority_pb_initialized) return;
__wakaru_init_namespace_ssh_certificate_authority_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage164 = "origin.v1.";
__protoMessage3157 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage164;
    }
};
NamespaceSshCertificateAuthority = class _NamespaceSshCertificateAuthority extends __protoMessage3157 {
    constructor(data){
        super();
        this.id = "";
        this.name = "";
        this.algo = "";
        this.fingerprint = "";
        this.publicKey = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _NamespaceSshCertificateAuthority().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _NamespaceSshCertificateAuthority().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _NamespaceSshCertificateAuthority().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_NamespaceSshCertificateAuthority, a, b2);
    }
    static $() {
        return [
            "NamespaceSshCertificateAuthority|1 id 9|2 name 9|3 algo 9|4 fingerprint 9|5 public_key 9|6 created_at #0",
            Timestamp
        ];
    }
};
GetNamespaceSshCertificateAuthoritiesRequest = class _GetNamespaceSshCertificateAuthoritiesRequest extends __protoMessage3157 {
    constructor(data){
        super();
        this.namespaceSlug = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetNamespaceSshCertificateAuthoritiesRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetNamespaceSshCertificateAuthoritiesRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetNamespaceSshCertificateAuthoritiesRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetNamespaceSshCertificateAuthoritiesRequest, a, b2);
    }
    static $() {
        return [
            "GetNamespaceSshCertificateAuthoritiesRequest|1 namespace_slug 9"
        ];
    }
};
GetNamespaceSshCertificateAuthoritiesResponse = class _GetNamespaceSshCertificateAuthoritiesResponse extends __protoMessage3157 {
    constructor(data){
        super();
        this.certificateAuthorities = [];
        this.requireCertificates = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetNamespaceSshCertificateAuthoritiesResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetNamespaceSshCertificateAuthoritiesResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetNamespaceSshCertificateAuthoritiesResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetNamespaceSshCertificateAuthoritiesResponse, a, b2);
    }
    static $() {
        return [
            "GetNamespaceSshCertificateAuthoritiesResponse|1 certificate_authorities #0*|2 require_certificates 8",
            NamespaceSshCertificateAuthority
        ];
    }
};
AddNamespaceSshCertificateAuthorityRequest = class _AddNamespaceSshCertificateAuthorityRequest extends __protoMessage3157 {
    constructor(data){
        super();
        this.namespaceSlug = "";
        this.publicKey = "";
        this.name = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AddNamespaceSshCertificateAuthorityRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AddNamespaceSshCertificateAuthorityRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AddNamespaceSshCertificateAuthorityRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AddNamespaceSshCertificateAuthorityRequest, a, b2);
    }
    static $() {
        return [
            "AddNamespaceSshCertificateAuthorityRequest|1 namespace_slug 9|2 public_key 9|3 name 9"
        ];
    }
};
AddNamespaceSshCertificateAuthorityResponse = class _AddNamespaceSshCertificateAuthorityResponse extends __protoMessage3157 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AddNamespaceSshCertificateAuthorityResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AddNamespaceSshCertificateAuthorityResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AddNamespaceSshCertificateAuthorityResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AddNamespaceSshCertificateAuthorityResponse, a, b2);
    }
    static $() {
        return [
            "AddNamespaceSshCertificateAuthorityResponse|1 certificate_authority #0",
            NamespaceSshCertificateAuthority
        ];
    }
};
RemoveNamespaceSshCertificateAuthorityRequest = class _RemoveNamespaceSshCertificateAuthorityRequest extends __protoMessage3157 {
    constructor(data){
        super();
        this.namespaceSlug = "";
        this.id = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RemoveNamespaceSshCertificateAuthorityRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RemoveNamespaceSshCertificateAuthorityRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RemoveNamespaceSshCertificateAuthorityRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RemoveNamespaceSshCertificateAuthorityRequest, a, b2);
    }
    static $() {
        return [
            "RemoveNamespaceSshCertificateAuthorityRequest|1 namespace_slug 9|2 id 9"
        ];
    }
};
RemoveNamespaceSshCertificateAuthorityResponse = class _RemoveNamespaceSshCertificateAuthorityResponse extends __protoMessage3157 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RemoveNamespaceSshCertificateAuthorityResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RemoveNamespaceSshCertificateAuthorityResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RemoveNamespaceSshCertificateAuthorityResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RemoveNamespaceSshCertificateAuthorityResponse, a, b2);
    }
    static $() {
        return [
            "RemoveNamespaceSshCertificateAuthorityResponse"
        ];
    }
};
SetNamespaceSshRequireCertificatesRequest = class _SetNamespaceSshRequireCertificatesRequest extends __protoMessage3157 {
    constructor(data){
        super();
        this.namespaceSlug = "";
        this.requireCertificates = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SetNamespaceSshRequireCertificatesRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SetNamespaceSshRequireCertificatesRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SetNamespaceSshRequireCertificatesRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SetNamespaceSshRequireCertificatesRequest, a, b2);
    }
    static $() {
        return [
            "SetNamespaceSshRequireCertificatesRequest|1 namespace_slug 9|2 require_certificates 8"
        ];
    }
};
SetNamespaceSshRequireCertificatesResponse = class _SetNamespaceSshRequireCertificatesResponse extends __protoMessage3157 {
    constructor(data){
        super();
        this.requireCertificates = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SetNamespaceSshRequireCertificatesResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SetNamespaceSshRequireCertificatesResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SetNamespaceSshRequireCertificatesResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SetNamespaceSshRequireCertificatesResponse, a, b2);
    }
    static $() {
        return [
            "SetNamespaceSshRequireCertificatesResponse|1 require_certificates 8"
        ];
    }
};

}
