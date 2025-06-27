import { projects, clients } from '../sampleData.js'
import {GraphQLObjectType, GraphQLID, graphql, GraphQLString, GraphQLSchema} from 'graphql'

export const ClientType = new GraphQLObjectType({
    name: 'client',
    fields: () =>({
        id: {type :GraphQLID},
        name : {type :GraphQLString},
        email : {type :GraphQLString},
        phone : {type :GraphQLString},
    })
})
export const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () =>({
        clients: {type: ClientType,
                  args : {id: {type: GraphQLID}},
                  resolve(parent, args) {
                    return clients.find(client => client.id === args.id)
                  }
        }
    })
})

export default new GraphQLSchema({
    query: RootQueryType
});

