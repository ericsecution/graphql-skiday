

const { ApolloServer, gql } = require("apollo-server")

const typeDefs = gql`

`

// will come back to this
// ----------------------
// const resolvers = {

// }

const server = new ApolloServer({
    typeDefs,
    mocks: true,
})

// mocks: true (above)
// will mock data for the schema
// so, before I wire up my data sources
// I'm going to definre the data that'll
// serve as the schema for my API

server.listen().then(({url}) => console.log('Server running at ${url}'))


