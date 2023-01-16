import { gql } from "@apollo/client";
import client from "./apollo";

const GET_PROJECTS = gql`
  query Projects {
    projects {
      title
      id
      slug
      excerpt
      category
      tags
      projectImage {
        url
      }
    }
  }
`;

export default GET_PROJECTS;