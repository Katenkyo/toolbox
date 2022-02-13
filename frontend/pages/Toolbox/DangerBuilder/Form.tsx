import {
  FormControlLabel,
  FormLabel,
  Grid,
  Switch,
  TextField,
} from "@mui/material";
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
      type: "dangers",
      data: dangers.map((danger) => {
        if (danger.id !== selectedDanger.id) return danger;
        return { ...danger, [key]: val };
      }),
    });
  };

  return (
    <>
      <FormControlLabel
        control={
          <Switch
            checked={selectedDanger.shape === "circular"}
            onChange={(_, checked) =>
              handleChange("shape", checked ? "circular" : "rectangle")
            }
          />
        }
        label="Circular"
      />
      <TextField
        label="Name"
        value={selectedDanger.name}
        onChange={(evt) => handleChange("name", evt.target.value)}
      />
      <Grid container wrap="nowrap" sx={{ "& > *": { flex: "1 1 auto" } }}>
        <Grid
          container
          sx={{ border: "1px solid #ACACAC", borderRadius: "4px" }}
        >
          <FormControlLabel
            label="offset"
            labelPlacement="top"
            control={
              <>
                <TextField
                  label="Y"
                  variant="standard"
                  value={selectedDanger.offset.y}
                  onChange={(evt) =>
                    handleChange("offset", {
                      ...selectedDanger.offset,
                      y: evt.target.value,
                    })
                  }
                />
                <TextField
                  label="X"
                  variant="standard"
                  value={selectedDanger.offset.x}
                  onChange={(evt) =>
                    handleChange("offset", {
                      ...selectedDanger.offset,
                      x: evt.target.value,
                    })
                  }
                />
              </>
            }
          />
        </Grid>
        <Grid
          container
          sx={{ border: "1px solid #ACACAC", borderRadius: "4px" }}
        >
          <FormControlLabel
            label="Size"
            labelPlacement="top"
            control={
              <>
                <TextField
                  label="height"
                  variant="standard"
                  value={selectedDanger.size.height}
                  onChange={(evt) =>
                    handleChange("size", {
                      ...selectedDanger.size,
                      height: evt.target.value,
                    })
                  }
                />
                <TextField
                  label="width"
                  variant="standard"
                  value={selectedDanger.size.width}
                  onChange={(evt) =>
                    handleChange("size", {
                      ...selectedDanger.size,
                      width: evt.target.value,
                    })
                  }
                />
              </>
            }
          />
        </Grid>
      </Grid>
    </>
  );
};

export default DangerBuilder;
