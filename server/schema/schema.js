import { projects, clients } from '../sampleData.js'
import {GraphQLObjectType, GraphQLID, graphql, GraphQLString, GraphQLSchema, GraphQLList, GraphQLNonNull, graphqlSync, GraphQLEnumType} from 'graphql'
import project from '../models/project.js'
import client from '../models/client.js'

export const ClientType = new GraphQLObjectType({
    name: 'Client',
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
                return client.findById(parent.clientid)
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

export const Mutation = new GraphQLObjectType({
    name: 'mutation',
    fields: () =>({
        addClients: {
            type: ClientType,
            args: {
                name: {type: GraphQLNonNull(GraphQLString)},
                email: {type: GraphQLNonNull(GraphQLString)},
                phone: {type: GraphQLNonNull(GraphQLString)},
            },
            resolve(parent,args){
                const Client = new client({
                    name: args.name,
                    email: args.email,
                    phone: args.phone
                }) 
            return  Client.save()
            }
        },
        removeClients: {
            type: ClientType,
            args: {
                id: {type: GraphQLNonNull(GraphQLID)},
            },
            resolve(parent,args) {
                return client.findByIdAndDelete(args.id)
            }
        },
        addProject: {
            name: 'addProject',
            type: ProjectType,
            args: {
                name: {type: GraphQLNonNull(GraphQLString)},
                description: {type: GraphQLNonNull(GraphQLString)},
                status: {type: new GraphQLEnumType({
                    name: 'Projectstatus',
                    values: {
                    'progress': {value: 'in progress'},
                    'new': {value: 'Not started'},
                    'completed': {value: 'completed'}
            }}),defaultValue: 'Not started'},
                clientid: {type:GraphQLNonNull(GraphQLID)}
            },
            resolve(parent,args) {
                const Project = new project({
                    name: args.name,
                    description: args.description,
                    status: args.status,
                    clientid: args.clientid
                })
                return Project.save()
            }
        },
        removeProject: {
            name: 'removeProject',
            type: ProjectType,
            args: {
                projectid: {type: GraphQLNonNull(GraphQLID)}
            },
            resolve(parent,args) {
                return project.findByIdAndDelete(args.projectid)
            }
        },
        updateProject: {
            name: 'updateProject',
            type: ProjectType,
            args: {
                projectid: {type: GraphQLNonNull(GraphQLID)},
                name: {type: GraphQLString},
                description: {type: GraphQLString},
                status: {type: new GraphQLEnumType({
                    name: 'ProjectstatusUpdate',
                    values: {
                    'progress': {value: 'in progress'},
                    'new': {value: 'Not started'},
                    'completed': {value: 'completed'}
            }})},
                clientid: {type:GraphQLID}
            },
            resolve(parent,args) {
                return project.findByIdAndUpdate(args.projectid, {
                    $set: {
                        name: args.name,
                        description: args.description,
                        status: args.status,
                        clientid: args.clientid
                    }
                }, {new: true}
            )
            }
        }
    })
})

export default new GraphQLSchema({
    query: RootQueryType,
    mutation: Mutation
});

