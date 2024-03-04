import { Buffer } from 'buffer';
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from '@google/generative-ai';
import { GoogleGenerativeAIStream, StreamingTextResponse } from 'ai';
import { createWorker } from "tesseract.js";
const Groq = require('groq-sdk');

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// TODO: This is the messiest thing I have ever created, please fix it in the future.


export async function ocrServer({ url}: { url: string}): Promise<Data | unknown> {
  try {
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

    await worker.terminate();



    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY
    });
    const chatCompletion: CompletionData = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: "Question 1 (30 marks)(a) Find the two values of m € R for which | 5 + 3m| = 11.(b) For the real numbers h, j, and k:1 k hk Express k in terms of hand j.",
        },
        {
          role: "assistant",
          content: "To solve these problems, we will approach them step by step.### Part (a): Find the two values of \(m \in \mathbb{R}\) for which \(|5 + 3m| = 11\).The equation \(|5 + 3m| = 11\) means that the absolute value of \(5 + 3m\) is 11. This implies that \(5 + 3m\) can be either 11 or -11, because the absolute value function yields the distance of a number from 0 on the number line, without considering direction. Therefore, we have two cases:1. \(5 + 3m = 11\)2. \(5 + 3m = -11\)We solve these equations separately to find the values of \(m\).#### Case 1: \(5 + 3m = 11\)Subtracting 5 from both sides, we get:\[3m = 11 - 5\]\[3m = 6\]Dividing by 3:\[m = \frac{6}{3}\]\[m = 2\]#### Case 2: \(5 + 3m = -11\)Subtracting 5 from both sides, we get:\[3m = -11 - 5\]\[3m = -16\]Dividing by 3:\[m = \frac{-16}{3}\]So, the two values of \(m\) for which \(|5 + 3m| = 11\) are \(m = 2\) and \(m = -\frac{16}{3}\).### Part (b): Express \(k\) in terms of \(h\) and \(j\).Given the equation:\[1 = \frac{k}{h} + \frac{h}{k}\]First, we need to solve this equation for \(k\). This involves a bit of algebraic manipulation. To simplify the equation, it's helpful to have a common denominator, which in this case would be \(hk\). Let's multiply both sides of the equation by \(hk\) to eliminate the fractions:\[hk = k + h\]This simplifies to:\[hk - k = h\]Factoring out \(k\) from the left side gives us:\[k(h - 1) = h\]And finally, solving for \(k\):\[k = \frac{h}{h - 1}\]However, it seems there might have been a mistake in the interpretation of the original equation as it relates to expressing \(k\) in terms of \(h\) and \(j\), since \(j\) was not mentioned in the provided equation. If there's a specific relation involving \(h\), \(j\), and \(k\) that was meant to be addressed, please provide the correct equation or relationship for further assistance.",
        },
        {
          role: "user",
          content: text
        }
      ],
      model: "mixtral-8x7b-32768",
    })
    
    const data: Data = { 
        text: await chatCompletion.choices[0]?.message.content || "",
        completion: await chatCompletion.usage.completion_time,
        total_time: await chatCompletion.usage.total_time,
 
      }

      return data





    } catch (error) {
      // Handle errors appropriately
        console.error(error);
        return error
    }
  }

  interface Data {
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
