

const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        totalDays: Int!
    }
`;

// will come back to this
// ----------------------
// const resolvers = {

// }

// Not going to worry about the resolver functions just yet
// Instead of passing in my resolvers, I'm going to pass in a key called:
    // mocks: true  
    // (shown above) which will mock the data for the schema

const server = new ApolloServer({
    typeDefs,
    mocks: true,
});
// My server needs to take in typeDefs and resolvers


// so, before I wire up my data sources
// I'm going to define the schema that'll be my API

server.listen().then(({url}) => console.log(`Server running at ${url}`));
// server.listen starts my server
// the console message will let me know which port I'm running on


