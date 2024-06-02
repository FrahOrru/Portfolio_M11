import { GraphQLClient } from 'graphql-request'
import { getSdk } from '../generated/graphql';

const client = new GraphQLClient('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clwue0161030607terpg61dgk/master', 
{ 
    headers: {
        Authorization: ''
    }
}
)
export const sdk = getSdk(client)