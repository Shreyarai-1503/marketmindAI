import { StateInsights } from "./stateInterface"

export const data: StateInsights = {
  "Maharashtra": {
    "state": "Maharashtra",
    "demographics": {
      "population": 124000000,
      "urban_percentage": 45,
      "age_distribution": {
        "0_14_years": 25,
        "15_64_years": 68,
        "65_years_and_older": 7
      }
    },
    "marketing_insights": {
      "consumer_behavior": {
        "tech_savvy_population": 34,
        "online_services_growth": 65,
        "brand_loyalty": 48
      },
      "target_segments": {
        "youth_percentage": 30,
        "working_professionals": 74
      },
      "regional_preferences": {
        "urban_preferences": "luxury and premium products",
        "sustainability_trend": true
      },
      "marketing_channels": {
        "digital_marketing": 80,
        "traditional_media": 20
      },
      "local_festivals": ["Ganesh Chaturthi", "Diwali", "Gudi Padwa"]
    }
  },
  "Gujarat": {
    "state": "Gujarat",
    "demographics": {
        "population": 60439692,
        "urban_percentage": 43,
        "age_distribution": {
            "0_14_years": 28,
            "15_64_years": 68,
            "65_years_and_older": 4
        }
    },
    "marketing_insights": {
        "consumer_behavior": {
            "tech_savvy_population": 34,
        "online_services_growth": 65,
        "brand_loyalty": 48
        },
        "target_segments": {
            "youth_percentage": 32,
            "working_professionals": 65
        },
        "regional_preferences": {
            "urban_preferences": "affordable and quality products",
            "sustainability_trend": true
        },
        "marketing_channels": {
            "digital_marketing": 45,
            "traditional_media": 55
        },
        "local_festivals": ["Navratri", "Diwali", "Makar Sankranti"]
    }
  }
}
