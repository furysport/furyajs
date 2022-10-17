import * as _122 from "./airdrop/v1beta1/allocation";
import * as _123 from "./airdrop/v1beta1/genesis";
import * as _124 from "./airdrop/v1beta1/params";
import * as _125 from "./airdrop/v1beta1/query";
import * as _126 from "./airdrop/v1beta1/tx";
import * as _127 from "./mint/v1beta1/genesis";
import * as _128 from "./mint/v1beta1/mint";
import * as _129 from "./mint/v1beta1/query";
import * as _197 from "./airdrop/v1beta1/query.rpc.Query";
import * as _198 from "./mint/v1beta1/query.rpc.Query";
import * as _199 from "./airdrop/v1beta1/tx.rpc.msg";
export declare namespace teritori {
    namespace airdrop {
        const v1beta1: {
            MsgClientImpl: typeof _199.MsgClientImpl;
            QueryClientImpl: typeof _197.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allocation(request: _125.QueryAllocationRequest): Promise<_125.QueryAllocationResponse>;
                params(request?: _125.QueryParamsRequest): Promise<_125.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    claimAllocation(value: _126.MsgClaimAllocation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setAllocation(value: _126.MsgSetAllocation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    transferModuleOwnership(value: _126.MsgTransferModuleOwnership): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    depositTokens(value: _126.MsgDepositTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    claimAllocation(value: _126.MsgClaimAllocation): {
                        typeUrl: string;
                        value: _126.MsgClaimAllocation;
                    };
                    setAllocation(value: _126.MsgSetAllocation): {
                        typeUrl: string;
                        value: _126.MsgSetAllocation;
                    };
                    transferModuleOwnership(value: _126.MsgTransferModuleOwnership): {
                        typeUrl: string;
                        value: _126.MsgTransferModuleOwnership;
                    };
                    depositTokens(value: _126.MsgDepositTokens): {
                        typeUrl: string;
                        value: _126.MsgDepositTokens;
                    };
                };
                toJSON: {
                    claimAllocation(value: _126.MsgClaimAllocation): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setAllocation(value: _126.MsgSetAllocation): {
                        typeUrl: string;
                        value: unknown;
                    };
                    transferModuleOwnership(value: _126.MsgTransferModuleOwnership): {
                        typeUrl: string;
                        value: unknown;
                    };
                    depositTokens(value: _126.MsgDepositTokens): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    claimAllocation(value: any): {
                        typeUrl: string;
                        value: _126.MsgClaimAllocation;
                    };
                    setAllocation(value: any): {
                        typeUrl: string;
                        value: _126.MsgSetAllocation;
                    };
                    transferModuleOwnership(value: any): {
                        typeUrl: string;
                        value: _126.MsgTransferModuleOwnership;
                    };
                    depositTokens(value: any): {
                        typeUrl: string;
                        value: _126.MsgDepositTokens;
                    };
                };
                fromPartial: {
                    claimAllocation(value: _126.MsgClaimAllocation): {
                        typeUrl: string;
                        value: _126.MsgClaimAllocation;
                    };
                    setAllocation(value: _126.MsgSetAllocation): {
                        typeUrl: string;
                        value: _126.MsgSetAllocation;
                    };
                    transferModuleOwnership(value: _126.MsgTransferModuleOwnership): {
                        typeUrl: string;
                        value: _126.MsgTransferModuleOwnership;
                    };
                    depositTokens(value: _126.MsgDepositTokens): {
                        typeUrl: string;
                        value: _126.MsgDepositTokens;
                    };
                };
            };
            AminoConverter: {
                "/teritori.airdrop.v1beta1.MsgClaimAllocation": {
                    aminoType: string;
                    toAmino: ({ address, pubKey, rewardAddress, signature }: _126.MsgClaimAllocation) => {
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
                    }) => _126.MsgClaimAllocation;
                };
                "/teritori.airdrop.v1beta1.MsgSetAllocation": {
                    aminoType: string;
                    toAmino: ({ sender, allocation }: _126.MsgSetAllocation) => {
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
                    }) => _126.MsgSetAllocation;
                };
                "/teritori.airdrop.v1beta1.MsgTransferModuleOwnership": {
                    aminoType: string;
                    toAmino: ({ sender, newOwner }: _126.MsgTransferModuleOwnership) => {
                        sender: string;
                        new_owner: string;
                    };
                    fromAmino: ({ sender, new_owner }: {
                        sender: string;
                        new_owner: string;
                    }) => _126.MsgTransferModuleOwnership;
                };
                "/teritori.airdrop.v1beta1.MsgDepositTokens": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _126.MsgDepositTokens) => {
                        sender: string;
                        amount: string[];
                    };
                    fromAmino: ({ sender, amount }: {
                        sender: string;
                        amount: string[];
                    }) => _126.MsgDepositTokens;
                };
            };
            MsgSetAllocation: {
                encode(message: _126.MsgSetAllocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgSetAllocation;
                fromJSON(object: any): _126.MsgSetAllocation;
                toJSON(message: _126.MsgSetAllocation): unknown;
                fromPartial(object: Partial<_126.MsgSetAllocation>): _126.MsgSetAllocation;
            };
            MsgSetAllocationResponse: {
                encode(_: _126.MsgSetAllocationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgSetAllocationResponse;
                fromJSON(_: any): _126.MsgSetAllocationResponse;
                toJSON(_: _126.MsgSetAllocationResponse): unknown;
                fromPartial(_: Partial<_126.MsgSetAllocationResponse>): _126.MsgSetAllocationResponse;
            };
            MsgClaimAllocation: {
                encode(message: _126.MsgClaimAllocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgClaimAllocation;
                fromJSON(object: any): _126.MsgClaimAllocation;
                toJSON(message: _126.MsgClaimAllocation): unknown;
                fromPartial(object: Partial<_126.MsgClaimAllocation>): _126.MsgClaimAllocation;
            };
            MsgClaimAllocationResponse: {
                encode(_: _126.MsgClaimAllocationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgClaimAllocationResponse;
                fromJSON(_: any): _126.MsgClaimAllocationResponse;
                toJSON(_: _126.MsgClaimAllocationResponse): unknown;
                fromPartial(_: Partial<_126.MsgClaimAllocationResponse>): _126.MsgClaimAllocationResponse;
            };
            MsgSignData: {
                encode(message: _126.MsgSignData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgSignData;
                fromJSON(object: any): _126.MsgSignData;
                toJSON(message: _126.MsgSignData): unknown;
                fromPartial(object: Partial<_126.MsgSignData>): _126.MsgSignData;
            };
            MsgTransferModuleOwnership: {
                encode(message: _126.MsgTransferModuleOwnership, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgTransferModuleOwnership;
                fromJSON(object: any): _126.MsgTransferModuleOwnership;
                toJSON(message: _126.MsgTransferModuleOwnership): unknown;
                fromPartial(object: Partial<_126.MsgTransferModuleOwnership>): _126.MsgTransferModuleOwnership;
            };
            MsgTransferModuleOwnershipResponse: {
                encode(_: _126.MsgTransferModuleOwnershipResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgTransferModuleOwnershipResponse;
                fromJSON(_: any): _126.MsgTransferModuleOwnershipResponse;
                toJSON(_: _126.MsgTransferModuleOwnershipResponse): unknown;
                fromPartial(_: Partial<_126.MsgTransferModuleOwnershipResponse>): _126.MsgTransferModuleOwnershipResponse;
            };
            MsgDepositTokens: {
                encode(message: _126.MsgDepositTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgDepositTokens;
                fromJSON(object: any): _126.MsgDepositTokens;
                toJSON(message: _126.MsgDepositTokens): unknown;
                fromPartial(object: Partial<_126.MsgDepositTokens>): _126.MsgDepositTokens;
            };
            MsgDepositTokensResponse: {
                encode(_: _126.MsgDepositTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgDepositTokensResponse;
                fromJSON(_: any): _126.MsgDepositTokensResponse;
                toJSON(_: _126.MsgDepositTokensResponse): unknown;
                fromPartial(_: Partial<_126.MsgDepositTokensResponse>): _126.MsgDepositTokensResponse;
            };
            QueryAllocationRequest: {
                encode(message: _125.QueryAllocationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryAllocationRequest;
                fromJSON(object: any): _125.QueryAllocationRequest;
                toJSON(message: _125.QueryAllocationRequest): unknown;
                fromPartial(object: Partial<_125.QueryAllocationRequest>): _125.QueryAllocationRequest;
            };
            QueryAllocationResponse: {
                encode(message: _125.QueryAllocationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryAllocationResponse;
                fromJSON(object: any): _125.QueryAllocationResponse;
                toJSON(message: _125.QueryAllocationResponse): unknown;
                fromPartial(object: Partial<_125.QueryAllocationResponse>): _125.QueryAllocationResponse;
            };
            QueryParamsRequest: {
                encode(_: _125.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryParamsRequest;
                fromJSON(_: any): _125.QueryParamsRequest;
                toJSON(_: _125.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_125.QueryParamsRequest>): _125.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _125.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryParamsResponse;
                fromJSON(object: any): _125.QueryParamsResponse;
                toJSON(message: _125.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_125.QueryParamsResponse>): _125.QueryParamsResponse;
            };
            Params: {
                encode(message: _124.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Params;
                fromJSON(object: any): _124.Params;
                toJSON(message: _124.Params): unknown;
                fromPartial(object: Partial<_124.Params>): _124.Params;
            };
            GenesisState: {
                encode(message: _123.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.GenesisState;
                fromJSON(object: any): _123.GenesisState;
                toJSON(message: _123.GenesisState): unknown;
                fromPartial(object: Partial<_123.GenesisState>): _123.GenesisState;
            };
            AirdropAllocation: {
                encode(message: _122.AirdropAllocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.AirdropAllocation;
                fromJSON(object: any): _122.AirdropAllocation;
                toJSON(message: _122.AirdropAllocation): unknown;
                fromPartial(object: Partial<_122.AirdropAllocation>): _122.AirdropAllocation;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _198.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _129.QueryParamsRequest): Promise<_129.QueryParamsResponse>;
                blockProvisions(request?: _129.QueryBlockProvisionsRequest): Promise<_129.QueryBlockProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _129.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryParamsRequest;
                fromJSON(_: any): _129.QueryParamsRequest;
                toJSON(_: _129.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_129.QueryParamsRequest>): _129.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _129.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryParamsResponse;
                fromJSON(object: any): _129.QueryParamsResponse;
                toJSON(message: _129.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_129.QueryParamsResponse>): _129.QueryParamsResponse;
            };
            QueryBlockProvisionsRequest: {
                encode(_: _129.QueryBlockProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryBlockProvisionsRequest;
                fromJSON(_: any): _129.QueryBlockProvisionsRequest;
                toJSON(_: _129.QueryBlockProvisionsRequest): unknown;
                fromPartial(_: Partial<_129.QueryBlockProvisionsRequest>): _129.QueryBlockProvisionsRequest;
            };
            QueryBlockProvisionsResponse: {
                encode(message: _129.QueryBlockProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryBlockProvisionsResponse;
                fromJSON(object: any): _129.QueryBlockProvisionsResponse;
                toJSON(message: _129.QueryBlockProvisionsResponse): unknown;
                fromPartial(object: Partial<_129.QueryBlockProvisionsResponse>): _129.QueryBlockProvisionsResponse;
            };
            Minter: {
                encode(message: _128.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Minter;
                fromJSON(object: any): _128.Minter;
                toJSON(message: _128.Minter): unknown;
                fromPartial(object: Partial<_128.Minter>): _128.Minter;
            };
            TeamVestingMonthInfo: {
                encode(message: _128.TeamVestingMonthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.TeamVestingMonthInfo;
                fromJSON(object: any): _128.TeamVestingMonthInfo;
                toJSON(message: _128.TeamVestingMonthInfo): unknown;
                fromPartial(object: Partial<_128.TeamVestingMonthInfo>): _128.TeamVestingMonthInfo;
            };
            MonthlyVestingAddress: {
                encode(message: _128.MonthlyVestingAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.MonthlyVestingAddress;
                fromJSON(object: any): _128.MonthlyVestingAddress;
                toJSON(message: _128.MonthlyVestingAddress): unknown;
                fromPartial(object: Partial<_128.MonthlyVestingAddress>): _128.MonthlyVestingAddress;
            };
            DistributionProportions: {
                encode(message: _128.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.DistributionProportions;
                fromJSON(object: any): _128.DistributionProportions;
                toJSON(message: _128.DistributionProportions): unknown;
                fromPartial(object: Partial<_128.DistributionProportions>): _128.DistributionProportions;
            };
            Params: {
                encode(message: _128.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Params;
                fromJSON(object: any): _128.Params;
                toJSON(message: _128.Params): unknown;
                fromPartial(object: Partial<_128.Params>): _128.Params;
            };
            GenesisState: {
                encode(message: _127.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.GenesisState;
                fromJSON(object: any): _127.GenesisState;
                toJSON(message: _127.GenesisState): unknown;
                fromPartial(object: Partial<_127.GenesisState>): _127.GenesisState;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            teritori: {
                airdrop: {
                    v1beta1: _199.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            teritori: {
                airdrop: {
                    v1beta1: {
                        allocation(request: _125.QueryAllocationRequest): Promise<_125.QueryAllocationResponse>;
                        params(request?: _125.QueryParamsRequest): Promise<_125.QueryParamsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _129.QueryParamsRequest): Promise<_129.QueryParamsResponse>;
                        blockProvisions(request?: _129.QueryBlockProvisionsRequest): Promise<_129.QueryBlockProvisionsResponse>;
                    };
                };
            };
        }>;
    };
}
