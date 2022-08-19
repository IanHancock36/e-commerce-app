const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema")
const { Query } = require("./resolvers/Query")
const { Category } = require("./resolvers/Category")
const { Product } = require("./resolvers/Product")
const { Mutation } = require("./resolvers/Mutation")
// only needed to be imported here. 
const { categories, products, reviews } = require("./db")

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Category,
        Product,
        Mutation
    },
    // this is the raw data that is array of object and data of the product and category descriptions 
    // you are passing this through where it can be accessed anywhere in the project
    context: {
        categories,
        products,
        reviews 
    }
});

server.listen().then(({ url }) => {
    console.log("Server is ready at " + url)
})
