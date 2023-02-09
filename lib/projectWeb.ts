import { gql } from "@apollo/client";

const GET_WEB_PROJECTS = gql`
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

export default GET_WEB_PROJECTS;
