import { GraphQLClient } from 'graphql-request'

import { graphqlHost } from 'config/dotenv'

export const client = new GraphQLClient(graphqlHost)
