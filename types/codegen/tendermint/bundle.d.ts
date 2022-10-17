import * as _111 from "./abci/types";
import * as _112 from "./crypto/keys";
import * as _113 from "./crypto/proof";
import * as _114 from "./libs/bits/types";
import * as _115 from "./p2p/types";
import * as _116 from "./types/block";
import * as _117 from "./types/evidence";
import * as _118 from "./types/params";
import * as _119 from "./types/types";
import * as _120 from "./types/validator";
import * as _121 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _111.CheckTxType;
        checkTxTypeToJSON(object: _111.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _111.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _111.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _111.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _111.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _111.EvidenceType;
        evidenceTypeToJSON(object: _111.EvidenceType): string;
        CheckTxType: typeof _111.CheckTxType;
        CheckTxTypeSDKType: typeof _111.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _111.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _111.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _111.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _111.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _111.EvidenceType;
        EvidenceTypeSDKType: typeof _111.EvidenceTypeSDKType;
        Request: {
            encode(message: _111.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Request;
            fromJSON(object: any): _111.Request;
            toJSON(message: _111.Request): unknown;
            fromPartial(object: Partial<_111.Request>): _111.Request;
        };
        RequestEcho: {
            encode(message: _111.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.RequestEcho;
            fromJSON(object: any): _111.RequestEcho;
            toJSON(message: _111.RequestEcho): unknown;
            fromPartial(object: Partial<_111.RequestEcho>): _111.RequestEcho;
        };
        RequestFlush: {
            encode(_: _111.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.RequestFlush;
            fromJSON(_: any): _111.RequestFlush;
            toJSON(_: _111.RequestFlush): unknown;
            fromPartial(_: Partial<_111.RequestFlush>): _111.RequestFlush;
        };
        RequestInfo: {
            encode(message: _111.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.RequestInfo;
            fromJSON(object: any): _111.RequestInfo;
            toJSON(message: _111.RequestInfo): unknown;
            fromPartial(object: Partial<_111.RequestInfo>): _111.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _111.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.RequestSetOption;
            fromJSON(object: any): _111.RequestSetOption;
            toJSON(message: _111.RequestSetOption): unknown;
            fromPartial(object: Partial<_111.RequestSetOption>): _111.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _111.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.RequestInitChain;
            fromJSON(object: any): _111.RequestInitChain;
            toJSON(message: _111.RequestInitChain): unknown;
            fromPartial(object: Partial<_111.RequestInitChain>): _111.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _111.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.RequestQuery;
            fromJSON(object: any): _111.RequestQuery;
            toJSON(message: _111.RequestQuery): unknown;
            fromPartial(object: Partial<_111.RequestQuery>): _111.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _111.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.RequestBeginBlock;
            fromJSON(object: any): _111.RequestBeginBlock;
            toJSON(message: _111.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_111.RequestBeginBlock>): _111.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _111.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.RequestCheckTx;
            fromJSON(object: any): _111.RequestCheckTx;
            toJSON(message: _111.RequestCheckTx): unknown;
            fromPartial(object: Partial<_111.RequestCheckTx>): _111.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _111.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.RequestDeliverTx;
            fromJSON(object: any): _111.RequestDeliverTx;
            toJSON(message: _111.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_111.RequestDeliverTx>): _111.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _111.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.RequestEndBlock;
            fromJSON(object: any): _111.RequestEndBlock;
            toJSON(message: _111.RequestEndBlock): unknown;
            fromPartial(object: Partial<_111.RequestEndBlock>): _111.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _111.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.RequestCommit;
            fromJSON(_: any): _111.RequestCommit;
            toJSON(_: _111.RequestCommit): unknown;
            fromPartial(_: Partial<_111.RequestCommit>): _111.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _111.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.RequestListSnapshots;
            fromJSON(_: any): _111.RequestListSnapshots;
            toJSON(_: _111.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_111.RequestListSnapshots>): _111.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _111.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.RequestOfferSnapshot;
            fromJSON(object: any): _111.RequestOfferSnapshot;
            toJSON(message: _111.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_111.RequestOfferSnapshot>): _111.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _111.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.RequestLoadSnapshotChunk;
            fromJSON(object: any): _111.RequestLoadSnapshotChunk;
            toJSON(message: _111.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_111.RequestLoadSnapshotChunk>): _111.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _111.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.RequestApplySnapshotChunk;
            fromJSON(object: any): _111.RequestApplySnapshotChunk;
            toJSON(message: _111.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_111.RequestApplySnapshotChunk>): _111.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _111.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Response;
            fromJSON(object: any): _111.Response;
            toJSON(message: _111.Response): unknown;
            fromPartial(object: Partial<_111.Response>): _111.Response;
        };
        ResponseException: {
            encode(message: _111.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ResponseException;
            fromJSON(object: any): _111.ResponseException;
            toJSON(message: _111.ResponseException): unknown;
            fromPartial(object: Partial<_111.ResponseException>): _111.ResponseException;
        };
        ResponseEcho: {
            encode(message: _111.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ResponseEcho;
            fromJSON(object: any): _111.ResponseEcho;
            toJSON(message: _111.ResponseEcho): unknown;
            fromPartial(object: Partial<_111.ResponseEcho>): _111.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _111.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ResponseFlush;
            fromJSON(_: any): _111.ResponseFlush;
            toJSON(_: _111.ResponseFlush): unknown;
            fromPartial(_: Partial<_111.ResponseFlush>): _111.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _111.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ResponseInfo;
            fromJSON(object: any): _111.ResponseInfo;
            toJSON(message: _111.ResponseInfo): unknown;
            fromPartial(object: Partial<_111.ResponseInfo>): _111.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _111.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ResponseSetOption;
            fromJSON(object: any): _111.ResponseSetOption;
            toJSON(message: _111.ResponseSetOption): unknown;
            fromPartial(object: Partial<_111.ResponseSetOption>): _111.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _111.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ResponseInitChain;
            fromJSON(object: any): _111.ResponseInitChain;
            toJSON(message: _111.ResponseInitChain): unknown;
            fromPartial(object: Partial<_111.ResponseInitChain>): _111.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _111.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ResponseQuery;
            fromJSON(object: any): _111.ResponseQuery;
            toJSON(message: _111.ResponseQuery): unknown;
            fromPartial(object: Partial<_111.ResponseQuery>): _111.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _111.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ResponseBeginBlock;
            fromJSON(object: any): _111.ResponseBeginBlock;
            toJSON(message: _111.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_111.ResponseBeginBlock>): _111.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _111.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ResponseCheckTx;
            fromJSON(object: any): _111.ResponseCheckTx;
            toJSON(message: _111.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_111.ResponseCheckTx>): _111.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _111.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ResponseDeliverTx;
            fromJSON(object: any): _111.ResponseDeliverTx;
            toJSON(message: _111.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_111.ResponseDeliverTx>): _111.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _111.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ResponseEndBlock;
            fromJSON(object: any): _111.ResponseEndBlock;
            toJSON(message: _111.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_111.ResponseEndBlock>): _111.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _111.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ResponseCommit;
            fromJSON(object: any): _111.ResponseCommit;
            toJSON(message: _111.ResponseCommit): unknown;
            fromPartial(object: Partial<_111.ResponseCommit>): _111.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _111.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ResponseListSnapshots;
            fromJSON(object: any): _111.ResponseListSnapshots;
            toJSON(message: _111.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_111.ResponseListSnapshots>): _111.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _111.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ResponseOfferSnapshot;
            fromJSON(object: any): _111.ResponseOfferSnapshot;
            toJSON(message: _111.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_111.ResponseOfferSnapshot>): _111.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _111.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _111.ResponseLoadSnapshotChunk;
            toJSON(message: _111.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_111.ResponseLoadSnapshotChunk>): _111.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _111.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ResponseApplySnapshotChunk;
            fromJSON(object: any): _111.ResponseApplySnapshotChunk;
            toJSON(message: _111.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_111.ResponseApplySnapshotChunk>): _111.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _111.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ConsensusParams;
            fromJSON(object: any): _111.ConsensusParams;
            toJSON(message: _111.ConsensusParams): unknown;
            fromPartial(object: Partial<_111.ConsensusParams>): _111.ConsensusParams;
        };
        BlockParams: {
            encode(message: _111.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.BlockParams;
            fromJSON(object: any): _111.BlockParams;
            toJSON(message: _111.BlockParams): unknown;
            fromPartial(object: Partial<_111.BlockParams>): _111.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _111.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.LastCommitInfo;
            fromJSON(object: any): _111.LastCommitInfo;
            toJSON(message: _111.LastCommitInfo): unknown;
            fromPartial(object: Partial<_111.LastCommitInfo>): _111.LastCommitInfo;
        };
        Event: {
            encode(message: _111.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Event;
            fromJSON(object: any): _111.Event;
            toJSON(message: _111.Event): unknown;
            fromPartial(object: Partial<_111.Event>): _111.Event;
        };
        EventAttribute: {
            encode(message: _111.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.EventAttribute;
            fromJSON(object: any): _111.EventAttribute;
            toJSON(message: _111.EventAttribute): unknown;
            fromPartial(object: Partial<_111.EventAttribute>): _111.EventAttribute;
        };
        TxResult: {
            encode(message: _111.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.TxResult;
            fromJSON(object: any): _111.TxResult;
            toJSON(message: _111.TxResult): unknown;
            fromPartial(object: Partial<_111.TxResult>): _111.TxResult;
        };
        Validator: {
            encode(message: _111.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Validator;
            fromJSON(object: any): _111.Validator;
            toJSON(message: _111.Validator): unknown;
            fromPartial(object: Partial<_111.Validator>): _111.Validator;
        };
        ValidatorUpdate: {
            encode(message: _111.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ValidatorUpdate;
            fromJSON(object: any): _111.ValidatorUpdate;
            toJSON(message: _111.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_111.ValidatorUpdate>): _111.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _111.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.VoteInfo;
            fromJSON(object: any): _111.VoteInfo;
            toJSON(message: _111.VoteInfo): unknown;
            fromPartial(object: Partial<_111.VoteInfo>): _111.VoteInfo;
        };
        Evidence: {
            encode(message: _111.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Evidence;
            fromJSON(object: any): _111.Evidence;
            toJSON(message: _111.Evidence): unknown;
            fromPartial(object: Partial<_111.Evidence>): _111.Evidence;
        };
        Snapshot: {
            encode(message: _111.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Snapshot;
            fromJSON(object: any): _111.Snapshot;
            toJSON(message: _111.Snapshot): unknown;
            fromPartial(object: Partial<_111.Snapshot>): _111.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _113.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Proof;
            fromJSON(object: any): _113.Proof;
            toJSON(message: _113.Proof): unknown;
            fromPartial(object: Partial<_113.Proof>): _113.Proof;
        };
        ValueOp: {
            encode(message: _113.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ValueOp;
            fromJSON(object: any): _113.ValueOp;
            toJSON(message: _113.ValueOp): unknown;
            fromPartial(object: Partial<_113.ValueOp>): _113.ValueOp;
        };
        DominoOp: {
            encode(message: _113.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.DominoOp;
            fromJSON(object: any): _113.DominoOp;
            toJSON(message: _113.DominoOp): unknown;
            fromPartial(object: Partial<_113.DominoOp>): _113.DominoOp;
        };
        ProofOp: {
            encode(message: _113.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ProofOp;
            fromJSON(object: any): _113.ProofOp;
            toJSON(message: _113.ProofOp): unknown;
            fromPartial(object: Partial<_113.ProofOp>): _113.ProofOp;
        };
        ProofOps: {
            encode(message: _113.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ProofOps;
            fromJSON(object: any): _113.ProofOps;
            toJSON(message: _113.ProofOps): unknown;
            fromPartial(object: Partial<_113.ProofOps>): _113.ProofOps;
        };
        PublicKey: {
            encode(message: _112.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.PublicKey;
            fromJSON(object: any): _112.PublicKey;
            toJSON(message: _112.PublicKey): unknown;
            fromPartial(object: Partial<_112.PublicKey>): _112.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _114.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.BitArray;
                fromJSON(object: any): _114.BitArray;
                toJSON(message: _114.BitArray): unknown;
                fromPartial(object: Partial<_114.BitArray>): _114.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _115.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ProtocolVersion;
            fromJSON(object: any): _115.ProtocolVersion;
            toJSON(message: _115.ProtocolVersion): unknown;
            fromPartial(object: Partial<_115.ProtocolVersion>): _115.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _115.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.NodeInfo;
            fromJSON(object: any): _115.NodeInfo;
            toJSON(message: _115.NodeInfo): unknown;
            fromPartial(object: Partial<_115.NodeInfo>): _115.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _115.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.NodeInfoOther;
            fromJSON(object: any): _115.NodeInfoOther;
            toJSON(message: _115.NodeInfoOther): unknown;
            fromPartial(object: Partial<_115.NodeInfoOther>): _115.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _115.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.PeerInfo;
            fromJSON(object: any): _115.PeerInfo;
            toJSON(message: _115.PeerInfo): unknown;
            fromPartial(object: Partial<_115.PeerInfo>): _115.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _115.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.PeerAddressInfo;
            fromJSON(object: any): _115.PeerAddressInfo;
            toJSON(message: _115.PeerAddressInfo): unknown;
            fromPartial(object: Partial<_115.PeerAddressInfo>): _115.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _120.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ValidatorSet;
            fromJSON(object: any): _120.ValidatorSet;
            toJSON(message: _120.ValidatorSet): unknown;
            fromPartial(object: Partial<_120.ValidatorSet>): _120.ValidatorSet;
        };
        Validator: {
            encode(message: _120.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Validator;
            fromJSON(object: any): _120.Validator;
            toJSON(message: _120.Validator): unknown;
            fromPartial(object: Partial<_120.Validator>): _120.Validator;
        };
        SimpleValidator: {
            encode(message: _120.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.SimpleValidator;
            fromJSON(object: any): _120.SimpleValidator;
            toJSON(message: _120.SimpleValidator): unknown;
            fromPartial(object: Partial<_120.SimpleValidator>): _120.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _119.BlockIDFlag;
        blockIDFlagToJSON(object: _119.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _119.SignedMsgType;
        signedMsgTypeToJSON(object: _119.SignedMsgType): string;
        BlockIDFlag: typeof _119.BlockIDFlag;
        BlockIDFlagSDKType: typeof _119.BlockIDFlagSDKType;
        SignedMsgType: typeof _119.SignedMsgType;
        SignedMsgTypeSDKType: typeof _119.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _119.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.PartSetHeader;
            fromJSON(object: any): _119.PartSetHeader;
            toJSON(message: _119.PartSetHeader): unknown;
            fromPartial(object: Partial<_119.PartSetHeader>): _119.PartSetHeader;
        };
        Part: {
            encode(message: _119.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Part;
            fromJSON(object: any): _119.Part;
            toJSON(message: _119.Part): unknown;
            fromPartial(object: Partial<_119.Part>): _119.Part;
        };
        BlockID: {
            encode(message: _119.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.BlockID;
            fromJSON(object: any): _119.BlockID;
            toJSON(message: _119.BlockID): unknown;
            fromPartial(object: Partial<_119.BlockID>): _119.BlockID;
        };
        Header: {
            encode(message: _119.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Header;
            fromJSON(object: any): _119.Header;
            toJSON(message: _119.Header): unknown;
            fromPartial(object: Partial<_119.Header>): _119.Header;
        };
        Data: {
            encode(message: _119.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Data;
            fromJSON(object: any): _119.Data;
            toJSON(message: _119.Data): unknown;
            fromPartial(object: Partial<_119.Data>): _119.Data;
        };
        Vote: {
            encode(message: _119.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Vote;
            fromJSON(object: any): _119.Vote;
            toJSON(message: _119.Vote): unknown;
            fromPartial(object: Partial<_119.Vote>): _119.Vote;
        };
        Commit: {
            encode(message: _119.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Commit;
            fromJSON(object: any): _119.Commit;
            toJSON(message: _119.Commit): unknown;
            fromPartial(object: Partial<_119.Commit>): _119.Commit;
        };
        CommitSig: {
            encode(message: _119.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.CommitSig;
            fromJSON(object: any): _119.CommitSig;
            toJSON(message: _119.CommitSig): unknown;
            fromPartial(object: Partial<_119.CommitSig>): _119.CommitSig;
        };
        Proposal: {
            encode(message: _119.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Proposal;
            fromJSON(object: any): _119.Proposal;
            toJSON(message: _119.Proposal): unknown;
            fromPartial(object: Partial<_119.Proposal>): _119.Proposal;
        };
        SignedHeader: {
            encode(message: _119.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.SignedHeader;
            fromJSON(object: any): _119.SignedHeader;
            toJSON(message: _119.SignedHeader): unknown;
            fromPartial(object: Partial<_119.SignedHeader>): _119.SignedHeader;
        };
        LightBlock: {
            encode(message: _119.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.LightBlock;
            fromJSON(object: any): _119.LightBlock;
            toJSON(message: _119.LightBlock): unknown;
            fromPartial(object: Partial<_119.LightBlock>): _119.LightBlock;
        };
        BlockMeta: {
            encode(message: _119.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.BlockMeta;
            fromJSON(object: any): _119.BlockMeta;
            toJSON(message: _119.BlockMeta): unknown;
            fromPartial(object: Partial<_119.BlockMeta>): _119.BlockMeta;
        };
        TxProof: {
            encode(message: _119.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.TxProof;
            fromJSON(object: any): _119.TxProof;
            toJSON(message: _119.TxProof): unknown;
            fromPartial(object: Partial<_119.TxProof>): _119.TxProof;
        };
        ConsensusParams: {
            encode(message: _118.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.ConsensusParams;
            fromJSON(object: any): _118.ConsensusParams;
            toJSON(message: _118.ConsensusParams): unknown;
            fromPartial(object: Partial<_118.ConsensusParams>): _118.ConsensusParams;
        };
        BlockParams: {
            encode(message: _118.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.BlockParams;
            fromJSON(object: any): _118.BlockParams;
            toJSON(message: _118.BlockParams): unknown;
            fromPartial(object: Partial<_118.BlockParams>): _118.BlockParams;
        };
        EvidenceParams: {
            encode(message: _118.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.EvidenceParams;
            fromJSON(object: any): _118.EvidenceParams;
            toJSON(message: _118.EvidenceParams): unknown;
            fromPartial(object: Partial<_118.EvidenceParams>): _118.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _118.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.ValidatorParams;
            fromJSON(object: any): _118.ValidatorParams;
            toJSON(message: _118.ValidatorParams): unknown;
            fromPartial(object: Partial<_118.ValidatorParams>): _118.ValidatorParams;
        };
        VersionParams: {
            encode(message: _118.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.VersionParams;
            fromJSON(object: any): _118.VersionParams;
            toJSON(message: _118.VersionParams): unknown;
            fromPartial(object: Partial<_118.VersionParams>): _118.VersionParams;
        };
        HashedParams: {
            encode(message: _118.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.HashedParams;
            fromJSON(object: any): _118.HashedParams;
            toJSON(message: _118.HashedParams): unknown;
            fromPartial(object: Partial<_118.HashedParams>): _118.HashedParams;
        };
        Evidence: {
            encode(message: _117.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.Evidence;
            fromJSON(object: any): _117.Evidence;
            toJSON(message: _117.Evidence): unknown;
            fromPartial(object: Partial<_117.Evidence>): _117.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _117.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.DuplicateVoteEvidence;
            fromJSON(object: any): _117.DuplicateVoteEvidence;
            toJSON(message: _117.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_117.DuplicateVoteEvidence>): _117.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _117.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.LightClientAttackEvidence;
            fromJSON(object: any): _117.LightClientAttackEvidence;
            toJSON(message: _117.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_117.LightClientAttackEvidence>): _117.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _117.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.EvidenceList;
            fromJSON(object: any): _117.EvidenceList;
            toJSON(message: _117.EvidenceList): unknown;
            fromPartial(object: Partial<_117.EvidenceList>): _117.EvidenceList;
        };
        Block: {
            encode(message: _116.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Block;
            fromJSON(object: any): _116.Block;
            toJSON(message: _116.Block): unknown;
            fromPartial(object: Partial<_116.Block>): _116.Block;
        };
    };
    const version: {
        App: {
            encode(message: _121.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.App;
            fromJSON(object: any): _121.App;
            toJSON(message: _121.App): unknown;
            fromPartial(object: Partial<_121.App>): _121.App;
        };
        Consensus: {
            encode(message: _121.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.Consensus;
            fromJSON(object: any): _121.Consensus;
            toJSON(message: _121.Consensus): unknown;
            fromPartial(object: Partial<_121.Consensus>): _121.Consensus;
        };
    };
}
