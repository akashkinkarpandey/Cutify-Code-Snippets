import { useContext } from "react";
import { GradientContext } from "@/provider/context-provider/gradientContext";

export const useGradient = () => {
    const context = useContext(GradientContext);
    if (!context) {
        throw new Error("useGradient must be used within a GradientProvider");
    }
    return context;
};