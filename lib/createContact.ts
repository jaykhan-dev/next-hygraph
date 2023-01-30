import { gql } from "@apollo/client";

const CONTACT = gql`
  mutation CreateContact($name: String!, $email: String!, $message: String!) {
    createContact(data: { name: $name, email: $email, message: $message }) {
      id
      name
      email
      message
    }
  }
`;

export default CONTACT;
