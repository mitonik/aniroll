import { Fab, Paper } from "@mui/material";
import { Refresh } from "@mui/icons-material";
import MediaInfo from "./media/MediaInfo";
import { useState } from "react";

const ANIME_LAST_PAGE = 17151;

function App() {
  const [page, setPage] = useState<number | null>(null);

  const rollMedia = () => {
    const randomPage = Math.round(Math.random() * ANIME_LAST_PAGE);
    setPage(randomPage);
  };

  return (
    <>
      {page && <MediaInfo page={page} />}
      <Paper
        sx={{
          position: "fixed",
          bottom: page ? 0 : "-56px",
          left: 0,
          right: 0,
          height: "56px",
          transition: "all 0.5s ease-in-out",
        }}
      >
        <Fab
          variant="extended"
          color="primary"
          sx={{
            position: "fixed",
            bottom: page ? 32 : "calc(50%)",
            right: "calc(50%)",
            transform: page ? "translateX(50%)" : "translate(50%)",
            transition: "all 0.5s ease-in-out",
          }}
          onClick={rollMedia}
        >
          <Refresh sx={{ mr: 1, animation: "" }} />
          Roll
        </Fab>
      </Paper>
    </>
  );
}

export default App;
