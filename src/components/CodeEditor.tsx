"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useGradient } from "@/hooks/useGradient";
import { useTheme } from "@/hooks/useTheme";
import { useLanguage } from "@/hooks/useLanguage";
import { useFontSize } from "@/hooks/useFontSize";
import { useBackground } from "@/hooks/useBackground";
import { useCodePreview } from "@/hooks/useCodePreview";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button"; 

export default function CodeEditor() {
  const [code, setCode] = useState<string>("");
  const [wrapCode, setWrapCode] = useState<boolean>(true);

  const { gradient } = useGradient();
  const { theme } = useTheme();
  const { language } = useLanguage();
  const { fontSize } = useFontSize();
  const { isBackgroundHidden } = useBackground();
  const { setPreviewRef } = useCodePreview();

  return (
    <div className="flex w-full flex-col gap-6 items-center pb-4 mt-20 justify-center dark:text-white max-sm:px-2 mb-8">
      {/* Input textarea */}
      <div className="w-full max-w-lg space-y-4 max-sm:space-y-4">
        <Textarea
          className="w-full h-40 p-4 rounded-md bg-white dark:text-white text-black bg-opacity-10 backdrop-blur-lg border border-black dark:border-white/20 dark:shadow-none"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste your code here..."
        />
      </div>

      {/* Wrap toggle button */}
      <Button
        onClick={() => setWrapCode((prev) => !prev)}
        variant="outline"
        className="mb-2 text-white dark:text-black dark:bg-white bg-black"
      >
        {wrapCode ? "Unwrap Code" : "Wrap Code"}
      </Button>

      {/* Beautified block */}
      <div
        ref={setPreviewRef}
        className={`w-full max-w-3xl mx-auto py-8 px-10 max-sm:px-2 max-sm:p-2 shadow-lg ${
          isBackgroundHidden ? "!bg-none shadow-none" : ""
        }`}
        style={{ background: gradient }}
      >
        <div className="relative">
          {/* macOS dots */}
          <div className="flex items-center space-x-2 mt-1 absolute left-3 top-2 z-10">
            <span className="w-[9px] h-[9px] max-sm:w-2 max-sm:h-2 rounded-full bg-red-500"></span>
            <span className="w-[9px] h-[9px] max-sm:w-2 max-sm:h-2 rounded-full bg-yellow-500"></span>
            <span className="w-[9px] h-[9px] max-sm:w-2 max-sm:h-2 rounded-full bg-green-500"></span>
          </div>

          {/* Editable code preview */}
          <div
            contentEditable
            suppressContentEditableWarning
            onInput={(e) => setCode(e.currentTarget.textContent || "")}
            className="focus:outline-none"
          >
            <SyntaxHighlighter
              language={language}
              style={typeof theme === "string" ? coldarkDark : theme}
              customStyle={{
                fontSize: `${fontSize}px`,
                borderRadius: "8px",
                padding: "45px 35px 30px 10px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4)",
                opacity: 0.9,
                whiteSpace: wrapCode ? "pre-wrap" : "pre", // ✅ toggle wrap
                wordBreak: "break-word",
                overflowWrap: "break-word",
              }}
              codeTagProps={{
                style: {
                  whiteSpace: wrapCode ? "pre-wrap" : "pre",
                  wordBreak: "break-word",
                  overflowWrap: "break-word",
                },
              }}
              wrapLongLines={wrapCode}
              showLineNumbers
            >
              {code ||
                `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
}
