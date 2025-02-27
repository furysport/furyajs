import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { BIP44Params, BIP44ParamsSDKType } from "../../hd/v1/hd";
import * as _m0 from "protobufjs/minimal";
/** Record is used for representing a key in the keyring. */
export interface Record {
    /** name represents a name of Record */
    name: string;
    /** pub_key represents a public key in any format */
    pubKey: Any;
    /** local stores the public information about a locally stored key */
    local?: Record_Local;
    /** ledger stores the public information about a Ledger key */
    ledger?: Record_Ledger;
    /** Multi does not store any information. */
    multi?: Record_Multi;
    /** Offline does not store any information. */
    offline?: Record_Offline;
}
/** Record is used for representing a key in the keyring. */
export interface RecordSDKType {
    name: string;
    pub_key: AnySDKType;
    local?: Record_LocalSDKType;
    ledger?: Record_LedgerSDKType;
    multi?: Record_MultiSDKType;
    offline?: Record_OfflineSDKType;
}
/**
 * Item is a keyring item stored in a keyring backend.
 * Local item
 */
export interface Record_Local {
    privKey: Any;
    privKeyType: string;
}
/**
 * Item is a keyring item stored in a keyring backend.
 * Local item
 */
export interface Record_LocalSDKType {
    priv_key: AnySDKType;
    priv_key_type: string;
}
/** Ledger item */
export interface Record_Ledger {
    path: BIP44Params;
}
/** Ledger item */
export interface Record_LedgerSDKType {
    path: BIP44ParamsSDKType;
}
/** Multi item */
export interface Record_Multi {
}
/** Multi item */
export interface Record_MultiSDKType {
}
/** Offline item */
export interface Record_Offline {
}
/** Offline item */
export interface Record_OfflineSDKType {
}
export declare const Record: {
    encode(message: Record, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record;
    fromJSON(object: any): Record;
    toJSON(message: Record): unknown;
    fromPartial(object: Partial<Record>): Record;
};
export declare const Record_Local: {
    encode(message: Record_Local, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record_Local;
    fromJSON(object: any): Record_Local;
    toJSON(message: Record_Local): unknown;
    fromPartial(object: Partial<Record_Local>): Record_Local;
};
export declare const Record_Ledger: {
    encode(message: Record_Ledger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record_Ledger;
    fromJSON(object: any): Record_Ledger;
    toJSON(message: Record_Ledger): unknown;
    fromPartial(object: Partial<Record_Ledger>): Record_Ledger;
};
export declare const Record_Multi: {
    encode(_: Record_Multi, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record_Multi;
    fromJSON(_: any): Record_Multi;
    toJSON(_: Record_Multi): unknown;
    fromPartial(_: Partial<Record_Multi>): Record_Multi;
};
export declare const Record_Offline: {
    encode(_: Record_Offline, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record_Offline;
    fromJSON(_: any): Record_Offline;
    toJSON(_: Record_Offline): unknown;
    fromPartial(_: Partial<Record_Offline>): Record_Offline;
};
