import { createContext, FC, useEffect, useState } from "react";
import Arenas from "@assets/arenas";

export interface ToolboxContextEntity {
  arena: keyof typeof Arenas;
  update: (changes: Partial<ToolboxContextEntity>) => void;
}

export const toolboxContextDefaults: ToolboxContextEntity = {
  arena: "P1",
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
  const [value, setValue] = useState(toolboxContextDefaults);

  useEffect(() => {
    setValue({ ...value, update: update });
  }, []);

  const update = (changes: Partial<ToolboxContextEntity>) => {
    setValue({ ...value, ...changes, update: update });
  };

  return (
    <ToolboxContext.Provider value={value}>{children}</ToolboxContext.Provider>
  );
};
