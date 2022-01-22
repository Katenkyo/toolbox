import { FC } from "react";
import { Grid } from "@mui/material";
import { ToolboxContextProvider } from "./context";
import ArenaSelector from "./ArenaSelector";
import ArenaDisplay from "./ArenaDisplay";
import TokenHolder from "./TokenHolder";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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
          <DndProvider backend={HTML5Backend}>
            <ArenaSelector />
            <TokenHolder />
          </DndProvider>
        </Grid>
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          sx={{ flex: "1 1 66%" }}
        >
          <DndProvider backend={HTML5Backend}>
            <ArenaDisplay />
          </DndProvider>
        </Grid>
      </Grid>
    </ToolboxContextProvider>
  );
};

export default Toolbox;
