import { gql } from "@apollo/client";

export default {
  Queries: {
    findUser: gql`
      query FindUser($name: String!) {
        findUser(name: $name) {
          user {
            id
            name
            image
          }
        }
      }
    `,
  },

  Mutation: {
    createNewConversation: gql`
      mutation CreateNewConversation(
        $firstUserId: String
        $secondUserId: String
      ) {
        createNewConversation(
          firstUserId: $firstUserId
          secondUserId: $secondUserId
        ) {
          success
          errorMsg
        }
      }
    `,
  },
};

// gql`
//   mutation AddTodo($type: String!) {
//     addTodo(type: $type) {
//       id
//       type
//     }
//   }
// `
