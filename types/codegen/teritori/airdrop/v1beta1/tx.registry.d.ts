import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgClaimAllocation, MsgSetAllocation, MsgTransferModuleOwnership, MsgDepositTokens } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        claimAllocation(value: MsgClaimAllocation): {
            typeUrl: string;
            value: Uint8Array;
        };
        setAllocation(value: MsgSetAllocation): {
            typeUrl: string;
            value: Uint8Array;
        };
        transferModuleOwnership(value: MsgTransferModuleOwnership): {
            typeUrl: string;
            value: Uint8Array;
        };
        depositTokens(value: MsgDepositTokens): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        claimAllocation(value: MsgClaimAllocation): {
            typeUrl: string;
            value: MsgClaimAllocation;
        };
        setAllocation(value: MsgSetAllocation): {
            typeUrl: string;
            value: MsgSetAllocation;
        };
        transferModuleOwnership(value: MsgTransferModuleOwnership): {
            typeUrl: string;
            value: MsgTransferModuleOwnership;
        };
        depositTokens(value: MsgDepositTokens): {
            typeUrl: string;
            value: MsgDepositTokens;
        };
    };
    toJSON: {
        claimAllocation(value: MsgClaimAllocation): {
            typeUrl: string;
            value: unknown;
        };
        setAllocation(value: MsgSetAllocation): {
            typeUrl: string;
            value: unknown;
        };
        transferModuleOwnership(value: MsgTransferModuleOwnership): {
            typeUrl: string;
            value: unknown;
        };
        depositTokens(value: MsgDepositTokens): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        claimAllocation(value: any): {
            typeUrl: string;
            value: MsgClaimAllocation;
        };
        setAllocation(value: any): {
            typeUrl: string;
            value: MsgSetAllocation;
        };
        transferModuleOwnership(value: any): {
            typeUrl: string;
            value: MsgTransferModuleOwnership;
        };
        depositTokens(value: any): {
            typeUrl: string;
            value: MsgDepositTokens;
        };
    };
    fromPartial: {
        claimAllocation(value: MsgClaimAllocation): {
            typeUrl: string;
            value: MsgClaimAllocation;
        };
        setAllocation(value: MsgSetAllocation): {
            typeUrl: string;
            value: MsgSetAllocation;
        };
        transferModuleOwnership(value: MsgTransferModuleOwnership): {
            typeUrl: string;
            value: MsgTransferModuleOwnership;
        };
        depositTokens(value: MsgDepositTokens): {
            typeUrl: string;
            value: MsgDepositTokens;
        };
    };
};
