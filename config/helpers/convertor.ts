import { createWorker, Worker } from "tesseract.js";

const convertor = async (bufferData: Buffer): Promise<string> => {
  const worker: Worker = await createWorker("eng");

  try {
    const ret = await worker.recognize(bufferData);
    const text: string = ret.data.text;
    return text;
  } catch (error) {
    console.error("Error in OCR process:", error);
    throw error;
  } finally {
    await worker.terminate();
  }
};

export default convertor;