import { Fade, Paper, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";

export default function BannerImage({
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
        width: "100%",
        height: "100px",
        overflow: "hidden",
      }}
    >
      <Fade
        in={isLoadingImage}
        unmountOnExit
        style={{ position: "absolute", width: "100%", height: "100px" }}
      >
        <Skeleton variant="rounded" width="100%" height="100px" />
      </Fade>
      <Fade in={!isLoadingImage}>
        <img
          src={image ?? ""}
          width="100%"
          height="100px"
          style={{ objectFit: "cover" }}
          onLoad={() => setIsLoadingImage(false)}
        ></img>
      </Fade>
    </Paper>
  );
}
