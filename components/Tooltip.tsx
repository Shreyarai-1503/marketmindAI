"use client";
import { InsightData } from "@/lib/stateInterface";
import React from "react";

interface TooltipProps {
  insightData: InsightData;
}

const Tooltip: React.FC<TooltipProps> = ({ insightData }) => {
  if (!insightData) return "no data";
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        right: "120px",
        transform: "translateY(-50%)",
        backgroundColor: "transparent",
        border: "1px solid #ecf0f1",
        padding: "20px",
        borderRadius: "5px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
      }}
    >
      <h2 className="font-bold text-xl text-center">{insightData.state}</h2>
      <p>
        <strong>Population:</strong> {insightData.demographics.population}
      </p>
      <p>
        <strong>Population:</strong> {insightData.demographics.urban_percentage}
        %
      </p>
      <p>
        <strong>Tech Savvy Population:</strong>{" "}
        {insightData.marketing_insights.consumer_behavior.tech_savvy_population}
        %
      </p>
      <p>
        <strong>Online Services Growth:</strong>{" "}
        {
          insightData.marketing_insights.consumer_behavior
            .online_services_growth
        }
        %
      </p>
      <p>
        <strong>Brand Loyalty:</strong>{" "}
        {insightData.marketing_insights.consumer_behavior.brand_loyalty}%
      </p>
      <p>
        <strong>Target Youth Percentage:</strong>{" "}
        {insightData.marketing_insights.target_segments.youth_percentage}%
      </p>
      <p>
        <strong>Working Professionals' Percentage:</strong>{" "}
        {insightData.marketing_insights.target_segments.youth_percentage}%
      </p>
      <p>
        <strong>Regional Preferences:</strong>{" "}
        {insightData.marketing_insights.regional_preferences.urban_preferences}
      </p>
      <p>
        <strong>Marketing channel: Digital</strong>{" "}
        {insightData.marketing_insights.marketing_channels.digital_marketing}%
      </p>
      <p>
        <strong>Marketing channel: Traditional</strong>{" "}
        {insightData.marketing_insights.marketing_channels.traditional_media}%
      </p>
      <p>
        <strong>Local Festivals:</strong>{" "}
        {insightData.marketing_insights.local_festivals.join(", ")}
      </p>
    </div>
  );
};

export default Tooltip;
