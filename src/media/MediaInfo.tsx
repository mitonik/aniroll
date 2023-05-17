import { Container, Stack } from "@mui/material";
import CoverImage from "./CoverImage";
import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";
import Title from "./Title";
import Description from "./Description";
import Genres from "./Genres";
import BannerImage from "./BannerImage";

const QUERY = gql(/* GraphQL */ `
  query GetMedia($page: Int!) {
    Page(page: $page, perPage: 1) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(type: ANIME, isAdult: false) {
        title {
          romaji
          english
          native
          userPreferred
        }
        coverImage {
          large
        }
        description
        genres
        siteUrl
        bannerImage
      }
    }
  }
`);

export default function MediaInfo({ page }: { page: number }) {
  const { loading, error, data } = useQuery(QUERY, {
    variables: { page: page },
  });

  const { coverImage, title, description, genres, siteUrl, bannerImage } =
    (data?.Page?.media && data.Page.media[0]) || {};

  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <>
      <BannerImage isLoading={loading} image={bannerImage} />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          position: "relative",
          bottom: "50px",
          paddingBottom: "56px",
        }}
      >
        <CoverImage image={coverImage?.large} isLoading={loading} />
        <Stack spacing={2}>
          <Title
            isLoading={loading}
            title={title?.english ?? title?.userPreferred}
            url={siteUrl}
          />
          <Genres isLoading={loading} genres={genres} />
          <Description isLoading={loading} description={description} />
        </Stack>
      </Container>
    </>
  );
}
