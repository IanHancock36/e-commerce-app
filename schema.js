const { gql } = require("apollo-server");
exports.typeDefs = gql`
type Query{
    # using [String] means you are infering an array with strings
    #  hello: String!, would be strict for a not allowing a null value to be passed
    products(filter: ProductsFilterInput): [Product!]!

    # This identifies the type of parameter. 
    # products:[Product!]!
    product(id: ID!): Product
    categories:[Category!]!
    category(id: ID!): Category!
    }
    type Mutation{
        addCategory(input: AddCategoryInput): Category!
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
        # below the reviews array is accessed with product and products
        reviews: [Review!]!
        }
        
    type Category{
        id:ID!
        name: String!,
        products(filter: ProductsFilterInput):[Product!]!
        }

type Review{
    id: ID!
        date: String!
        title: String!
        comment: String!
        rating: Int!
        # productId: Int!
} 
# we are keeping this nullable on purpose
input ProductsFilterInput {
    onSale:Boolean
    avgRating: Int
    }

    input AddCategoryInput {
        name: String!
    }
`