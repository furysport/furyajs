import { join } from 'path';
import telescope from '@osmonauts/telescope';
import { sync as rimraf } from 'rimraf';

const protoDirs = [join(__dirname, '/../proto')];
const outPath = join(__dirname, '../src/codegen');
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  options: {
    tsDisable: {
      patterns: ['**/*.amino.ts']
    },
    prototypes: {
      includePackageVar: false,
      typingsFormat: {
        useExact: false,
        useDeepPartial: false,
        timestamp: 'timestamp',
        duration: 'duration'
      },
      methods: {
        toJSON: true,
        fromJSON: true
      },
      excluded: {
        packages: [
          'cosmos.authz.v1beta1',
          'cosmos.group.v1',
          'cosmos.nft.v1beta1'
        ]
      }
    },
    aminoEncoding: {
      enabled: true
    },
    lcdClients: {
      enabled: false
    },
    rpcClients: {
      enabled: true,
      camelCase: true
    }
  }
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
  });
