import * as _122 from "./airdrop/v1beta1/allocation";
import * as _123 from "./airdrop/v1beta1/genesis";
import * as _124 from "./airdrop/v1beta1/params";
import * as _125 from "./airdrop/v1beta1/query";
import * as _126 from "./airdrop/v1beta1/tx";
import * as _127 from "./mint/v1beta1/genesis";
import * as _128 from "./mint/v1beta1/mint";
import * as _129 from "./mint/v1beta1/query";
import * as _195 from "./airdrop/v1beta1/tx.amino";
import * as _196 from "./airdrop/v1beta1/tx.registry";
import * as _197 from "./airdrop/v1beta1/query.rpc.Query";
import * as _198 from "./mint/v1beta1/query.rpc.Query";
import * as _199 from "./airdrop/v1beta1/tx.rpc.msg";
import * as _204 from "./rpc.query";
import * as _205 from "./rpc.tx";
export namespace furya {
  export namespace airdrop {
    export const v1beta1 = {
      ..._122,
      ..._123,
      ..._124,
      ..._125,
      ..._126,
      ..._195,
      ..._196,
      ..._197,
      ..._199
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._127,
      ..._128,
      ..._129,
      ..._198
    };
  }
  export const ClientFactory = {
    ..._204,
    ..._205
  };
}