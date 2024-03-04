"use client"

import TextRecognition from "@/config/helpers/text-recognition"
import { useEffect, useState } from "react"

export function TextContainer({ url, isActive}: { url: string, isActive: boolean}) {
    const [text, setText] = useState<string>("")
    const [completion, setCompletion] = useState<number>(0)
    useEffect(() => {
        if (isActive) {
            const getData = async () => {
                // Attempt to retrieve the data from localStorage
                const cachedData = localStorage.getItem(url);
                if (cachedData) {
                    const { text, completion } = JSON.parse(cachedData);
                    setText(text);
                    setCompletion(completion);
                } else {
                    // If not in localStorage, fetch from API
                    const content = await fetch("http://localhost:3000/api/ocr", {
                        method: "POST",
                        body: JSON.stringify({ url: url }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
                    const { text, completion } = await content.json();
                    setText(text);
                    setCompletion(completion);
                    // Store the new data in localStorage
                    localStorage.setItem(url, JSON.stringify({ text, completion }));
                }
            };
    
            getData();
        }
    }, [url, isActive]);
    
    return <TextRecognition text={text} />
}