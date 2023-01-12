import { gql } from "@apollo/client";

const GET_GRAPHICS_PROJECTS = gql`
  query GraphicsProjects {
    projects(where: { category_contains: "Graphic" }) {
      title
    }
  }
`;
