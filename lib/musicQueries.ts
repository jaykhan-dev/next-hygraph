import { gql } from "@apollo/client";

export const MUSIC_TRACKS = gql`
  query MusicTracks {
    tracks {
      title
      id
      slug
      producer {
        id
      }
      track {
        url
        id
      }
    }
  }
`;
