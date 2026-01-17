
import { GoogleGenAI, Type } from "@google/genai";

// Always use a named parameter and obtain the key exclusively from process.env.API_KEY.
const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeProduct = async (productName: string, description: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `
        You are a tech analyst. Provide a brief (2-3 sentence) summary of why "${productName}" is innovative based on this description: "${description}".
        Focus on value proposition and tech forwardness.
      `,
      config: {
        maxOutputTokens: 150,
        temperature: 0.7,
      },
    });
    // The response.text property directly returns the generated string output.
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Analyzing our products for future innovation...";
  }
};
