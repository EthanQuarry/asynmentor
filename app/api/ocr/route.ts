import { NextResponse } from "next/server";
import fs from "fs";
import { Buffer } from 'buffer';

import { createWorker } from "tesseract.js";

export async function POST(request: Request): Promise<Response> {
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
      const worker = await createWorker("eng", 1, {workerPath: "./node_modules/tesseract.js/src/worker-script/node/index.js"});
      let imageText = "";
      (async () => {
        const { data: { text } } = await worker.recognize(buffer);
        console.log(text);
        
        await worker.terminate();
        return text
      })()
      .then((text) => {
        return new Response(JSON.stringify({ text: text }), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
        });
      })
  
      // Respond with the recognized text

      return new Response(JSON.stringify({ text: "Error" }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });

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
