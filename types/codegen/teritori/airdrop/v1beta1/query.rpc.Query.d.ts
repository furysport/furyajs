import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryAllocationRequest, QueryAllocationResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    allocation(request: QueryAllocationRequest): Promise<QueryAllocationResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    allocation(request: QueryAllocationRequest): Promise<QueryAllocationResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    allocation(request: QueryAllocationRequest): Promise<QueryAllocationResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
