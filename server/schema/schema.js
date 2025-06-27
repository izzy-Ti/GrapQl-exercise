import { projects, clients } from '../sampleData.js'
import {GraphQLObjectType, GraphQLID, graphql, GraphQLString, GraphQLSchema, GraphQLList} from 'graphql'
import project from '../models/project.js'
import client from '../models/client.js'

export const ClientType = new GraphQLObjectType({
    name: 'client',
    fields: () =>({
        id: {type :GraphQLID},
        name : {type :GraphQLString},
        email : {type :GraphQLString},
        phone : {type :GraphQLString},
    })
})
export const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () =>({
        id: {type :GraphQLID},
        name : {type :GraphQLString},
        description : {type :GraphQLString},
        status : {type :GraphQLString},
        client : {
            type: ClientType,
            resolve(parent, args) {
                return client.findById(parent.id)
            }
        }
    })
})
export const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () =>({
        client: {type: ClientType,
                  args : {id: {type: GraphQLID}},
                  resolve(parent, args) {
                    return client.findById(args.id)
                  }
        },
        clients: {type:new GraphQLList(ClientType),
            resolve(parent, args) {
                return client.find()
            }
        },
        project: {type: ProjectType,
                  args : {id: {type: GraphQLID}},
                  resolve(parent, args) {
                    return project.findById(args.id)
                  }
        },
        projects: {type:new GraphQLList(ProjectType),
            resolve(parent, args) {
                return project.find()
            }
        }
    })
})

export default new GraphQLSchema({
    query: RootQueryType
});

