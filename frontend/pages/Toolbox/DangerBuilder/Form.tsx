import { Grid, IconButton, Paper, TextField, Typography } from "@mui/material";
import { FC, useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { ToolboxContext, DangerZone } from "../context";
import { AddCircle, AddBox } from "@mui/icons-material";

interface DangerBuilderProps {
  selectedDanger: DangerZone;
}

const DangerBuilder: FC<DangerBuilderProps> = (props) => {
  const { dispatch, dangers } = useContext(ToolboxContext);
  const [selectedDanger, setSelectedDanger] = useState(props.selectedDanger);

  const handleChange = (key: keyof DangerZone, val: any) => {
    setSelectedDanger({ ...selectedDanger, [key]: val });
    dispatch({
      type: "danger",
      data: dangers.map((danger) => {
        if (danger.id !== selectedDanger.id) return danger;
        return { ...danger, [key]: val };
      }),
    });
  };

  return (
    <TextField
      value={selectedDanger.name}
      onChange={(evt) => handleChange("name", evt.target.value)}
    />
  );
};

export default DangerBuilder;
