import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
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

export const GET_GRAPHICS_PROJECTS = gql`
  query GraphicsProjects {
    projects(where: { category_contains: "Graphic" }) {
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

export const GET_WEB_PROJECTS = gql`
  query WebProjects {
    projects(where: { category_contains: "development" }) {
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

export const GET_SINGLE_PROJECT = gql`
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
