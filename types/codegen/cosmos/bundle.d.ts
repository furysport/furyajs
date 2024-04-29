import * as _2 from "./app/v1alpha1/config";
import * as _3 from "./app/v1alpha1/module";
import * as _4 from "./app/v1alpha1/query";
import * as _5 from "./auth/v1beta1/auth";
import * as _6 from "./auth/v1beta1/genesis";
import * as _7 from "./auth/v1beta1/query";
import * as _8 from "./bank/v1beta1/authz";
import * as _9 from "./bank/v1beta1/bank";
import * as _10 from "./bank/v1beta1/genesis";
import * as _11 from "./bank/v1beta1/query";
import * as _12 from "./bank/v1beta1/tx";
import * as _13 from "./base/abci/v1beta1/abci";
import * as _14 from "./base/kv/v1beta1/kv";
import * as _15 from "./base/query/v1beta1/pagination";
import * as _16 from "./base/reflection/v1beta1/reflection";
import * as _17 from "./base/reflection/v2alpha1/reflection";
import * as _18 from "./base/snapshots/v1beta1/snapshot";
import * as _19 from "./base/store/v1beta1/commit_info";
import * as _20 from "./base/store/v1beta1/listening";
import * as _21 from "./base/tendermint/v1beta1/query";
import * as _22 from "./base/v1beta1/coin";
import * as _23 from "./capability/v1beta1/capability";
import * as _24 from "./capability/v1beta1/genesis";
import * as _25 from "./crisis/v1beta1/genesis";
import * as _26 from "./crisis/v1beta1/tx";
import * as _27 from "./crypto/ed25519/keys";
import * as _28 from "./crypto/hd/v1/hd";
import * as _29 from "./crypto/keyring/v1/record";
import * as _30 from "./crypto/multisig/keys";
import * as _31 from "./crypto/secp256k1/keys";
import * as _32 from "./crypto/secp256r1/keys";
import * as _33 from "./distribution/v1beta1/distribution";
import * as _34 from "./distribution/v1beta1/genesis";
import * as _35 from "./distribution/v1beta1/query";
import * as _36 from "./distribution/v1beta1/tx";
import * as _37 from "./evidence/v1beta1/evidence";
import * as _38 from "./evidence/v1beta1/genesis";
import * as _39 from "./evidence/v1beta1/query";
import * as _40 from "./evidence/v1beta1/tx";
import * as _41 from "./feegrant/v1beta1/feegrant";
import * as _42 from "./feegrant/v1beta1/genesis";
import * as _43 from "./feegrant/v1beta1/query";
import * as _44 from "./feegrant/v1beta1/tx";
import * as _45 from "./genutil/v1beta1/genesis";
import * as _46 from "./gov/v1/genesis";
import * as _47 from "./gov/v1/gov";
import * as _48 from "./gov/v1/query";
import * as _49 from "./gov/v1/tx";
import * as _50 from "./gov/v1beta1/genesis";
import * as _51 from "./gov/v1beta1/gov";
import * as _52 from "./gov/v1beta1/query";
import * as _53 from "./gov/v1beta1/tx";
import * as _54 from "./mint/v1beta1/genesis";
import * as _55 from "./mint/v1beta1/mint";
import * as _56 from "./mint/v1beta1/query";
import * as _58 from "./orm/v1/orm";
import * as _59 from "./orm/v1alpha1/schema";
import * as _60 from "./params/v1beta1/params";
import * as _61 from "./params/v1beta1/query";
import * as _62 from "./slashing/v1beta1/genesis";
import * as _63 from "./slashing/v1beta1/query";
import * as _64 from "./slashing/v1beta1/slashing";
import * as _65 from "./slashing/v1beta1/tx";
import * as _66 from "./staking/v1beta1/authz";
import * as _67 from "./staking/v1beta1/genesis";
import * as _68 from "./staking/v1beta1/query";
import * as _69 from "./staking/v1beta1/staking";
import * as _70 from "./staking/v1beta1/tx";
import * as _71 from "./tx/signing/v1beta1/signing";
import * as _72 from "./tx/v1beta1/service";
import * as _73 from "./tx/v1beta1/tx";
import * as _74 from "./upgrade/v1beta1/query";
import * as _75 from "./upgrade/v1beta1/tx";
import * as _76 from "./upgrade/v1beta1/upgrade";
import * as _77 from "./vesting/v1beta1/tx";
import * as _78 from "./vesting/v1beta1/vesting";
import * as _152 from "./app/v1alpha1/query.rpc.Query";
import * as _153 from "./auth/v1beta1/query.rpc.Query";
import * as _154 from "./bank/v1beta1/query.rpc.Query";
import * as _155 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _156 from "./distribution/v1beta1/query.rpc.Query";
import * as _157 from "./evidence/v1beta1/query.rpc.Query";
import * as _158 from "./feegrant/v1beta1/query.rpc.Query";
import * as _159 from "./gov/v1/query.rpc.Query";
import * as _160 from "./gov/v1beta1/query.rpc.Query";
import * as _161 from "./mint/v1beta1/query.rpc.Query";
import * as _162 from "./params/v1beta1/query.rpc.Query";
import * as _163 from "./slashing/v1beta1/query.rpc.Query";
import * as _164 from "./staking/v1beta1/query.rpc.Query";
import * as _165 from "./tx/v1beta1/service.rpc.Service";
import * as _166 from "./upgrade/v1beta1/query.rpc.Query";
import * as _167 from "./bank/v1beta1/tx.rpc.msg";
import * as _168 from "./crisis/v1beta1/tx.rpc.msg";
import * as _169 from "./distribution/v1beta1/tx.rpc.msg";
import * as _170 from "./evidence/v1beta1/tx.rpc.msg";
import * as _171 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _172 from "./gov/v1/tx.rpc.msg";
import * as _173 from "./gov/v1beta1/tx.rpc.msg";
import * as _174 from "./slashing/v1beta1/tx.rpc.msg";
import * as _175 from "./staking/v1beta1/tx.rpc.msg";
import * as _176 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _177 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        const v1alpha1: {
            QueryClientImpl: typeof _152.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _4.QueryConfigRequest): Promise<_4.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _4.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryConfigRequest;
                fromJSON(_: any): _4.QueryConfigRequest;
                toJSON(_: _4.QueryConfigRequest): unknown;
                fromPartial(_: Partial<_4.QueryConfigRequest>): _4.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _4.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryConfigResponse;
                fromJSON(object: any): _4.QueryConfigResponse;
                toJSON(message: _4.QueryConfigResponse): unknown;
                fromPartial(object: Partial<_4.QueryConfigResponse>): _4.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _3.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.ModuleDescriptor;
                fromJSON(object: any): _3.ModuleDescriptor;
                toJSON(message: _3.ModuleDescriptor): unknown;
                fromPartial(object: Partial<_3.ModuleDescriptor>): _3.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _3.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.PackageReference;
                fromJSON(object: any): _3.PackageReference;
                toJSON(message: _3.PackageReference): unknown;
                fromPartial(object: Partial<_3.PackageReference>): _3.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _3.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MigrateFromInfo;
                fromJSON(object: any): _3.MigrateFromInfo;
                toJSON(message: _3.MigrateFromInfo): unknown;
                fromPartial(object: Partial<_3.MigrateFromInfo>): _3.MigrateFromInfo;
            };
            Config: {
                encode(message: _2.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Config;
                fromJSON(object: any): _2.Config;
                toJSON(message: _2.Config): unknown;
                fromPartial(object: Partial<_2.Config>): _2.Config;
            };
            ModuleConfig: {
                encode(message: _2.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.ModuleConfig;
                fromJSON(object: any): _2.ModuleConfig;
                toJSON(message: _2.ModuleConfig): unknown;
                fromPartial(object: Partial<_2.ModuleConfig>): _2.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _153.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _7.QueryAccountsRequest): Promise<_7.QueryAccountsResponse>;
                account(request: _7.QueryAccountRequest): Promise<_7.QueryAccountResponse>;
                params(request?: _7.QueryParamsRequest): Promise<_7.QueryParamsResponse>;
                moduleAccounts(request?: _7.QueryModuleAccountsRequest): Promise<_7.QueryModuleAccountsResponse>;
                bech32Prefix(request?: _7.Bech32PrefixRequest): Promise<_7.Bech32PrefixResponse>;
                addressBytesToString(request: _7.AddressBytesToStringRequest): Promise<_7.AddressBytesToStringResponse>;
                addressStringToBytes(request: _7.AddressStringToBytesRequest): Promise<_7.AddressStringToBytesResponse>;
            };
            QueryAccountsRequest: {
                encode(message: _7.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountsRequest;
                fromJSON(object: any): _7.QueryAccountsRequest;
                toJSON(message: _7.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_7.QueryAccountsRequest>): _7.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _7.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountsResponse;
                fromJSON(object: any): _7.QueryAccountsResponse;
                toJSON(message: _7.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_7.QueryAccountsResponse>): _7.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _7.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountRequest;
                fromJSON(object: any): _7.QueryAccountRequest;
                toJSON(message: _7.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_7.QueryAccountRequest>): _7.QueryAccountRequest;
            };
            QueryModuleAccountsRequest: {
                encode(_: _7.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryModuleAccountsRequest;
                fromJSON(_: any): _7.QueryModuleAccountsRequest;
                toJSON(_: _7.QueryModuleAccountsRequest): unknown;
                fromPartial(_: Partial<_7.QueryModuleAccountsRequest>): _7.QueryModuleAccountsRequest;
            };
            QueryParamsResponse: {
                encode(message: _7.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryParamsResponse;
                fromJSON(object: any): _7.QueryParamsResponse;
                toJSON(message: _7.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_7.QueryParamsResponse>): _7.QueryParamsResponse;
            };
            QueryAccountResponse: {
                encode(message: _7.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountResponse;
                fromJSON(object: any): _7.QueryAccountResponse;
                toJSON(message: _7.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_7.QueryAccountResponse>): _7.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _7.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryParamsRequest;
                fromJSON(_: any): _7.QueryParamsRequest;
                toJSON(_: _7.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_7.QueryParamsRequest>): _7.QueryParamsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _7.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryModuleAccountsResponse;
                fromJSON(object: any): _7.QueryModuleAccountsResponse;
                toJSON(message: _7.QueryModuleAccountsResponse): unknown;
                fromPartial(object: Partial<_7.QueryModuleAccountsResponse>): _7.QueryModuleAccountsResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _7.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Bech32PrefixRequest;
                fromJSON(_: any): _7.Bech32PrefixRequest;
                toJSON(_: _7.Bech32PrefixRequest): unknown;
                fromPartial(_: Partial<_7.Bech32PrefixRequest>): _7.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _7.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Bech32PrefixResponse;
                fromJSON(object: any): _7.Bech32PrefixResponse;
                toJSON(message: _7.Bech32PrefixResponse): unknown;
                fromPartial(object: Partial<_7.Bech32PrefixResponse>): _7.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _7.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressBytesToStringRequest;
                fromJSON(object: any): _7.AddressBytesToStringRequest;
                toJSON(message: _7.AddressBytesToStringRequest): unknown;
                fromPartial(object: Partial<_7.AddressBytesToStringRequest>): _7.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _7.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressBytesToStringResponse;
                fromJSON(object: any): _7.AddressBytesToStringResponse;
                toJSON(message: _7.AddressBytesToStringResponse): unknown;
                fromPartial(object: Partial<_7.AddressBytesToStringResponse>): _7.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _7.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressStringToBytesRequest;
                fromJSON(object: any): _7.AddressStringToBytesRequest;
                toJSON(message: _7.AddressStringToBytesRequest): unknown;
                fromPartial(object: Partial<_7.AddressStringToBytesRequest>): _7.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _7.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressStringToBytesResponse;
                fromJSON(object: any): _7.AddressStringToBytesResponse;
                toJSON(message: _7.AddressStringToBytesResponse): unknown;
                fromPartial(object: Partial<_7.AddressStringToBytesResponse>): _7.AddressStringToBytesResponse;
            };
            GenesisState: {
                encode(message: _6.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.GenesisState;
                fromJSON(object: any): _6.GenesisState;
                toJSON(message: _6.GenesisState): unknown;
                fromPartial(object: Partial<_6.GenesisState>): _6.GenesisState;
            };
            BaseAccount: {
                encode(message: _5.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.BaseAccount;
                fromJSON(object: any): _5.BaseAccount;
                toJSON(message: _5.BaseAccount): unknown;
                fromPartial(object: Partial<_5.BaseAccount>): _5.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _5.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.ModuleAccount;
                fromJSON(object: any): _5.ModuleAccount;
                toJSON(message: _5.ModuleAccount): unknown;
                fromPartial(object: Partial<_5.ModuleAccount>): _5.ModuleAccount;
            };
            Params: {
                encode(message: _5.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Params;
                fromJSON(object: any): _5.Params;
                toJSON(message: _5.Params): unknown;
                fromPartial(object: Partial<_5.Params>): _5.Params;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _167.MsgClientImpl;
            QueryClientImpl: typeof _154.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _11.QueryBalanceRequest): Promise<_11.QueryBalanceResponse>;
                allBalances(request: _11.QueryAllBalancesRequest): Promise<_11.QueryAllBalancesResponse>;
                spendableBalances(request: _11.QuerySpendableBalancesRequest): Promise<_11.QuerySpendableBalancesResponse>;
                totalSupply(request?: _11.QueryTotalSupplyRequest): Promise<_11.QueryTotalSupplyResponse>;
                supplyOf(request: _11.QuerySupplyOfRequest): Promise<_11.QuerySupplyOfResponse>;
                params(request?: _11.QueryParamsRequest): Promise<_11.QueryParamsResponse>;
                denomMetadata(request: _11.QueryDenomMetadataRequest): Promise<_11.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _11.QueryDenomsMetadataRequest): Promise<_11.QueryDenomsMetadataResponse>;
                denomOwners(request: _11.QueryDenomOwnersRequest): Promise<_11.QueryDenomOwnersResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _12.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _12.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _12.MsgSend): {
                        typeUrl: string;
                        value: _12.MsgSend;
                    };
                    multiSend(value: _12.MsgMultiSend): {
                        typeUrl: string;
                        value: _12.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _12.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _12.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _12.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _12.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _12.MsgSend): {
                        typeUrl: string;
                        value: _12.MsgSend;
                    };
                    multiSend(value: _12.MsgMultiSend): {
                        typeUrl: string;
                        value: _12.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _12.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _12.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _12.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _12.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _12.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgSend;
                fromJSON(object: any): _12.MsgSend;
                toJSON(message: _12.MsgSend): unknown;
                fromPartial(object: Partial<_12.MsgSend>): _12.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _12.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgSendResponse;
                fromJSON(_: any): _12.MsgSendResponse;
                toJSON(_: _12.MsgSendResponse): unknown;
                fromPartial(_: Partial<_12.MsgSendResponse>): _12.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _12.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgMultiSend;
                fromJSON(object: any): _12.MsgMultiSend;
                toJSON(message: _12.MsgMultiSend): unknown;
                fromPartial(object: Partial<_12.MsgMultiSend>): _12.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _12.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgMultiSendResponse;
                fromJSON(_: any): _12.MsgMultiSendResponse;
                toJSON(_: _12.MsgMultiSendResponse): unknown;
                fromPartial(_: Partial<_12.MsgMultiSendResponse>): _12.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _11.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryBalanceRequest;
                fromJSON(object: any): _11.QueryBalanceRequest;
                toJSON(message: _11.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_11.QueryBalanceRequest>): _11.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _11.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryBalanceResponse;
                fromJSON(object: any): _11.QueryBalanceResponse;
                toJSON(message: _11.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_11.QueryBalanceResponse>): _11.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _11.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryAllBalancesRequest;
                fromJSON(object: any): _11.QueryAllBalancesRequest;
                toJSON(message: _11.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_11.QueryAllBalancesRequest>): _11.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _11.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryAllBalancesResponse;
                fromJSON(object: any): _11.QueryAllBalancesResponse;
                toJSON(message: _11.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_11.QueryAllBalancesResponse>): _11.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _11.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QuerySpendableBalancesRequest;
                fromJSON(object: any): _11.QuerySpendableBalancesRequest;
                toJSON(message: _11.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: Partial<_11.QuerySpendableBalancesRequest>): _11.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _11.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QuerySpendableBalancesResponse;
                fromJSON(object: any): _11.QuerySpendableBalancesResponse;
                toJSON(message: _11.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: Partial<_11.QuerySpendableBalancesResponse>): _11.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _11.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryTotalSupplyRequest;
                fromJSON(object: any): _11.QueryTotalSupplyRequest;
                toJSON(message: _11.QueryTotalSupplyRequest): unknown;
                fromPartial(object: Partial<_11.QueryTotalSupplyRequest>): _11.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _11.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryTotalSupplyResponse;
                fromJSON(object: any): _11.QueryTotalSupplyResponse;
                toJSON(message: _11.QueryTotalSupplyResponse): unknown;
                fromPartial(object: Partial<_11.QueryTotalSupplyResponse>): _11.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _11.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QuerySupplyOfRequest;
                fromJSON(object: any): _11.QuerySupplyOfRequest;
                toJSON(message: _11.QuerySupplyOfRequest): unknown;
                fromPartial(object: Partial<_11.QuerySupplyOfRequest>): _11.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _11.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QuerySupplyOfResponse;
                fromJSON(object: any): _11.QuerySupplyOfResponse;
                toJSON(message: _11.QuerySupplyOfResponse): unknown;
                fromPartial(object: Partial<_11.QuerySupplyOfResponse>): _11.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _11.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryParamsRequest;
                fromJSON(_: any): _11.QueryParamsRequest;
                toJSON(_: _11.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_11.QueryParamsRequest>): _11.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _11.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryParamsResponse;
                fromJSON(object: any): _11.QueryParamsResponse;
                toJSON(message: _11.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_11.QueryParamsResponse>): _11.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _11.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryDenomsMetadataRequest;
                fromJSON(object: any): _11.QueryDenomsMetadataRequest;
                toJSON(message: _11.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: Partial<_11.QueryDenomsMetadataRequest>): _11.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _11.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryDenomsMetadataResponse;
                fromJSON(object: any): _11.QueryDenomsMetadataResponse;
                toJSON(message: _11.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: Partial<_11.QueryDenomsMetadataResponse>): _11.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _11.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryDenomMetadataRequest;
                fromJSON(object: any): _11.QueryDenomMetadataRequest;
                toJSON(message: _11.QueryDenomMetadataRequest): unknown;
                fromPartial(object: Partial<_11.QueryDenomMetadataRequest>): _11.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _11.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryDenomMetadataResponse;
                fromJSON(object: any): _11.QueryDenomMetadataResponse;
                toJSON(message: _11.QueryDenomMetadataResponse): unknown;
                fromPartial(object: Partial<_11.QueryDenomMetadataResponse>): _11.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _11.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryDenomOwnersRequest;
                fromJSON(object: any): _11.QueryDenomOwnersRequest;
                toJSON(message: _11.QueryDenomOwnersRequest): unknown;
                fromPartial(object: Partial<_11.QueryDenomOwnersRequest>): _11.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _11.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.DenomOwner;
                fromJSON(object: any): _11.DenomOwner;
                toJSON(message: _11.DenomOwner): unknown;
                fromPartial(object: Partial<_11.DenomOwner>): _11.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _11.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryDenomOwnersResponse;
                fromJSON(object: any): _11.QueryDenomOwnersResponse;
                toJSON(message: _11.QueryDenomOwnersResponse): unknown;
                fromPartial(object: Partial<_11.QueryDenomOwnersResponse>): _11.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _10.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.GenesisState;
                fromJSON(object: any): _10.GenesisState;
                toJSON(message: _10.GenesisState): unknown;
                fromPartial(object: Partial<_10.GenesisState>): _10.GenesisState;
            };
            Balance: {
                encode(message: _10.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Balance;
                fromJSON(object: any): _10.Balance;
                toJSON(message: _10.Balance): unknown;
                fromPartial(object: Partial<_10.Balance>): _10.Balance;
            };
            Params: {
                encode(message: _9.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Params;
                fromJSON(object: any): _9.Params;
                toJSON(message: _9.Params): unknown;
                fromPartial(object: Partial<_9.Params>): _9.Params;
            };
            SendEnabled: {
                encode(message: _9.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.SendEnabled;
                fromJSON(object: any): _9.SendEnabled;
                toJSON(message: _9.SendEnabled): unknown;
                fromPartial(object: Partial<_9.SendEnabled>): _9.SendEnabled;
            };
            Input: {
                encode(message: _9.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Input;
                fromJSON(object: any): _9.Input;
                toJSON(message: _9.Input): unknown;
                fromPartial(object: Partial<_9.Input>): _9.Input;
            };
            Output: {
                encode(message: _9.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Output;
                fromJSON(object: any): _9.Output;
                toJSON(message: _9.Output): unknown;
                fromPartial(object: Partial<_9.Output>): _9.Output;
            };
            Supply: {
                encode(message: _9.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Supply;
                fromJSON(object: any): _9.Supply;
                toJSON(message: _9.Supply): unknown;
                fromPartial(object: Partial<_9.Supply>): _9.Supply;
            };
            DenomUnit: {
                encode(message: _9.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.DenomUnit;
                fromJSON(object: any): _9.DenomUnit;
                toJSON(message: _9.DenomUnit): unknown;
                fromPartial(object: Partial<_9.DenomUnit>): _9.DenomUnit;
            };
            Metadata: {
                encode(message: _9.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Metadata;
                fromJSON(object: any): _9.Metadata;
                toJSON(message: _9.Metadata): unknown;
                fromPartial(object: Partial<_9.Metadata>): _9.Metadata;
            };
            SendAuthorization: {
                encode(message: _8.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.SendAuthorization;
                fromJSON(object: any): _8.SendAuthorization;
                toJSON(message: _8.SendAuthorization): unknown;
                fromPartial(object: Partial<_8.SendAuthorization>): _8.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _13.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.TxResponse;
                    fromJSON(object: any): _13.TxResponse;
                    toJSON(message: _13.TxResponse): unknown;
                    fromPartial(object: Partial<_13.TxResponse>): _13.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _13.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.ABCIMessageLog;
                    fromJSON(object: any): _13.ABCIMessageLog;
                    toJSON(message: _13.ABCIMessageLog): unknown;
                    fromPartial(object: Partial<_13.ABCIMessageLog>): _13.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _13.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.StringEvent;
                    fromJSON(object: any): _13.StringEvent;
                    toJSON(message: _13.StringEvent): unknown;
                    fromPartial(object: Partial<_13.StringEvent>): _13.StringEvent;
                };
                Attribute: {
                    encode(message: _13.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Attribute;
                    fromJSON(object: any): _13.Attribute;
                    toJSON(message: _13.Attribute): unknown;
                    fromPartial(object: Partial<_13.Attribute>): _13.Attribute;
                };
                GasInfo: {
                    encode(message: _13.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.GasInfo;
                    fromJSON(object: any): _13.GasInfo;
                    toJSON(message: _13.GasInfo): unknown;
                    fromPartial(object: Partial<_13.GasInfo>): _13.GasInfo;
                };
                Result: {
                    encode(message: _13.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Result;
                    fromJSON(object: any): _13.Result;
                    toJSON(message: _13.Result): unknown;
                    fromPartial(object: Partial<_13.Result>): _13.Result;
                };
                SimulationResponse: {
                    encode(message: _13.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.SimulationResponse;
                    fromJSON(object: any): _13.SimulationResponse;
                    toJSON(message: _13.SimulationResponse): unknown;
                    fromPartial(object: Partial<_13.SimulationResponse>): _13.SimulationResponse;
                };
                MsgData: {
                    encode(message: _13.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgData;
                    fromJSON(object: any): _13.MsgData;
                    toJSON(message: _13.MsgData): unknown;
                    fromPartial(object: Partial<_13.MsgData>): _13.MsgData;
                };
                TxMsgData: {
                    encode(message: _13.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.TxMsgData;
                    fromJSON(object: any): _13.TxMsgData;
                    toJSON(message: _13.TxMsgData): unknown;
                    fromPartial(object: Partial<_13.TxMsgData>): _13.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _13.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.SearchTxsResult;
                    fromJSON(object: any): _13.SearchTxsResult;
                    toJSON(message: _13.SearchTxsResult): unknown;
                    fromPartial(object: Partial<_13.SearchTxsResult>): _13.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _14.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Pairs;
                    fromJSON(object: any): _14.Pairs;
                    toJSON(message: _14.Pairs): unknown;
                    fromPartial(object: Partial<_14.Pairs>): _14.Pairs;
                };
                Pair: {
                    encode(message: _14.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Pair;
                    fromJSON(object: any): _14.Pair;
                    toJSON(message: _14.Pair): unknown;
                    fromPartial(object: Partial<_14.Pair>): _14.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _15.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.PageRequest;
                    fromJSON(object: any): _15.PageRequest;
                    toJSON(message: _15.PageRequest): unknown;
                    fromPartial(object: Partial<_15.PageRequest>): _15.PageRequest;
                };
                PageResponse: {
                    encode(message: _15.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.PageResponse;
                    fromJSON(object: any): _15.PageResponse;
                    toJSON(message: _15.PageResponse): unknown;
                    fromPartial(object: Partial<_15.PageResponse>): _15.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _16.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ListAllInterfacesRequest;
                    fromJSON(_: any): _16.ListAllInterfacesRequest;
                    toJSON(_: _16.ListAllInterfacesRequest): unknown;
                    fromPartial(_: Partial<_16.ListAllInterfacesRequest>): _16.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _16.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ListAllInterfacesResponse;
                    fromJSON(object: any): _16.ListAllInterfacesResponse;
                    toJSON(message: _16.ListAllInterfacesResponse): unknown;
                    fromPartial(object: Partial<_16.ListAllInterfacesResponse>): _16.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _16.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ListImplementationsRequest;
                    fromJSON(object: any): _16.ListImplementationsRequest;
                    toJSON(message: _16.ListImplementationsRequest): unknown;
                    fromPartial(object: Partial<_16.ListImplementationsRequest>): _16.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _16.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ListImplementationsResponse;
                    fromJSON(object: any): _16.ListImplementationsResponse;
                    toJSON(message: _16.ListImplementationsResponse): unknown;
                    fromPartial(object: Partial<_16.ListImplementationsResponse>): _16.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _17.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.AppDescriptor;
                    fromJSON(object: any): _17.AppDescriptor;
                    toJSON(message: _17.AppDescriptor): unknown;
                    fromPartial(object: Partial<_17.AppDescriptor>): _17.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _17.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.TxDescriptor;
                    fromJSON(object: any): _17.TxDescriptor;
                    toJSON(message: _17.TxDescriptor): unknown;
                    fromPartial(object: Partial<_17.TxDescriptor>): _17.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _17.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.AuthnDescriptor;
                    fromJSON(object: any): _17.AuthnDescriptor;
                    toJSON(message: _17.AuthnDescriptor): unknown;
                    fromPartial(object: Partial<_17.AuthnDescriptor>): _17.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _17.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.SigningModeDescriptor;
                    fromJSON(object: any): _17.SigningModeDescriptor;
                    toJSON(message: _17.SigningModeDescriptor): unknown;
                    fromPartial(object: Partial<_17.SigningModeDescriptor>): _17.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _17.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ChainDescriptor;
                    fromJSON(object: any): _17.ChainDescriptor;
                    toJSON(message: _17.ChainDescriptor): unknown;
                    fromPartial(object: Partial<_17.ChainDescriptor>): _17.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _17.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.CodecDescriptor;
                    fromJSON(object: any): _17.CodecDescriptor;
                    toJSON(message: _17.CodecDescriptor): unknown;
                    fromPartial(object: Partial<_17.CodecDescriptor>): _17.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _17.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.InterfaceDescriptor;
                    fromJSON(object: any): _17.InterfaceDescriptor;
                    toJSON(message: _17.InterfaceDescriptor): unknown;
                    fromPartial(object: Partial<_17.InterfaceDescriptor>): _17.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _17.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _17.InterfaceImplementerDescriptor;
                    toJSON(message: _17.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: Partial<_17.InterfaceImplementerDescriptor>): _17.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _17.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _17.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _17.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: Partial<_17.InterfaceAcceptingMessageDescriptor>): _17.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _17.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ConfigurationDescriptor;
                    fromJSON(object: any): _17.ConfigurationDescriptor;
                    toJSON(message: _17.ConfigurationDescriptor): unknown;
                    fromPartial(object: Partial<_17.ConfigurationDescriptor>): _17.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _17.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgDescriptor;
                    fromJSON(object: any): _17.MsgDescriptor;
                    toJSON(message: _17.MsgDescriptor): unknown;
                    fromPartial(object: Partial<_17.MsgDescriptor>): _17.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _17.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _17.GetAuthnDescriptorRequest;
                    toJSON(_: _17.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: Partial<_17.GetAuthnDescriptorRequest>): _17.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _17.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _17.GetAuthnDescriptorResponse;
                    toJSON(message: _17.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: Partial<_17.GetAuthnDescriptorResponse>): _17.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _17.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetChainDescriptorRequest;
                    fromJSON(_: any): _17.GetChainDescriptorRequest;
                    toJSON(_: _17.GetChainDescriptorRequest): unknown;
                    fromPartial(_: Partial<_17.GetChainDescriptorRequest>): _17.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _17.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetChainDescriptorResponse;
                    fromJSON(object: any): _17.GetChainDescriptorResponse;
                    toJSON(message: _17.GetChainDescriptorResponse): unknown;
                    fromPartial(object: Partial<_17.GetChainDescriptorResponse>): _17.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _17.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetCodecDescriptorRequest;
                    fromJSON(_: any): _17.GetCodecDescriptorRequest;
                    toJSON(_: _17.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: Partial<_17.GetCodecDescriptorRequest>): _17.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _17.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetCodecDescriptorResponse;
                    fromJSON(object: any): _17.GetCodecDescriptorResponse;
                    toJSON(message: _17.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: Partial<_17.GetCodecDescriptorResponse>): _17.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _17.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _17.GetConfigurationDescriptorRequest;
                    toJSON(_: _17.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: Partial<_17.GetConfigurationDescriptorRequest>): _17.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _17.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _17.GetConfigurationDescriptorResponse;
                    toJSON(message: _17.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: Partial<_17.GetConfigurationDescriptorResponse>): _17.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _17.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _17.GetQueryServicesDescriptorRequest;
                    toJSON(_: _17.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: Partial<_17.GetQueryServicesDescriptorRequest>): _17.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _17.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _17.GetQueryServicesDescriptorResponse;
                    toJSON(message: _17.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: Partial<_17.GetQueryServicesDescriptorResponse>): _17.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _17.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetTxDescriptorRequest;
                    fromJSON(_: any): _17.GetTxDescriptorRequest;
                    toJSON(_: _17.GetTxDescriptorRequest): unknown;
                    fromPartial(_: Partial<_17.GetTxDescriptorRequest>): _17.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _17.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetTxDescriptorResponse;
                    fromJSON(object: any): _17.GetTxDescriptorResponse;
                    toJSON(message: _17.GetTxDescriptorResponse): unknown;
                    fromPartial(object: Partial<_17.GetTxDescriptorResponse>): _17.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _17.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryServicesDescriptor;
                    fromJSON(object: any): _17.QueryServicesDescriptor;
                    toJSON(message: _17.QueryServicesDescriptor): unknown;
                    fromPartial(object: Partial<_17.QueryServicesDescriptor>): _17.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _17.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryServiceDescriptor;
                    fromJSON(object: any): _17.QueryServiceDescriptor;
                    toJSON(message: _17.QueryServiceDescriptor): unknown;
                    fromPartial(object: Partial<_17.QueryServiceDescriptor>): _17.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _17.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryMethodDescriptor;
                    fromJSON(object: any): _17.QueryMethodDescriptor;
                    toJSON(message: _17.QueryMethodDescriptor): unknown;
                    fromPartial(object: Partial<_17.QueryMethodDescriptor>): _17.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _18.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Snapshot;
                    fromJSON(object: any): _18.Snapshot;
                    toJSON(message: _18.Snapshot): unknown;
                    fromPartial(object: Partial<_18.Snapshot>): _18.Snapshot;
                };
                Metadata: {
                    encode(message: _18.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Metadata;
                    fromJSON(object: any): _18.Metadata;
                    toJSON(message: _18.Metadata): unknown;
                    fromPartial(object: Partial<_18.Metadata>): _18.Metadata;
                };
                SnapshotItem: {
                    encode(message: _18.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.SnapshotItem;
                    fromJSON(object: any): _18.SnapshotItem;
                    toJSON(message: _18.SnapshotItem): unknown;
                    fromPartial(object: Partial<_18.SnapshotItem>): _18.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _18.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.SnapshotStoreItem;
                    fromJSON(object: any): _18.SnapshotStoreItem;
                    toJSON(message: _18.SnapshotStoreItem): unknown;
                    fromPartial(object: Partial<_18.SnapshotStoreItem>): _18.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _18.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.SnapshotIAVLItem;
                    fromJSON(object: any): _18.SnapshotIAVLItem;
                    toJSON(message: _18.SnapshotIAVLItem): unknown;
                    fromPartial(object: Partial<_18.SnapshotIAVLItem>): _18.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _18.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.SnapshotExtensionMeta;
                    fromJSON(object: any): _18.SnapshotExtensionMeta;
                    toJSON(message: _18.SnapshotExtensionMeta): unknown;
                    fromPartial(object: Partial<_18.SnapshotExtensionMeta>): _18.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _18.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.SnapshotExtensionPayload;
                    fromJSON(object: any): _18.SnapshotExtensionPayload;
                    toJSON(message: _18.SnapshotExtensionPayload): unknown;
                    fromPartial(object: Partial<_18.SnapshotExtensionPayload>): _18.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _18.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.SnapshotKVItem;
                    fromJSON(object: any): _18.SnapshotKVItem;
                    toJSON(message: _18.SnapshotKVItem): unknown;
                    fromPartial(object: Partial<_18.SnapshotKVItem>): _18.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _18.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.SnapshotSchema;
                    fromJSON(object: any): _18.SnapshotSchema;
                    toJSON(message: _18.SnapshotSchema): unknown;
                    fromPartial(object: Partial<_18.SnapshotSchema>): _18.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _20.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.StoreKVPair;
                    fromJSON(object: any): _20.StoreKVPair;
                    toJSON(message: _20.StoreKVPair): unknown;
                    fromPartial(object: Partial<_20.StoreKVPair>): _20.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _19.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.CommitInfo;
                    fromJSON(object: any): _19.CommitInfo;
                    toJSON(message: _19.CommitInfo): unknown;
                    fromPartial(object: Partial<_19.CommitInfo>): _19.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _19.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.StoreInfo;
                    fromJSON(object: any): _19.StoreInfo;
                    toJSON(message: _19.StoreInfo): unknown;
                    fromPartial(object: Partial<_19.StoreInfo>): _19.StoreInfo;
                };
                CommitID: {
                    encode(message: _19.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.CommitID;
                    fromJSON(object: any): _19.CommitID;
                    toJSON(message: _19.CommitID): unknown;
                    fromPartial(object: Partial<_19.CommitID>): _19.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _155.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _21.GetNodeInfoRequest): Promise<_21.GetNodeInfoResponse>;
                    getSyncing(request?: _21.GetSyncingRequest): Promise<_21.GetSyncingResponse>;
                    getLatestBlock(request?: _21.GetLatestBlockRequest): Promise<_21.GetLatestBlockResponse>;
                    getBlockByHeight(request: _21.GetBlockByHeightRequest): Promise<_21.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _21.GetLatestValidatorSetRequest): Promise<_21.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _21.GetValidatorSetByHeightRequest): Promise<_21.GetValidatorSetByHeightResponse>;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _21.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _21.GetValidatorSetByHeightRequest;
                    toJSON(message: _21.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: Partial<_21.GetValidatorSetByHeightRequest>): _21.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _21.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _21.GetValidatorSetByHeightResponse;
                    toJSON(message: _21.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: Partial<_21.GetValidatorSetByHeightResponse>): _21.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _21.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _21.GetLatestValidatorSetRequest;
                    toJSON(message: _21.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: Partial<_21.GetLatestValidatorSetRequest>): _21.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _21.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _21.GetLatestValidatorSetResponse;
                    toJSON(message: _21.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: Partial<_21.GetLatestValidatorSetResponse>): _21.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _21.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Validator;
                    fromJSON(object: any): _21.Validator;
                    toJSON(message: _21.Validator): unknown;
                    fromPartial(object: Partial<_21.Validator>): _21.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _21.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetBlockByHeightRequest;
                    fromJSON(object: any): _21.GetBlockByHeightRequest;
                    toJSON(message: _21.GetBlockByHeightRequest): unknown;
                    fromPartial(object: Partial<_21.GetBlockByHeightRequest>): _21.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _21.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetBlockByHeightResponse;
                    fromJSON(object: any): _21.GetBlockByHeightResponse;
                    toJSON(message: _21.GetBlockByHeightResponse): unknown;
                    fromPartial(object: Partial<_21.GetBlockByHeightResponse>): _21.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _21.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetLatestBlockRequest;
                    fromJSON(_: any): _21.GetLatestBlockRequest;
                    toJSON(_: _21.GetLatestBlockRequest): unknown;
                    fromPartial(_: Partial<_21.GetLatestBlockRequest>): _21.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _21.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetLatestBlockResponse;
                    fromJSON(object: any): _21.GetLatestBlockResponse;
                    toJSON(message: _21.GetLatestBlockResponse): unknown;
                    fromPartial(object: Partial<_21.GetLatestBlockResponse>): _21.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _21.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetSyncingRequest;
                    fromJSON(_: any): _21.GetSyncingRequest;
                    toJSON(_: _21.GetSyncingRequest): unknown;
                    fromPartial(_: Partial<_21.GetSyncingRequest>): _21.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _21.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetSyncingResponse;
                    fromJSON(object: any): _21.GetSyncingResponse;
                    toJSON(message: _21.GetSyncingResponse): unknown;
                    fromPartial(object: Partial<_21.GetSyncingResponse>): _21.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _21.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetNodeInfoRequest;
                    fromJSON(_: any): _21.GetNodeInfoRequest;
                    toJSON(_: _21.GetNodeInfoRequest): unknown;
                    fromPartial(_: Partial<_21.GetNodeInfoRequest>): _21.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _21.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetNodeInfoResponse;
                    fromJSON(object: any): _21.GetNodeInfoResponse;
                    toJSON(message: _21.GetNodeInfoResponse): unknown;
                    fromPartial(object: Partial<_21.GetNodeInfoResponse>): _21.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _21.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.VersionInfo;
                    fromJSON(object: any): _21.VersionInfo;
                    toJSON(message: _21.VersionInfo): unknown;
                    fromPartial(object: Partial<_21.VersionInfo>): _21.VersionInfo;
                };
                Module: {
                    encode(message: _21.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Module;
                    fromJSON(object: any): _21.Module;
                    toJSON(message: _21.Module): unknown;
                    fromPartial(object: Partial<_21.Module>): _21.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _22.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Coin;
                fromJSON(object: any): _22.Coin;
                toJSON(message: _22.Coin): unknown;
                fromPartial(object: Partial<_22.Coin>): _22.Coin;
            };
            DecCoin: {
                encode(message: _22.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.DecCoin;
                fromJSON(object: any): _22.DecCoin;
                toJSON(message: _22.DecCoin): unknown;
                fromPartial(object: Partial<_22.DecCoin>): _22.DecCoin;
            };
            IntProto: {
                encode(message: _22.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.IntProto;
                fromJSON(object: any): _22.IntProto;
                toJSON(message: _22.IntProto): unknown;
                fromPartial(object: Partial<_22.IntProto>): _22.IntProto;
            };
            DecProto: {
                encode(message: _22.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.DecProto;
                fromJSON(object: any): _22.DecProto;
                toJSON(message: _22.DecProto): unknown;
                fromPartial(object: Partial<_22.DecProto>): _22.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _24.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GenesisOwners;
                fromJSON(object: any): _24.GenesisOwners;
                toJSON(message: _24.GenesisOwners): unknown;
                fromPartial(object: Partial<_24.GenesisOwners>): _24.GenesisOwners;
            };
            GenesisState: {
                encode(message: _24.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GenesisState;
                fromJSON(object: any): _24.GenesisState;
                toJSON(message: _24.GenesisState): unknown;
                fromPartial(object: Partial<_24.GenesisState>): _24.GenesisState;
            };
            Capability: {
                encode(message: _23.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Capability;
                fromJSON(object: any): _23.Capability;
                toJSON(message: _23.Capability): unknown;
                fromPartial(object: Partial<_23.Capability>): _23.Capability;
            };
            Owner: {
                encode(message: _23.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Owner;
                fromJSON(object: any): _23.Owner;
                toJSON(message: _23.Owner): unknown;
                fromPartial(object: Partial<_23.Owner>): _23.Owner;
            };
            CapabilityOwners: {
                encode(message: _23.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.CapabilityOwners;
                fromJSON(object: any): _23.CapabilityOwners;
                toJSON(message: _23.CapabilityOwners): unknown;
                fromPartial(object: Partial<_23.CapabilityOwners>): _23.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _168.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _26.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _26.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _26.MsgVerifyInvariant;
                    };
                };
                toJSON: {
                    verifyInvariant(value: _26.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _26.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _26.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _26.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _26.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _26.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _26.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgVerifyInvariant;
                fromJSON(object: any): _26.MsgVerifyInvariant;
                toJSON(message: _26.MsgVerifyInvariant): unknown;
                fromPartial(object: Partial<_26.MsgVerifyInvariant>): _26.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _26.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgVerifyInvariantResponse;
                fromJSON(_: any): _26.MsgVerifyInvariantResponse;
                toJSON(_: _26.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: Partial<_26.MsgVerifyInvariantResponse>): _26.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _25.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GenesisState;
                fromJSON(object: any): _25.GenesisState;
                toJSON(message: _25.GenesisState): unknown;
                fromPartial(object: Partial<_25.GenesisState>): _25.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _27.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.PubKey;
                fromJSON(object: any): _27.PubKey;
                toJSON(message: _27.PubKey): unknown;
                fromPartial(object: Partial<_27.PubKey>): _27.PubKey;
            };
            PrivKey: {
                encode(message: _27.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.PrivKey;
                fromJSON(object: any): _27.PrivKey;
                toJSON(message: _27.PrivKey): unknown;
                fromPartial(object: Partial<_27.PrivKey>): _27.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _28.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.BIP44Params;
                    fromJSON(object: any): _28.BIP44Params;
                    toJSON(message: _28.BIP44Params): unknown;
                    fromPartial(object: Partial<_28.BIP44Params>): _28.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _29.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Record;
                    fromJSON(object: any): _29.Record;
                    toJSON(message: _29.Record): unknown;
                    fromPartial(object: Partial<_29.Record>): _29.Record;
                };
                Record_Local: {
                    encode(message: _29.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Record_Local;
                    fromJSON(object: any): _29.Record_Local;
                    toJSON(message: _29.Record_Local): unknown;
                    fromPartial(object: Partial<_29.Record_Local>): _29.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _29.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Record_Ledger;
                    fromJSON(object: any): _29.Record_Ledger;
                    toJSON(message: _29.Record_Ledger): unknown;
                    fromPartial(object: Partial<_29.Record_Ledger>): _29.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _29.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Record_Multi;
                    fromJSON(_: any): _29.Record_Multi;
                    toJSON(_: _29.Record_Multi): unknown;
                    fromPartial(_: Partial<_29.Record_Multi>): _29.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _29.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Record_Offline;
                    fromJSON(_: any): _29.Record_Offline;
                    toJSON(_: _29.Record_Offline): unknown;
                    fromPartial(_: Partial<_29.Record_Offline>): _29.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _30.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.LegacyAminoPubKey;
                fromJSON(object: any): _30.LegacyAminoPubKey;
                toJSON(message: _30.LegacyAminoPubKey): unknown;
                fromPartial(object: Partial<_30.LegacyAminoPubKey>): _30.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _31.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.PubKey;
                fromJSON(object: any): _31.PubKey;
                toJSON(message: _31.PubKey): unknown;
                fromPartial(object: Partial<_31.PubKey>): _31.PubKey;
            };
            PrivKey: {
                encode(message: _31.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.PrivKey;
                fromJSON(object: any): _31.PrivKey;
                toJSON(message: _31.PrivKey): unknown;
                fromPartial(object: Partial<_31.PrivKey>): _31.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _32.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.PubKey;
                fromJSON(object: any): _32.PubKey;
                toJSON(message: _32.PubKey): unknown;
                fromPartial(object: Partial<_32.PubKey>): _32.PubKey;
            };
            PrivKey: {
                encode(message: _32.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.PrivKey;
                fromJSON(object: any): _32.PrivKey;
                toJSON(message: _32.PrivKey): unknown;
                fromPartial(object: Partial<_32.PrivKey>): _32.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _169.MsgClientImpl;
            QueryClientImpl: typeof _156.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _35.QueryParamsRequest): Promise<_35.QueryParamsResponse>;
                validatorOutstandingRewards(request: _35.QueryValidatorOutstandingRewardsRequest): Promise<_35.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _35.QueryValidatorCommissionRequest): Promise<_35.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _35.QueryValidatorSlashesRequest): Promise<_35.QueryValidatorSlashesResponse>;
                delegationRewards(request: _35.QueryDelegationRewardsRequest): Promise<_35.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _35.QueryDelegationTotalRewardsRequest): Promise<_35.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _35.QueryDelegatorValidatorsRequest): Promise<_35.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _35.QueryDelegatorWithdrawAddressRequest): Promise<_35.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _35.QueryCommunityPoolRequest): Promise<_35.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _36.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _36.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _36.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _36.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _36.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _36.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _36.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _36.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _36.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _36.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _36.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _36.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _36.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _36.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _36.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _36.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _36.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _36.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _36.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _36.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _36.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _36.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _36.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _36.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _36.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _36.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _36.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _36.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _36.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _36.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _36.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _36.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _36.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _36.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _36.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _36.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _36.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgSetWithdrawAddress;
                fromJSON(object: any): _36.MsgSetWithdrawAddress;
                toJSON(message: _36.MsgSetWithdrawAddress): unknown;
                fromPartial(object: Partial<_36.MsgSetWithdrawAddress>): _36.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _36.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _36.MsgSetWithdrawAddressResponse;
                toJSON(_: _36.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: Partial<_36.MsgSetWithdrawAddressResponse>): _36.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _36.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _36.MsgWithdrawDelegatorReward;
                toJSON(message: _36.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: Partial<_36.MsgWithdrawDelegatorReward>): _36.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _36.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _36.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _36.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: Partial<_36.MsgWithdrawDelegatorRewardResponse>): _36.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _36.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _36.MsgWithdrawValidatorCommission;
                toJSON(message: _36.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: Partial<_36.MsgWithdrawValidatorCommission>): _36.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _36.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _36.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _36.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_36.MsgWithdrawValidatorCommissionResponse>): _36.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _36.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgFundCommunityPool;
                fromJSON(object: any): _36.MsgFundCommunityPool;
                toJSON(message: _36.MsgFundCommunityPool): unknown;
                fromPartial(object: Partial<_36.MsgFundCommunityPool>): _36.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _36.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _36.MsgFundCommunityPoolResponse;
                toJSON(_: _36.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: Partial<_36.MsgFundCommunityPoolResponse>): _36.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _35.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryParamsRequest;
                fromJSON(_: any): _35.QueryParamsRequest;
                toJSON(_: _35.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_35.QueryParamsRequest>): _35.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _35.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryParamsResponse;
                fromJSON(object: any): _35.QueryParamsResponse;
                toJSON(message: _35.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_35.QueryParamsResponse>): _35.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _35.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _35.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _35.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: Partial<_35.QueryValidatorOutstandingRewardsRequest>): _35.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _35.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _35.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _35.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: Partial<_35.QueryValidatorOutstandingRewardsResponse>): _35.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _35.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorCommissionRequest;
                fromJSON(object: any): _35.QueryValidatorCommissionRequest;
                toJSON(message: _35.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: Partial<_35.QueryValidatorCommissionRequest>): _35.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _35.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorCommissionResponse;
                fromJSON(object: any): _35.QueryValidatorCommissionResponse;
                toJSON(message: _35.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_35.QueryValidatorCommissionResponse>): _35.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _35.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorSlashesRequest;
                fromJSON(object: any): _35.QueryValidatorSlashesRequest;
                toJSON(message: _35.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: Partial<_35.QueryValidatorSlashesRequest>): _35.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _35.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorSlashesResponse;
                fromJSON(object: any): _35.QueryValidatorSlashesResponse;
                toJSON(message: _35.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: Partial<_35.QueryValidatorSlashesResponse>): _35.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _35.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegationRewardsRequest;
                fromJSON(object: any): _35.QueryDelegationRewardsRequest;
                toJSON(message: _35.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: Partial<_35.QueryDelegationRewardsRequest>): _35.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _35.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegationRewardsResponse;
                fromJSON(object: any): _35.QueryDelegationRewardsResponse;
                toJSON(message: _35.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: Partial<_35.QueryDelegationRewardsResponse>): _35.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _35.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _35.QueryDelegationTotalRewardsRequest;
                toJSON(message: _35.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: Partial<_35.QueryDelegationTotalRewardsRequest>): _35.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _35.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _35.QueryDelegationTotalRewardsResponse;
                toJSON(message: _35.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: Partial<_35.QueryDelegationTotalRewardsResponse>): _35.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _35.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _35.QueryDelegatorValidatorsRequest;
                toJSON(message: _35.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_35.QueryDelegatorValidatorsRequest>): _35.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _35.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _35.QueryDelegatorValidatorsResponse;
                toJSON(message: _35.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_35.QueryDelegatorValidatorsResponse>): _35.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _35.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _35.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _35.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: Partial<_35.QueryDelegatorWithdrawAddressRequest>): _35.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _35.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _35.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _35.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: Partial<_35.QueryDelegatorWithdrawAddressResponse>): _35.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _35.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryCommunityPoolRequest;
                fromJSON(_: any): _35.QueryCommunityPoolRequest;
                toJSON(_: _35.QueryCommunityPoolRequest): unknown;
                fromPartial(_: Partial<_35.QueryCommunityPoolRequest>): _35.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _35.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryCommunityPoolResponse;
                fromJSON(object: any): _35.QueryCommunityPoolResponse;
                toJSON(message: _35.QueryCommunityPoolResponse): unknown;
                fromPartial(object: Partial<_35.QueryCommunityPoolResponse>): _35.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _34.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.DelegatorWithdrawInfo;
                fromJSON(object: any): _34.DelegatorWithdrawInfo;
                toJSON(message: _34.DelegatorWithdrawInfo): unknown;
                fromPartial(object: Partial<_34.DelegatorWithdrawInfo>): _34.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _34.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _34.ValidatorOutstandingRewardsRecord;
                toJSON(message: _34.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: Partial<_34.ValidatorOutstandingRewardsRecord>): _34.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _34.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _34.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _34.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: Partial<_34.ValidatorAccumulatedCommissionRecord>): _34.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _34.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _34.ValidatorHistoricalRewardsRecord;
                toJSON(message: _34.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: Partial<_34.ValidatorHistoricalRewardsRecord>): _34.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _34.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _34.ValidatorCurrentRewardsRecord;
                toJSON(message: _34.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: Partial<_34.ValidatorCurrentRewardsRecord>): _34.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _34.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.DelegatorStartingInfoRecord;
                fromJSON(object: any): _34.DelegatorStartingInfoRecord;
                toJSON(message: _34.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: Partial<_34.DelegatorStartingInfoRecord>): _34.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _34.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ValidatorSlashEventRecord;
                fromJSON(object: any): _34.ValidatorSlashEventRecord;
                toJSON(message: _34.ValidatorSlashEventRecord): unknown;
                fromPartial(object: Partial<_34.ValidatorSlashEventRecord>): _34.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _34.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.GenesisState;
                fromJSON(object: any): _34.GenesisState;
                toJSON(message: _34.GenesisState): unknown;
                fromPartial(object: Partial<_34.GenesisState>): _34.GenesisState;
            };
            Params: {
                encode(message: _33.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Params;
                fromJSON(object: any): _33.Params;
                toJSON(message: _33.Params): unknown;
                fromPartial(object: Partial<_33.Params>): _33.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _33.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.ValidatorHistoricalRewards;
                fromJSON(object: any): _33.ValidatorHistoricalRewards;
                toJSON(message: _33.ValidatorHistoricalRewards): unknown;
                fromPartial(object: Partial<_33.ValidatorHistoricalRewards>): _33.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _33.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.ValidatorCurrentRewards;
                fromJSON(object: any): _33.ValidatorCurrentRewards;
                toJSON(message: _33.ValidatorCurrentRewards): unknown;
                fromPartial(object: Partial<_33.ValidatorCurrentRewards>): _33.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _33.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.ValidatorAccumulatedCommission;
                fromJSON(object: any): _33.ValidatorAccumulatedCommission;
                toJSON(message: _33.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: Partial<_33.ValidatorAccumulatedCommission>): _33.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _33.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.ValidatorOutstandingRewards;
                fromJSON(object: any): _33.ValidatorOutstandingRewards;
                toJSON(message: _33.ValidatorOutstandingRewards): unknown;
                fromPartial(object: Partial<_33.ValidatorOutstandingRewards>): _33.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _33.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.ValidatorSlashEvent;
                fromJSON(object: any): _33.ValidatorSlashEvent;
                toJSON(message: _33.ValidatorSlashEvent): unknown;
                fromPartial(object: Partial<_33.ValidatorSlashEvent>): _33.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _33.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.ValidatorSlashEvents;
                fromJSON(object: any): _33.ValidatorSlashEvents;
                toJSON(message: _33.ValidatorSlashEvents): unknown;
                fromPartial(object: Partial<_33.ValidatorSlashEvents>): _33.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _33.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.FeePool;
                fromJSON(object: any): _33.FeePool;
                toJSON(message: _33.FeePool): unknown;
                fromPartial(object: Partial<_33.FeePool>): _33.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _33.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.CommunityPoolSpendProposal;
                fromJSON(object: any): _33.CommunityPoolSpendProposal;
                toJSON(message: _33.CommunityPoolSpendProposal): unknown;
                fromPartial(object: Partial<_33.CommunityPoolSpendProposal>): _33.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _33.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.DelegatorStartingInfo;
                fromJSON(object: any): _33.DelegatorStartingInfo;
                toJSON(message: _33.DelegatorStartingInfo): unknown;
                fromPartial(object: Partial<_33.DelegatorStartingInfo>): _33.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _33.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.DelegationDelegatorReward;
                fromJSON(object: any): _33.DelegationDelegatorReward;
                toJSON(message: _33.DelegationDelegatorReward): unknown;
                fromPartial(object: Partial<_33.DelegationDelegatorReward>): _33.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _33.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _33.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _33.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: Partial<_33.CommunityPoolSpendProposalWithDeposit>): _33.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _170.MsgClientImpl;
            QueryClientImpl: typeof _157.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _39.QueryEvidenceRequest): Promise<_39.QueryEvidenceResponse>;
                allEvidence(request?: _39.QueryAllEvidenceRequest): Promise<_39.QueryAllEvidenceResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _40.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _40.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _40.MsgSubmitEvidence;
                    };
                };
                toJSON: {
                    submitEvidence(value: _40.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _40.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _40.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _40.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _40.MsgSubmitEvidence) => {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ submitter, evidence }: {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _40.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _40.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgSubmitEvidence;
                fromJSON(object: any): _40.MsgSubmitEvidence;
                toJSON(message: _40.MsgSubmitEvidence): unknown;
                fromPartial(object: Partial<_40.MsgSubmitEvidence>): _40.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _40.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _40.MsgSubmitEvidenceResponse;
                toJSON(message: _40.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: Partial<_40.MsgSubmitEvidenceResponse>): _40.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _39.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryEvidenceRequest;
                fromJSON(object: any): _39.QueryEvidenceRequest;
                toJSON(message: _39.QueryEvidenceRequest): unknown;
                fromPartial(object: Partial<_39.QueryEvidenceRequest>): _39.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _39.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryEvidenceResponse;
                fromJSON(object: any): _39.QueryEvidenceResponse;
                toJSON(message: _39.QueryEvidenceResponse): unknown;
                fromPartial(object: Partial<_39.QueryEvidenceResponse>): _39.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _39.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryAllEvidenceRequest;
                fromJSON(object: any): _39.QueryAllEvidenceRequest;
                toJSON(message: _39.QueryAllEvidenceRequest): unknown;
                fromPartial(object: Partial<_39.QueryAllEvidenceRequest>): _39.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _39.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryAllEvidenceResponse;
                fromJSON(object: any): _39.QueryAllEvidenceResponse;
                toJSON(message: _39.QueryAllEvidenceResponse): unknown;
                fromPartial(object: Partial<_39.QueryAllEvidenceResponse>): _39.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _38.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.GenesisState;
                fromJSON(object: any): _38.GenesisState;
                toJSON(message: _38.GenesisState): unknown;
                fromPartial(object: Partial<_38.GenesisState>): _38.GenesisState;
            };
            Equivocation: {
                encode(message: _37.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Equivocation;
                fromJSON(object: any): _37.Equivocation;
                toJSON(message: _37.Equivocation): unknown;
                fromPartial(object: Partial<_37.Equivocation>): _37.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _171.MsgClientImpl;
            QueryClientImpl: typeof _158.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _43.QueryAllowanceRequest): Promise<_43.QueryAllowanceResponse>;
                allowances(request: _43.QueryAllowancesRequest): Promise<_43.QueryAllowancesResponse>;
                allowancesByGranter(request: _43.QueryAllowancesByGranterRequest): Promise<_43.QueryAllowancesByGranterResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _44.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _44.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _44.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _44.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _44.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _44.MsgRevokeAllowance;
                    };
                };
                toJSON: {
                    grantAllowance(value: _44.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _44.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _44.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _44.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _44.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _44.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _44.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _44.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _44.MsgGrantAllowance) => {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ granter, grantee, allowance }: {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _44.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _44.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _44.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _44.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgGrantAllowance;
                fromJSON(object: any): _44.MsgGrantAllowance;
                toJSON(message: _44.MsgGrantAllowance): unknown;
                fromPartial(object: Partial<_44.MsgGrantAllowance>): _44.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _44.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgGrantAllowanceResponse;
                fromJSON(_: any): _44.MsgGrantAllowanceResponse;
                toJSON(_: _44.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: Partial<_44.MsgGrantAllowanceResponse>): _44.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _44.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgRevokeAllowance;
                fromJSON(object: any): _44.MsgRevokeAllowance;
                toJSON(message: _44.MsgRevokeAllowance): unknown;
                fromPartial(object: Partial<_44.MsgRevokeAllowance>): _44.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _44.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _44.MsgRevokeAllowanceResponse;
                toJSON(_: _44.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: Partial<_44.MsgRevokeAllowanceResponse>): _44.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _43.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryAllowanceRequest;
                fromJSON(object: any): _43.QueryAllowanceRequest;
                toJSON(message: _43.QueryAllowanceRequest): unknown;
                fromPartial(object: Partial<_43.QueryAllowanceRequest>): _43.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _43.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryAllowanceResponse;
                fromJSON(object: any): _43.QueryAllowanceResponse;
                toJSON(message: _43.QueryAllowanceResponse): unknown;
                fromPartial(object: Partial<_43.QueryAllowanceResponse>): _43.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _43.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryAllowancesRequest;
                fromJSON(object: any): _43.QueryAllowancesRequest;
                toJSON(message: _43.QueryAllowancesRequest): unknown;
                fromPartial(object: Partial<_43.QueryAllowancesRequest>): _43.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _43.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryAllowancesResponse;
                fromJSON(object: any): _43.QueryAllowancesResponse;
                toJSON(message: _43.QueryAllowancesResponse): unknown;
                fromPartial(object: Partial<_43.QueryAllowancesResponse>): _43.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _43.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _43.QueryAllowancesByGranterRequest;
                toJSON(message: _43.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: Partial<_43.QueryAllowancesByGranterRequest>): _43.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _43.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _43.QueryAllowancesByGranterResponse;
                toJSON(message: _43.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: Partial<_43.QueryAllowancesByGranterResponse>): _43.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _42.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GenesisState;
                fromJSON(object: any): _42.GenesisState;
                toJSON(message: _42.GenesisState): unknown;
                fromPartial(object: Partial<_42.GenesisState>): _42.GenesisState;
            };
            BasicAllowance: {
                encode(message: _41.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.BasicAllowance;
                fromJSON(object: any): _41.BasicAllowance;
                toJSON(message: _41.BasicAllowance): unknown;
                fromPartial(object: Partial<_41.BasicAllowance>): _41.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _41.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.PeriodicAllowance;
                fromJSON(object: any): _41.PeriodicAllowance;
                toJSON(message: _41.PeriodicAllowance): unknown;
                fromPartial(object: Partial<_41.PeriodicAllowance>): _41.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _41.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.AllowedMsgAllowance;
                fromJSON(object: any): _41.AllowedMsgAllowance;
                toJSON(message: _41.AllowedMsgAllowance): unknown;
                fromPartial(object: Partial<_41.AllowedMsgAllowance>): _41.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _41.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Grant;
                fromJSON(object: any): _41.Grant;
                toJSON(message: _41.Grant): unknown;
                fromPartial(object: Partial<_41.Grant>): _41.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _45.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GenesisState;
                fromJSON(object: any): _45.GenesisState;
                toJSON(message: _45.GenesisState): unknown;
                fromPartial(object: Partial<_45.GenesisState>): _45.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _172.MsgClientImpl;
            QueryClientImpl: typeof _159.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _48.QueryProposalRequest): Promise<_48.QueryProposalResponse>;
                proposals(request: _48.QueryProposalsRequest): Promise<_48.QueryProposalsResponse>;
                vote(request: _48.QueryVoteRequest): Promise<_48.QueryVoteResponse>;
                votes(request: _48.QueryVotesRequest): Promise<_48.QueryVotesResponse>;
                params(request: _48.QueryParamsRequest): Promise<_48.QueryParamsResponse>;
                deposit(request: _48.QueryDepositRequest): Promise<_48.QueryDepositResponse>;
                deposits(request: _48.QueryDepositsRequest): Promise<_48.QueryDepositsResponse>;
                tallyResult(request: _48.QueryTallyResultRequest): Promise<_48.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _49.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _49.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _49.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _49.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _49.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _49.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _49.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _49.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _49.MsgExecLegacyContent;
                    };
                    vote(value: _49.MsgVote): {
                        typeUrl: string;
                        value: _49.MsgVote;
                    };
                    voteWeighted(value: _49.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _49.MsgVoteWeighted;
                    };
                    deposit(value: _49.MsgDeposit): {
                        typeUrl: string;
                        value: _49.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _49.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _49.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _49.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _49.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _49.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _49.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _49.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _49.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _49.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _49.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _49.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _49.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _49.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _49.MsgExecLegacyContent;
                    };
                    vote(value: _49.MsgVote): {
                        typeUrl: string;
                        value: _49.MsgVote;
                    };
                    voteWeighted(value: _49.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _49.MsgVoteWeighted;
                    };
                    deposit(value: _49.MsgDeposit): {
                        typeUrl: string;
                        value: _49.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _49.MsgSubmitProposal) => {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    };
                    fromAmino: ({ messages, initial_deposit, proposer, metadata }: {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    }) => _49.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _49.MsgExecLegacyContent) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    };
                    fromAmino: ({ content, authority }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    }) => _49.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _49.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    }) => _49.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _49.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, options, metadata }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    }) => _49.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _49.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _49.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _49.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgSubmitProposal;
                fromJSON(object: any): _49.MsgSubmitProposal;
                toJSON(message: _49.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_49.MsgSubmitProposal>): _49.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _49.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgSubmitProposalResponse;
                fromJSON(object: any): _49.MsgSubmitProposalResponse;
                toJSON(message: _49.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_49.MsgSubmitProposalResponse>): _49.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _49.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgExecLegacyContent;
                fromJSON(object: any): _49.MsgExecLegacyContent;
                toJSON(message: _49.MsgExecLegacyContent): unknown;
                fromPartial(object: Partial<_49.MsgExecLegacyContent>): _49.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _49.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgExecLegacyContentResponse;
                fromJSON(_: any): _49.MsgExecLegacyContentResponse;
                toJSON(_: _49.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: Partial<_49.MsgExecLegacyContentResponse>): _49.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _49.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgVote;
                fromJSON(object: any): _49.MsgVote;
                toJSON(message: _49.MsgVote): unknown;
                fromPartial(object: Partial<_49.MsgVote>): _49.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _49.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgVoteResponse;
                fromJSON(_: any): _49.MsgVoteResponse;
                toJSON(_: _49.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_49.MsgVoteResponse>): _49.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _49.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgVoteWeighted;
                fromJSON(object: any): _49.MsgVoteWeighted;
                toJSON(message: _49.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_49.MsgVoteWeighted>): _49.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _49.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgVoteWeightedResponse;
                fromJSON(_: any): _49.MsgVoteWeightedResponse;
                toJSON(_: _49.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_49.MsgVoteWeightedResponse>): _49.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _49.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgDeposit;
                fromJSON(object: any): _49.MsgDeposit;
                toJSON(message: _49.MsgDeposit): unknown;
                fromPartial(object: Partial<_49.MsgDeposit>): _49.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _49.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgDepositResponse;
                fromJSON(_: any): _49.MsgDepositResponse;
                toJSON(_: _49.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_49.MsgDepositResponse>): _49.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _48.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryProposalRequest;
                fromJSON(object: any): _48.QueryProposalRequest;
                toJSON(message: _48.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_48.QueryProposalRequest>): _48.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _48.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryProposalResponse;
                fromJSON(object: any): _48.QueryProposalResponse;
                toJSON(message: _48.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_48.QueryProposalResponse>): _48.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _48.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryProposalsRequest;
                fromJSON(object: any): _48.QueryProposalsRequest;
                toJSON(message: _48.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_48.QueryProposalsRequest>): _48.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _48.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryProposalsResponse;
                fromJSON(object: any): _48.QueryProposalsResponse;
                toJSON(message: _48.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_48.QueryProposalsResponse>): _48.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _48.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryVoteRequest;
                fromJSON(object: any): _48.QueryVoteRequest;
                toJSON(message: _48.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_48.QueryVoteRequest>): _48.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _48.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryVoteResponse;
                fromJSON(object: any): _48.QueryVoteResponse;
                toJSON(message: _48.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_48.QueryVoteResponse>): _48.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _48.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryVotesRequest;
                fromJSON(object: any): _48.QueryVotesRequest;
                toJSON(message: _48.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_48.QueryVotesRequest>): _48.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _48.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryVotesResponse;
                fromJSON(object: any): _48.QueryVotesResponse;
                toJSON(message: _48.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_48.QueryVotesResponse>): _48.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _48.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryParamsRequest;
                fromJSON(object: any): _48.QueryParamsRequest;
                toJSON(message: _48.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_48.QueryParamsRequest>): _48.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _48.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryParamsResponse;
                fromJSON(object: any): _48.QueryParamsResponse;
                toJSON(message: _48.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_48.QueryParamsResponse>): _48.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _48.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryDepositRequest;
                fromJSON(object: any): _48.QueryDepositRequest;
                toJSON(message: _48.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_48.QueryDepositRequest>): _48.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _48.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryDepositResponse;
                fromJSON(object: any): _48.QueryDepositResponse;
                toJSON(message: _48.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_48.QueryDepositResponse>): _48.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _48.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryDepositsRequest;
                fromJSON(object: any): _48.QueryDepositsRequest;
                toJSON(message: _48.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_48.QueryDepositsRequest>): _48.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _48.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryDepositsResponse;
                fromJSON(object: any): _48.QueryDepositsResponse;
                toJSON(message: _48.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_48.QueryDepositsResponse>): _48.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _48.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryTallyResultRequest;
                fromJSON(object: any): _48.QueryTallyResultRequest;
                toJSON(message: _48.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_48.QueryTallyResultRequest>): _48.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _48.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryTallyResultResponse;
                fromJSON(object: any): _48.QueryTallyResultResponse;
                toJSON(message: _48.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_48.QueryTallyResultResponse>): _48.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _47.VoteOption;
            voteOptionToJSON(object: _47.VoteOption): string;
            proposalStatusFromJSON(object: any): _47.ProposalStatus;
            proposalStatusToJSON(object: _47.ProposalStatus): string;
            VoteOption: typeof _47.VoteOption;
            VoteOptionSDKType: typeof _47.VoteOption;
            ProposalStatus: typeof _47.ProposalStatus;
            ProposalStatusSDKType: typeof _47.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _47.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.WeightedVoteOption;
                fromJSON(object: any): _47.WeightedVoteOption;
                toJSON(message: _47.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_47.WeightedVoteOption>): _47.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _47.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.Deposit;
                fromJSON(object: any): _47.Deposit;
                toJSON(message: _47.Deposit): unknown;
                fromPartial(object: Partial<_47.Deposit>): _47.Deposit;
            };
            Proposal: {
                encode(message: _47.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.Proposal;
                fromJSON(object: any): _47.Proposal;
                toJSON(message: _47.Proposal): unknown;
                fromPartial(object: Partial<_47.Proposal>): _47.Proposal;
            };
            TallyResult: {
                encode(message: _47.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.TallyResult;
                fromJSON(object: any): _47.TallyResult;
                toJSON(message: _47.TallyResult): unknown;
                fromPartial(object: Partial<_47.TallyResult>): _47.TallyResult;
            };
            Vote: {
                encode(message: _47.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.Vote;
                fromJSON(object: any): _47.Vote;
                toJSON(message: _47.Vote): unknown;
                fromPartial(object: Partial<_47.Vote>): _47.Vote;
            };
            DepositParams: {
                encode(message: _47.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.DepositParams;
                fromJSON(object: any): _47.DepositParams;
                toJSON(message: _47.DepositParams): unknown;
                fromPartial(object: Partial<_47.DepositParams>): _47.DepositParams;
            };
            VotingParams: {
                encode(message: _47.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.VotingParams;
                fromJSON(object: any): _47.VotingParams;
                toJSON(message: _47.VotingParams): unknown;
                fromPartial(object: Partial<_47.VotingParams>): _47.VotingParams;
            };
            TallyParams: {
                encode(message: _47.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.TallyParams;
                fromJSON(object: any): _47.TallyParams;
                toJSON(message: _47.TallyParams): unknown;
                fromPartial(object: Partial<_47.TallyParams>): _47.TallyParams;
            };
            GenesisState: {
                encode(message: _46.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.GenesisState;
                fromJSON(object: any): _46.GenesisState;
                toJSON(message: _46.GenesisState): unknown;
                fromPartial(object: Partial<_46.GenesisState>): _46.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _173.MsgClientImpl;
            QueryClientImpl: typeof _160.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _52.QueryProposalRequest): Promise<_52.QueryProposalResponse>;
                proposals(request: _52.QueryProposalsRequest): Promise<_52.QueryProposalsResponse>;
                vote(request: _52.QueryVoteRequest): Promise<_52.QueryVoteResponse>;
                votes(request: _52.QueryVotesRequest): Promise<_52.QueryVotesResponse>;
                params(request: _52.QueryParamsRequest): Promise<_52.QueryParamsResponse>;
                deposit(request: _52.QueryDepositRequest): Promise<_52.QueryDepositResponse>;
                deposits(request: _52.QueryDepositsRequest): Promise<_52.QueryDepositsResponse>;
                tallyResult(request: _52.QueryTallyResultRequest): Promise<_52.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _53.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _53.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _53.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _53.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _53.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _53.MsgSubmitProposal;
                    };
                    vote(value: _53.MsgVote): {
                        typeUrl: string;
                        value: _53.MsgVote;
                    };
                    voteWeighted(value: _53.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _53.MsgVoteWeighted;
                    };
                    deposit(value: _53.MsgDeposit): {
                        typeUrl: string;
                        value: _53.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _53.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _53.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _53.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _53.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _53.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _53.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _53.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _53.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _53.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _53.MsgSubmitProposal;
                    };
                    vote(value: _53.MsgVote): {
                        typeUrl: string;
                        value: _53.MsgVote;
                    };
                    voteWeighted(value: _53.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _53.MsgVoteWeighted;
                    };
                    deposit(value: _53.MsgDeposit): {
                        typeUrl: string;
                        value: _53.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _53.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _53.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _53.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _53.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _53.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _53.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _53.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _53.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _53.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgSubmitProposal;
                fromJSON(object: any): _53.MsgSubmitProposal;
                toJSON(message: _53.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_53.MsgSubmitProposal>): _53.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _53.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgSubmitProposalResponse;
                fromJSON(object: any): _53.MsgSubmitProposalResponse;
                toJSON(message: _53.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_53.MsgSubmitProposalResponse>): _53.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _53.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgVote;
                fromJSON(object: any): _53.MsgVote;
                toJSON(message: _53.MsgVote): unknown;
                fromPartial(object: Partial<_53.MsgVote>): _53.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _53.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgVoteResponse;
                fromJSON(_: any): _53.MsgVoteResponse;
                toJSON(_: _53.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_53.MsgVoteResponse>): _53.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _53.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgVoteWeighted;
                fromJSON(object: any): _53.MsgVoteWeighted;
                toJSON(message: _53.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_53.MsgVoteWeighted>): _53.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _53.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgVoteWeightedResponse;
                fromJSON(_: any): _53.MsgVoteWeightedResponse;
                toJSON(_: _53.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_53.MsgVoteWeightedResponse>): _53.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _53.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgDeposit;
                fromJSON(object: any): _53.MsgDeposit;
                toJSON(message: _53.MsgDeposit): unknown;
                fromPartial(object: Partial<_53.MsgDeposit>): _53.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _53.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgDepositResponse;
                fromJSON(_: any): _53.MsgDepositResponse;
                toJSON(_: _53.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_53.MsgDepositResponse>): _53.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _52.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryProposalRequest;
                fromJSON(object: any): _52.QueryProposalRequest;
                toJSON(message: _52.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_52.QueryProposalRequest>): _52.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _52.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryProposalResponse;
                fromJSON(object: any): _52.QueryProposalResponse;
                toJSON(message: _52.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_52.QueryProposalResponse>): _52.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _52.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryProposalsRequest;
                fromJSON(object: any): _52.QueryProposalsRequest;
                toJSON(message: _52.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_52.QueryProposalsRequest>): _52.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _52.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryProposalsResponse;
                fromJSON(object: any): _52.QueryProposalsResponse;
                toJSON(message: _52.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_52.QueryProposalsResponse>): _52.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _52.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryVoteRequest;
                fromJSON(object: any): _52.QueryVoteRequest;
                toJSON(message: _52.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_52.QueryVoteRequest>): _52.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _52.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryVoteResponse;
                fromJSON(object: any): _52.QueryVoteResponse;
                toJSON(message: _52.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_52.QueryVoteResponse>): _52.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _52.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryVotesRequest;
                fromJSON(object: any): _52.QueryVotesRequest;
                toJSON(message: _52.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_52.QueryVotesRequest>): _52.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _52.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryVotesResponse;
                fromJSON(object: any): _52.QueryVotesResponse;
                toJSON(message: _52.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_52.QueryVotesResponse>): _52.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _52.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryParamsRequest;
                fromJSON(object: any): _52.QueryParamsRequest;
                toJSON(message: _52.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_52.QueryParamsRequest>): _52.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _52.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryParamsResponse;
                fromJSON(object: any): _52.QueryParamsResponse;
                toJSON(message: _52.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_52.QueryParamsResponse>): _52.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _52.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryDepositRequest;
                fromJSON(object: any): _52.QueryDepositRequest;
                toJSON(message: _52.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_52.QueryDepositRequest>): _52.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _52.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryDepositResponse;
                fromJSON(object: any): _52.QueryDepositResponse;
                toJSON(message: _52.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_52.QueryDepositResponse>): _52.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _52.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryDepositsRequest;
                fromJSON(object: any): _52.QueryDepositsRequest;
                toJSON(message: _52.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_52.QueryDepositsRequest>): _52.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _52.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryDepositsResponse;
                fromJSON(object: any): _52.QueryDepositsResponse;
                toJSON(message: _52.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_52.QueryDepositsResponse>): _52.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _52.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryTallyResultRequest;
                fromJSON(object: any): _52.QueryTallyResultRequest;
                toJSON(message: _52.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_52.QueryTallyResultRequest>): _52.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _52.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryTallyResultResponse;
                fromJSON(object: any): _52.QueryTallyResultResponse;
                toJSON(message: _52.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_52.QueryTallyResultResponse>): _52.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _51.VoteOption;
            voteOptionToJSON(object: _51.VoteOption): string;
            proposalStatusFromJSON(object: any): _51.ProposalStatus;
            proposalStatusToJSON(object: _51.ProposalStatus): string;
            VoteOption: typeof _51.VoteOption;
            VoteOptionSDKType: typeof _51.VoteOption;
            ProposalStatus: typeof _51.ProposalStatus;
            ProposalStatusSDKType: typeof _51.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _51.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.WeightedVoteOption;
                fromJSON(object: any): _51.WeightedVoteOption;
                toJSON(message: _51.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_51.WeightedVoteOption>): _51.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _51.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.TextProposal;
                fromJSON(object: any): _51.TextProposal;
                toJSON(message: _51.TextProposal): unknown;
                fromPartial(object: Partial<_51.TextProposal>): _51.TextProposal;
            };
            Deposit: {
                encode(message: _51.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Deposit;
                fromJSON(object: any): _51.Deposit;
                toJSON(message: _51.Deposit): unknown;
                fromPartial(object: Partial<_51.Deposit>): _51.Deposit;
            };
            Proposal: {
                encode(message: _51.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Proposal;
                fromJSON(object: any): _51.Proposal;
                toJSON(message: _51.Proposal): unknown;
                fromPartial(object: Partial<_51.Proposal>): _51.Proposal;
            };
            TallyResult: {
                encode(message: _51.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.TallyResult;
                fromJSON(object: any): _51.TallyResult;
                toJSON(message: _51.TallyResult): unknown;
                fromPartial(object: Partial<_51.TallyResult>): _51.TallyResult;
            };
            Vote: {
                encode(message: _51.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Vote;
                fromJSON(object: any): _51.Vote;
                toJSON(message: _51.Vote): unknown;
                fromPartial(object: Partial<_51.Vote>): _51.Vote;
            };
            DepositParams: {
                encode(message: _51.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.DepositParams;
                fromJSON(object: any): _51.DepositParams;
                toJSON(message: _51.DepositParams): unknown;
                fromPartial(object: Partial<_51.DepositParams>): _51.DepositParams;
            };
            VotingParams: {
                encode(message: _51.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.VotingParams;
                fromJSON(object: any): _51.VotingParams;
                toJSON(message: _51.VotingParams): unknown;
                fromPartial(object: Partial<_51.VotingParams>): _51.VotingParams;
            };
            TallyParams: {
                encode(message: _51.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.TallyParams;
                fromJSON(object: any): _51.TallyParams;
                toJSON(message: _51.TallyParams): unknown;
                fromPartial(object: Partial<_51.TallyParams>): _51.TallyParams;
            };
            GenesisState: {
                encode(message: _50.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GenesisState;
                fromJSON(object: any): _50.GenesisState;
                toJSON(message: _50.GenesisState): unknown;
                fromPartial(object: Partial<_50.GenesisState>): _50.GenesisState;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _161.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _56.QueryParamsRequest): Promise<_56.QueryParamsResponse>;
                inflation(request?: _56.QueryInflationRequest): Promise<_56.QueryInflationResponse>;
                annualProvisions(request?: _56.QueryAnnualProvisionsRequest): Promise<_56.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _56.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryParamsRequest;
                fromJSON(_: any): _56.QueryParamsRequest;
                toJSON(_: _56.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_56.QueryParamsRequest>): _56.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _56.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryParamsResponse;
                fromJSON(object: any): _56.QueryParamsResponse;
                toJSON(message: _56.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_56.QueryParamsResponse>): _56.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _56.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryInflationRequest;
                fromJSON(_: any): _56.QueryInflationRequest;
                toJSON(_: _56.QueryInflationRequest): unknown;
                fromPartial(_: Partial<_56.QueryInflationRequest>): _56.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _56.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryInflationResponse;
                fromJSON(object: any): _56.QueryInflationResponse;
                toJSON(message: _56.QueryInflationResponse): unknown;
                fromPartial(object: Partial<_56.QueryInflationResponse>): _56.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _56.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _56.QueryAnnualProvisionsRequest;
                toJSON(_: _56.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: Partial<_56.QueryAnnualProvisionsRequest>): _56.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _56.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _56.QueryAnnualProvisionsResponse;
                toJSON(message: _56.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: Partial<_56.QueryAnnualProvisionsResponse>): _56.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _55.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Minter;
                fromJSON(object: any): _55.Minter;
                toJSON(message: _55.Minter): unknown;
                fromPartial(object: Partial<_55.Minter>): _55.Minter;
            };
            Params: {
                encode(message: _55.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Params;
                fromJSON(object: any): _55.Params;
                toJSON(message: _55.Params): unknown;
                fromPartial(object: Partial<_55.Params>): _55.Params;
            };
            GenesisState: {
                encode(message: _54.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.GenesisState;
                fromJSON(object: any): _54.GenesisState;
                toJSON(message: _54.GenesisState): unknown;
                fromPartial(object: Partial<_54.GenesisState>): _54.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                encode(message: _58.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.TableDescriptor;
                fromJSON(object: any): _58.TableDescriptor;
                toJSON(message: _58.TableDescriptor): unknown;
                fromPartial(object: Partial<_58.TableDescriptor>): _58.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _58.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.PrimaryKeyDescriptor;
                fromJSON(object: any): _58.PrimaryKeyDescriptor;
                toJSON(message: _58.PrimaryKeyDescriptor): unknown;
                fromPartial(object: Partial<_58.PrimaryKeyDescriptor>): _58.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _58.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.SecondaryIndexDescriptor;
                fromJSON(object: any): _58.SecondaryIndexDescriptor;
                toJSON(message: _58.SecondaryIndexDescriptor): unknown;
                fromPartial(object: Partial<_58.SecondaryIndexDescriptor>): _58.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _58.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.SingletonDescriptor;
                fromJSON(object: any): _58.SingletonDescriptor;
                toJSON(message: _58.SingletonDescriptor): unknown;
                fromPartial(object: Partial<_58.SingletonDescriptor>): _58.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _59.StorageType;
            storageTypeToJSON(object: _59.StorageType): string;
            StorageType: typeof _59.StorageType;
            StorageTypeSDKType: typeof _59.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _59.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ModuleSchemaDescriptor;
                fromJSON(object: any): _59.ModuleSchemaDescriptor;
                toJSON(message: _59.ModuleSchemaDescriptor): unknown;
                fromPartial(object: Partial<_59.ModuleSchemaDescriptor>): _59.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _59.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _59.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _59.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: Partial<_59.ModuleSchemaDescriptor_FileEntry>): _59.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _162.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                subspaces(request?: _61.QuerySubspacesRequest): Promise<_61.QuerySubspacesResponse>;
            };
            QueryParamsRequest: {
                encode(message: _61.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryParamsRequest;
                fromJSON(object: any): _61.QueryParamsRequest;
                toJSON(message: _61.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_61.QueryParamsRequest>): _61.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _61.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryParamsResponse;
                fromJSON(object: any): _61.QueryParamsResponse;
                toJSON(message: _61.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_61.QueryParamsResponse>): _61.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _61.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QuerySubspacesRequest;
                fromJSON(_: any): _61.QuerySubspacesRequest;
                toJSON(_: _61.QuerySubspacesRequest): unknown;
                fromPartial(_: Partial<_61.QuerySubspacesRequest>): _61.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _61.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QuerySubspacesResponse;
                fromJSON(object: any): _61.QuerySubspacesResponse;
                toJSON(message: _61.QuerySubspacesResponse): unknown;
                fromPartial(object: Partial<_61.QuerySubspacesResponse>): _61.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _61.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.Subspace;
                fromJSON(object: any): _61.Subspace;
                toJSON(message: _61.Subspace): unknown;
                fromPartial(object: Partial<_61.Subspace>): _61.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _60.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.ParameterChangeProposal;
                fromJSON(object: any): _60.ParameterChangeProposal;
                toJSON(message: _60.ParameterChangeProposal): unknown;
                fromPartial(object: Partial<_60.ParameterChangeProposal>): _60.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _60.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.ParamChange;
                fromJSON(object: any): _60.ParamChange;
                toJSON(message: _60.ParamChange): unknown;
                fromPartial(object: Partial<_60.ParamChange>): _60.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _174.MsgClientImpl;
            QueryClientImpl: typeof _163.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _63.QueryParamsRequest): Promise<_63.QueryParamsResponse>;
                signingInfo(request: _63.QuerySigningInfoRequest): Promise<_63.QuerySigningInfoResponse>;
                signingInfos(request?: _63.QuerySigningInfosRequest): Promise<_63.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _65.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _65.MsgUnjail): {
                        typeUrl: string;
                        value: _65.MsgUnjail;
                    };
                };
                toJSON: {
                    unjail(value: _65.MsgUnjail): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _65.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _65.MsgUnjail): {
                        typeUrl: string;
                        value: _65.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _65.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _65.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _65.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgUnjail;
                fromJSON(object: any): _65.MsgUnjail;
                toJSON(message: _65.MsgUnjail): unknown;
                fromPartial(object: Partial<_65.MsgUnjail>): _65.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _65.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgUnjailResponse;
                fromJSON(_: any): _65.MsgUnjailResponse;
                toJSON(_: _65.MsgUnjailResponse): unknown;
                fromPartial(_: Partial<_65.MsgUnjailResponse>): _65.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _64.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ValidatorSigningInfo;
                fromJSON(object: any): _64.ValidatorSigningInfo;
                toJSON(message: _64.ValidatorSigningInfo): unknown;
                fromPartial(object: Partial<_64.ValidatorSigningInfo>): _64.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _64.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Params;
                fromJSON(object: any): _64.Params;
                toJSON(message: _64.Params): unknown;
                fromPartial(object: Partial<_64.Params>): _64.Params;
            };
            QueryParamsRequest: {
                encode(_: _63.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryParamsRequest;
                fromJSON(_: any): _63.QueryParamsRequest;
                toJSON(_: _63.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_63.QueryParamsRequest>): _63.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _63.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryParamsResponse;
                fromJSON(object: any): _63.QueryParamsResponse;
                toJSON(message: _63.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_63.QueryParamsResponse>): _63.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _63.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QuerySigningInfoRequest;
                fromJSON(object: any): _63.QuerySigningInfoRequest;
                toJSON(message: _63.QuerySigningInfoRequest): unknown;
                fromPartial(object: Partial<_63.QuerySigningInfoRequest>): _63.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _63.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QuerySigningInfoResponse;
                fromJSON(object: any): _63.QuerySigningInfoResponse;
                toJSON(message: _63.QuerySigningInfoResponse): unknown;
                fromPartial(object: Partial<_63.QuerySigningInfoResponse>): _63.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _63.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QuerySigningInfosRequest;
                fromJSON(object: any): _63.QuerySigningInfosRequest;
                toJSON(message: _63.QuerySigningInfosRequest): unknown;
                fromPartial(object: Partial<_63.QuerySigningInfosRequest>): _63.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _63.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QuerySigningInfosResponse;
                fromJSON(object: any): _63.QuerySigningInfosResponse;
                toJSON(message: _63.QuerySigningInfosResponse): unknown;
                fromPartial(object: Partial<_63.QuerySigningInfosResponse>): _63.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _62.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.GenesisState;
                fromJSON(object: any): _62.GenesisState;
                toJSON(message: _62.GenesisState): unknown;
                fromPartial(object: Partial<_62.GenesisState>): _62.GenesisState;
            };
            SigningInfo: {
                encode(message: _62.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.SigningInfo;
                fromJSON(object: any): _62.SigningInfo;
                toJSON(message: _62.SigningInfo): unknown;
                fromPartial(object: Partial<_62.SigningInfo>): _62.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _62.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ValidatorMissedBlocks;
                fromJSON(object: any): _62.ValidatorMissedBlocks;
                toJSON(message: _62.ValidatorMissedBlocks): unknown;
                fromPartial(object: Partial<_62.ValidatorMissedBlocks>): _62.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _62.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MissedBlock;
                fromJSON(object: any): _62.MissedBlock;
                toJSON(message: _62.MissedBlock): unknown;
                fromPartial(object: Partial<_62.MissedBlock>): _62.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _175.MsgClientImpl;
            QueryClientImpl: typeof _164.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _68.QueryValidatorsRequest): Promise<_68.QueryValidatorsResponse>;
                validator(request: _68.QueryValidatorRequest): Promise<_68.QueryValidatorResponse>;
                validatorDelegations(request: _68.QueryValidatorDelegationsRequest): Promise<_68.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _68.QueryValidatorUnbondingDelegationsRequest): Promise<_68.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _68.QueryDelegationRequest): Promise<_68.QueryDelegationResponse>;
                unbondingDelegation(request: _68.QueryUnbondingDelegationRequest): Promise<_68.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _68.QueryDelegatorDelegationsRequest): Promise<_68.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _68.QueryDelegatorUnbondingDelegationsRequest): Promise<_68.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _68.QueryRedelegationsRequest): Promise<_68.QueryRedelegationsResponse>;
                delegatorValidators(request: _68.QueryDelegatorValidatorsRequest): Promise<_68.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _68.QueryDelegatorValidatorRequest): Promise<_68.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _68.QueryHistoricalInfoRequest): Promise<_68.QueryHistoricalInfoResponse>;
                pool(request?: _68.QueryPoolRequest): Promise<_68.QueryPoolResponse>;
                params(request?: _68.QueryParamsRequest): Promise<_68.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _70.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _70.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _70.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _70.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _70.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _70.MsgCreateValidator): {
                        typeUrl: string;
                        value: _70.MsgCreateValidator;
                    };
                    editValidator(value: _70.MsgEditValidator): {
                        typeUrl: string;
                        value: _70.MsgEditValidator;
                    };
                    delegate(value: _70.MsgDelegate): {
                        typeUrl: string;
                        value: _70.MsgDelegate;
                    };
                    beginRedelegate(value: _70.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _70.MsgBeginRedelegate;
                    };
                    undelegate(value: _70.MsgUndelegate): {
                        typeUrl: string;
                        value: _70.MsgUndelegate;
                    };
                };
                toJSON: {
                    createValidator(value: _70.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _70.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _70.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _70.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _70.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _70.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _70.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _70.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _70.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _70.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _70.MsgCreateValidator): {
                        typeUrl: string;
                        value: _70.MsgCreateValidator;
                    };
                    editValidator(value: _70.MsgEditValidator): {
                        typeUrl: string;
                        value: _70.MsgEditValidator;
                    };
                    delegate(value: _70.MsgDelegate): {
                        typeUrl: string;
                        value: _70.MsgDelegate;
                    };
                    beginRedelegate(value: _70.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _70.MsgBeginRedelegate;
                    };
                    undelegate(value: _70.MsgUndelegate): {
                        typeUrl: string;
                        value: _70.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _70.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _70.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _70.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _70.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _70.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _70.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _70.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _70.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _70.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _70.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _70.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgCreateValidator;
                fromJSON(object: any): _70.MsgCreateValidator;
                toJSON(message: _70.MsgCreateValidator): unknown;
                fromPartial(object: Partial<_70.MsgCreateValidator>): _70.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _70.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgCreateValidatorResponse;
                fromJSON(_: any): _70.MsgCreateValidatorResponse;
                toJSON(_: _70.MsgCreateValidatorResponse): unknown;
                fromPartial(_: Partial<_70.MsgCreateValidatorResponse>): _70.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _70.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgEditValidator;
                fromJSON(object: any): _70.MsgEditValidator;
                toJSON(message: _70.MsgEditValidator): unknown;
                fromPartial(object: Partial<_70.MsgEditValidator>): _70.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _70.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgEditValidatorResponse;
                fromJSON(_: any): _70.MsgEditValidatorResponse;
                toJSON(_: _70.MsgEditValidatorResponse): unknown;
                fromPartial(_: Partial<_70.MsgEditValidatorResponse>): _70.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _70.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgDelegate;
                fromJSON(object: any): _70.MsgDelegate;
                toJSON(message: _70.MsgDelegate): unknown;
                fromPartial(object: Partial<_70.MsgDelegate>): _70.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _70.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgDelegateResponse;
                fromJSON(_: any): _70.MsgDelegateResponse;
                toJSON(_: _70.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_70.MsgDelegateResponse>): _70.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _70.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgBeginRedelegate;
                fromJSON(object: any): _70.MsgBeginRedelegate;
                toJSON(message: _70.MsgBeginRedelegate): unknown;
                fromPartial(object: Partial<_70.MsgBeginRedelegate>): _70.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _70.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgBeginRedelegateResponse;
                fromJSON(object: any): _70.MsgBeginRedelegateResponse;
                toJSON(message: _70.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: Partial<_70.MsgBeginRedelegateResponse>): _70.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _70.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgUndelegate;
                fromJSON(object: any): _70.MsgUndelegate;
                toJSON(message: _70.MsgUndelegate): unknown;
                fromPartial(object: Partial<_70.MsgUndelegate>): _70.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _70.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgUndelegateResponse;
                fromJSON(object: any): _70.MsgUndelegateResponse;
                toJSON(message: _70.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_70.MsgUndelegateResponse>): _70.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _69.BondStatus;
            bondStatusToJSON(object: _69.BondStatus): string;
            BondStatus: typeof _69.BondStatus;
            BondStatusSDKType: typeof _69.BondStatus;
            HistoricalInfo: {
                encode(message: _69.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.HistoricalInfo;
                fromJSON(object: any): _69.HistoricalInfo;
                toJSON(message: _69.HistoricalInfo): unknown;
                fromPartial(object: Partial<_69.HistoricalInfo>): _69.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _69.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.CommissionRates;
                fromJSON(object: any): _69.CommissionRates;
                toJSON(message: _69.CommissionRates): unknown;
                fromPartial(object: Partial<_69.CommissionRates>): _69.CommissionRates;
            };
            Commission: {
                encode(message: _69.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Commission;
                fromJSON(object: any): _69.Commission;
                toJSON(message: _69.Commission): unknown;
                fromPartial(object: Partial<_69.Commission>): _69.Commission;
            };
            Description: {
                encode(message: _69.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Description;
                fromJSON(object: any): _69.Description;
                toJSON(message: _69.Description): unknown;
                fromPartial(object: Partial<_69.Description>): _69.Description;
            };
            Validator: {
                encode(message: _69.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Validator;
                fromJSON(object: any): _69.Validator;
                toJSON(message: _69.Validator): unknown;
                fromPartial(object: Partial<_69.Validator>): _69.Validator;
            };
            ValAddresses: {
                encode(message: _69.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.ValAddresses;
                fromJSON(object: any): _69.ValAddresses;
                toJSON(message: _69.ValAddresses): unknown;
                fromPartial(object: Partial<_69.ValAddresses>): _69.ValAddresses;
            };
            DVPair: {
                encode(message: _69.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.DVPair;
                fromJSON(object: any): _69.DVPair;
                toJSON(message: _69.DVPair): unknown;
                fromPartial(object: Partial<_69.DVPair>): _69.DVPair;
            };
            DVPairs: {
                encode(message: _69.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.DVPairs;
                fromJSON(object: any): _69.DVPairs;
                toJSON(message: _69.DVPairs): unknown;
                fromPartial(object: Partial<_69.DVPairs>): _69.DVPairs;
            };
            DVVTriplet: {
                encode(message: _69.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.DVVTriplet;
                fromJSON(object: any): _69.DVVTriplet;
                toJSON(message: _69.DVVTriplet): unknown;
                fromPartial(object: Partial<_69.DVVTriplet>): _69.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _69.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.DVVTriplets;
                fromJSON(object: any): _69.DVVTriplets;
                toJSON(message: _69.DVVTriplets): unknown;
                fromPartial(object: Partial<_69.DVVTriplets>): _69.DVVTriplets;
            };
            Delegation: {
                encode(message: _69.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Delegation;
                fromJSON(object: any): _69.Delegation;
                toJSON(message: _69.Delegation): unknown;
                fromPartial(object: Partial<_69.Delegation>): _69.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _69.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.UnbondingDelegation;
                fromJSON(object: any): _69.UnbondingDelegation;
                toJSON(message: _69.UnbondingDelegation): unknown;
                fromPartial(object: Partial<_69.UnbondingDelegation>): _69.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _69.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.UnbondingDelegationEntry;
                fromJSON(object: any): _69.UnbondingDelegationEntry;
                toJSON(message: _69.UnbondingDelegationEntry): unknown;
                fromPartial(object: Partial<_69.UnbondingDelegationEntry>): _69.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _69.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.RedelegationEntry;
                fromJSON(object: any): _69.RedelegationEntry;
                toJSON(message: _69.RedelegationEntry): unknown;
                fromPartial(object: Partial<_69.RedelegationEntry>): _69.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _69.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Redelegation;
                fromJSON(object: any): _69.Redelegation;
                toJSON(message: _69.Redelegation): unknown;
                fromPartial(object: Partial<_69.Redelegation>): _69.Redelegation;
            };
            Params: {
                encode(message: _69.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Params;
                fromJSON(object: any): _69.Params;
                toJSON(message: _69.Params): unknown;
                fromPartial(object: Partial<_69.Params>): _69.Params;
            };
            DelegationResponse: {
                encode(message: _69.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.DelegationResponse;
                fromJSON(object: any): _69.DelegationResponse;
                toJSON(message: _69.DelegationResponse): unknown;
                fromPartial(object: Partial<_69.DelegationResponse>): _69.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _69.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.RedelegationEntryResponse;
                fromJSON(object: any): _69.RedelegationEntryResponse;
                toJSON(message: _69.RedelegationEntryResponse): unknown;
                fromPartial(object: Partial<_69.RedelegationEntryResponse>): _69.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _69.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.RedelegationResponse;
                fromJSON(object: any): _69.RedelegationResponse;
                toJSON(message: _69.RedelegationResponse): unknown;
                fromPartial(object: Partial<_69.RedelegationResponse>): _69.RedelegationResponse;
            };
            Pool: {
                encode(message: _69.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Pool;
                fromJSON(object: any): _69.Pool;
                toJSON(message: _69.Pool): unknown;
                fromPartial(object: Partial<_69.Pool>): _69.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _68.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryValidatorsRequest;
                fromJSON(object: any): _68.QueryValidatorsRequest;
                toJSON(message: _68.QueryValidatorsRequest): unknown;
                fromPartial(object: Partial<_68.QueryValidatorsRequest>): _68.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _68.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryValidatorsResponse;
                fromJSON(object: any): _68.QueryValidatorsResponse;
                toJSON(message: _68.QueryValidatorsResponse): unknown;
                fromPartial(object: Partial<_68.QueryValidatorsResponse>): _68.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _68.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryValidatorRequest;
                fromJSON(object: any): _68.QueryValidatorRequest;
                toJSON(message: _68.QueryValidatorRequest): unknown;
                fromPartial(object: Partial<_68.QueryValidatorRequest>): _68.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _68.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryValidatorResponse;
                fromJSON(object: any): _68.QueryValidatorResponse;
                toJSON(message: _68.QueryValidatorResponse): unknown;
                fromPartial(object: Partial<_68.QueryValidatorResponse>): _68.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _68.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _68.QueryValidatorDelegationsRequest;
                toJSON(message: _68.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_68.QueryValidatorDelegationsRequest>): _68.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _68.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _68.QueryValidatorDelegationsResponse;
                toJSON(message: _68.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_68.QueryValidatorDelegationsResponse>): _68.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _68.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _68.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _68.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_68.QueryValidatorUnbondingDelegationsRequest>): _68.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _68.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _68.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _68.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_68.QueryValidatorUnbondingDelegationsResponse>): _68.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _68.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryDelegationRequest;
                fromJSON(object: any): _68.QueryDelegationRequest;
                toJSON(message: _68.QueryDelegationRequest): unknown;
                fromPartial(object: Partial<_68.QueryDelegationRequest>): _68.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _68.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryDelegationResponse;
                fromJSON(object: any): _68.QueryDelegationResponse;
                toJSON(message: _68.QueryDelegationResponse): unknown;
                fromPartial(object: Partial<_68.QueryDelegationResponse>): _68.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _68.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _68.QueryUnbondingDelegationRequest;
                toJSON(message: _68.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: Partial<_68.QueryUnbondingDelegationRequest>): _68.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _68.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _68.QueryUnbondingDelegationResponse;
                toJSON(message: _68.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: Partial<_68.QueryUnbondingDelegationResponse>): _68.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _68.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _68.QueryDelegatorDelegationsRequest;
                toJSON(message: _68.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_68.QueryDelegatorDelegationsRequest>): _68.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _68.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _68.QueryDelegatorDelegationsResponse;
                toJSON(message: _68.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_68.QueryDelegatorDelegationsResponse>): _68.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _68.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _68.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _68.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_68.QueryDelegatorUnbondingDelegationsRequest>): _68.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _68.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _68.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _68.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_68.QueryDelegatorUnbondingDelegationsResponse>): _68.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _68.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryRedelegationsRequest;
                fromJSON(object: any): _68.QueryRedelegationsRequest;
                toJSON(message: _68.QueryRedelegationsRequest): unknown;
                fromPartial(object: Partial<_68.QueryRedelegationsRequest>): _68.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _68.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryRedelegationsResponse;
                fromJSON(object: any): _68.QueryRedelegationsResponse;
                toJSON(message: _68.QueryRedelegationsResponse): unknown;
                fromPartial(object: Partial<_68.QueryRedelegationsResponse>): _68.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _68.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _68.QueryDelegatorValidatorsRequest;
                toJSON(message: _68.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_68.QueryDelegatorValidatorsRequest>): _68.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _68.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _68.QueryDelegatorValidatorsResponse;
                toJSON(message: _68.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_68.QueryDelegatorValidatorsResponse>): _68.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _68.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _68.QueryDelegatorValidatorRequest;
                toJSON(message: _68.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: Partial<_68.QueryDelegatorValidatorRequest>): _68.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _68.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _68.QueryDelegatorValidatorResponse;
                toJSON(message: _68.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: Partial<_68.QueryDelegatorValidatorResponse>): _68.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _68.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryHistoricalInfoRequest;
                fromJSON(object: any): _68.QueryHistoricalInfoRequest;
                toJSON(message: _68.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: Partial<_68.QueryHistoricalInfoRequest>): _68.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _68.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryHistoricalInfoResponse;
                fromJSON(object: any): _68.QueryHistoricalInfoResponse;
                toJSON(message: _68.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: Partial<_68.QueryHistoricalInfoResponse>): _68.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _68.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryPoolRequest;
                fromJSON(_: any): _68.QueryPoolRequest;
                toJSON(_: _68.QueryPoolRequest): unknown;
                fromPartial(_: Partial<_68.QueryPoolRequest>): _68.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _68.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryPoolResponse;
                fromJSON(object: any): _68.QueryPoolResponse;
                toJSON(message: _68.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_68.QueryPoolResponse>): _68.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _68.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryParamsRequest;
                fromJSON(_: any): _68.QueryParamsRequest;
                toJSON(_: _68.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_68.QueryParamsRequest>): _68.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _68.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryParamsResponse;
                fromJSON(object: any): _68.QueryParamsResponse;
                toJSON(message: _68.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_68.QueryParamsResponse>): _68.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _67.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.GenesisState;
                fromJSON(object: any): _67.GenesisState;
                toJSON(message: _67.GenesisState): unknown;
                fromPartial(object: Partial<_67.GenesisState>): _67.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _67.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.LastValidatorPower;
                fromJSON(object: any): _67.LastValidatorPower;
                toJSON(message: _67.LastValidatorPower): unknown;
                fromPartial(object: Partial<_67.LastValidatorPower>): _67.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _66.AuthorizationType;
            authorizationTypeToJSON(object: _66.AuthorizationType): string;
            AuthorizationType: typeof _66.AuthorizationType;
            AuthorizationTypeSDKType: typeof _66.AuthorizationType;
            StakeAuthorization: {
                encode(message: _66.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.StakeAuthorization;
                fromJSON(object: any): _66.StakeAuthorization;
                toJSON(message: _66.StakeAuthorization): unknown;
                fromPartial(object: Partial<_66.StakeAuthorization>): _66.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _66.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.StakeAuthorization_Validators;
                fromJSON(object: any): _66.StakeAuthorization_Validators;
                toJSON(message: _66.StakeAuthorization_Validators): unknown;
                fromPartial(object: Partial<_66.StakeAuthorization_Validators>): _66.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _71.SignMode;
                signModeToJSON(object: _71.SignMode): string;
                SignMode: typeof _71.SignMode;
                SignModeSDKType: typeof _71.SignMode;
                SignatureDescriptors: {
                    encode(message: _71.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.SignatureDescriptors;
                    fromJSON(object: any): _71.SignatureDescriptors;
                    toJSON(message: _71.SignatureDescriptors): unknown;
                    fromPartial(object: Partial<_71.SignatureDescriptors>): _71.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _71.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.SignatureDescriptor;
                    fromJSON(object: any): _71.SignatureDescriptor;
                    toJSON(message: _71.SignatureDescriptor): unknown;
                    fromPartial(object: Partial<_71.SignatureDescriptor>): _71.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _71.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.SignatureDescriptor_Data;
                    fromJSON(object: any): _71.SignatureDescriptor_Data;
                    toJSON(message: _71.SignatureDescriptor_Data): unknown;
                    fromPartial(object: Partial<_71.SignatureDescriptor_Data>): _71.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _71.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _71.SignatureDescriptor_Data_Single;
                    toJSON(message: _71.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: Partial<_71.SignatureDescriptor_Data_Single>): _71.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _71.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _71.SignatureDescriptor_Data_Multi;
                    toJSON(message: _71.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: Partial<_71.SignatureDescriptor_Data_Multi>): _71.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _165.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _72.SimulateRequest): Promise<_72.SimulateResponse>;
                getTx(request: _72.GetTxRequest): Promise<_72.GetTxResponse>;
                broadcastTx(request: _72.BroadcastTxRequest): Promise<_72.BroadcastTxResponse>;
                getTxsEvent(request: _72.GetTxsEventRequest): Promise<_72.GetTxsEventResponse>;
                getBlockWithTxs(request: _72.GetBlockWithTxsRequest): Promise<_72.GetBlockWithTxsResponse>;
            };
            Tx: {
                encode(message: _73.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Tx;
                fromJSON(object: any): _73.Tx;
                toJSON(message: _73.Tx): unknown;
                fromPartial(object: Partial<_73.Tx>): _73.Tx;
            };
            TxRaw: {
                encode(message: _73.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.TxRaw;
                fromJSON(object: any): _73.TxRaw;
                toJSON(message: _73.TxRaw): unknown;
                fromPartial(object: Partial<_73.TxRaw>): _73.TxRaw;
            };
            SignDoc: {
                encode(message: _73.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.SignDoc;
                fromJSON(object: any): _73.SignDoc;
                toJSON(message: _73.SignDoc): unknown;
                fromPartial(object: Partial<_73.SignDoc>): _73.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _73.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.SignDocDirectAux;
                fromJSON(object: any): _73.SignDocDirectAux;
                toJSON(message: _73.SignDocDirectAux): unknown;
                fromPartial(object: Partial<_73.SignDocDirectAux>): _73.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _73.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.TxBody;
                fromJSON(object: any): _73.TxBody;
                toJSON(message: _73.TxBody): unknown;
                fromPartial(object: Partial<_73.TxBody>): _73.TxBody;
            };
            AuthInfo: {
                encode(message: _73.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.AuthInfo;
                fromJSON(object: any): _73.AuthInfo;
                toJSON(message: _73.AuthInfo): unknown;
                fromPartial(object: Partial<_73.AuthInfo>): _73.AuthInfo;
            };
            SignerInfo: {
                encode(message: _73.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.SignerInfo;
                fromJSON(object: any): _73.SignerInfo;
                toJSON(message: _73.SignerInfo): unknown;
                fromPartial(object: Partial<_73.SignerInfo>): _73.SignerInfo;
            };
            ModeInfo: {
                encode(message: _73.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.ModeInfo;
                fromJSON(object: any): _73.ModeInfo;
                toJSON(message: _73.ModeInfo): unknown;
                fromPartial(object: Partial<_73.ModeInfo>): _73.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _73.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.ModeInfo_Single;
                fromJSON(object: any): _73.ModeInfo_Single;
                toJSON(message: _73.ModeInfo_Single): unknown;
                fromPartial(object: Partial<_73.ModeInfo_Single>): _73.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _73.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.ModeInfo_Multi;
                fromJSON(object: any): _73.ModeInfo_Multi;
                toJSON(message: _73.ModeInfo_Multi): unknown;
                fromPartial(object: Partial<_73.ModeInfo_Multi>): _73.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _73.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Fee;
                fromJSON(object: any): _73.Fee;
                toJSON(message: _73.Fee): unknown;
                fromPartial(object: Partial<_73.Fee>): _73.Fee;
            };
            Tip: {
                encode(message: _73.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Tip;
                fromJSON(object: any): _73.Tip;
                toJSON(message: _73.Tip): unknown;
                fromPartial(object: Partial<_73.Tip>): _73.Tip;
            };
            AuxSignerData: {
                encode(message: _73.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.AuxSignerData;
                fromJSON(object: any): _73.AuxSignerData;
                toJSON(message: _73.AuxSignerData): unknown;
                fromPartial(object: Partial<_73.AuxSignerData>): _73.AuxSignerData;
            };
            orderByFromJSON(object: any): _72.OrderBy;
            orderByToJSON(object: _72.OrderBy): string;
            broadcastModeFromJSON(object: any): _72.BroadcastMode;
            broadcastModeToJSON(object: _72.BroadcastMode): string;
            OrderBy: typeof _72.OrderBy;
            OrderBySDKType: typeof _72.OrderBy;
            BroadcastMode: typeof _72.BroadcastMode;
            BroadcastModeSDKType: typeof _72.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _72.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.GetTxsEventRequest;
                fromJSON(object: any): _72.GetTxsEventRequest;
                toJSON(message: _72.GetTxsEventRequest): unknown;
                fromPartial(object: Partial<_72.GetTxsEventRequest>): _72.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _72.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.GetTxsEventResponse;
                fromJSON(object: any): _72.GetTxsEventResponse;
                toJSON(message: _72.GetTxsEventResponse): unknown;
                fromPartial(object: Partial<_72.GetTxsEventResponse>): _72.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _72.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.BroadcastTxRequest;
                fromJSON(object: any): _72.BroadcastTxRequest;
                toJSON(message: _72.BroadcastTxRequest): unknown;
                fromPartial(object: Partial<_72.BroadcastTxRequest>): _72.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _72.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.BroadcastTxResponse;
                fromJSON(object: any): _72.BroadcastTxResponse;
                toJSON(message: _72.BroadcastTxResponse): unknown;
                fromPartial(object: Partial<_72.BroadcastTxResponse>): _72.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _72.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.SimulateRequest;
                fromJSON(object: any): _72.SimulateRequest;
                toJSON(message: _72.SimulateRequest): unknown;
                fromPartial(object: Partial<_72.SimulateRequest>): _72.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _72.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.SimulateResponse;
                fromJSON(object: any): _72.SimulateResponse;
                toJSON(message: _72.SimulateResponse): unknown;
                fromPartial(object: Partial<_72.SimulateResponse>): _72.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _72.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.GetTxRequest;
                fromJSON(object: any): _72.GetTxRequest;
                toJSON(message: _72.GetTxRequest): unknown;
                fromPartial(object: Partial<_72.GetTxRequest>): _72.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _72.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.GetTxResponse;
                fromJSON(object: any): _72.GetTxResponse;
                toJSON(message: _72.GetTxResponse): unknown;
                fromPartial(object: Partial<_72.GetTxResponse>): _72.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _72.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.GetBlockWithTxsRequest;
                fromJSON(object: any): _72.GetBlockWithTxsRequest;
                toJSON(message: _72.GetBlockWithTxsRequest): unknown;
                fromPartial(object: Partial<_72.GetBlockWithTxsRequest>): _72.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _72.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.GetBlockWithTxsResponse;
                fromJSON(object: any): _72.GetBlockWithTxsResponse;
                toJSON(message: _72.GetBlockWithTxsResponse): unknown;
                fromPartial(object: Partial<_72.GetBlockWithTxsResponse>): _72.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _176.MsgClientImpl;
            QueryClientImpl: typeof _166.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _74.QueryCurrentPlanRequest): Promise<_74.QueryCurrentPlanResponse>;
                appliedPlan(request: _74.QueryAppliedPlanRequest): Promise<_74.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _74.QueryUpgradedConsensusStateRequest): Promise<_74.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _74.QueryModuleVersionsRequest): Promise<_74.QueryModuleVersionsResponse>;
                authority(request?: _74.QueryAuthorityRequest): Promise<_74.QueryAuthorityResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _75.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _75.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _75.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _75.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _75.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _75.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _75.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _75.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _75.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _75.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _75.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _75.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _75.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _75.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _75.MsgSoftwareUpgrade) => {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    };
                    fromAmino: ({ authority, plan }: {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    }) => _75.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _75.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _75.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _76.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Plan;
                fromJSON(object: any): _76.Plan;
                toJSON(message: _76.Plan): unknown;
                fromPartial(object: Partial<_76.Plan>): _76.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _76.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.SoftwareUpgradeProposal;
                fromJSON(object: any): _76.SoftwareUpgradeProposal;
                toJSON(message: _76.SoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_76.SoftwareUpgradeProposal>): _76.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _76.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _76.CancelSoftwareUpgradeProposal;
                toJSON(message: _76.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_76.CancelSoftwareUpgradeProposal>): _76.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _76.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ModuleVersion;
                fromJSON(object: any): _76.ModuleVersion;
                toJSON(message: _76.ModuleVersion): unknown;
                fromPartial(object: Partial<_76.ModuleVersion>): _76.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _75.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgSoftwareUpgrade;
                fromJSON(object: any): _75.MsgSoftwareUpgrade;
                toJSON(message: _75.MsgSoftwareUpgrade): unknown;
                fromPartial(object: Partial<_75.MsgSoftwareUpgrade>): _75.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _75.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _75.MsgSoftwareUpgradeResponse;
                toJSON(_: _75.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: Partial<_75.MsgSoftwareUpgradeResponse>): _75.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _75.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgCancelUpgrade;
                fromJSON(object: any): _75.MsgCancelUpgrade;
                toJSON(message: _75.MsgCancelUpgrade): unknown;
                fromPartial(object: Partial<_75.MsgCancelUpgrade>): _75.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _75.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgCancelUpgradeResponse;
                fromJSON(_: any): _75.MsgCancelUpgradeResponse;
                toJSON(_: _75.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: Partial<_75.MsgCancelUpgradeResponse>): _75.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _74.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryCurrentPlanRequest;
                fromJSON(_: any): _74.QueryCurrentPlanRequest;
                toJSON(_: _74.QueryCurrentPlanRequest): unknown;
                fromPartial(_: Partial<_74.QueryCurrentPlanRequest>): _74.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _74.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryCurrentPlanResponse;
                fromJSON(object: any): _74.QueryCurrentPlanResponse;
                toJSON(message: _74.QueryCurrentPlanResponse): unknown;
                fromPartial(object: Partial<_74.QueryCurrentPlanResponse>): _74.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _74.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryAppliedPlanRequest;
                fromJSON(object: any): _74.QueryAppliedPlanRequest;
                toJSON(message: _74.QueryAppliedPlanRequest): unknown;
                fromPartial(object: Partial<_74.QueryAppliedPlanRequest>): _74.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _74.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryAppliedPlanResponse;
                fromJSON(object: any): _74.QueryAppliedPlanResponse;
                toJSON(message: _74.QueryAppliedPlanResponse): unknown;
                fromPartial(object: Partial<_74.QueryAppliedPlanResponse>): _74.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _74.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _74.QueryUpgradedConsensusStateRequest;
                toJSON(message: _74.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: Partial<_74.QueryUpgradedConsensusStateRequest>): _74.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _74.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _74.QueryUpgradedConsensusStateResponse;
                toJSON(message: _74.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: Partial<_74.QueryUpgradedConsensusStateResponse>): _74.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _74.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryModuleVersionsRequest;
                fromJSON(object: any): _74.QueryModuleVersionsRequest;
                toJSON(message: _74.QueryModuleVersionsRequest): unknown;
                fromPartial(object: Partial<_74.QueryModuleVersionsRequest>): _74.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _74.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryModuleVersionsResponse;
                fromJSON(object: any): _74.QueryModuleVersionsResponse;
                toJSON(message: _74.QueryModuleVersionsResponse): unknown;
                fromPartial(object: Partial<_74.QueryModuleVersionsResponse>): _74.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _74.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryAuthorityRequest;
                fromJSON(_: any): _74.QueryAuthorityRequest;
                toJSON(_: _74.QueryAuthorityRequest): unknown;
                fromPartial(_: Partial<_74.QueryAuthorityRequest>): _74.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _74.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryAuthorityResponse;
                fromJSON(object: any): _74.QueryAuthorityResponse;
                toJSON(message: _74.QueryAuthorityResponse): unknown;
                fromPartial(object: Partial<_74.QueryAuthorityResponse>): _74.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _177.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _77.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _77.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _77.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _77.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _77.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _77.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _77.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _77.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _77.MsgCreatePeriodicVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _77.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPermanentLockedAccount(value: _77.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPeriodicVestingAccount(value: _77.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _77.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _77.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _77.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _77.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _77.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _77.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _77.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _77.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _77.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _77.MsgCreateVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    };
                    fromAmino: ({ from_address, to_address, amount, end_time, delayed }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    }) => _77.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _77.MsgCreatePermanentLockedAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _77.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _77.MsgCreatePeriodicVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, start_time, vesting_periods }: {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _77.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _78.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.BaseVestingAccount;
                fromJSON(object: any): _78.BaseVestingAccount;
                toJSON(message: _78.BaseVestingAccount): unknown;
                fromPartial(object: Partial<_78.BaseVestingAccount>): _78.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _78.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.ContinuousVestingAccount;
                fromJSON(object: any): _78.ContinuousVestingAccount;
                toJSON(message: _78.ContinuousVestingAccount): unknown;
                fromPartial(object: Partial<_78.ContinuousVestingAccount>): _78.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _78.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.DelayedVestingAccount;
                fromJSON(object: any): _78.DelayedVestingAccount;
                toJSON(message: _78.DelayedVestingAccount): unknown;
                fromPartial(object: Partial<_78.DelayedVestingAccount>): _78.DelayedVestingAccount;
            };
            Period: {
                encode(message: _78.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Period;
                fromJSON(object: any): _78.Period;
                toJSON(message: _78.Period): unknown;
                fromPartial(object: Partial<_78.Period>): _78.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _78.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.PeriodicVestingAccount;
                fromJSON(object: any): _78.PeriodicVestingAccount;
                toJSON(message: _78.PeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_78.PeriodicVestingAccount>): _78.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _78.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.PermanentLockedAccount;
                fromJSON(object: any): _78.PermanentLockedAccount;
                toJSON(message: _78.PermanentLockedAccount): unknown;
                fromPartial(object: Partial<_78.PermanentLockedAccount>): _78.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _77.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgCreateVestingAccount;
                fromJSON(object: any): _77.MsgCreateVestingAccount;
                toJSON(message: _77.MsgCreateVestingAccount): unknown;
                fromPartial(object: Partial<_77.MsgCreateVestingAccount>): _77.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _77.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _77.MsgCreateVestingAccountResponse;
                toJSON(_: _77.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: Partial<_77.MsgCreateVestingAccountResponse>): _77.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _77.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _77.MsgCreatePermanentLockedAccount;
                toJSON(message: _77.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: Partial<_77.MsgCreatePermanentLockedAccount>): _77.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _77.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _77.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _77.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: Partial<_77.MsgCreatePermanentLockedAccountResponse>): _77.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _77.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _77.MsgCreatePeriodicVestingAccount;
                toJSON(message: _77.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_77.MsgCreatePeriodicVestingAccount>): _77.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _77.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _77.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _77.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: Partial<_77.MsgCreatePeriodicVestingAccountResponse>): _77.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                bank: {
                    v1beta1: _167.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _168.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _169.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _170.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _171.MsgClientImpl;
                };
                gov: {
                    v1: _172.MsgClientImpl;
                    v1beta1: _173.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _174.MsgClientImpl;
                };
                staking: {
                    v1beta1: _175.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _176.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _177.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _4.QueryConfigRequest): Promise<_4.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _7.QueryAccountsRequest): Promise<_7.QueryAccountsResponse>;
                        account(request: _7.QueryAccountRequest): Promise<_7.QueryAccountResponse>;
                        params(request?: _7.QueryParamsRequest): Promise<_7.QueryParamsResponse>;
                        moduleAccounts(request?: _7.QueryModuleAccountsRequest): Promise<_7.QueryModuleAccountsResponse>;
                        bech32Prefix(request?: _7.Bech32PrefixRequest): Promise<_7.Bech32PrefixResponse>;
                        addressBytesToString(request: _7.AddressBytesToStringRequest): Promise<_7.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _7.AddressStringToBytesRequest): Promise<_7.AddressStringToBytesResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _11.QueryBalanceRequest): Promise<_11.QueryBalanceResponse>;
                        allBalances(request: _11.QueryAllBalancesRequest): Promise<_11.QueryAllBalancesResponse>;
                        spendableBalances(request: _11.QuerySpendableBalancesRequest): Promise<_11.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _11.QueryTotalSupplyRequest): Promise<_11.QueryTotalSupplyResponse>;
                        supplyOf(request: _11.QuerySupplyOfRequest): Promise<_11.QuerySupplyOfResponse>;
                        params(request?: _11.QueryParamsRequest): Promise<_11.QueryParamsResponse>;
                        denomMetadata(request: _11.QueryDenomMetadataRequest): Promise<_11.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _11.QueryDenomsMetadataRequest): Promise<_11.QueryDenomsMetadataResponse>;
                        denomOwners(request: _11.QueryDenomOwnersRequest): Promise<_11.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _21.GetNodeInfoRequest): Promise<_21.GetNodeInfoResponse>;
                            getSyncing(request?: _21.GetSyncingRequest): Promise<_21.GetSyncingResponse>;
                            getLatestBlock(request?: _21.GetLatestBlockRequest): Promise<_21.GetLatestBlockResponse>;
                            getBlockByHeight(request: _21.GetBlockByHeightRequest): Promise<_21.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _21.GetLatestValidatorSetRequest): Promise<_21.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _21.GetValidatorSetByHeightRequest): Promise<_21.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _35.QueryParamsRequest): Promise<_35.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _35.QueryValidatorOutstandingRewardsRequest): Promise<_35.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _35.QueryValidatorCommissionRequest): Promise<_35.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _35.QueryValidatorSlashesRequest): Promise<_35.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _35.QueryDelegationRewardsRequest): Promise<_35.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _35.QueryDelegationTotalRewardsRequest): Promise<_35.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _35.QueryDelegatorValidatorsRequest): Promise<_35.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _35.QueryDelegatorWithdrawAddressRequest): Promise<_35.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _35.QueryCommunityPoolRequest): Promise<_35.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _39.QueryEvidenceRequest): Promise<_39.QueryEvidenceResponse>;
                        allEvidence(request?: _39.QueryAllEvidenceRequest): Promise<_39.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _43.QueryAllowanceRequest): Promise<_43.QueryAllowanceResponse>;
                        allowances(request: _43.QueryAllowancesRequest): Promise<_43.QueryAllowancesResponse>;
                        allowancesByGranter(request: _43.QueryAllowancesByGranterRequest): Promise<_43.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _48.QueryProposalRequest): Promise<_48.QueryProposalResponse>;
                        proposals(request: _48.QueryProposalsRequest): Promise<_48.QueryProposalsResponse>;
                        vote(request: _48.QueryVoteRequest): Promise<_48.QueryVoteResponse>;
                        votes(request: _48.QueryVotesRequest): Promise<_48.QueryVotesResponse>;
                        params(request: _48.QueryParamsRequest): Promise<_48.QueryParamsResponse>;
                        deposit(request: _48.QueryDepositRequest): Promise<_48.QueryDepositResponse>;
                        deposits(request: _48.QueryDepositsRequest): Promise<_48.QueryDepositsResponse>;
                        tallyResult(request: _48.QueryTallyResultRequest): Promise<_48.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _52.QueryProposalRequest): Promise<_52.QueryProposalResponse>;
                        proposals(request: _52.QueryProposalsRequest): Promise<_52.QueryProposalsResponse>;
                        vote(request: _52.QueryVoteRequest): Promise<_52.QueryVoteResponse>;
                        votes(request: _52.QueryVotesRequest): Promise<_52.QueryVotesResponse>;
                        params(request: _52.QueryParamsRequest): Promise<_52.QueryParamsResponse>;
                        deposit(request: _52.QueryDepositRequest): Promise<_52.QueryDepositResponse>;
                        deposits(request: _52.QueryDepositsRequest): Promise<_52.QueryDepositsResponse>;
                        tallyResult(request: _52.QueryTallyResultRequest): Promise<_52.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _56.QueryParamsRequest): Promise<_56.QueryParamsResponse>;
                        inflation(request?: _56.QueryInflationRequest): Promise<_56.QueryInflationResponse>;
                        annualProvisions(request?: _56.QueryAnnualProvisionsRequest): Promise<_56.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                        subspaces(request?: _61.QuerySubspacesRequest): Promise<_61.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _63.QueryParamsRequest): Promise<_63.QueryParamsResponse>;
                        signingInfo(request: _63.QuerySigningInfoRequest): Promise<_63.QuerySigningInfoResponse>;
                        signingInfos(request?: _63.QuerySigningInfosRequest): Promise<_63.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _68.QueryValidatorsRequest): Promise<_68.QueryValidatorsResponse>;
                        validator(request: _68.QueryValidatorRequest): Promise<_68.QueryValidatorResponse>;
                        validatorDelegations(request: _68.QueryValidatorDelegationsRequest): Promise<_68.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _68.QueryValidatorUnbondingDelegationsRequest): Promise<_68.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _68.QueryDelegationRequest): Promise<_68.QueryDelegationResponse>;
                        unbondingDelegation(request: _68.QueryUnbondingDelegationRequest): Promise<_68.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _68.QueryDelegatorDelegationsRequest): Promise<_68.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _68.QueryDelegatorUnbondingDelegationsRequest): Promise<_68.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _68.QueryRedelegationsRequest): Promise<_68.QueryRedelegationsResponse>;
                        delegatorValidators(request: _68.QueryDelegatorValidatorsRequest): Promise<_68.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _68.QueryDelegatorValidatorRequest): Promise<_68.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _68.QueryHistoricalInfoRequest): Promise<_68.QueryHistoricalInfoResponse>;
                        pool(request?: _68.QueryPoolRequest): Promise<_68.QueryPoolResponse>;
                        params(request?: _68.QueryParamsRequest): Promise<_68.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _72.SimulateRequest): Promise<_72.SimulateResponse>;
                        getTx(request: _72.GetTxRequest): Promise<_72.GetTxResponse>;
                        broadcastTx(request: _72.BroadcastTxRequest): Promise<_72.BroadcastTxResponse>;
                        getTxsEvent(request: _72.GetTxsEventRequest): Promise<_72.GetTxsEventResponse>;
                        getBlockWithTxs(request: _72.GetBlockWithTxsRequest): Promise<_72.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _74.QueryCurrentPlanRequest): Promise<_74.QueryCurrentPlanResponse>;
                        appliedPlan(request: _74.QueryAppliedPlanRequest): Promise<_74.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _74.QueryUpgradedConsensusStateRequest): Promise<_74.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _74.QueryModuleVersionsRequest): Promise<_74.QueryModuleVersionsResponse>;
                        authority(request?: _74.QueryAuthorityRequest): Promise<_74.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
