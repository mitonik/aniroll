import { Fade, Paper, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";

export default function CoverImage({
  image,
  isLoading,
}: {
  image: string | null | undefined;
  isLoading: boolean;
}) {
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  useEffect(() => {
    setIsLoadingImage(true);
  }, [isLoading]);
  return (
    <Paper
      sx={{
        width: 230,
        height: 320,
        borderRadius: "2px",
        overflow: "hidden",
      }}
    >
      <Fade
        in={isLoadingImage}
        unmountOnExit
        style={{ position: "absolute", width: "230px", height: "320px" }}
      >
        <Skeleton variant="rounded" width="100%" height="100%" />
      </Fade>
      <Fade in={!isLoadingImage}>
        <img
          src={image ?? ""}
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
          onLoad={() => setIsLoadingImage(false)}
        />
      </Fade>
    </Paper>
  );
}
