import { AminoMsg } from "@cosmjs/amino";
import { MsgClaimAllocation, MsgSetAllocation, MsgTransferModuleOwnership, MsgDepositTokens } from "./tx";
export interface MsgClaimAllocationAminoType extends AminoMsg {
    type: "/furya.airdrop.v1beta1.MsgClaimAllocation";
    value: {
        address: string;
        pub_key: string;
        reward_address: string;
        signature: string;
    };
}
export interface MsgSetAllocationAminoType extends AminoMsg {
    type: "/furya.airdrop.v1beta1.MsgSetAllocation";
    value: {
        sender: string;
        allocation: {
            chain: string;
            address: string;
            amount: string;
            claimed_amount: string;
        };
    };
}
export interface MsgTransferModuleOwnershipAminoType extends AminoMsg {
    type: "/furya.airdrop.v1beta1.MsgTransferModuleOwnership";
    value: {
        sender: string;
        new_owner: string;
    };
}
export interface MsgDepositTokensAminoType extends AminoMsg {
    type: "/furya.airdrop.v1beta1.MsgDepositTokens";
    value: {
        sender: string;
        amount: string[];
    };
}
export declare const AminoConverter: {
    "/furya.airdrop.v1beta1.MsgClaimAllocation": {
        aminoType: string;
        toAmino: ({ address, pubKey, rewardAddress, signature }: MsgClaimAllocation) => MsgClaimAllocationAminoType["value"];
        fromAmino: ({ address, pub_key, reward_address, signature }: MsgClaimAllocationAminoType["value"]) => MsgClaimAllocation;
    };
    "/furya.airdrop.v1beta1.MsgSetAllocation": {
        aminoType: string;
        toAmino: ({ sender, allocation }: MsgSetAllocation) => MsgSetAllocationAminoType["value"];
        fromAmino: ({ sender, allocation }: MsgSetAllocationAminoType["value"]) => MsgSetAllocation;
    };
    "/furya.airdrop.v1beta1.MsgTransferModuleOwnership": {
        aminoType: string;
        toAmino: ({ sender, newOwner }: MsgTransferModuleOwnership) => MsgTransferModuleOwnershipAminoType["value"];
        fromAmino: ({ sender, new_owner }: MsgTransferModuleOwnershipAminoType["value"]) => MsgTransferModuleOwnership;
    };
    "/furya.airdrop.v1beta1.MsgDepositTokens": {
        aminoType: string;
        toAmino: ({ sender, amount }: MsgDepositTokens) => MsgDepositTokensAminoType["value"];
        fromAmino: ({ sender, amount }: MsgDepositTokensAminoType["value"]) => MsgDepositTokens;
    };
};
