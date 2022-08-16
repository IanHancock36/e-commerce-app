const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
type Query{
    hello: String
}
`
const resolvers = {
    Query: {
        hello: () => {
            return "Hello World"
        }
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => {
    console.log("Server is ready at" + url)
})

// using "node index" in the command line spins thi server up 