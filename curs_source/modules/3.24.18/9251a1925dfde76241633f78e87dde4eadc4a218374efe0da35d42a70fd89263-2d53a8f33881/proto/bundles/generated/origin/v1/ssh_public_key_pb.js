import { defineOwn } from "../../../../../external_exports.js";
import { Timestamp } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/timestamp_pb.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage166, __protoMessage3159, SshPublicKey, AddSshPublicKeyRequest, AddSshPublicKeyResponse, ListSshPublicKeysRequest, ListSshPublicKeysResponse, DeleteSshPublicKeyRequest, DeleteSshPublicKeyResponse;
export { AddSshPublicKeyRequest, AddSshPublicKeyResponse, DeleteSshPublicKeyRequest, DeleteSshPublicKeyResponse, ListSshPublicKeysRequest, ListSshPublicKeysResponse, SshPublicKey, __protoMessage3159, __protoPackage166 };
var __wakaru_init_ssh_public_key_pb_initialized = false;
export function init_ssh_public_key_pb() {
if (__wakaru_init_ssh_public_key_pb_initialized) return;
__wakaru_init_ssh_public_key_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage166 = "origin.v1.";
__protoMessage3159 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage166;
    }
};
SshPublicKey = class _SshPublicKey extends __protoMessage3159 {
    constructor(data){
        super();
        this.id = "";
        this.name = "";
        this.algo = "";
        this.fingerprint = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SshPublicKey().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SshPublicKey().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SshPublicKey().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SshPublicKey, a, b2);
    }
    static $() {
        return [
            "SshPublicKey|1 id 9|2 name 9|3 algo 9|4 fingerprint 9|5 created_at #0|6 last_used_at #0",
            Timestamp
        ];
    }
};
AddSshPublicKeyRequest = class _AddSshPublicKeyRequest extends __protoMessage3159 {
    constructor(data){
        super();
        this.publicKey = "";
        this.name = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AddSshPublicKeyRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AddSshPublicKeyRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AddSshPublicKeyRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AddSshPublicKeyRequest, a, b2);
    }
    static $() {
        return [
            "AddSshPublicKeyRequest|1 public_key 9|2 name 9"
        ];
    }
};
AddSshPublicKeyResponse = class _AddSshPublicKeyResponse extends __protoMessage3159 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AddSshPublicKeyResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AddSshPublicKeyResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AddSshPublicKeyResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AddSshPublicKeyResponse, a, b2);
    }
    static $() {
        return [
            "AddSshPublicKeyResponse|1 ssh_public_key #0",
            SshPublicKey
        ];
    }
};
ListSshPublicKeysRequest = class _ListSshPublicKeysRequest extends __protoMessage3159 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListSshPublicKeysRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListSshPublicKeysRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListSshPublicKeysRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListSshPublicKeysRequest, a, b2);
    }
    static $() {
        return [
            "ListSshPublicKeysRequest"
        ];
    }
};
ListSshPublicKeysResponse = class _ListSshPublicKeysResponse extends __protoMessage3159 {
    constructor(data){
        super();
        this.sshPublicKeys = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListSshPublicKeysResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListSshPublicKeysResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListSshPublicKeysResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListSshPublicKeysResponse, a, b2);
    }
    static $() {
        return [
            "ListSshPublicKeysResponse|1 ssh_public_keys #0*",
            SshPublicKey
        ];
    }
};
DeleteSshPublicKeyRequest = class _DeleteSshPublicKeyRequest extends __protoMessage3159 {
    constructor(data){
        super();
        this.id = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _DeleteSshPublicKeyRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _DeleteSshPublicKeyRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _DeleteSshPublicKeyRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_DeleteSshPublicKeyRequest, a, b2);
    }
    static $() {
        return [
            "DeleteSshPublicKeyRequest|1 id 9"
        ];
    }
};
DeleteSshPublicKeyResponse = class _DeleteSshPublicKeyResponse extends __protoMessage3159 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _DeleteSshPublicKeyResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _DeleteSshPublicKeyResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _DeleteSshPublicKeyResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_DeleteSshPublicKeyResponse, a, b2);
    }
    static $() {
        return [
            "DeleteSshPublicKeyResponse"
        ];
    }
};

}
