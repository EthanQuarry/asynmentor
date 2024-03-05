import { createWorker } from "tesseract.js";

const convertor = async (url: string) => {
  const worker = await createWorker("eng", 1 ,{
    logger: m => console.log(m),
  });
  const buffer = await (await fetch(url)).arrayBuffer();
  const data = Buffer.from(buffer);
  const ret = await worker.recognize(data);
  const text = ret.data.text;
  await worker.terminate();
  return text;
};

export default convertor;
