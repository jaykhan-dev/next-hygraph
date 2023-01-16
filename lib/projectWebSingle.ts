import { gql } from "@apollo/client";

const GET_SINGLE_PROJECT = gql`
  query SingleProject($slug: String!) {
    project(where: { slug: $slug }) {
      title
      excerpt
      id
      slug
      content {
        html
        raw
      }
      projectImage {
        url
      }
      category
      tags
    }
  }
`;

export default GET_SINGLE_PROJECT;
