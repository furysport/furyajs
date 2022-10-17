import { AirdropAllocation, AirdropAllocationSDKType } from "./allocation";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
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
export interface QueryParamsRequest {}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params?: Params;
}
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}

function createBaseQueryAllocationRequest(): QueryAllocationRequest {
  return {
    address: ""
  };
}

export const QueryAllocationRequest = {
  encode(message: QueryAllocationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllocationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllocationRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllocationRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: QueryAllocationRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: Partial<QueryAllocationRequest>): QueryAllocationRequest {
    const message = createBaseQueryAllocationRequest();
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryAllocationResponse(): QueryAllocationResponse {
  return {
    allocation: undefined
  };
}

export const QueryAllocationResponse = {
  encode(message: QueryAllocationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allocation !== undefined) {
      AirdropAllocation.encode(message.allocation, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllocationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllocationResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.allocation = AirdropAllocation.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllocationResponse {
    return {
      allocation: isSet(object.allocation) ? AirdropAllocation.fromJSON(object.allocation) : undefined
    };
  },

  toJSON(message: QueryAllocationResponse): unknown {
    const obj: any = {};
    message.allocation !== undefined && (obj.allocation = message.allocation ? AirdropAllocation.toJSON(message.allocation) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryAllocationResponse>): QueryAllocationResponse {
    const message = createBaseQueryAllocationResponse();
    message.allocation = object.allocation !== undefined && object.allocation !== null ? AirdropAllocation.fromPartial(object.allocation) : undefined;
    return message;
  }

};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};