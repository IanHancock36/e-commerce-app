const { ApolloServer, gql } = require("apollo-server")
exports.typeDefs = gql`
   type Query {
     cars: [Car!]!
   }
   type Car {
     id: ID!
     color: String!
     make: String!
   }

   type Mutation{
    groupDelete(groupId: ID!)
    groupPublish(groupId: ID!)
    groupUnpublish(groupId: ID!)
    groupAddCars (groupId: ID!, carId: ID!)
    groupRemoveCars  (groupId: ID!, carId: ID!)
    groupCreate (
     
      groupInput: GroupInput!
    )
    groupUpdate(
      # we need the group ID to where we are updating it to
      groupId: ID!
      groupInput: GroupInput!
      #  making it nullable 
    ): GroupUpdatePayload
    }
    type GroupUpdatePayload{
      useErrors: [UseErrors!]!
      group: Group
    }
type UseErrors{
  message: [String!]!
}

    input ImageInput{
      url: String! 
    }
    input GroupInput{
         #these cannot be nullable to effectively create the group
         name: String!
      image: ImageInput! 
      description: String!
      featureSet: GroupFeatureFields
    }

 type Group {
   id: ID!
  #  logic to see if car is listed 
   hasCar(id: ID!): Boolean!
   featureSet: GroupFeatureSet
   cars(skip: Int!, take: Int!):[Car!]!
   name: String!
  # this is referencing the Image below
   image: Image!
  # 
   description: String!
}
type GroupFeatures {
  # USING THE ENUMS YOU ARE STRICTLY SPECIFYING 
  # WHAT THE FIELDS ARE SO NOTHING RANDOM IS PASSED
  feature: GroupFeatureFields
}
enum GroupFeatureFields{
  INCLINE_ENGINE
  FOUR_CYLINDER_ENGINE
  TWIN_CYLINDER_ENGINE
  RED_PAINT
  BLACK_PAINT
}
type GroupFeatureSet {
  features: [GroupFeatures]
  applyFeaturesSeperately: Boolean!
}
type Image {
  id: ID!
  url: String! 
}

 `



const server = new ApolloServer({
  typeDefs,
  resolvers: {
    // Query: {
    //   cars: () => [{ id: 1, color: "blue", make: "Toyota" }],
    // },
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
