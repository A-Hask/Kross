const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Post {
    _id: ID
    postText: String
    createdAt: String
    username: String
    commentCount: Int
    comments: [Comment]
  }
  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }
  type User {
    _id: ID
    username: String
    email: String
    krossieCount: Int
    posts: [Post]
    krossies: [User]
    games: [Game]
  }
  type Game {
    _id: ID
    gamename: String
    users: [User]
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
  game(gamename: String!): [User]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postText: String!): Post
    addComment(commentId: ID!, commentBody: String!): Post
    addKrossie(krossieId: ID!): User
    addGame(gamename: String!): Game
  }
  type Auth {
    token: ID!
    user: User
  }
`;

// export typeDefs
module.exports = typeDefs;
