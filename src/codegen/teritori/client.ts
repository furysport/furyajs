import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as teritoriAirdropV1beta1TxRegistry from "./airdrop/v1beta1/tx.registry";
import * as teritoriAirdropV1beta1TxAmino from "./airdrop/v1beta1/tx.amino";
export const teritoriAminoConverters = { ...teritoriAirdropV1beta1TxAmino.AminoConverter
};
export const teritoriProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...teritoriAirdropV1beta1TxRegistry.registry];
export const getSigningTeritoriClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...teritoriProtoRegistry]);
  const aminoTypes = new AminoTypes({ ...teritoriAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningTeritoriClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningTeritoriClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};