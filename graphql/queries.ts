import gql from "graphql-tag";

export const ASALIST_QUERY = gql`
  query MyQuery {
    asalist {
      result {
        assetId
        available
        logo
        name
      }
    }
  }
`;
