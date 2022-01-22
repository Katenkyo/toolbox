import { FC } from "react";
import { Grid } from "@mui/material";
import { ToolboxContextProvider } from "./context";
import ArenaSelector from "./ArenaSelector";
import ArenaDisplay from "./ArenaDisplay";

const Toolbox: FC = (props) => {
  return (
    <ToolboxContextProvider>
      <Grid
        container
        direction="row"
        justifyContent="center"
        wrap="nowrap"
        sx={{
          height: "100%",
          width: "100%",
          "& > *": { height: "100%" },
        }}
      >
        <Grid item sx={{ flex: "1 1 33%" }}>
          <ArenaSelector />
        </Grid>
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          sx={{ flex: "1 1 66%" }}
        >
          <ArenaDisplay />
        </Grid>
      </Grid>
    </ToolboxContextProvider>
  );
};

export default Toolbox;