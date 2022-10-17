//@ts-nocheck
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
export const AminoConverter = {
  "/teritori.airdrop.v1beta1.MsgClaimAllocation": {
    aminoType: "/teritori.airdrop.v1beta1.MsgClaimAllocation",
    toAmino: ({
      address,
      pubKey,
      rewardAddress,
      signature
    }: MsgClaimAllocation): AminoMsgClaimAllocation["value"] => {
      return {
        address,
        pub_key: pubKey,
        reward_address: rewardAddress,
        signature
      };
    },
    fromAmino: ({
      address,
      pub_key,
      reward_address,
      signature
    }: AminoMsgClaimAllocation["value"]): MsgClaimAllocation => {
      return {
        address,
        pubKey: pub_key,
        rewardAddress: reward_address,
        signature
      };
    }
  },
  "/teritori.airdrop.v1beta1.MsgSetAllocation": {
    aminoType: "/teritori.airdrop.v1beta1.MsgSetAllocation",
    toAmino: ({
      sender,
      allocation
    }: MsgSetAllocation): AminoMsgSetAllocation["value"] => {
      return {
        sender,
        allocation: {
          chain: allocation.chain,
          address: allocation.address,
          amount: allocation.amount,
          claimed_amount: allocation.claimedAmount
        }
      };
    },
    fromAmino: ({
      sender,
      allocation
    }: AminoMsgSetAllocation["value"]): MsgSetAllocation => {
      return {
        sender,
        allocation: {
          chain: allocation.chain,
          address: allocation.address,
          amount: allocation.amount,
          claimedAmount: allocation.claimed_amount
        }
      };
    }
  },
  "/teritori.airdrop.v1beta1.MsgTransferModuleOwnership": {
    aminoType: "/teritori.airdrop.v1beta1.MsgTransferModuleOwnership",
    toAmino: ({
      sender,
      newOwner
    }: MsgTransferModuleOwnership): AminoMsgTransferModuleOwnership["value"] => {
      return {
        sender,
        new_owner: newOwner
      };
    },
    fromAmino: ({
      sender,
      new_owner
    }: AminoMsgTransferModuleOwnership["value"]): MsgTransferModuleOwnership => {
      return {
        sender,
        newOwner: new_owner
      };
    }
  },
  "/teritori.airdrop.v1beta1.MsgDepositTokens": {
    aminoType: "/teritori.airdrop.v1beta1.MsgDepositTokens",
    toAmino: ({
      sender,
      amount
    }: MsgDepositTokens): AminoMsgDepositTokens["value"] => {
      return {
        sender,
        amount
      };
    },
    fromAmino: ({
      sender,
      amount
    }: AminoMsgDepositTokens["value"]): MsgDepositTokens => {
      return {
        sender,
        amount
      };
    }
  }
};