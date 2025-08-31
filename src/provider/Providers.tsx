"use client"

import GradientProvider from "@/provider/context-provider/gradientContext";
import DarkModeProvider from "./DarkModeProvider";
import ThemeProvider from "@/provider/context-provider/themeContext";
import LanguageProvider from "@/provider/context-provider/languageContext";
import FontSizeProvider from "@/provider/context-provider/fontSizeContext";
import { BackgroundProvider } from "@/provider/context-provider/backgroundContext";
import { CodePreviewProvider } from "@/provider/context-provider/codePreviewContext";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <GradientProvider>
            <ThemeProvider>
                <LanguageProvider>
                    <FontSizeProvider>
                        <DarkModeProvider>
                            <BackgroundProvider>
                                <CodePreviewProvider>
                                    {children}
                                </CodePreviewProvider>
                            </BackgroundProvider>
                        </DarkModeProvider>
                    </FontSizeProvider>
                </LanguageProvider>
            </ThemeProvider>
        </GradientProvider>
    );
}