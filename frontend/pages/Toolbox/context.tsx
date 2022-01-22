import { createContext, FC, useEffect, useState } from "react";
import Arenas from "@assets/arenas";

interface TokenPosition {
  type: any;
}

export interface ToolboxContextEntity {
  arena: keyof typeof Arenas;
  usedTokens: TokenPosition[];
  update: (changes: Partial<ToolboxContextEntity>) => void;
}

export const toolboxContextDefaults: ToolboxContextEntity = {
  arena: "P1",
  usedTokens: [],
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
  const [usedTokens, setUsedTokens] = useState(
    toolboxContextDefaults.usedTokens
  );

  const update = (changes: Partial<ToolboxContextEntity>) => {
    if (typeof changes.arena !== "undefined") setArena(changes.arena);
    if (typeof changes.usedTokens !== "undefined")
      setUsedTokens(changes.usedTokens);
  };

  return (
    <ToolboxContext.Provider value={{ arena, usedTokens, update }}>
      {children}
    </ToolboxContext.Provider>
  );
};
