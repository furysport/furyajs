import { AirdropAllocation, AirdropAllocationSDKType } from "./allocation";
import * as _m0 from "protobufjs/minimal";
/** MsgSetAllocation defines an sdk.Msg type that set airdrop allocation */
export interface MsgSetAllocation {
    sender: string;
    allocation: AirdropAllocation;
}
/** MsgSetAllocation defines an sdk.Msg type that set airdrop allocation */
export interface MsgSetAllocationSDKType {
    sender: string;
    allocation: AirdropAllocationSDKType;
}
/** MsgSetAllocationResponse defines the Msg/SetAllocation response type. */
export interface MsgSetAllocationResponse {
}
/** MsgSetAllocationResponse defines the Msg/SetAllocation response type. */
export interface MsgSetAllocationResponseSDKType {
}
/** MsgClaimAllocation defines an sdk.Msg type that claims airdrop allocation */
export interface MsgClaimAllocation {
    address: string;
    pubKey: string;
    rewardAddress: string;
    signature: string;
}
/** MsgClaimAllocation defines an sdk.Msg type that claims airdrop allocation */
export interface MsgClaimAllocationSDKType {
    address: string;
    pub_key: string;
    reward_address: string;
    signature: string;
}
/** MsgClaimAllocationResponse defines the Msg/ClaimAllocation response type. */
export interface MsgClaimAllocationResponse {
}
/** MsgClaimAllocationResponse defines the Msg/ClaimAllocation response type. */
export interface MsgClaimAllocationResponseSDKType {
}
/** MsgSignData defines an arbitrary, general-purpose, off-chain message */
export interface MsgSignData {
    /** Signer is the sdk.AccAddress of the message signer */
    signer: string;
    /** data represents the raw bytes of the content that is signed (text, json, etc) */
    data: Uint8Array;
}
/** MsgSignData defines an arbitrary, general-purpose, off-chain message */
export interface MsgSignDataSDKType {
    signer: string;
    data: Uint8Array;
}
export interface MsgTransferModuleOwnership {
    sender: string;
    newOwner: string;
}
export interface MsgTransferModuleOwnershipSDKType {
    sender: string;
    new_owner: string;
}
export interface MsgTransferModuleOwnershipResponse {
}
export interface MsgTransferModuleOwnershipResponseSDKType {
}
export interface MsgDepositTokens {
    sender: string;
    amount: string[];
}
export interface MsgDepositTokensSDKType {
    sender: string;
    amount: string[];
}
export interface MsgDepositTokensResponse {
}
export interface MsgDepositTokensResponseSDKType {
}
export declare const MsgSetAllocation: {
    encode(message: MsgSetAllocation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAllocation;
    fromJSON(object: any): MsgSetAllocation;
    toJSON(message: MsgSetAllocation): unknown;
    fromPartial(object: Partial<MsgSetAllocation>): MsgSetAllocation;
};
export declare const MsgSetAllocationResponse: {
    encode(_: MsgSetAllocationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAllocationResponse;
    fromJSON(_: any): MsgSetAllocationResponse;
    toJSON(_: MsgSetAllocationResponse): unknown;
    fromPartial(_: Partial<MsgSetAllocationResponse>): MsgSetAllocationResponse;
};
export declare const MsgClaimAllocation: {
    encode(message: MsgClaimAllocation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimAllocation;
    fromJSON(object: any): MsgClaimAllocation;
    toJSON(message: MsgClaimAllocation): unknown;
    fromPartial(object: Partial<MsgClaimAllocation>): MsgClaimAllocation;
};
export declare const MsgClaimAllocationResponse: {
    encode(_: MsgClaimAllocationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimAllocationResponse;
    fromJSON(_: any): MsgClaimAllocationResponse;
    toJSON(_: MsgClaimAllocationResponse): unknown;
    fromPartial(_: Partial<MsgClaimAllocationResponse>): MsgClaimAllocationResponse;
};
export declare const MsgSignData: {
    encode(message: MsgSignData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignData;
    fromJSON(object: any): MsgSignData;
    toJSON(message: MsgSignData): unknown;
    fromPartial(object: Partial<MsgSignData>): MsgSignData;
};
export declare const MsgTransferModuleOwnership: {
    encode(message: MsgTransferModuleOwnership, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferModuleOwnership;
    fromJSON(object: any): MsgTransferModuleOwnership;
    toJSON(message: MsgTransferModuleOwnership): unknown;
    fromPartial(object: Partial<MsgTransferModuleOwnership>): MsgTransferModuleOwnership;
};
export declare const MsgTransferModuleOwnershipResponse: {
    encode(_: MsgTransferModuleOwnershipResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferModuleOwnershipResponse;
    fromJSON(_: any): MsgTransferModuleOwnershipResponse;
    toJSON(_: MsgTransferModuleOwnershipResponse): unknown;
    fromPartial(_: Partial<MsgTransferModuleOwnershipResponse>): MsgTransferModuleOwnershipResponse;
};
export declare const MsgDepositTokens: {
    encode(message: MsgDepositTokens, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositTokens;
    fromJSON(object: any): MsgDepositTokens;
    toJSON(message: MsgDepositTokens): unknown;
    fromPartial(object: Partial<MsgDepositTokens>): MsgDepositTokens;
};
export declare const MsgDepositTokensResponse: {
    encode(_: MsgDepositTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositTokensResponse;
    fromJSON(_: any): MsgDepositTokensResponse;
    toJSON(_: MsgDepositTokensResponse): unknown;
    fromPartial(_: Partial<MsgDepositTokensResponse>): MsgDepositTokensResponse;
};
