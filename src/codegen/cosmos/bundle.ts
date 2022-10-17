import * as _2 from "./app/v1alpha1/config";
import * as _3 from "./app/v1alpha1/module";
import * as _4 from "./app/v1alpha1/query";
import * as _5 from "./auth/v1beta1/auth";
import * as _6 from "./auth/v1beta1/genesis";
import * as _7 from "./auth/v1beta1/query";
import * as _8 from "./bank/v1beta1/authz";
import * as _9 from "./bank/v1beta1/bank";
import * as _10 from "./bank/v1beta1/genesis";
import * as _11 from "./bank/v1beta1/query";
import * as _12 from "./bank/v1beta1/tx";
import * as _13 from "./base/abci/v1beta1/abci";
import * as _14 from "./base/kv/v1beta1/kv";
import * as _15 from "./base/query/v1beta1/pagination";
import * as _16 from "./base/reflection/v1beta1/reflection";
import * as _17 from "./base/reflection/v2alpha1/reflection";
import * as _18 from "./base/snapshots/v1beta1/snapshot";
import * as _19 from "./base/store/v1beta1/commit_info";
import * as _20 from "./base/store/v1beta1/listening";
import * as _21 from "./base/tendermint/v1beta1/query";
import * as _22 from "./base/v1beta1/coin";
import * as _23 from "./capability/v1beta1/capability";
import * as _24 from "./capability/v1beta1/genesis";
import * as _25 from "./crisis/v1beta1/genesis";
import * as _26 from "./crisis/v1beta1/tx";
import * as _27 from "./crypto/ed25519/keys";
import * as _28 from "./crypto/hd/v1/hd";
import * as _29 from "./crypto/keyring/v1/record";
import * as _30 from "./crypto/multisig/keys";
import * as _31 from "./crypto/secp256k1/keys";
import * as _32 from "./crypto/secp256r1/keys";
import * as _33 from "./distribution/v1beta1/distribution";
import * as _34 from "./distribution/v1beta1/genesis";
import * as _35 from "./distribution/v1beta1/query";
import * as _36 from "./distribution/v1beta1/tx";
import * as _37 from "./evidence/v1beta1/evidence";
import * as _38 from "./evidence/v1beta1/genesis";
import * as _39 from "./evidence/v1beta1/query";
import * as _40 from "./evidence/v1beta1/tx";
import * as _41 from "./feegrant/v1beta1/feegrant";
import * as _42 from "./feegrant/v1beta1/genesis";
import * as _43 from "./feegrant/v1beta1/query";
import * as _44 from "./feegrant/v1beta1/tx";
import * as _45 from "./genutil/v1beta1/genesis";
import * as _46 from "./gov/v1/genesis";
import * as _47 from "./gov/v1/gov";
import * as _48 from "./gov/v1/query";
import * as _49 from "./gov/v1/tx";
import * as _50 from "./gov/v1beta1/genesis";
import * as _51 from "./gov/v1beta1/gov";
import * as _52 from "./gov/v1beta1/query";
import * as _53 from "./gov/v1beta1/tx";
import * as _54 from "./mint/v1beta1/genesis";
import * as _55 from "./mint/v1beta1/mint";
import * as _56 from "./mint/v1beta1/query";
import * as _57 from "./msg/v1/msg";
import * as _58 from "./orm/v1/orm";
import * as _59 from "./orm/v1alpha1/schema";
import * as _60 from "./params/v1beta1/params";
import * as _61 from "./params/v1beta1/query";
import * as _62 from "./slashing/v1beta1/genesis";
import * as _63 from "./slashing/v1beta1/query";
import * as _64 from "./slashing/v1beta1/slashing";
import * as _65 from "./slashing/v1beta1/tx";
import * as _66 from "./staking/v1beta1/authz";
import * as _67 from "./staking/v1beta1/genesis";
import * as _68 from "./staking/v1beta1/query";
import * as _69 from "./staking/v1beta1/staking";
import * as _70 from "./staking/v1beta1/tx";
import * as _71 from "./tx/signing/v1beta1/signing";
import * as _72 from "./tx/v1beta1/service";
import * as _73 from "./tx/v1beta1/tx";
import * as _74 from "./upgrade/v1beta1/query";
import * as _75 from "./upgrade/v1beta1/tx";
import * as _76 from "./upgrade/v1beta1/upgrade";
import * as _77 from "./vesting/v1beta1/tx";
import * as _78 from "./vesting/v1beta1/vesting";
import * as _130 from "./bank/v1beta1/tx.amino";
import * as _131 from "./crisis/v1beta1/tx.amino";
import * as _132 from "./distribution/v1beta1/tx.amino";
import * as _133 from "./evidence/v1beta1/tx.amino";
import * as _134 from "./feegrant/v1beta1/tx.amino";
import * as _135 from "./gov/v1/tx.amino";
import * as _136 from "./gov/v1beta1/tx.amino";
import * as _137 from "./slashing/v1beta1/tx.amino";
import * as _138 from "./staking/v1beta1/tx.amino";
import * as _139 from "./upgrade/v1beta1/tx.amino";
import * as _140 from "./vesting/v1beta1/tx.amino";
import * as _141 from "./bank/v1beta1/tx.registry";
import * as _142 from "./crisis/v1beta1/tx.registry";
import * as _143 from "./distribution/v1beta1/tx.registry";
import * as _144 from "./evidence/v1beta1/tx.registry";
import * as _145 from "./feegrant/v1beta1/tx.registry";
import * as _146 from "./gov/v1/tx.registry";
import * as _147 from "./gov/v1beta1/tx.registry";
import * as _148 from "./slashing/v1beta1/tx.registry";
import * as _149 from "./staking/v1beta1/tx.registry";
import * as _150 from "./upgrade/v1beta1/tx.registry";
import * as _151 from "./vesting/v1beta1/tx.registry";
import * as _152 from "./app/v1alpha1/query.rpc.Query";
import * as _153 from "./auth/v1beta1/query.rpc.Query";
import * as _154 from "./bank/v1beta1/query.rpc.Query";
import * as _155 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _156 from "./distribution/v1beta1/query.rpc.Query";
import * as _157 from "./evidence/v1beta1/query.rpc.Query";
import * as _158 from "./feegrant/v1beta1/query.rpc.Query";
import * as _159 from "./gov/v1/query.rpc.Query";
import * as _160 from "./gov/v1beta1/query.rpc.Query";
import * as _161 from "./mint/v1beta1/query.rpc.Query";
import * as _162 from "./params/v1beta1/query.rpc.Query";
import * as _163 from "./slashing/v1beta1/query.rpc.Query";
import * as _164 from "./staking/v1beta1/query.rpc.Query";
import * as _165 from "./tx/v1beta1/service.rpc.Service";
import * as _166 from "./upgrade/v1beta1/query.rpc.Query";
import * as _167 from "./bank/v1beta1/tx.rpc.msg";
import * as _168 from "./crisis/v1beta1/tx.rpc.msg";
import * as _169 from "./distribution/v1beta1/tx.rpc.msg";
import * as _170 from "./evidence/v1beta1/tx.rpc.msg";
import * as _171 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _172 from "./gov/v1/tx.rpc.msg";
import * as _173 from "./gov/v1beta1/tx.rpc.msg";
import * as _174 from "./slashing/v1beta1/tx.rpc.msg";
import * as _175 from "./staking/v1beta1/tx.rpc.msg";
import * as _176 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _177 from "./vesting/v1beta1/tx.rpc.msg";
import * as _200 from "./rpc.query";
import * as _201 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = { ..._2,
      ..._3,
      ..._4,
      ..._152
    };
  }
  export namespace auth {
    export const v1beta1 = { ..._5,
      ..._6,
      ..._7,
      ..._153
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._130,
      ..._141,
      ..._154,
      ..._167
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._13
      };
    }
    export namespace kv {
      export const v1beta1 = { ..._14
      };
    }
    export namespace query {
      export const v1beta1 = { ..._15
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._16
      };
      export const v2alpha1 = { ..._17
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._18
      };
    }
    export namespace store {
      export const v1beta1 = { ..._19,
        ..._20
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._21,
        ..._155
      };
    }
    export const v1beta1 = { ..._22
    };
  }
  export namespace capability {
    export const v1beta1 = { ..._23,
      ..._24
    };
  }
  export namespace crisis {
    export const v1beta1 = { ..._25,
      ..._26,
      ..._131,
      ..._142,
      ..._168
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._27
    };
    export namespace hd {
      export const v1 = { ..._28
      };
    }
    export namespace keyring {
      export const v1 = { ..._29
      };
    }
    export const multisig = { ..._30
    };
    export const secp256k1 = { ..._31
    };
    export const secp256r1 = { ..._32
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._33,
      ..._34,
      ..._35,
      ..._36,
      ..._132,
      ..._143,
      ..._156,
      ..._169
    };
  }
  export namespace evidence {
    export const v1beta1 = { ..._37,
      ..._38,
      ..._39,
      ..._40,
      ..._133,
      ..._144,
      ..._157,
      ..._170
    };
  }
  export namespace feegrant {
    export const v1beta1 = { ..._41,
      ..._42,
      ..._43,
      ..._44,
      ..._134,
      ..._145,
      ..._158,
      ..._171
    };
  }
  export namespace genutil {
    export const v1beta1 = { ..._45
    };
  }
  export namespace gov {
    export const v1 = { ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._135,
      ..._146,
      ..._159,
      ..._172
    };
    export const v1beta1 = { ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._136,
      ..._147,
      ..._160,
      ..._173
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._54,
      ..._55,
      ..._56,
      ..._161
    };
  }
  export namespace msg {
    export const v1 = { ..._57
    };
  }
  export namespace orm {
    export const v1 = { ..._58
    };
    export const v1alpha1 = { ..._59
    };
  }
  export namespace params {
    export const v1beta1 = { ..._60,
      ..._61,
      ..._162
    };
  }
  export namespace slashing {
    export const v1beta1 = { ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._137,
      ..._148,
      ..._163,
      ..._174
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._138,
      ..._149,
      ..._164,
      ..._175
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._71
      };
    }
    export const v1beta1 = { ..._72,
      ..._73,
      ..._165
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._74,
      ..._75,
      ..._76,
      ..._139,
      ..._150,
      ..._166,
      ..._176
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._77,
      ..._78,
      ..._140,
      ..._151,
      ..._177
    };
  }
  export const ClientFactory = { ..._200,
    ..._201
  };
}