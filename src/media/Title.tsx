import { Fade, Link, Skeleton, Typography } from "@mui/material";

export default function Title({
  isLoading,
  title,
  url,
}: {
  isLoading: boolean;
  title: string | null | undefined;
  url: string | null | undefined;
}) {
  return (
    <>
      {isLoading && (
        <Skeleton
          width="25%"
          sx={{ fontSize: "2.125rem", lineHeight: "1.235" }}
        />
      )}
      {!isLoading && (
        <Fade in={!isLoading}>
          <Typography variant="h4" component="h1">
            <Link href={url ?? ""} target="__blank">
              {title}
            </Link>
          </Typography>
        </Fade>
      )}
    </>
  );
}
