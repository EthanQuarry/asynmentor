"use client"

import TextRecognition from "@/config/helpers/text-recognition"
import { useEffect, useState } from "react"
import convertor from "@/config/helpers/convertor"

export function TextContainer({ url, isActive }: { url: string, isActive: boolean }) {
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

                    let OCRResponse = await new Promise(async (resolve, reject) => {
                        try {

                            const textFromQ = await convertor(url);
                            console.log("Text from OCR: ", textFromQ);
                            resolve(textFromQ); // Resolve the promise with the OCR result
                        } catch (error) {
                            console.error("Error in OCR process:", error);
                            reject(error); // Reject the promise with the error
                        }
                    });



                    try {
                        await OCRResponse;
                        const content = await fetch("/api/ocr", {
                            method: "POST",
                            body: JSON.stringify({ OCRResponse }),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        });

                        const { text, completion } = await content.json();
                        setText(text);
                        setCompletion(completion);
                        // Store the new data in localStorage
                        localStorage.setItem(url, JSON.stringify({ text, completion }));
                        // Handle the response from the second API call
                    } catch (error) {
                        console.error("Error in OCR process or API call:", error);
                        // Handle the error appropriately
                    }



                }
            };

            getData();
        }
    }, [url, isActive]);

    return <TextRecognition text={text} />
}