"use client";

import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export function TrendingTopics({ trends }: { trends: any[] }) {
  // Transform data for visualization
  const chartData = trends.flatMap(region => 
    region.trends.map((trend: { name: any; growth: any; }) => ({
      name: trend.name,
      growth: trend.growth,
      region: region.region
    }))
  );

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Trending Topics</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="growth" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}