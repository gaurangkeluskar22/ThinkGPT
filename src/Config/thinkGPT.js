// const apiKey = "AIzaSyDFYTn02lPX6akr1zN0q7W4GzlV4FawcPw";

import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI(apiKey);

async function main(prompt) {
  const response = await ai.getGenerativeModel({ model: "gemini-2.5-flash" })
    .generateContent(prompt);

  return response.response.text();
}

export default main;
