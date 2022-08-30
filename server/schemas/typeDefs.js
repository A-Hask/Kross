const { gql } = require("apollo-server-express");

const typeDefs = gql`
<<<<<<< HEAD
  type User {
    _id: ID
    username: String
    email: String
  }
`;

module.exports = typeDefs;
=======
  type Query {
    helloWorld: String
  }
`;

// export typeDefs
module.exports = typeDefs;
>>>>>>> mutations
