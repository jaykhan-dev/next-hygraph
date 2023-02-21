import { gql } from "@apollo/client";

const GET_SINGLE_BLOG = gql`
  query SingleBlog($slug: String!) {
    post(where: { slug: $slug }) {
      title
      id
      slug
      tags
      excerpt
      date
      coverImage {
        url
      }
      content {
        html
        raw
      }
    }
  }
`;

export default GET_SINGLE_BLOG;
