import { Buffer } from 'buffer';
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from '@google/generative-ai';
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from 'ai';
import { createWorker } from "tesseract.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');




export async function POST(request: Request) {
  try {
    // Parse the request body to get the image URL
    const { url } = await request.json();
    console.log(url)
    // Fetch the image server-side where CORS is not an issue
    const imageResponse = await fetch(url);
    if (!imageResponse.ok) {
      throw new Error(url);
    }

    // Convert the image to a buffer for Tesseract.js
    const arrayBuffer = await imageResponse.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const worker = await createWorker("eng", 1, { workerPath: "./node_modules/tesseract.js/src/worker-script/node/index.js" });

    const { data: { text } } = await worker.recognize(buffer);
    console.log(text);

    await worker.terminate();



    const model = await genAI.getGenerativeModel({ model: 'gemini-pro' })

    const generationConfig = {
      temperature: 1,
      topK: 32,
      topP: 1,
      maxOutputTokens: 4096,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const parts = [
      { text: "input: Question 1 (30 marks)(a) Find the two values of m € R for which | 5 + 3m| = 11.(b) For the real numbers h, j, and k:1 k hk Express k in terms of hand j."},
      { text: "output: Okay this problem isn't too hard, we need to find two values of m for which they are whole rational numbers. What does this mean? Well, first of all we need to acknowledge what we've been given. The abslute value of 5 + 3m = 11. Now we cant exactly bring everything to one side since the absolute value sign is there. So there are two ways to get rid of the absolute value sign. Square both sides OR have to equations, 1 plus 11 and the other minus 11. Lets square both sides and see what happens." },
    ];

    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
      safetySettings,
    });

    const response = result.response
    return new Response(JSON.stringify({ text: response.text() }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Respond with the recognized text



  } catch (error) {
    // Handle errors appropriately
    console.error(error);
    return new Response(JSON.stringify({ error }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
