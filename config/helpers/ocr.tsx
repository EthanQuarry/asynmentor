"use client"
import { useEffect, useState } from "react";



const TextRecognition = ({ selectedImage }: { selectedImage: string}) => {

  const [recognizedText, setRecognizedText] = useState<string>('');
  useEffect(() => {
    const getText = async () => {
      const response = await fetch('/api/ocr', {
        method: 'POST',
        body: JSON.stringify({ url: selectedImage }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
        if (!response.ok) {
          throw new Error(`Failed to recognize text: Status ${response.status}`);
        }
        const { text } = await response.json();
        setRecognizedText(text);
      }
      
  
    getText()
  }, [selectedImage]);
  return (
    <div>
      <h2>Recognized Text:</h2>
      <h2>{recognizedText}</h2>
    </div>
  );
};
export default TextRecognition;