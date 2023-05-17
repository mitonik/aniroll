import { Fade, Skeleton, Stack, Typography } from "@mui/material";

export default function Description({
  isLoading,
  description,
}: {
  isLoading: boolean;
  description: string | null | undefined;
}) {
  return isLoading ? (
    <Stack>
      {[...Array(7)].map((_value, index) => {
        return (
          <Skeleton key={index} sx={{ fontSize: "1rem", lineHeight: "1.5" }} />
        );
      })}
    </Stack>
  ) : (
    <Fade in={!isLoading}>
      <Typography
        variant="body1"
        component="p"
        dangerouslySetInnerHTML={{ __html: description ?? "No description." }}
      />
    </Fade>
  );
}
