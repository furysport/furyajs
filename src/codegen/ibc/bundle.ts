import * as _87 from "./applications/transfer/v1/genesis";
import * as _88 from "./applications/transfer/v1/query";
import * as _89 from "./applications/transfer/v1/transfer";
import * as _90 from "./applications/transfer/v1/tx";
import * as _91 from "./applications/transfer/v2/packet";
import * as _92 from "./core/channel/v1/channel";
import * as _93 from "./core/channel/v1/genesis";
import * as _94 from "./core/channel/v1/query";
import * as _95 from "./core/channel/v1/tx";
import * as _96 from "./core/client/v1/client";
import * as _97 from "./core/client/v1/genesis";
import * as _98 from "./core/client/v1/query";
import * as _99 from "./core/client/v1/tx";
import * as _100 from "./core/commitment/v1/commitment";
import * as _101 from "./core/connection/v1/connection";
import * as _102 from "./core/connection/v1/genesis";
import * as _103 from "./core/connection/v1/query";
import * as _104 from "./core/connection/v1/tx";
import * as _105 from "./core/port/v1/query";
import * as _106 from "./core/types/v1/genesis";
import * as _107 from "./lightclients/localhost/v1/localhost";
import * as _108 from "./lightclients/solomachine/v1/solomachine";
import * as _109 from "./lightclients/solomachine/v2/solomachine";
import * as _110 from "./lightclients/tendermint/v1/tendermint";
import * as _178 from "./applications/transfer/v1/tx.amino";
import * as _179 from "./core/channel/v1/tx.amino";
import * as _180 from "./core/client/v1/tx.amino";
import * as _181 from "./core/connection/v1/tx.amino";
import * as _182 from "./applications/transfer/v1/tx.registry";
import * as _183 from "./core/channel/v1/tx.registry";
import * as _184 from "./core/client/v1/tx.registry";
import * as _185 from "./core/connection/v1/tx.registry";
import * as _186 from "./applications/transfer/v1/query.rpc.Query";
import * as _187 from "./core/channel/v1/query.rpc.Query";
import * as _188 from "./core/client/v1/query.rpc.Query";
import * as _189 from "./core/connection/v1/query.rpc.Query";
import * as _190 from "./core/port/v1/query.rpc.Query";
import * as _191 from "./applications/transfer/v1/tx.rpc.msg";
import * as _192 from "./core/channel/v1/tx.rpc.msg";
import * as _193 from "./core/client/v1/tx.rpc.msg";
import * as _194 from "./core/connection/v1/tx.rpc.msg";
import * as _202 from "./rpc.query";
import * as _203 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._87,
        ..._88,
        ..._89,
        ..._90,
        ..._178,
        ..._182,
        ..._186,
        ..._191
      };
      export const v2 = { ..._91
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._92,
        ..._93,
        ..._94,
        ..._95,
        ..._179,
        ..._183,
        ..._187,
        ..._192
      };
    }
    export namespace client {
      export const v1 = { ..._96,
        ..._97,
        ..._98,
        ..._99,
        ..._180,
        ..._184,
        ..._188,
        ..._193
      };
    }
    export namespace commitment {
      export const v1 = { ..._100
      };
    }
    export namespace connection {
      export const v1 = { ..._101,
        ..._102,
        ..._103,
        ..._104,
        ..._181,
        ..._185,
        ..._189,
        ..._194
      };
    }
    export namespace port {
      export const v1 = { ..._105,
        ..._190
      };
    }
    export namespace types {
      export const v1 = { ..._106
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._107
      };
    }
    export namespace solomachine {
      export const v1 = { ..._108
      };
      export const v2 = { ..._109
      };
    }
    export namespace tendermint {
      export const v1 = { ..._110
      };
    }
  }
  export const ClientFactory = { ..._202,
    ..._203
  };
}