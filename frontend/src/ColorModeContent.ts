import { createContext } from "react";


export interface ColorModeContextType {
    toggleThemeMode: () => void;
}

export const ColorModeContext = createContext<ColorModeContextType>({ toggleThemeMode:()=> { } });