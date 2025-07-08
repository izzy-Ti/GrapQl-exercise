import { gql } from "@apollo/client";

export const ADD_PROJECT = gql`
    mutation AddProject($name:String!, $clientid:ID!, $description:String!) {
        addProject(name:$name, clientid:$clientid, description:$description) {
            id,
            name,
            description
            client {
                name
            }
        }

    }
`

export const ADD_CLIENT = gql `
    mutation AddClient ($name: String!, $email: String!, $phone: String!) {
        addClients (name: $name, email: $email, phone: $phone) {
            name,
            email,
            phone
        }
    }
`