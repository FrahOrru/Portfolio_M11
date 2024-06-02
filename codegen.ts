import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
 overwrite: true,
 documents: ['./src/**/*.graphql'],
 schema: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clwue0161030607terpg61dgk/master',
 generates: {
  './src/generated/graphql.ts': {
   plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
   config: {
    rawRequest: true
   },
  },
 },
};

export default config;