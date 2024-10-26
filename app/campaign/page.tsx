// app/page.tsx
'use client'

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';

interface Campaign {
  prompt: string;
  tagline: string;
  description: string;
  targetAudience: string;
  keyMessages: string[];
  callToAction: string;
}

export default function CampaignGenerator() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [error, setError] = useState('');

  const generateCampaign = async () => {
    if (!prompt) {
      setError('Please enter a prompt');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/generate_campaign', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate campaign');
      }

      setCampaigns([data.campaign, ...campaigns]);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">AI Marketing Campaign Generator</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Generate New Campaign</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Textarea
              placeholder="Describe your product or service (e.g., 'A sustainable bamboo toothbrush that helps reduce plastic waste')"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full"
              rows={4}
            />
            <Button 
              onClick={generateCampaign} 
              disabled={loading}
              className="w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Campaign...
                </>
              ) : (
                'Generate Campaign'
              )}
            </Button>
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {campaigns.map((campaign, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-xl">Campaign {index + 1}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">Tagline</h3>
                  <p className="text-lg text-blue-600">{campaign.tagline}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">Campaign Description</h3>
                  <p className="text-gray-700">{campaign.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold">Target Audience</h3>
                  <p className="text-gray-700">{campaign.targetAudience}</p>
                </div>

                <div>
                  <h3 className="font-semibold">Key Messages</h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    {campaign.keyMessages.map((message, i) => (
                      <li key={i}>{message}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold">Call to Action</h3>
                  <p className="text-green-600 font-medium">{campaign.callToAction}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}