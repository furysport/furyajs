import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const furyaAminoConverters: {
    "/furya.airdrop.v1beta1.MsgClaimAllocation": {
        aminoType: string;
        toAmino: ({ address, pubKey, rewardAddress, signature }: import("./airdrop/v1beta1/tx").MsgClaimAllocation) => {
            address: string;
            pub_key: string;
            reward_address: string;
            signature: string;
        };
        fromAmino: ({ address, pub_key, reward_address, signature }: {
            address: string;
            pub_key: string;
            reward_address: string;
            signature: string;
        }) => import("./airdrop/v1beta1/tx").MsgClaimAllocation;
    };
    "/furya.airdrop.v1beta1.MsgSetAllocation": {
        aminoType: string;
        toAmino: ({ sender, allocation }: import("./airdrop/v1beta1/tx").MsgSetAllocation) => {
            sender: string;
            allocation: {
                chain: string;
                address: string;
                amount: string;
                claimed_amount: string;
            };
        };
        fromAmino: ({ sender, allocation }: {
            sender: string;
            allocation: {
                chain: string;
                address: string;
                amount: string;
                claimed_amount: string;
            };
        }) => import("./airdrop/v1beta1/tx").MsgSetAllocation;
    };
    "/furya.airdrop.v1beta1.MsgTransferModuleOwnership": {
        aminoType: string;
        toAmino: ({ sender, newOwner }: import("./airdrop/v1beta1/tx").MsgTransferModuleOwnership) => {
            sender: string;
            new_owner: string;
        };
        fromAmino: ({ sender, new_owner }: {
            sender: string;
            new_owner: string;
        }) => import("./airdrop/v1beta1/tx").MsgTransferModuleOwnership;
    };
    "/furya.airdrop.v1beta1.MsgDepositTokens": {
        aminoType: string;
        toAmino: ({ sender, amount }: import("./airdrop/v1beta1/tx").MsgDepositTokens) => {
            sender: string;
            amount: string[];
        };
        fromAmino: ({ sender, amount }: {
            sender: string;
            amount: string[];
        }) => import("./airdrop/v1beta1/tx").MsgDepositTokens;
    };
};
export declare const furyaProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningFuryaClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningFuryaClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
