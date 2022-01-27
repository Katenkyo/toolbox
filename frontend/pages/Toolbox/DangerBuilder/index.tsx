import { Grid, IconButton, Paper, TextField, Typography } from "@mui/material";
import { FC, useContext } from "react";
import { v4 as uuid } from "uuid";
import { ToolboxContext, DangerZone } from "../context";
import { AddCircle, AddBox } from "@mui/icons-material";
import Form from "./Form";

const DangerBuilder: FC = (props) => {
  const context = useContext(ToolboxContext);

  const handleAdd = (shape: "rectangle" | "circle") => {
    const danger: DangerZone = {
      id: uuid(),
      offset: { x: 0, y: 0 },
      shape,
      name: "",
      color: "#FF0000",
      opacity: 0.5,
      size: { width: 0.1, height: 0.1 },
    };

    context.update({
      dangers: [...context.dangers, danger],
      selectedDanger: danger.id,
    });
  };

  const selectedDanger = context.dangers.find(
    (danger) => danger.id === context.selectedDanger
  );

  console.log(context);

  return (
    <Paper elevation={2} sx={{ minHeight: "15rem" }}>
      <Grid container direction="row">
        <IconButton onClick={() => handleAdd("circle")}>
          <AddCircle />
        </IconButton>
        <IconButton onClick={() => handleAdd("rectangle")}>
          <AddBox />
        </IconButton>
      </Grid>

      {typeof selectedDanger === "undefined" ? (
        <Typography variant="h5" align="center" sx={{ opacity: 0.3 }}>
          No DangerZone selected
        </Typography>
      ) : (
        <Form key={context.selectedDanger} selectedDanger={selectedDanger} />
      )}
    </Paper>
  );
};

export default DangerBuilder;
