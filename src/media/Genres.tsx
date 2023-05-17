import { Chip, Skeleton, Stack } from "@mui/material";

export default function Genres({
  isLoading,
  genres,
}: {
  isLoading: boolean;
  genres: (string | null)[] | null | undefined;
}) {
  return (
    <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
      {isLoading && (
        <>
          {[...Array(3)].map((_value, index) => {
            return (
              <Skeleton
                key={index}
                variant="rounded"
                width="80px"
                height="32px"
                sx={{ borderRadius: "16px" }}
              />
            );
          })}
        </>
      )}
      {genres?.map((genre) => {
        return (
          <Chip
            key={genre}
            label={genre}
            color="primary"
            component="a"
            href={`https://anilist.co/search/anime/${genre}`}
            target="__blank"
            clickable
          />
        );
      })}
    </Stack>
  );
}
