import { Rpc } from "../../../helpers";
import { MsgClaimAllocation, MsgClaimAllocationResponse, MsgSetAllocation, MsgSetAllocationResponse, MsgTransferModuleOwnership, MsgTransferModuleOwnershipResponse, MsgDepositTokens, MsgDepositTokensResponse } from "./tx";
/** Msg defines the staking Msg service. */
export interface Msg {
    /** ClaimAllocation defines a method to claim allocation */
    claimAllocation(request: MsgClaimAllocation): Promise<MsgClaimAllocationResponse>;
    /** SetAllocation defines a method to set allocation */
    setAllocation(request: MsgSetAllocation): Promise<MsgSetAllocationResponse>;
    /** TransferModuleOwnership defines a method to transfer module ownership to other address */
    transferModuleOwnership(request: MsgTransferModuleOwnership): Promise<MsgTransferModuleOwnershipResponse>;
    /** DepositTokens defines a method to deposit tokens to the module */
    depositTokens(request: MsgDepositTokens): Promise<MsgDepositTokensResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    claimAllocation(request: MsgClaimAllocation): Promise<MsgClaimAllocationResponse>;
    setAllocation(request: MsgSetAllocation): Promise<MsgSetAllocationResponse>;
    transferModuleOwnership(request: MsgTransferModuleOwnership): Promise<MsgTransferModuleOwnershipResponse>;
    depositTokens(request: MsgDepositTokens): Promise<MsgDepositTokensResponse>;
}
