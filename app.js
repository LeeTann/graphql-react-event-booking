const express = require('express')
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql')
const { buildSchema } = require('graphql')

const app = express()
const port = process.env.PORT || 9001

app.use(bodyParser.json())

// app.get('/', (req, res, next) => {
//     res.send('Hello World!')
// })

app.use('/graphql', graphqlHttp({
    schema: buildSchema(`
        type RootQuery {
            events: [String!]!
        }

        type RootMutation {
            createEvent(name: String): String
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
    rootValue: {
        events: () => {
            return ['Romantic Cooking', 'Sailing', 'Coding all Night']
        },
        
        createEvent: (args) => {
            const eventName = args.name
            return eventName
        }
    },
    graphiql: true
}))

app.listen(port, () => console.log(`Listening on port ${port} `))