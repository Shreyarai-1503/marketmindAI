// app/api/generate_campaign/route.ts
import { NextResponse } from 'next/server';
import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

interface Campaign {
  tagline: string;
  description: string;
  targetAudience: string;
  keyMessages: string[];
  callToAction: string;
}

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    const systemPrompt = `You are a marketing expert. I need you to create a marketing campaign. 
    Your response must be in valid JSON format like this example:
    {
      "tagline": "short catchy phrase",
      "description": "brief campaign description",
      "targetAudience": "target audience description",
      "keyMessages": ["message 1", "message 2", "message 3"],
      "callToAction": "call to action text"
    }
    Only respond with the JSON object, no other text.`;

    const userPrompt = `Create a marketing campaign for: ${prompt}`;

    const output = await replicate.run(
      "meta/llama-2-70b-chat:02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3",
      {
        input: {
          prompt: `${systemPrompt}\n\nHuman: ${userPrompt}\n\nAssistant:`,
          temperature: 0.6,  // Reduced for more consistent formatting
          max_tokens: 1000,
          top_p: 0.95,
          repetition_penalty: 1.1,
        }
      }
    );

    // Convert array to string if needed
    const responseText: string = Array.isArray(output) ? output.join('') : String(output);
    console.log('Raw response:', responseText); // For debugging

    // Create default campaign in case of parsing issues
    const defaultCampaign: Campaign = {
      tagline: "Your Brand's Next Success Story",
      description: "Generated based on: " + prompt,
      targetAudience: "General audience interested in " + prompt,
      keyMessages: ["Key benefit 1", "Key benefit 2", "Key benefit 3"],
      callToAction: "Get Started Today"
    };

    try {
      // Try to extract JSON from the response
      const jsonMatch = (responseText as string).match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        // If no JSON found, create campaign from the raw text
        return NextResponse.json({
          campaign: defaultCampaign
        });
      }

      const parsedResponse = JSON.parse(jsonMatch[0]);
      
      // Validate the parsed response has all required fields
      const campaign: Campaign = {
        tagline: parsedResponse.tagline || defaultCampaign.tagline,
        description: parsedResponse.description || defaultCampaign.description,
        targetAudience: parsedResponse.targetAudience || defaultCampaign.targetAudience,
        keyMessages: Array.isArray(parsedResponse.keyMessages) ? 
          parsedResponse.keyMessages : defaultCampaign.keyMessages,
        callToAction: parsedResponse.callToAction || defaultCampaign.callToAction
      };

      return NextResponse.json({
        campaign
      });

    } catch (parseError) {
      console.error('Parsing error:', parseError);
      console.log('Attempted to parse:', responseText);
      
      // Return default campaign if parsing fails
      return NextResponse.json({
        campaign: defaultCampaign
      });
    }

  } catch (error: any) {
    console.error('Campaign generation error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate campaign' },
      { status: 500 }
    );
  }
}