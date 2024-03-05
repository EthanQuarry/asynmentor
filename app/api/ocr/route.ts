import { Buffer } from 'buffer';
// @ts-ignore
import { createWorker } from "tesseract.js";
const Groq = require('groq-sdk');



// TODO: This is the messiest thing I have ever created, please fix it in the future.


export async function POST(request: Request) {
  try {
    // Parse the request body to get the image URL
    const { url } = await request.json();
    // Fetch the image server-side where CORS is not an issue
    const imageResponse = await fetch(url);
    if (!imageResponse.ok) {
      throw new Error(url);
    }

    // Convert the image to a buffer for Tesseract.js
    const arrayBuffer = await imageResponse.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
   
    let OCRResponse = await new Promise(async (resolve, reject) => {
      const worker = await createWorker("eng", 1, {
        logger: m => console.log(m),
      });
      try {
        const { data: { text } } = await worker.recognize(buffer);
        console.log(text);
        resolve(text);
      } catch (error) {
        reject(error);
      } finally {
        await worker.terminate();
      }
    });

    // Initialize Groq with API key
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY
    });

    // Proceed with Groq API request using OCRResponse
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a leaving certificate mathmatics tutor. 
          Your number one priority is to break down the problem, and explain it as if you were explaining it to a child. Using stories is acceptable.
          Secondly, explain the required question in as much detail as possible. It is paramount that you prepare your answers in a format where almost anybody could understand how you reached a particular outcome.
          Here is the exact process:
          1. Solve the problem step by step and explain any referenced function or formulae.
          2. Explain how you reached the outcome and the exact rules you followed.
          3. Return this in a structured format easy for anyone to understand.
          You are to return all your solutions in Katex the mathmatical typesetting language.
          The response but be no more than 500 characters long.`
        },
        {
          role: "user",
          content: OCRResponse
        }
      ],
      model: "mixtral-8x7b-32768",
    });

    // Handle the response from Groq API
    console.log(chatCompletion.choices[0].message.content);
    
    if (!chatCompletion) {
      return new Response(JSON.stringify({ error: "Error completing the chat" }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

      return new Response(JSON.stringify({ 
        text: await chatCompletion.choices[0].message.content,
        completion: await chatCompletion.usage.completion_time,
        total_time: await chatCompletion.usage.total_time,
 
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      })

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

  export interface Data {
    text: string;
    completion: number;
    total_time: number;
  }

  interface CompletionData {
    id: string;
    object: string;
    created: number;
    model: string;
    system_fingerprint: null | string;
    choices: Choice[];
    usage: Usage;
  }
  
  interface Choice {
    index: number;
    message: Message;
    finish_reason: string;
    logprobs: null | number[];
  }
  
  interface Message {
    role: string;
    content: string;
  }
  
  interface Usage {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
    prompt_time: number;
    completion_time: number;
    total_time: number;
  }
  


// const model = await genAI.getGenerativeModel({ model: 'gemini-pro' })

// const generationConfig = {
//   temperature: 1,
//   topK: 32,
//   topP: 1,
//   maxOutputTokens: 4096,
// };

// const safetySettings = [
//   {
//     category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//   },
//   {
//     category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//   },
//   {
//     category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
//     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//   },
//   {
//     category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
//     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//   },
// ];

// const parts = [
//   { text: "input: Question 1 (30 marks)(a) Find the two values of m € R for which | 5 + 3m| = 11.(b) For the real numbers h, j, and k:1 k hk Express k in terms of hand j."},
//   { text: "output: Okay this problem isn't too hard, we need to find two values of m for which they are whole rational numbers. What does this mean? Well, first of all we need to acknowledge what we've been given. The abslute value of 5 + 3m = 11. Now we cant exactly bring everything to one side since the absolute value sign is there. So there are two ways to get rid of the absolute value sign. Square both sides OR have to equations, 1 plus 11 and the other minus 11. Lets square both sides and see what happens." },
// ];

// const result = await model.generateContent({
//   contents: [{ role: "user", parts }],
//   generationConfig,
//   safetySettings,
// });

// const response = result.response
// return new Response(JSON.stringify({ text: response.text() }), {
//   status: 200,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });
