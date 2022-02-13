import {
  createContext,
  FC,
  Reducer,
  useEffect,
  useReducer,
  useState,
} from "react";
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
  dispatch: React.Dispatch<Actions>;
}

export const toolboxContextDefaults: ToolboxContextEntity = {
  arena: "P1",
  waymarks: [],
  players: [],
  dangers: [],
  selectedDanger: null,
  dispatch: (action) => {},
};

export const ToolboxContext = createContext(toolboxContextDefaults);

interface ToolboxContextProviderProps {
  children?: JSX.Element;
}

type Actions =
  | { type: "arena"; data: keyof typeof Arenas }
  | { type: "waymarks"; data: WaymarkPosition[] }
  | { type: "players"; data: PlayerPosition[] }
  | { type: "danger"; data: DangerZone[] }
  | { type: "selectedDanger"; data: string | null };

export const ToolboxContextProvider: FC<ToolboxContextProviderProps> = (
  props
) => {
  const { children } = props;

  const reducer: Reducer<ToolboxContextEntity, Actions> = (state, action) => {
    return { ...state, [action.type]: action.data };
  };
  const [{ arena, waymarks, players, dangers, selectedDanger }, dispatch] =
    useReducer(reducer, toolboxContextDefaults);

  return (
    <ToolboxContext.Provider
      value={{ arena, waymarks, players, dangers, selectedDanger, dispatch }}
    >
      {children}
    </ToolboxContext.Provider>
  );
};
