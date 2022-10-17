import { AirdropAllocation, AirdropAllocationSDKType } from "./allocation";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
export interface QueryAllocationRequest {
    /** address is the address to query allocation for. */
    address: string;
}
export interface QueryAllocationRequestSDKType {
    /** address is the address to query allocation for. */
    address: string;
}
export interface QueryAllocationResponse {
    allocation?: AirdropAllocation;
}
export interface QueryAllocationResponseSDKType {
    allocation?: AirdropAllocationSDKType;
}
export interface QueryParamsRequest {
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params?: Params;
}
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export declare const QueryAllocationRequest: {
    encode(message: QueryAllocationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllocationRequest;
    fromJSON(object: any): QueryAllocationRequest;
    toJSON(message: QueryAllocationRequest): unknown;
    fromPartial(object: Partial<QueryAllocationRequest>): QueryAllocationRequest;
};
export declare const QueryAllocationResponse: {
    encode(message: QueryAllocationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllocationResponse;
    fromJSON(object: any): QueryAllocationResponse;
    toJSON(message: QueryAllocationResponse): unknown;
    fromPartial(object: Partial<QueryAllocationResponse>): QueryAllocationResponse;
};
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
