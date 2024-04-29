import { Params, ParamsSDKType } from "./mint";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/**
 * QueryBlockProvisionsRequest is the request type for the
 * Query/BlockProvisions RPC method.
 */
export interface QueryBlockProvisionsRequest {
}
/**
 * QueryBlockProvisionsRequest is the request type for the
 * Query/BlockProvisions RPC method.
 */
export interface QueryBlockProvisionsRequestSDKType {
}
/**
 * QueryBlockProvisionsResponse is the response type for the
 * Query/BlockProvisions RPC method.
 */
export interface QueryBlockProvisionsResponse {
    /** block_provisions is the current minting per epoch provisions value. */
    blockProvisions: Uint8Array;
}
/**
 * QueryBlockProvisionsResponse is the response type for the
 * Query/BlockProvisions RPC method.
 */
export interface QueryBlockProvisionsResponseSDKType {
    block_provisions: Uint8Array;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryBlockProvisionsRequest: {
    encode(_: QueryBlockProvisionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlockProvisionsRequest;
    fromJSON(_: any): QueryBlockProvisionsRequest;
    toJSON(_: QueryBlockProvisionsRequest): unknown;
    fromPartial(_: Partial<QueryBlockProvisionsRequest>): QueryBlockProvisionsRequest;
};
export declare const QueryBlockProvisionsResponse: {
    encode(message: QueryBlockProvisionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlockProvisionsResponse;
    fromJSON(object: any): QueryBlockProvisionsResponse;
    toJSON(message: QueryBlockProvisionsResponse): unknown;
    fromPartial(object: Partial<QueryBlockProvisionsResponse>): QueryBlockProvisionsResponse;
};
