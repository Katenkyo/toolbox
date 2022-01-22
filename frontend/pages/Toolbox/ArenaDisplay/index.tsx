import { FC, useContext } from "react";
import { ToolboxContext } from "@pages/Toolbox/context";
import Arenas from "@assets/arenas";

const ArenaDisplay: FC = (props) => {
  const context = useContext(ToolboxContext);

  const SelectedArena = Arenas[context.arena];

  return <SelectedArena />;
};

export default ArenaDisplay;
