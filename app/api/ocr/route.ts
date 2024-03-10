import { Buffer } from 'buffer';
const Groq = require('groq-sdk');
import Anthropic from "@anthropic-ai/sdk";


// TODO: This is the messiest thing I have ever created, please fix it in the future.


export async function POST(request: Request) {
  try {
    // Parse the request body to get the image URL
    const { OCRResponse } = await request.json();
    console.log("OCR response: ", OCRResponse);
    // Initialize Groq with API key
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY
    });

    const anthropic = new Anthropic({
      apiKey: process.env.CLAUDE_API_KEY, 
    });
    // Proceed with Groq API request using OCRResponse
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: ``
        },
        {
          role: "user",
          content: OCRResponse
        }
      ],
      model: "mixtral-8x7b-32768",
    });

    const msg = await anthropic.messages.create({
      model: "claude-3-sonnet-20240229",
      max_tokens: 1000,
      temperature: 0.4,
      system: "You are a leaving certificate maths tutor. You job is to solve questions in the most simplistic way possible and then explain the solutions as if explaining to a child. \n\nYou will return your solutions in valid KaTex Markdown format.\n",
      messages: [
        {
          "role": "user",
          "content": [
            {
              "type": "text",
              "text": `You are my friendly leaving cert maths tutor, 
                       I have difficulty understanding the solutions to problems so your job is explaining the how and why as if you are explaining them to a child. 
                       Below I have provided the marking scheme to a question I don't understand at all. 
                       Please explain it as simple as possible and predict certain keywords or concepts I may not understand. 
                       Don't forget to return the solution in valid KaTex Markdown. 
                       Provide the solution and then the explanation of certain keywords or concepts. ${OCRResponse}`
            }
          ]
        }
      ]
    });
    console.log(msg.content[0].text);

    // Handle the response from Groq API
    console.log(chatCompletion.choices[0].message.content);
    
    if (!msg) {
      return new Response(JSON.stringify({ error: "Error completing the chat" }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

      return new Response(JSON.stringify({ 
        text: msg.content[0].text,
        completion: 0,
        total_time: 0,
 
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
  
