import { gql } from "@apollo/client";

export const ALL_BLOGS = gql`
  query Blogs {
    posts {
      id
      title
      slug
      date
      coverImage {
        url
      }
    }
  }
`;

export const JAVASCRIPT_BLOG = gql`
  query Javascript {
    posts(where: { category_contains: "javascript" }) {
      title
      date
      slug
      id
      coverImage {
        url
      }
    }
  }
`;

export const BITCOIN_BLOG = gql`
  query BITCOIN {
    posts(where: { category_contains: "bitcoin" }) {
      title
      date
      slug
      id
      coverImage {
        url
      }
    }
  }
`;

export const SINGLE_BLOG = gql`
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
