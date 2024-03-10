import katex from "katex";
import { useEffect, useRef } from "react";
import "katex/dist/katex.min.css";

export default function TextRecognition({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      if (!text) {
        containerRef.current.innerHTML = "Loading...";
        return;
      } else {
        const processedText = text
          .split("\n\n") // Split by double newline to separate paragraphs
          .map((paragraph) => {
            // Split paragraph by LaTeX delimiters, keeping the delimiters
            const fragments = paragraph.split(/(\$[^$]+\$)/);
            const processedFragments = fragments.map((fragment) => {
              if (fragment.startsWith("$") && fragment.endsWith("$")) {
                // It's a LaTeX math expression, render it with KaTeX
                const math = fragment.slice(1, -1); // Remove the $ delimiters
                return katex.renderToString(math, { throwOnError: false });
              } else {
                // It's plain text, return as is, converting line breaks within paragraphs to <br>
                return fragment.replace(/\n/g, "<br>");
              }
            });
            return `<p>${processedFragments.join("")}</p>`;
          })
          .join(""); // Join the paragraphs

        containerRef.current.innerHTML = processedText;
      }
    }
  }, [text]);

  return <div ref={containerRef} />;
}