const { ApolloServer, gql } = require("apollo-server");

// Scalar types which are: String, Int, Float, Boolean


const typeDefs = gql`
type Query{
    # using [String] means you are infering an array with strings
    hello: [String]!,
    #  hello: String!, would be strict for a not allowing a null value to be passed

    numberOfShoes: Int,
    price: Float,
    isCool: Boolean
}
`
const resolvers = {
    Query: {
        hello: () => {
            return ["Hello World", "Hey","I Like Turtles", "Pickles"]
        },
        numberOfShoes: () => {
            return 84
        },
        price: () => {
            return 84.99
        },
        isCool: () => {
            return false
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

// using "node index" in the command line spins this server up 