const { ApolloServer } = require("apollo-server");
// const { products, categories } = require("./db");
const { typeDefs } = require("./schema")
const {Query} = require("./resolvers/Query")
const {Category} = require("./resolvers/Category")
const {Product} = require("./resolvers/Product")


const server = new ApolloServer({
    typeDefs,
    resolvers :{
    Query,
    Category,
    Product
    },
});

server.listen().then(({ url }) => {
    console.log("Server is ready at" + url)
})

// using "node index" in the command line spins this server up 