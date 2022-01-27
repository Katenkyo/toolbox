import { createContext, FC, useEffect, useState } from "react";
import Arenas from "@assets/arenas";
import Jobs from "@assets/jobs";

export type NumberWaymark = 1 | 2 | 3 | 4;
export type LetterWaymark = "A" | "B" | "C" | "D";

interface Offset {
  x: number;
  y: number;
}
interface BoxSize {
  width: number;
  height: number;
}

interface WaymarkPosition {
  type: NumberWaymark | LetterWaymark;
  offset: Offset;
}

interface PlayerPosition {
  type: keyof typeof Jobs;
  offset: Offset;
}

export interface DangerZone {
  id: string;
  name: string;
  offset: Offset;
  color: string;
  opacity: number;
  shape: "circle" | "rectangle";
  size: BoxSize;
}

export interface ToolboxContextEntity {
  arena: keyof typeof Arenas;
  waymarks: WaymarkPosition[];
  players: PlayerPosition[];
  dangers: DangerZone[];
  selectedDanger: string | null;
  update: (changes: Partial<ToolboxContextEntity>) => void;
}

export const toolboxContextDefaults: ToolboxContextEntity = {
  arena: "P1",
  waymarks: [],
  players: [],
  dangers: [],
  selectedDanger: null,
  update: (changes) => {},
};

export const ToolboxContext = createContext(toolboxContextDefaults);

interface ToolboxContextProviderProps {
  children?: JSX.Element;
}
export const ToolboxContextProvider: FC<ToolboxContextProviderProps> = (
  props
) => {
  const { children } = props;
  const [arena, setArena] = useState(toolboxContextDefaults.arena);
  const [waymarks, setWaymarks] = useState(toolboxContextDefaults.waymarks);
  const [players, setPlayers] = useState(toolboxContextDefaults.players);
  const [dangers, setDangers] = useState(toolboxContextDefaults.dangers);
  const [selectedDanger, setSelectedDanger] = useState(
    toolboxContextDefaults.selectedDanger
  );

  const update = (changes: Partial<ToolboxContextEntity>) => {
    if (typeof changes.arena !== "undefined") setArena(changes.arena);
    if (typeof changes.waymarks !== "undefined") setWaymarks(changes.waymarks);
    if (typeof changes.players !== "undefined") setPlayers(changes.players);
    if (typeof changes.dangers !== "undefined") setDangers(changes.dangers);
    if (typeof changes.selectedDanger !== "undefined")
      setSelectedDanger(changes.selectedDanger);
  };

  return (
    <ToolboxContext.Provider
      value={{ arena, waymarks, players, dangers, selectedDanger, update }}
    >
      {children}
    </ToolboxContext.Provider>
  );
};
