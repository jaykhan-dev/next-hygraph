import { gql } from "@apollo/client";

const GET_SINGLE_BLOG = gql`
  query SingleBlog($slug: String!) {
    post(where: { slug: $slug }) {
      title
      id
      slug
      excerpt
      content {
        html
        raw
      }
    }
  }
`;

export default GET_SINGLE_BLOG;
