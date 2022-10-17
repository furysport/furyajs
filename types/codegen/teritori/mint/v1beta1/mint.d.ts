import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** Minter represents the minting state. */
export interface Minter {
    /** current block provisions */
    blockProvisions: string;
}
/** Minter represents the minting state. */
export interface MinterSDKType {
    /** current block provisions */
    block_provisions: string;
}
/** required values for team rewards */
export interface TeamVestingMonthInfo {
    monthsSinceGenesis: Long;
    monthStartedBlock: Long;
    oneMonthPeriodInBlocks: Long;
}
/** required values for team rewards */
export interface TeamVestingMonthInfoSDKType {
    months_since_genesis: Long;
    month_started_block: Long;
    one_month_period_in_blocks: Long;
}
export interface MonthlyVestingAddress {
    address: string;
    monthlyAmounts: string[];
}
export interface MonthlyVestingAddressSDKType {
    address: string;
    monthly_amounts: string[];
}
export interface DistributionProportions {
    /**
     * grants_program defines the proportion of the minted minted_denom that is
     * to be allocated as grants.
     */
    grantsProgram: string;
    /**
     * community_pool defines the proportion of the minted minted_denom that is
     * to be allocated to the community pool.
     */
    communityPool: string;
    /**
     * usage_incentive defines the proportion of the minted minted_denom that is
     * to be allocated as usage incentive.
     */
    usageIncentive: string;
    /**
     * staking defines the proportion of the minted minted_denom that is to be
     * allocated as staking rewards.
     */
    staking: string;
    /**
     * developer_rewards defines the proportion of the minted minted_denom that is
     * to be allocated to developer rewards address.
     */
    developerRewards: string;
}
export interface DistributionProportionsSDKType {
    /**
     * grants_program defines the proportion of the minted minted_denom that is
     * to be allocated as grants.
     */
    grants_program: string;
    /**
     * community_pool defines the proportion of the minted minted_denom that is
     * to be allocated to the community pool.
     */
    community_pool: string;
    /**
     * usage_incentive defines the proportion of the minted minted_denom that is
     * to be allocated as usage incentive.
     */
    usage_incentive: string;
    /**
     * staking defines the proportion of the minted minted_denom that is to be
     * allocated as staking rewards.
     */
    staking: string;
    /**
     * developer_rewards defines the proportion of the minted minted_denom that is
     * to be allocated to developer rewards address.
     */
    developer_rewards: string;
}
/** Params holds parameters for the mint module. */
export interface Params {
    /** type of coin to mint */
    mintDenom: string;
    /** block provisions from the first block */
    genesisBlockProvisions: string;
    /** number of blocks take to reduce rewards */
    reductionPeriodInBlocks: Long;
    /** reduction multiplier to execute on each period */
    reductionFactor: string;
    /** distribution_proportions defines the proportion of the minted denom */
    distributionProportions?: DistributionProportions;
    /** address to receive developer rewards */
    weightedDeveloperRewardsReceivers: MonthlyVestingAddress[];
    /** usage incentive address */
    usageIncentiveAddress: string;
    /** grants program address */
    grantsProgramAddress: string;
    /** team reserve funds address */
    teamReserveAddress: string;
    /** start block to distribute minting rewards */
    mintingRewardsDistributionStartBlock: Long;
}
/** Params holds parameters for the mint module. */
export interface ParamsSDKType {
    /** type of coin to mint */
    mint_denom: string;
    /** block provisions from the first block */
    genesis_block_provisions: string;
    /** number of blocks take to reduce rewards */
    reduction_period_in_blocks: Long;
    /** reduction multiplier to execute on each period */
    reduction_factor: string;
    /** distribution_proportions defines the proportion of the minted denom */
    distribution_proportions?: DistributionProportionsSDKType;
    /** address to receive developer rewards */
    weighted_developer_rewards_receivers: MonthlyVestingAddressSDKType[];
    /** usage incentive address */
    usage_incentive_address: string;
    /** grants program address */
    grants_program_address: string;
    /** team reserve funds address */
    team_reserve_address: string;
    /** start block to distribute minting rewards */
    minting_rewards_distribution_start_block: Long;
}
export declare const Minter: {
    encode(message: Minter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Minter;
    fromJSON(object: any): Minter;
    toJSON(message: Minter): unknown;
    fromPartial(object: Partial<Minter>): Minter;
};
export declare const TeamVestingMonthInfo: {
    encode(message: TeamVestingMonthInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TeamVestingMonthInfo;
    fromJSON(object: any): TeamVestingMonthInfo;
    toJSON(message: TeamVestingMonthInfo): unknown;
    fromPartial(object: Partial<TeamVestingMonthInfo>): TeamVestingMonthInfo;
};
export declare const MonthlyVestingAddress: {
    encode(message: MonthlyVestingAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MonthlyVestingAddress;
    fromJSON(object: any): MonthlyVestingAddress;
    toJSON(message: MonthlyVestingAddress): unknown;
    fromPartial(object: Partial<MonthlyVestingAddress>): MonthlyVestingAddress;
};
export declare const DistributionProportions: {
    encode(message: DistributionProportions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DistributionProportions;
    fromJSON(object: any): DistributionProportions;
    toJSON(message: DistributionProportions): unknown;
    fromPartial(object: Partial<DistributionProportions>): DistributionProportions;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
