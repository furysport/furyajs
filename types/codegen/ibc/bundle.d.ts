import * as _87 from "./applications/transfer/v1/genesis";
import * as _88 from "./applications/transfer/v1/query";
import * as _89 from "./applications/transfer/v1/transfer";
import * as _90 from "./applications/transfer/v1/tx";
import * as _91 from "./applications/transfer/v2/packet";
import * as _92 from "./core/channel/v1/channel";
import * as _93 from "./core/channel/v1/genesis";
import * as _94 from "./core/channel/v1/query";
import * as _95 from "./core/channel/v1/tx";
import * as _96 from "./core/client/v1/client";
import * as _97 from "./core/client/v1/genesis";
import * as _98 from "./core/client/v1/query";
import * as _99 from "./core/client/v1/tx";
import * as _100 from "./core/commitment/v1/commitment";
import * as _101 from "./core/connection/v1/connection";
import * as _102 from "./core/connection/v1/genesis";
import * as _103 from "./core/connection/v1/query";
import * as _104 from "./core/connection/v1/tx";
import * as _105 from "./core/port/v1/query";
import * as _106 from "./core/types/v1/genesis";
import * as _107 from "./lightclients/localhost/v1/localhost";
import * as _108 from "./lightclients/solomachine/v1/solomachine";
import * as _109 from "./lightclients/solomachine/v2/solomachine";
import * as _110 from "./lightclients/tendermint/v1/tendermint";
import * as _186 from "./applications/transfer/v1/query.rpc.Query";
import * as _187 from "./core/channel/v1/query.rpc.Query";
import * as _188 from "./core/client/v1/query.rpc.Query";
import * as _189 from "./core/connection/v1/query.rpc.Query";
import * as _190 from "./core/port/v1/query.rpc.Query";
import * as _191 from "./applications/transfer/v1/tx.rpc.msg";
import * as _192 from "./core/channel/v1/tx.rpc.msg";
import * as _193 from "./core/client/v1/tx.rpc.msg";
import * as _194 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _191.MsgClientImpl;
                QueryClientImpl: typeof _186.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _88.QueryDenomTraceRequest): Promise<_88.QueryDenomTraceResponse>;
                    denomTraces(request?: _88.QueryDenomTracesRequest): Promise<_88.QueryDenomTracesResponse>;
                    params(request?: _88.QueryParamsRequest): Promise<_88.QueryParamsResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _90.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _90.MsgTransfer): {
                            typeUrl: string;
                            value: _90.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _90.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _90.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _90.MsgTransfer): {
                            typeUrl: string;
                            value: _90.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _90.MsgTransfer) => {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                        };
                        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp }: {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                        }) => _90.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _90.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgTransfer;
                    fromJSON(object: any): _90.MsgTransfer;
                    toJSON(message: _90.MsgTransfer): unknown;
                    fromPartial(object: Partial<_90.MsgTransfer>): _90.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _90.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgTransferResponse;
                    fromJSON(_: any): _90.MsgTransferResponse;
                    toJSON(_: _90.MsgTransferResponse): unknown;
                    fromPartial(_: Partial<_90.MsgTransferResponse>): _90.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _89.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.DenomTrace;
                    fromJSON(object: any): _89.DenomTrace;
                    toJSON(message: _89.DenomTrace): unknown;
                    fromPartial(object: Partial<_89.DenomTrace>): _89.DenomTrace;
                };
                Params: {
                    encode(message: _89.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Params;
                    fromJSON(object: any): _89.Params;
                    toJSON(message: _89.Params): unknown;
                    fromPartial(object: Partial<_89.Params>): _89.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _88.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryDenomTraceRequest;
                    fromJSON(object: any): _88.QueryDenomTraceRequest;
                    toJSON(message: _88.QueryDenomTraceRequest): unknown;
                    fromPartial(object: Partial<_88.QueryDenomTraceRequest>): _88.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _88.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryDenomTraceResponse;
                    fromJSON(object: any): _88.QueryDenomTraceResponse;
                    toJSON(message: _88.QueryDenomTraceResponse): unknown;
                    fromPartial(object: Partial<_88.QueryDenomTraceResponse>): _88.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _88.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryDenomTracesRequest;
                    fromJSON(object: any): _88.QueryDenomTracesRequest;
                    toJSON(message: _88.QueryDenomTracesRequest): unknown;
                    fromPartial(object: Partial<_88.QueryDenomTracesRequest>): _88.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _88.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryDenomTracesResponse;
                    fromJSON(object: any): _88.QueryDenomTracesResponse;
                    toJSON(message: _88.QueryDenomTracesResponse): unknown;
                    fromPartial(object: Partial<_88.QueryDenomTracesResponse>): _88.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _88.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryParamsRequest;
                    fromJSON(_: any): _88.QueryParamsRequest;
                    toJSON(_: _88.QueryParamsRequest): unknown;
                    fromPartial(_: Partial<_88.QueryParamsRequest>): _88.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _88.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryParamsResponse;
                    fromJSON(object: any): _88.QueryParamsResponse;
                    toJSON(message: _88.QueryParamsResponse): unknown;
                    fromPartial(object: Partial<_88.QueryParamsResponse>): _88.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _87.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.GenesisState;
                    fromJSON(object: any): _87.GenesisState;
                    toJSON(message: _87.GenesisState): unknown;
                    fromPartial(object: Partial<_87.GenesisState>): _87.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _91.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.FungibleTokenPacketData;
                    fromJSON(object: any): _91.FungibleTokenPacketData;
                    toJSON(message: _91.FungibleTokenPacketData): unknown;
                    fromPartial(object: Partial<_91.FungibleTokenPacketData>): _91.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _192.MsgClientImpl;
                QueryClientImpl: typeof _187.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _94.QueryChannelRequest): Promise<_94.QueryChannelResponse>;
                    channels(request?: _94.QueryChannelsRequest): Promise<_94.QueryChannelsResponse>;
                    connectionChannels(request: _94.QueryConnectionChannelsRequest): Promise<_94.QueryConnectionChannelsResponse>;
                    channelClientState(request: _94.QueryChannelClientStateRequest): Promise<_94.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _94.QueryChannelConsensusStateRequest): Promise<_94.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _94.QueryPacketCommitmentRequest): Promise<_94.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _94.QueryPacketCommitmentsRequest): Promise<_94.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _94.QueryPacketReceiptRequest): Promise<_94.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _94.QueryPacketAcknowledgementRequest): Promise<_94.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _94.QueryPacketAcknowledgementsRequest): Promise<_94.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _94.QueryUnreceivedPacketsRequest): Promise<_94.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _94.QueryUnreceivedAcksRequest): Promise<_94.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _94.QueryNextSequenceReceiveRequest): Promise<_94.QueryNextSequenceReceiveResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _95.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _95.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _95.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _95.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _95.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _95.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _95.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _95.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _95.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _95.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _95.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _95.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _95.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _95.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _95.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _95.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _95.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _95.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _95.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _95.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _95.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _95.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _95.MsgRecvPacket): {
                            typeUrl: string;
                            value: _95.MsgRecvPacket;
                        };
                        timeout(value: _95.MsgTimeout): {
                            typeUrl: string;
                            value: _95.MsgTimeout;
                        };
                        timeoutOnClose(value: _95.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _95.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _95.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _95.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _95.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _95.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _95.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _95.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _95.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _95.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _95.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _95.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _95.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _95.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _95.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _95.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _95.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _95.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _95.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _95.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _95.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _95.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _95.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _95.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _95.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _95.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _95.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _95.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _95.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _95.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _95.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _95.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _95.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _95.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _95.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _95.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _95.MsgRecvPacket): {
                            typeUrl: string;
                            value: _95.MsgRecvPacket;
                        };
                        timeout(value: _95.MsgTimeout): {
                            typeUrl: string;
                            value: _95.MsgTimeout;
                        };
                        timeoutOnClose(value: _95.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _95.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _95.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _95.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _95.MsgChannelOpenInit) => {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel, signer }: {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        }) => _95.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _95.MsgChannelOpenTry) => {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, previous_channel_id, channel, counterparty_version, proof_init, proof_height, signer }: {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _95.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _95.MsgChannelOpenAck) => {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _95.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _95.MsgChannelOpenConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _95.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _95.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _95.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _95.MsgChannelCloseConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _95.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _95.MsgRecvPacket) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_commitment, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _95.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _95.MsgTimeout) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _95.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _95.MsgTimeoutOnClose) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_close, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _95.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _95.MsgAcknowledgement) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _95.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _95.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgChannelOpenInit;
                    fromJSON(object: any): _95.MsgChannelOpenInit;
                    toJSON(message: _95.MsgChannelOpenInit): unknown;
                    fromPartial(object: Partial<_95.MsgChannelOpenInit>): _95.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _95.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _95.MsgChannelOpenInitResponse;
                    toJSON(_: _95.MsgChannelOpenInitResponse): unknown;
                    fromPartial(_: Partial<_95.MsgChannelOpenInitResponse>): _95.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _95.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgChannelOpenTry;
                    fromJSON(object: any): _95.MsgChannelOpenTry;
                    toJSON(message: _95.MsgChannelOpenTry): unknown;
                    fromPartial(object: Partial<_95.MsgChannelOpenTry>): _95.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _95.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _95.MsgChannelOpenTryResponse;
                    toJSON(_: _95.MsgChannelOpenTryResponse): unknown;
                    fromPartial(_: Partial<_95.MsgChannelOpenTryResponse>): _95.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _95.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgChannelOpenAck;
                    fromJSON(object: any): _95.MsgChannelOpenAck;
                    toJSON(message: _95.MsgChannelOpenAck): unknown;
                    fromPartial(object: Partial<_95.MsgChannelOpenAck>): _95.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _95.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _95.MsgChannelOpenAckResponse;
                    toJSON(_: _95.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: Partial<_95.MsgChannelOpenAckResponse>): _95.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _95.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgChannelOpenConfirm;
                    fromJSON(object: any): _95.MsgChannelOpenConfirm;
                    toJSON(message: _95.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: Partial<_95.MsgChannelOpenConfirm>): _95.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _95.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _95.MsgChannelOpenConfirmResponse;
                    toJSON(_: _95.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_95.MsgChannelOpenConfirmResponse>): _95.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _95.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgChannelCloseInit;
                    fromJSON(object: any): _95.MsgChannelCloseInit;
                    toJSON(message: _95.MsgChannelCloseInit): unknown;
                    fromPartial(object: Partial<_95.MsgChannelCloseInit>): _95.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _95.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _95.MsgChannelCloseInitResponse;
                    toJSON(_: _95.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: Partial<_95.MsgChannelCloseInitResponse>): _95.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _95.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgChannelCloseConfirm;
                    fromJSON(object: any): _95.MsgChannelCloseConfirm;
                    toJSON(message: _95.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: Partial<_95.MsgChannelCloseConfirm>): _95.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _95.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _95.MsgChannelCloseConfirmResponse;
                    toJSON(_: _95.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: Partial<_95.MsgChannelCloseConfirmResponse>): _95.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _95.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgRecvPacket;
                    fromJSON(object: any): _95.MsgRecvPacket;
                    toJSON(message: _95.MsgRecvPacket): unknown;
                    fromPartial(object: Partial<_95.MsgRecvPacket>): _95.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _95.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgRecvPacketResponse;
                    fromJSON(_: any): _95.MsgRecvPacketResponse;
                    toJSON(_: _95.MsgRecvPacketResponse): unknown;
                    fromPartial(_: Partial<_95.MsgRecvPacketResponse>): _95.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _95.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgTimeout;
                    fromJSON(object: any): _95.MsgTimeout;
                    toJSON(message: _95.MsgTimeout): unknown;
                    fromPartial(object: Partial<_95.MsgTimeout>): _95.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _95.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgTimeoutResponse;
                    fromJSON(_: any): _95.MsgTimeoutResponse;
                    toJSON(_: _95.MsgTimeoutResponse): unknown;
                    fromPartial(_: Partial<_95.MsgTimeoutResponse>): _95.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _95.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgTimeoutOnClose;
                    fromJSON(object: any): _95.MsgTimeoutOnClose;
                    toJSON(message: _95.MsgTimeoutOnClose): unknown;
                    fromPartial(object: Partial<_95.MsgTimeoutOnClose>): _95.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _95.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _95.MsgTimeoutOnCloseResponse;
                    toJSON(_: _95.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(_: Partial<_95.MsgTimeoutOnCloseResponse>): _95.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _95.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgAcknowledgement;
                    fromJSON(object: any): _95.MsgAcknowledgement;
                    toJSON(message: _95.MsgAcknowledgement): unknown;
                    fromPartial(object: Partial<_95.MsgAcknowledgement>): _95.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _95.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgAcknowledgementResponse;
                    fromJSON(_: any): _95.MsgAcknowledgementResponse;
                    toJSON(_: _95.MsgAcknowledgementResponse): unknown;
                    fromPartial(_: Partial<_95.MsgAcknowledgementResponse>): _95.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _94.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryChannelRequest;
                    fromJSON(object: any): _94.QueryChannelRequest;
                    toJSON(message: _94.QueryChannelRequest): unknown;
                    fromPartial(object: Partial<_94.QueryChannelRequest>): _94.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _94.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryChannelResponse;
                    fromJSON(object: any): _94.QueryChannelResponse;
                    toJSON(message: _94.QueryChannelResponse): unknown;
                    fromPartial(object: Partial<_94.QueryChannelResponse>): _94.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _94.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryChannelsRequest;
                    fromJSON(object: any): _94.QueryChannelsRequest;
                    toJSON(message: _94.QueryChannelsRequest): unknown;
                    fromPartial(object: Partial<_94.QueryChannelsRequest>): _94.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _94.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryChannelsResponse;
                    fromJSON(object: any): _94.QueryChannelsResponse;
                    toJSON(message: _94.QueryChannelsResponse): unknown;
                    fromPartial(object: Partial<_94.QueryChannelsResponse>): _94.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _94.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _94.QueryConnectionChannelsRequest;
                    toJSON(message: _94.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: Partial<_94.QueryConnectionChannelsRequest>): _94.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _94.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _94.QueryConnectionChannelsResponse;
                    toJSON(message: _94.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: Partial<_94.QueryConnectionChannelsResponse>): _94.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _94.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryChannelClientStateRequest;
                    fromJSON(object: any): _94.QueryChannelClientStateRequest;
                    toJSON(message: _94.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: Partial<_94.QueryChannelClientStateRequest>): _94.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _94.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryChannelClientStateResponse;
                    fromJSON(object: any): _94.QueryChannelClientStateResponse;
                    toJSON(message: _94.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: Partial<_94.QueryChannelClientStateResponse>): _94.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _94.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _94.QueryChannelConsensusStateRequest;
                    toJSON(message: _94.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_94.QueryChannelConsensusStateRequest>): _94.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _94.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _94.QueryChannelConsensusStateResponse;
                    toJSON(message: _94.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_94.QueryChannelConsensusStateResponse>): _94.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _94.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _94.QueryPacketCommitmentRequest;
                    toJSON(message: _94.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: Partial<_94.QueryPacketCommitmentRequest>): _94.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _94.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _94.QueryPacketCommitmentResponse;
                    toJSON(message: _94.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: Partial<_94.QueryPacketCommitmentResponse>): _94.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _94.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _94.QueryPacketCommitmentsRequest;
                    toJSON(message: _94.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: Partial<_94.QueryPacketCommitmentsRequest>): _94.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _94.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _94.QueryPacketCommitmentsResponse;
                    toJSON(message: _94.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: Partial<_94.QueryPacketCommitmentsResponse>): _94.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _94.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryPacketReceiptRequest;
                    fromJSON(object: any): _94.QueryPacketReceiptRequest;
                    toJSON(message: _94.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: Partial<_94.QueryPacketReceiptRequest>): _94.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _94.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryPacketReceiptResponse;
                    fromJSON(object: any): _94.QueryPacketReceiptResponse;
                    toJSON(message: _94.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: Partial<_94.QueryPacketReceiptResponse>): _94.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _94.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _94.QueryPacketAcknowledgementRequest;
                    toJSON(message: _94.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: Partial<_94.QueryPacketAcknowledgementRequest>): _94.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _94.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _94.QueryPacketAcknowledgementResponse;
                    toJSON(message: _94.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: Partial<_94.QueryPacketAcknowledgementResponse>): _94.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _94.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _94.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _94.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: Partial<_94.QueryPacketAcknowledgementsRequest>): _94.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _94.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _94.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _94.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: Partial<_94.QueryPacketAcknowledgementsResponse>): _94.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _94.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _94.QueryUnreceivedPacketsRequest;
                    toJSON(message: _94.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: Partial<_94.QueryUnreceivedPacketsRequest>): _94.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _94.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _94.QueryUnreceivedPacketsResponse;
                    toJSON(message: _94.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: Partial<_94.QueryUnreceivedPacketsResponse>): _94.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _94.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _94.QueryUnreceivedAcksRequest;
                    toJSON(message: _94.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: Partial<_94.QueryUnreceivedAcksRequest>): _94.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _94.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _94.QueryUnreceivedAcksResponse;
                    toJSON(message: _94.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: Partial<_94.QueryUnreceivedAcksResponse>): _94.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _94.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _94.QueryNextSequenceReceiveRequest;
                    toJSON(message: _94.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: Partial<_94.QueryNextSequenceReceiveRequest>): _94.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _94.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _94.QueryNextSequenceReceiveResponse;
                    toJSON(message: _94.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: Partial<_94.QueryNextSequenceReceiveResponse>): _94.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _93.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.GenesisState;
                    fromJSON(object: any): _93.GenesisState;
                    toJSON(message: _93.GenesisState): unknown;
                    fromPartial(object: Partial<_93.GenesisState>): _93.GenesisState;
                };
                PacketSequence: {
                    encode(message: _93.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.PacketSequence;
                    fromJSON(object: any): _93.PacketSequence;
                    toJSON(message: _93.PacketSequence): unknown;
                    fromPartial(object: Partial<_93.PacketSequence>): _93.PacketSequence;
                };
                stateFromJSON(object: any): _92.State;
                stateToJSON(object: _92.State): string;
                orderFromJSON(object: any): _92.Order;
                orderToJSON(object: _92.Order): string;
                State: typeof _92.State;
                StateSDKType: typeof _92.StateSDKType;
                Order: typeof _92.Order;
                OrderSDKType: typeof _92.OrderSDKType;
                Channel: {
                    encode(message: _92.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Channel;
                    fromJSON(object: any): _92.Channel;
                    toJSON(message: _92.Channel): unknown;
                    fromPartial(object: Partial<_92.Channel>): _92.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _92.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.IdentifiedChannel;
                    fromJSON(object: any): _92.IdentifiedChannel;
                    toJSON(message: _92.IdentifiedChannel): unknown;
                    fromPartial(object: Partial<_92.IdentifiedChannel>): _92.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _92.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Counterparty;
                    fromJSON(object: any): _92.Counterparty;
                    toJSON(message: _92.Counterparty): unknown;
                    fromPartial(object: Partial<_92.Counterparty>): _92.Counterparty;
                };
                Packet: {
                    encode(message: _92.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Packet;
                    fromJSON(object: any): _92.Packet;
                    toJSON(message: _92.Packet): unknown;
                    fromPartial(object: Partial<_92.Packet>): _92.Packet;
                };
                PacketState: {
                    encode(message: _92.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.PacketState;
                    fromJSON(object: any): _92.PacketState;
                    toJSON(message: _92.PacketState): unknown;
                    fromPartial(object: Partial<_92.PacketState>): _92.PacketState;
                };
                Acknowledgement: {
                    encode(message: _92.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Acknowledgement;
                    fromJSON(object: any): _92.Acknowledgement;
                    toJSON(message: _92.Acknowledgement): unknown;
                    fromPartial(object: Partial<_92.Acknowledgement>): _92.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _193.MsgClientImpl;
                QueryClientImpl: typeof _188.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _98.QueryClientStateRequest): Promise<_98.QueryClientStateResponse>;
                    clientStates(request?: _98.QueryClientStatesRequest): Promise<_98.QueryClientStatesResponse>;
                    consensusState(request: _98.QueryConsensusStateRequest): Promise<_98.QueryConsensusStateResponse>;
                    consensusStates(request: _98.QueryConsensusStatesRequest): Promise<_98.QueryConsensusStatesResponse>;
                    clientStatus(request: _98.QueryClientStatusRequest): Promise<_98.QueryClientStatusResponse>;
                    clientParams(request?: _98.QueryClientParamsRequest): Promise<_98.QueryClientParamsResponse>;
                    upgradedClientState(request?: _98.QueryUpgradedClientStateRequest): Promise<_98.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _98.QueryUpgradedConsensusStateRequest): Promise<_98.QueryUpgradedConsensusStateResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _99.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _99.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _99.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _99.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _99.MsgCreateClient): {
                            typeUrl: string;
                            value: _99.MsgCreateClient;
                        };
                        updateClient(value: _99.MsgUpdateClient): {
                            typeUrl: string;
                            value: _99.MsgUpdateClient;
                        };
                        upgradeClient(value: _99.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _99.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _99.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _99.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _99.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _99.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _99.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _99.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _99.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _99.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _99.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _99.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _99.MsgCreateClient): {
                            typeUrl: string;
                            value: _99.MsgCreateClient;
                        };
                        updateClient(value: _99.MsgUpdateClient): {
                            typeUrl: string;
                            value: _99.MsgUpdateClient;
                        };
                        upgradeClient(value: _99.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _99.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _99.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _99.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _99.MsgCreateClient) => {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_state, consensus_state, signer }: {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _99.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _99.MsgUpdateClient) => {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, header, signer }: {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _99.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _99.MsgUpgradeClient) => {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        };
                        fromAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer }: {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        }) => _99.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _99.MsgSubmitMisbehaviour) => {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, misbehaviour, signer }: {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _99.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _99.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgCreateClient;
                    fromJSON(object: any): _99.MsgCreateClient;
                    toJSON(message: _99.MsgCreateClient): unknown;
                    fromPartial(object: Partial<_99.MsgCreateClient>): _99.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _99.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgCreateClientResponse;
                    fromJSON(_: any): _99.MsgCreateClientResponse;
                    toJSON(_: _99.MsgCreateClientResponse): unknown;
                    fromPartial(_: Partial<_99.MsgCreateClientResponse>): _99.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _99.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgUpdateClient;
                    fromJSON(object: any): _99.MsgUpdateClient;
                    toJSON(message: _99.MsgUpdateClient): unknown;
                    fromPartial(object: Partial<_99.MsgUpdateClient>): _99.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _99.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgUpdateClientResponse;
                    fromJSON(_: any): _99.MsgUpdateClientResponse;
                    toJSON(_: _99.MsgUpdateClientResponse): unknown;
                    fromPartial(_: Partial<_99.MsgUpdateClientResponse>): _99.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _99.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgUpgradeClient;
                    fromJSON(object: any): _99.MsgUpgradeClient;
                    toJSON(message: _99.MsgUpgradeClient): unknown;
                    fromPartial(object: Partial<_99.MsgUpgradeClient>): _99.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _99.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgUpgradeClientResponse;
                    fromJSON(_: any): _99.MsgUpgradeClientResponse;
                    toJSON(_: _99.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: Partial<_99.MsgUpgradeClientResponse>): _99.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _99.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _99.MsgSubmitMisbehaviour;
                    toJSON(message: _99.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: Partial<_99.MsgSubmitMisbehaviour>): _99.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _99.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _99.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _99.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: Partial<_99.MsgSubmitMisbehaviourResponse>): _99.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _98.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryClientStateRequest;
                    fromJSON(object: any): _98.QueryClientStateRequest;
                    toJSON(message: _98.QueryClientStateRequest): unknown;
                    fromPartial(object: Partial<_98.QueryClientStateRequest>): _98.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _98.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryClientStateResponse;
                    fromJSON(object: any): _98.QueryClientStateResponse;
                    toJSON(message: _98.QueryClientStateResponse): unknown;
                    fromPartial(object: Partial<_98.QueryClientStateResponse>): _98.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _98.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryClientStatesRequest;
                    fromJSON(object: any): _98.QueryClientStatesRequest;
                    toJSON(message: _98.QueryClientStatesRequest): unknown;
                    fromPartial(object: Partial<_98.QueryClientStatesRequest>): _98.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _98.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryClientStatesResponse;
                    fromJSON(object: any): _98.QueryClientStatesResponse;
                    toJSON(message: _98.QueryClientStatesResponse): unknown;
                    fromPartial(object: Partial<_98.QueryClientStatesResponse>): _98.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _98.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryConsensusStateRequest;
                    fromJSON(object: any): _98.QueryConsensusStateRequest;
                    toJSON(message: _98.QueryConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_98.QueryConsensusStateRequest>): _98.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _98.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryConsensusStateResponse;
                    fromJSON(object: any): _98.QueryConsensusStateResponse;
                    toJSON(message: _98.QueryConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_98.QueryConsensusStateResponse>): _98.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _98.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryConsensusStatesRequest;
                    fromJSON(object: any): _98.QueryConsensusStatesRequest;
                    toJSON(message: _98.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: Partial<_98.QueryConsensusStatesRequest>): _98.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _98.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryConsensusStatesResponse;
                    fromJSON(object: any): _98.QueryConsensusStatesResponse;
                    toJSON(message: _98.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: Partial<_98.QueryConsensusStatesResponse>): _98.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _98.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryClientStatusRequest;
                    fromJSON(object: any): _98.QueryClientStatusRequest;
                    toJSON(message: _98.QueryClientStatusRequest): unknown;
                    fromPartial(object: Partial<_98.QueryClientStatusRequest>): _98.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _98.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryClientStatusResponse;
                    fromJSON(object: any): _98.QueryClientStatusResponse;
                    toJSON(message: _98.QueryClientStatusResponse): unknown;
                    fromPartial(object: Partial<_98.QueryClientStatusResponse>): _98.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _98.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryClientParamsRequest;
                    fromJSON(_: any): _98.QueryClientParamsRequest;
                    toJSON(_: _98.QueryClientParamsRequest): unknown;
                    fromPartial(_: Partial<_98.QueryClientParamsRequest>): _98.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _98.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryClientParamsResponse;
                    fromJSON(object: any): _98.QueryClientParamsResponse;
                    toJSON(message: _98.QueryClientParamsResponse): unknown;
                    fromPartial(object: Partial<_98.QueryClientParamsResponse>): _98.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _98.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _98.QueryUpgradedClientStateRequest;
                    toJSON(_: _98.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: Partial<_98.QueryUpgradedClientStateRequest>): _98.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _98.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _98.QueryUpgradedClientStateResponse;
                    toJSON(message: _98.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: Partial<_98.QueryUpgradedClientStateResponse>): _98.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _98.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _98.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _98.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: Partial<_98.QueryUpgradedConsensusStateRequest>): _98.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _98.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _98.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _98.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_98.QueryUpgradedConsensusStateResponse>): _98.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _97.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.GenesisState;
                    fromJSON(object: any): _97.GenesisState;
                    toJSON(message: _97.GenesisState): unknown;
                    fromPartial(object: Partial<_97.GenesisState>): _97.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _97.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.GenesisMetadata;
                    fromJSON(object: any): _97.GenesisMetadata;
                    toJSON(message: _97.GenesisMetadata): unknown;
                    fromPartial(object: Partial<_97.GenesisMetadata>): _97.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _97.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _97.IdentifiedGenesisMetadata;
                    toJSON(message: _97.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: Partial<_97.IdentifiedGenesisMetadata>): _97.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _96.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.IdentifiedClientState;
                    fromJSON(object: any): _96.IdentifiedClientState;
                    toJSON(message: _96.IdentifiedClientState): unknown;
                    fromPartial(object: Partial<_96.IdentifiedClientState>): _96.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _96.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ConsensusStateWithHeight;
                    fromJSON(object: any): _96.ConsensusStateWithHeight;
                    toJSON(message: _96.ConsensusStateWithHeight): unknown;
                    fromPartial(object: Partial<_96.ConsensusStateWithHeight>): _96.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _96.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ClientConsensusStates;
                    fromJSON(object: any): _96.ClientConsensusStates;
                    toJSON(message: _96.ClientConsensusStates): unknown;
                    fromPartial(object: Partial<_96.ClientConsensusStates>): _96.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _96.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ClientUpdateProposal;
                    fromJSON(object: any): _96.ClientUpdateProposal;
                    toJSON(message: _96.ClientUpdateProposal): unknown;
                    fromPartial(object: Partial<_96.ClientUpdateProposal>): _96.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _96.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.UpgradeProposal;
                    fromJSON(object: any): _96.UpgradeProposal;
                    toJSON(message: _96.UpgradeProposal): unknown;
                    fromPartial(object: Partial<_96.UpgradeProposal>): _96.UpgradeProposal;
                };
                Height: {
                    encode(message: _96.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Height;
                    fromJSON(object: any): _96.Height;
                    toJSON(message: _96.Height): unknown;
                    fromPartial(object: Partial<_96.Height>): _96.Height;
                };
                Params: {
                    encode(message: _96.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Params;
                    fromJSON(object: any): _96.Params;
                    toJSON(message: _96.Params): unknown;
                    fromPartial(object: Partial<_96.Params>): _96.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _100.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MerkleRoot;
                    fromJSON(object: any): _100.MerkleRoot;
                    toJSON(message: _100.MerkleRoot): unknown;
                    fromPartial(object: Partial<_100.MerkleRoot>): _100.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _100.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MerklePrefix;
                    fromJSON(object: any): _100.MerklePrefix;
                    toJSON(message: _100.MerklePrefix): unknown;
                    fromPartial(object: Partial<_100.MerklePrefix>): _100.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _100.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MerklePath;
                    fromJSON(object: any): _100.MerklePath;
                    toJSON(message: _100.MerklePath): unknown;
                    fromPartial(object: Partial<_100.MerklePath>): _100.MerklePath;
                };
                MerkleProof: {
                    encode(message: _100.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MerkleProof;
                    fromJSON(object: any): _100.MerkleProof;
                    toJSON(message: _100.MerkleProof): unknown;
                    fromPartial(object: Partial<_100.MerkleProof>): _100.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _194.MsgClientImpl;
                QueryClientImpl: typeof _189.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _103.QueryConnectionRequest): Promise<_103.QueryConnectionResponse>;
                    connections(request?: _103.QueryConnectionsRequest): Promise<_103.QueryConnectionsResponse>;
                    clientConnections(request: _103.QueryClientConnectionsRequest): Promise<_103.QueryClientConnectionsResponse>;
                    connectionClientState(request: _103.QueryConnectionClientStateRequest): Promise<_103.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _103.QueryConnectionConsensusStateRequest): Promise<_103.QueryConnectionConsensusStateResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _104.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _104.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _104.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _104.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _104.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _104.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _104.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _104.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _104.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _104.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _104.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _104.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _104.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _104.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _104.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _104.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _104.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _104.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _104.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _104.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _104.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _104.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _104.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _104.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _104.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _104.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _104.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _104.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _104.MsgConnectionOpenInit) => {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        };
                        fromAmino: ({ client_id, counterparty, version, delay_period, signer }: {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        }) => _104.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _104.MsgConnectionOpenTry) => {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ client_id, previous_connection_id, client_state, counterparty, delay_period, counterparty_versions, proof_height, proof_init, proof_client, proof_consensus, consensus_height, signer }: {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _104.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _104.MsgConnectionOpenAck) => {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, counterparty_connection_id, version, client_state, proof_height, proof_try, proof_client, proof_consensus, consensus_height, signer }: {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _104.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _104.MsgConnectionOpenConfirm) => {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, proof_ack, proof_height, signer }: {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _104.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _104.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgConnectionOpenInit;
                    fromJSON(object: any): _104.MsgConnectionOpenInit;
                    toJSON(message: _104.MsgConnectionOpenInit): unknown;
                    fromPartial(object: Partial<_104.MsgConnectionOpenInit>): _104.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _104.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _104.MsgConnectionOpenInitResponse;
                    toJSON(_: _104.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: Partial<_104.MsgConnectionOpenInitResponse>): _104.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _104.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgConnectionOpenTry;
                    fromJSON(object: any): _104.MsgConnectionOpenTry;
                    toJSON(message: _104.MsgConnectionOpenTry): unknown;
                    fromPartial(object: Partial<_104.MsgConnectionOpenTry>): _104.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _104.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _104.MsgConnectionOpenTryResponse;
                    toJSON(_: _104.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: Partial<_104.MsgConnectionOpenTryResponse>): _104.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _104.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgConnectionOpenAck;
                    fromJSON(object: any): _104.MsgConnectionOpenAck;
                    toJSON(message: _104.MsgConnectionOpenAck): unknown;
                    fromPartial(object: Partial<_104.MsgConnectionOpenAck>): _104.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _104.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _104.MsgConnectionOpenAckResponse;
                    toJSON(_: _104.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: Partial<_104.MsgConnectionOpenAckResponse>): _104.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _104.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _104.MsgConnectionOpenConfirm;
                    toJSON(message: _104.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: Partial<_104.MsgConnectionOpenConfirm>): _104.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _104.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _104.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _104.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_104.MsgConnectionOpenConfirmResponse>): _104.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _103.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryConnectionRequest;
                    fromJSON(object: any): _103.QueryConnectionRequest;
                    toJSON(message: _103.QueryConnectionRequest): unknown;
                    fromPartial(object: Partial<_103.QueryConnectionRequest>): _103.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _103.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryConnectionResponse;
                    fromJSON(object: any): _103.QueryConnectionResponse;
                    toJSON(message: _103.QueryConnectionResponse): unknown;
                    fromPartial(object: Partial<_103.QueryConnectionResponse>): _103.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _103.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryConnectionsRequest;
                    fromJSON(object: any): _103.QueryConnectionsRequest;
                    toJSON(message: _103.QueryConnectionsRequest): unknown;
                    fromPartial(object: Partial<_103.QueryConnectionsRequest>): _103.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _103.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryConnectionsResponse;
                    fromJSON(object: any): _103.QueryConnectionsResponse;
                    toJSON(message: _103.QueryConnectionsResponse): unknown;
                    fromPartial(object: Partial<_103.QueryConnectionsResponse>): _103.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _103.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryClientConnectionsRequest;
                    fromJSON(object: any): _103.QueryClientConnectionsRequest;
                    toJSON(message: _103.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: Partial<_103.QueryClientConnectionsRequest>): _103.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _103.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryClientConnectionsResponse;
                    fromJSON(object: any): _103.QueryClientConnectionsResponse;
                    toJSON(message: _103.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: Partial<_103.QueryClientConnectionsResponse>): _103.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _103.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _103.QueryConnectionClientStateRequest;
                    toJSON(message: _103.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: Partial<_103.QueryConnectionClientStateRequest>): _103.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _103.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _103.QueryConnectionClientStateResponse;
                    toJSON(message: _103.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: Partial<_103.QueryConnectionClientStateResponse>): _103.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _103.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _103.QueryConnectionConsensusStateRequest;
                    toJSON(message: _103.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_103.QueryConnectionConsensusStateRequest>): _103.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _103.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _103.QueryConnectionConsensusStateResponse;
                    toJSON(message: _103.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_103.QueryConnectionConsensusStateResponse>): _103.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _102.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.GenesisState;
                    fromJSON(object: any): _102.GenesisState;
                    toJSON(message: _102.GenesisState): unknown;
                    fromPartial(object: Partial<_102.GenesisState>): _102.GenesisState;
                };
                stateFromJSON(object: any): _101.State;
                stateToJSON(object: _101.State): string;
                State: typeof _101.State;
                StateSDKType: typeof _101.StateSDKType;
                ConnectionEnd: {
                    encode(message: _101.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ConnectionEnd;
                    fromJSON(object: any): _101.ConnectionEnd;
                    toJSON(message: _101.ConnectionEnd): unknown;
                    fromPartial(object: Partial<_101.ConnectionEnd>): _101.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _101.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.IdentifiedConnection;
                    fromJSON(object: any): _101.IdentifiedConnection;
                    toJSON(message: _101.IdentifiedConnection): unknown;
                    fromPartial(object: Partial<_101.IdentifiedConnection>): _101.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _101.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Counterparty;
                    fromJSON(object: any): _101.Counterparty;
                    toJSON(message: _101.Counterparty): unknown;
                    fromPartial(object: Partial<_101.Counterparty>): _101.Counterparty;
                };
                ClientPaths: {
                    encode(message: _101.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ClientPaths;
                    fromJSON(object: any): _101.ClientPaths;
                    toJSON(message: _101.ClientPaths): unknown;
                    fromPartial(object: Partial<_101.ClientPaths>): _101.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _101.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ConnectionPaths;
                    fromJSON(object: any): _101.ConnectionPaths;
                    toJSON(message: _101.ConnectionPaths): unknown;
                    fromPartial(object: Partial<_101.ConnectionPaths>): _101.ConnectionPaths;
                };
                Version: {
                    encode(message: _101.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Version;
                    fromJSON(object: any): _101.Version;
                    toJSON(message: _101.Version): unknown;
                    fromPartial(object: Partial<_101.Version>): _101.Version;
                };
                Params: {
                    encode(message: _101.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Params;
                    fromJSON(object: any): _101.Params;
                    toJSON(message: _101.Params): unknown;
                    fromPartial(object: Partial<_101.Params>): _101.Params;
                };
            };
        }
        namespace port {
            const v1: {
                QueryClientImpl: typeof _190.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    appVersion(request: _105.QueryAppVersionRequest): Promise<_105.QueryAppVersionResponse>;
                };
                QueryAppVersionRequest: {
                    encode(message: _105.QueryAppVersionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryAppVersionRequest;
                    fromJSON(object: any): _105.QueryAppVersionRequest;
                    toJSON(message: _105.QueryAppVersionRequest): unknown;
                    fromPartial(object: Partial<_105.QueryAppVersionRequest>): _105.QueryAppVersionRequest;
                };
                QueryAppVersionResponse: {
                    encode(message: _105.QueryAppVersionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryAppVersionResponse;
                    fromJSON(object: any): _105.QueryAppVersionResponse;
                    toJSON(message: _105.QueryAppVersionResponse): unknown;
                    fromPartial(object: Partial<_105.QueryAppVersionResponse>): _105.QueryAppVersionResponse;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _106.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.GenesisState;
                    fromJSON(object: any): _106.GenesisState;
                    toJSON(message: _106.GenesisState): unknown;
                    fromPartial(object: Partial<_106.GenesisState>): _106.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _107.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ClientState;
                    fromJSON(object: any): _107.ClientState;
                    toJSON(message: _107.ClientState): unknown;
                    fromPartial(object: Partial<_107.ClientState>): _107.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _108.DataType;
                dataTypeToJSON(object: _108.DataType): string;
                DataType: typeof _108.DataType;
                DataTypeSDKType: typeof _108.DataTypeSDKType;
                ClientState: {
                    encode(message: _108.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.ClientState;
                    fromJSON(object: any): _108.ClientState;
                    toJSON(message: _108.ClientState): unknown;
                    fromPartial(object: Partial<_108.ClientState>): _108.ClientState;
                };
                ConsensusState: {
                    encode(message: _108.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.ConsensusState;
                    fromJSON(object: any): _108.ConsensusState;
                    toJSON(message: _108.ConsensusState): unknown;
                    fromPartial(object: Partial<_108.ConsensusState>): _108.ConsensusState;
                };
                Header: {
                    encode(message: _108.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.Header;
                    fromJSON(object: any): _108.Header;
                    toJSON(message: _108.Header): unknown;
                    fromPartial(object: Partial<_108.Header>): _108.Header;
                };
                Misbehaviour: {
                    encode(message: _108.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.Misbehaviour;
                    fromJSON(object: any): _108.Misbehaviour;
                    toJSON(message: _108.Misbehaviour): unknown;
                    fromPartial(object: Partial<_108.Misbehaviour>): _108.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _108.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.SignatureAndData;
                    fromJSON(object: any): _108.SignatureAndData;
                    toJSON(message: _108.SignatureAndData): unknown;
                    fromPartial(object: Partial<_108.SignatureAndData>): _108.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _108.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.TimestampedSignatureData;
                    fromJSON(object: any): _108.TimestampedSignatureData;
                    toJSON(message: _108.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_108.TimestampedSignatureData>): _108.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _108.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.SignBytes;
                    fromJSON(object: any): _108.SignBytes;
                    toJSON(message: _108.SignBytes): unknown;
                    fromPartial(object: Partial<_108.SignBytes>): _108.SignBytes;
                };
                HeaderData: {
                    encode(message: _108.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.HeaderData;
                    fromJSON(object: any): _108.HeaderData;
                    toJSON(message: _108.HeaderData): unknown;
                    fromPartial(object: Partial<_108.HeaderData>): _108.HeaderData;
                };
                ClientStateData: {
                    encode(message: _108.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.ClientStateData;
                    fromJSON(object: any): _108.ClientStateData;
                    toJSON(message: _108.ClientStateData): unknown;
                    fromPartial(object: Partial<_108.ClientStateData>): _108.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _108.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.ConsensusStateData;
                    fromJSON(object: any): _108.ConsensusStateData;
                    toJSON(message: _108.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_108.ConsensusStateData>): _108.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _108.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.ConnectionStateData;
                    fromJSON(object: any): _108.ConnectionStateData;
                    toJSON(message: _108.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_108.ConnectionStateData>): _108.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _108.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.ChannelStateData;
                    fromJSON(object: any): _108.ChannelStateData;
                    toJSON(message: _108.ChannelStateData): unknown;
                    fromPartial(object: Partial<_108.ChannelStateData>): _108.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _108.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.PacketCommitmentData;
                    fromJSON(object: any): _108.PacketCommitmentData;
                    toJSON(message: _108.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_108.PacketCommitmentData>): _108.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _108.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.PacketAcknowledgementData;
                    fromJSON(object: any): _108.PacketAcknowledgementData;
                    toJSON(message: _108.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_108.PacketAcknowledgementData>): _108.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _108.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.PacketReceiptAbsenceData;
                    fromJSON(object: any): _108.PacketReceiptAbsenceData;
                    toJSON(message: _108.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_108.PacketReceiptAbsenceData>): _108.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _108.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.NextSequenceRecvData;
                    fromJSON(object: any): _108.NextSequenceRecvData;
                    toJSON(message: _108.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_108.NextSequenceRecvData>): _108.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _109.DataType;
                dataTypeToJSON(object: _109.DataType): string;
                DataType: typeof _109.DataType;
                DataTypeSDKType: typeof _109.DataTypeSDKType;
                ClientState: {
                    encode(message: _109.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.ClientState;
                    fromJSON(object: any): _109.ClientState;
                    toJSON(message: _109.ClientState): unknown;
                    fromPartial(object: Partial<_109.ClientState>): _109.ClientState;
                };
                ConsensusState: {
                    encode(message: _109.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.ConsensusState;
                    fromJSON(object: any): _109.ConsensusState;
                    toJSON(message: _109.ConsensusState): unknown;
                    fromPartial(object: Partial<_109.ConsensusState>): _109.ConsensusState;
                };
                Header: {
                    encode(message: _109.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Header;
                    fromJSON(object: any): _109.Header;
                    toJSON(message: _109.Header): unknown;
                    fromPartial(object: Partial<_109.Header>): _109.Header;
                };
                Misbehaviour: {
                    encode(message: _109.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Misbehaviour;
                    fromJSON(object: any): _109.Misbehaviour;
                    toJSON(message: _109.Misbehaviour): unknown;
                    fromPartial(object: Partial<_109.Misbehaviour>): _109.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _109.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.SignatureAndData;
                    fromJSON(object: any): _109.SignatureAndData;
                    toJSON(message: _109.SignatureAndData): unknown;
                    fromPartial(object: Partial<_109.SignatureAndData>): _109.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _109.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.TimestampedSignatureData;
                    fromJSON(object: any): _109.TimestampedSignatureData;
                    toJSON(message: _109.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_109.TimestampedSignatureData>): _109.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _109.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.SignBytes;
                    fromJSON(object: any): _109.SignBytes;
                    toJSON(message: _109.SignBytes): unknown;
                    fromPartial(object: Partial<_109.SignBytes>): _109.SignBytes;
                };
                HeaderData: {
                    encode(message: _109.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.HeaderData;
                    fromJSON(object: any): _109.HeaderData;
                    toJSON(message: _109.HeaderData): unknown;
                    fromPartial(object: Partial<_109.HeaderData>): _109.HeaderData;
                };
                ClientStateData: {
                    encode(message: _109.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.ClientStateData;
                    fromJSON(object: any): _109.ClientStateData;
                    toJSON(message: _109.ClientStateData): unknown;
                    fromPartial(object: Partial<_109.ClientStateData>): _109.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _109.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.ConsensusStateData;
                    fromJSON(object: any): _109.ConsensusStateData;
                    toJSON(message: _109.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_109.ConsensusStateData>): _109.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _109.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.ConnectionStateData;
                    fromJSON(object: any): _109.ConnectionStateData;
                    toJSON(message: _109.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_109.ConnectionStateData>): _109.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _109.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.ChannelStateData;
                    fromJSON(object: any): _109.ChannelStateData;
                    toJSON(message: _109.ChannelStateData): unknown;
                    fromPartial(object: Partial<_109.ChannelStateData>): _109.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _109.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.PacketCommitmentData;
                    fromJSON(object: any): _109.PacketCommitmentData;
                    toJSON(message: _109.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_109.PacketCommitmentData>): _109.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _109.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.PacketAcknowledgementData;
                    fromJSON(object: any): _109.PacketAcknowledgementData;
                    toJSON(message: _109.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_109.PacketAcknowledgementData>): _109.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _109.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.PacketReceiptAbsenceData;
                    fromJSON(object: any): _109.PacketReceiptAbsenceData;
                    toJSON(message: _109.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_109.PacketReceiptAbsenceData>): _109.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _109.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.NextSequenceRecvData;
                    fromJSON(object: any): _109.NextSequenceRecvData;
                    toJSON(message: _109.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_109.NextSequenceRecvData>): _109.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _110.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.ClientState;
                    fromJSON(object: any): _110.ClientState;
                    toJSON(message: _110.ClientState): unknown;
                    fromPartial(object: Partial<_110.ClientState>): _110.ClientState;
                };
                ConsensusState: {
                    encode(message: _110.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.ConsensusState;
                    fromJSON(object: any): _110.ConsensusState;
                    toJSON(message: _110.ConsensusState): unknown;
                    fromPartial(object: Partial<_110.ConsensusState>): _110.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _110.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Misbehaviour;
                    fromJSON(object: any): _110.Misbehaviour;
                    toJSON(message: _110.Misbehaviour): unknown;
                    fromPartial(object: Partial<_110.Misbehaviour>): _110.Misbehaviour;
                };
                Header: {
                    encode(message: _110.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Header;
                    fromJSON(object: any): _110.Header;
                    toJSON(message: _110.Header): unknown;
                    fromPartial(object: Partial<_110.Header>): _110.Header;
                };
                Fraction: {
                    encode(message: _110.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Fraction;
                    fromJSON(object: any): _110.Fraction;
                    toJSON(message: _110.Fraction): unknown;
                    fromPartial(object: Partial<_110.Fraction>): _110.Fraction;
                };
            };
        }
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _191.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _192.MsgClientImpl;
                    };
                    client: {
                        v1: _193.MsgClientImpl;
                    };
                    connection: {
                        v1: _194.MsgClientImpl;
                    };
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
            ibc: {
                applications: {
                    transfer: {
                        v1: {
                            denomTrace(request: _88.QueryDenomTraceRequest): Promise<_88.QueryDenomTraceResponse>;
                            denomTraces(request?: _88.QueryDenomTracesRequest): Promise<_88.QueryDenomTracesResponse>;
                            params(request?: _88.QueryParamsRequest): Promise<_88.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _94.QueryChannelRequest): Promise<_94.QueryChannelResponse>;
                            channels(request?: _94.QueryChannelsRequest): Promise<_94.QueryChannelsResponse>;
                            connectionChannels(request: _94.QueryConnectionChannelsRequest): Promise<_94.QueryConnectionChannelsResponse>;
                            channelClientState(request: _94.QueryChannelClientStateRequest): Promise<_94.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _94.QueryChannelConsensusStateRequest): Promise<_94.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _94.QueryPacketCommitmentRequest): Promise<_94.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _94.QueryPacketCommitmentsRequest): Promise<_94.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _94.QueryPacketReceiptRequest): Promise<_94.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _94.QueryPacketAcknowledgementRequest): Promise<_94.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _94.QueryPacketAcknowledgementsRequest): Promise<_94.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _94.QueryUnreceivedPacketsRequest): Promise<_94.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _94.QueryUnreceivedAcksRequest): Promise<_94.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _94.QueryNextSequenceReceiveRequest): Promise<_94.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _98.QueryClientStateRequest): Promise<_98.QueryClientStateResponse>;
                            clientStates(request?: _98.QueryClientStatesRequest): Promise<_98.QueryClientStatesResponse>;
                            consensusState(request: _98.QueryConsensusStateRequest): Promise<_98.QueryConsensusStateResponse>;
                            consensusStates(request: _98.QueryConsensusStatesRequest): Promise<_98.QueryConsensusStatesResponse>;
                            clientStatus(request: _98.QueryClientStatusRequest): Promise<_98.QueryClientStatusResponse>;
                            clientParams(request?: _98.QueryClientParamsRequest): Promise<_98.QueryClientParamsResponse>;
                            upgradedClientState(request?: _98.QueryUpgradedClientStateRequest): Promise<_98.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _98.QueryUpgradedConsensusStateRequest): Promise<_98.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _103.QueryConnectionRequest): Promise<_103.QueryConnectionResponse>;
                            connections(request?: _103.QueryConnectionsRequest): Promise<_103.QueryConnectionsResponse>;
                            clientConnections(request: _103.QueryClientConnectionsRequest): Promise<_103.QueryClientConnectionsResponse>;
                            connectionClientState(request: _103.QueryConnectionClientStateRequest): Promise<_103.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _103.QueryConnectionConsensusStateRequest): Promise<_103.QueryConnectionConsensusStateResponse>;
                        };
                    };
                    port: {
                        v1: {
                            appVersion(request: _105.QueryAppVersionRequest): Promise<_105.QueryAppVersionResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
