import { Tesseract } from 'tesseract.ts';

export const imageToText = async (imagePath: string) => {
    Tesseract.recognize(imagePath)
    .progress(console.log)
    .then((response: OCRResponse) => {
        const { text, confidence } = response;
        console.log(`Text: ${text}`);
        console.log(`Confidence: ${confidence}`);
        
        return text
    })
    .catch(console.error);
}
interface OCRResponse {
    confidence: number;
    text: string;
}