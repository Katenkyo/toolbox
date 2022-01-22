import { FC, useContext } from "react";
import { ToolboxContext } from "@pages/Toolbox/context";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Arenas from "@assets/arenas";

const ArenaSelector: FC = (props) => {
  const context = useContext(ToolboxContext);

  const handleChange = (value: typeof context.arena) => {
    context.update({ arena: value });
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="arena-selector-label">Arena</InputLabel>
      <Select
        labelId="arena-selector-label"
        id="arena-selector"
        value={context.arena}
        label="Arena"
        onChange={(evt) =>
          handleChange(evt.target.value as typeof context.arena)
        }
      >
        {Object.keys(Arenas).map((key) => (
          <MenuItem key={key} value={key}>
            {key}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ArenaSelector;
