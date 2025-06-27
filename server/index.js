import express from 'express'
import dotenv from 'dotenv'
import { graphqlHTTP } from 'express-graphql'
import schema from './schema/schema.js'

dotenv.config()

const port = process.env.PORT
const app = express()


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
}))


app.listen(port, () =>{
    console.log(`http://localhost:${port}`)
})