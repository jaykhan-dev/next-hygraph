import { gql } from "@apollo/client";

const GET_BLOGS = gql`
  query Blogs {
    posts {
      id
      title
      tags
      slug
      excerpt
      date
      coverImage {
        url
      }
    }
  }
`;

export default GET_BLOGS;
