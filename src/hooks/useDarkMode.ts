import { DarkModeContext } from "@/provider/context-provider/darkModeContext";
import { useContext } from "react";


export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error("darkModeContext is possibly undefined!");
    }
    return context;
};