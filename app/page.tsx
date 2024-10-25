import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, ChartBar, Globe2, Lightbulb, Target } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          MarketMind AI
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Unlock the power of AI to understand and enhance your marketing strategies
          across India's diverse consumer landscape
        </p>
        <div className="mt-8">
          <Link href="/dashboard">
            <Button size="lg" className="mr-4">
              Get Started
            </Button>
          </Link>
          <Link href="/insights">
            <Button size="lg" variant="outline">
              View Insights
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <Card className="p-6">
          <Brain className="w-12 h-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
          <p className="text-muted-foreground">
            Leverage advanced AI to analyze consumer behavior patterns and generate
            actionable insights.
          </p>
        </Card>

        <Card className="p-6">
          <Globe2 className="w-12 h-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Regional Intelligence</h3>
          <p className="text-muted-foreground">
            Understand market dynamics across different regions and cultural
            contexts in India.
          </p>
        </Card>

        <Card className="p-6">
          <Target className="w-12 h-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Targeted Campaigns</h3>
          <p className="text-muted-foreground">
            Create and optimize marketing campaigns tailored to specific regional
            and cultural preferences.
          </p>
        </Card>

        <Card className="p-6">
          <ChartBar className="w-12 h-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
          <p className="text-muted-foreground">
            Track campaign performance and consumer trends with interactive
            dashboards and visualizations.
          </p>
        </Card>

        <Card className="p-6">
          <Lightbulb className="w-12 h-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Content Generation</h3>
          <p className="text-muted-foreground">
            Generate culturally relevant marketing content and campaign ideas using
            AI assistance.
          </p>
        </Card>
      </div>

      <section className="text-center bg-muted rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Marketing?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join innovative brands using MarketMind AI to create impactful marketing
          strategies across India's diverse markets.
        </p>
        <Link href="/dashboard">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Start Your Journey
          </Button>
        </Link>
      </section>
    </div>
  );
}