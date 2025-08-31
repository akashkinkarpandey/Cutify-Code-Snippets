import { useContext } from "react";
import { BackgroundContext } from "@/provider/context-provider/backgroundContext";

export const useBackground = () => {
    const context = useContext(BackgroundContext);
    if (!context) {
        throw new Error("useBackground must be used within a BackgroundProvider");
    }
    return context;
};