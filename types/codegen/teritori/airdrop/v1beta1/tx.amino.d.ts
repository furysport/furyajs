import { AminoMsg } from "@cosmjs/amino";
import { MsgClaimAllocation, MsgSetAllocation, MsgTransferModuleOwnership, MsgDepositTokens } from "./tx";
export interface AminoMsgClaimAllocation extends AminoMsg {
    type: "/teritori.airdrop.v1beta1.MsgClaimAllocation";
    value: {
        address: string;
        pub_key: string;
        reward_address: string;
        signature: string;
    };
}
export interface AminoMsgSetAllocation extends AminoMsg {
    type: "/teritori.airdrop.v1beta1.MsgSetAllocation";
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
export interface AminoMsgTransferModuleOwnership extends AminoMsg {
    type: "/teritori.airdrop.v1beta1.MsgTransferModuleOwnership";
    value: {
        sender: string;
        new_owner: string;
    };
}
export interface AminoMsgDepositTokens extends AminoMsg {
    type: "/teritori.airdrop.v1beta1.MsgDepositTokens";
    value: {
        sender: string;
        amount: string[];
    };
}
export declare const AminoConverter: {
    "/teritori.airdrop.v1beta1.MsgClaimAllocation": {
        aminoType: string;
        toAmino: ({ address, pubKey, rewardAddress, signature }: MsgClaimAllocation) => AminoMsgClaimAllocation["value"];
        fromAmino: ({ address, pub_key, reward_address, signature }: AminoMsgClaimAllocation["value"]) => MsgClaimAllocation;
    };
    "/teritori.airdrop.v1beta1.MsgSetAllocation": {
        aminoType: string;
        toAmino: ({ sender, allocation }: MsgSetAllocation) => AminoMsgSetAllocation["value"];
        fromAmino: ({ sender, allocation }: AminoMsgSetAllocation["value"]) => MsgSetAllocation;
    };
    "/teritori.airdrop.v1beta1.MsgTransferModuleOwnership": {
        aminoType: string;
        toAmino: ({ sender, newOwner }: MsgTransferModuleOwnership) => AminoMsgTransferModuleOwnership["value"];
        fromAmino: ({ sender, new_owner }: AminoMsgTransferModuleOwnership["value"]) => MsgTransferModuleOwnership;
    };
    "/teritori.airdrop.v1beta1.MsgDepositTokens": {
        aminoType: string;
        toAmino: ({ sender, amount }: MsgDepositTokens) => AminoMsgDepositTokens["value"];
        fromAmino: ({ sender, amount }: AminoMsgDepositTokens["value"]) => MsgDepositTokens;
    };
};
