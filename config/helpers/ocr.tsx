"use client"

import { useState, useEffect, useRef} from 'react';
// @ts-ignore
import renderMathInElement  from 'katex/dist/contrib/auto-render';
import 'katex/dist/katex.min.css';

export default function TextRecognition({ text }: { text: string }) {
  const katexTextRef = useRef<HTMLDivElement | null >(null);

  useEffect(() => {
        if (katexTextRef.current) {
          renderMathInElement(katexTextRef.current, {
            delimiters: [
              { left: '$$', right: '$$', display: true },
              { left: '$', right: '$', display: false },
            ],
          });
        }

  }, [text]);

  // Render the MDX content using your preferred library (replace with your actual implementation)

  return (
  <div ref={katexTextRef}>
    {text}
  </div>
  )
}