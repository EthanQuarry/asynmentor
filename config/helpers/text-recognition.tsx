import katex from "katex";
import { useEffect, useRef } from "react";
import "katex/dist/katex.min.css";

export default function TextRecognition({ text }: { text: string}) {
  const containerRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (containerRef.current) {
      const processedText = text
        .split('\n\n') // Split by double newline to separate paragraphs
        .map(paragraph => {
          // Split paragraph by LaTeX delimiters, keeping the delimiters
          return paragraph.split(/(\\\(.+?\\\))/).map(fragment => {
            if (fragment.startsWith('\\(') && fragment.endsWith('\\)')) {
              // It's a LaTeX math expression, render it with KaTeX
              const math = fragment.slice(2, -2); // Remove the delimiters
              const span = document.createElement('span');
              katex.render(math, span, { throwOnError: false });
              return span.outerHTML;
            } else {
              // It's plain text, return as is, converting line breaks within paragraphs to <br>
              return fragment.replace(/\n/g, '<br>');
            }
          }).join('');
        })
        .join('<p></p>'); // Add paragraphs

      // Render the processed text as HTML inside the container
      containerRef.current.innerHTML = `<p>${processedText}</p>`;
    }
  }, [text]);

  return <div ref={containerRef} />;
}
