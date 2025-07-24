// src/api/anilistApi.js

const BASE_URL = "https://graphql.anilist.co";

// Fungsi umum untuk fetch GraphQL ke AniList
const fetchGraphQL = async (query, variables = {}) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const data = await response.json();
  return data.data;
};

// Dapatkan anime populer
export const getPopularAnime = async () => {
  const query = `
    query ($page: Int, $perPage: Int) {
      Page(page: $page, perPage: $perPage) {
        media(type: ANIME, sort: POPULARITY_DESC) {
          id
          title {
            romaji
            english
            native
          }
          coverImage {
            large
          }
          averageScore
          episodes
        }
      }
    }
  `;

  const variables = {
    page: 1,
    perPage: 10
  };

  const data = await fetchGraphQL(query, variables);
  return data.Page.media;
};

// Cari anime berdasarkan kata kunci
export const searchAnime = async (queryStr) => {
  const query = `
    query ($search: String) {
      Media(search: $search, type: ANIME) {
        id
        title {
          romaji
          english
        }
        coverImage {
          large
        }
        averageScore
        episodes
      }
    }
  `;

  const variables = {
    search: queryStr
  };

  const data = await fetchGraphQL(query, variables);
  return data.Media ? [data.Media] : [];
};