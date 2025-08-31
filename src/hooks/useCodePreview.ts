import { useContext } from "react";
import { CodePreviewContext } from "@/provider/context-provider/codePreviewContext";

export const useCodePreview = () => {
    const context = useContext(CodePreviewContext);
    if (!context) {
        throw new Error('useCodePreview must be used within a CodePreviewProvider');
    }
    return context;
};