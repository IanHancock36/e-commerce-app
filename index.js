const { ApolloServer, gql } = require("apollo-server");

// Scalar types which are: String, Int, Float, Boolean


const typeDefs = gql`
type Query{
    # using [String] means you are infering an array with strings
    hello: [String],
    #  hello: String!, would be strict for a not allowing a null value to be passed
    products: [Product!]!
    }
    type Product{
        name: String!, 
        description: String!,
        quantity: Int,
        price: Float,
        onSale:Boolean
        }
`
const resolvers = {
    Query: {
        hello: () => {
            return ["I Like Turtles", "Pickles"]
        },
        products: () => {
            // you have to return an array of objects here.
            return [{
                name: "Bike",
                description: "Mountain Bike women's 24 inch frame full suspension",
                quantity: 6,
                price: 1238.63,
                onSale: false
            }]
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