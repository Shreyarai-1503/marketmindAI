export interface InsightData {
    state: string;
    demographics: {
        population: number;
        urban_percentage: number;
        age_distribution: {
            "0_14_years": number;
            "15_64_years": number;
            "65_years_and_older": number;
        };
    };
    marketing_insights: {
        consumer_behavior: {
            tech_savvy_population: number;
            online_services_growth: number;
            brand_loyalty: number;
        };
        target_segments: {
            youth_percentage: number;
            working_professionals: number;
        };
        regional_preferences: {
            urban_preferences: string;
            sustainability_trend: boolean;
        };
        marketing_channels: {
            digital_marketing: number;
            traditional_media: number;
        };
        local_festivals: string[];
    };
}

export interface StateInsights {
    [stateName: string]: InsightData;
}