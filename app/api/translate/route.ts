import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

// Initialize OpenAI with the API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Define the prompt to guide the translation behavior
const basePrompt = `
You are a helpful translator. Your role is to provide accurate translations between the Igala language and the English language, and vice versa. Do not give translations outside of these two languages, and if the query is not clear or is outside the training data, provide a fallback response. Only generate responses that adhere strictly to the finetuning data you were provided.
Below is a sample input and output:
User input: What is 'stone' in Igala?
Output: okwuta
`;

// Export the POST function for Next.js API route handling
export async function POST(request: Request) {
  try {
    const { query } = await request.json();

    // Structure the request to OpenAI with the prompt and user query
    const completion = await openai.chat.completions.create({
      model: 'ft:gpt-3.5-turbo-0125:personal::9zFhltxU',
      messages: [
        { role: 'system', content: basePrompt },
        { role: 'user', content: `User input: ${query}` },

      ],
    });

    const message = completion.choices[0].message?.content || 'Translation not available';
    return NextResponse.json({ translation: message });
  } catch (error) {
    console.error("Error fetching OpenAI response:", error);
    return NextResponse.json({ error: 'Error generating translation' }, { status: 500 });
  }
}
