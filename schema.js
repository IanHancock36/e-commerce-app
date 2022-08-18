const { gql } = require("apollo-server");
exports.typeDefs = gql`
type Query{
    # using [String] means you are infering an array with strings
    hello: [String],
    #  hello: String!, would be strict for a not allowing a null value to be passed
    products: [Product!]!
    # This identifies the type of parameter. 
    product(id: ID!): Product
    categories:[Category!]!
    category(id: ID!): Category!
    reviews:[Review!]!
    review:(id:ID!) : Review
    }
    
    type Product{
        id: ID,
        name: String!, 
        description: String!,
        quantity: Int,
        price: Float,
        onSale:Boolean
        image: String!,
        category: Category
        }
        
    type Category{
        id:ID!
        name: String!,
        products:[Product!]!
        }

type Review{
    id: ID
        date: String!
        title: String!
        comment: String!
        rating: Int
        productId: Int
        reviews: [Review!]!
}   
`