import * as _m0 from "protobufjs/minimal";
/** AirdropAllocation defines the user's airdrop allocation. */
export interface AirdropAllocation {
    chain: string;
    address: string;
    amount: string;
    claimedAmount: string;
}
/** AirdropAllocation defines the user's airdrop allocation. */
export interface AirdropAllocationSDKType {
    chain: string;
    address: string;
    amount: string;
    claimed_amount: string;
}
export declare const AirdropAllocation: {
    encode(message: AirdropAllocation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AirdropAllocation;
    fromJSON(object: any): AirdropAllocation;
    toJSON(message: AirdropAllocation): unknown;
    fromPartial(object: Partial<AirdropAllocation>): AirdropAllocation;
};
