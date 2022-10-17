import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryBlockProvisionsRequest, QueryBlockProvisionsResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** Params returns the total set of minting parameters. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** BlockProvisions current minting epoch provisions value. */
    blockProvisions(request?: QueryBlockProvisionsRequest): Promise<QueryBlockProvisionsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    blockProvisions(request?: QueryBlockProvisionsRequest): Promise<QueryBlockProvisionsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    blockProvisions(request?: QueryBlockProvisionsRequest): Promise<QueryBlockProvisionsResponse>;
};
