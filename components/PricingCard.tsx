"use client";
import { Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
// import axios from 'axios'
// import { useCurrentUser } from '@/hooks/use-current-user'
import { useRouter } from "next/navigation";

// Update Tiers Here
export const tiers = [
  {
    name: "Basic",
    price: "0",
    features: [
      "Access to basic resources",
      "Community support",
      "Beginner tutorials",
    ],
    cta: "Get Started",
  },
  {
    name: "Startup",
    price: "2999",
    features: [
      "All the basics for starting a new business!",
      "Priority support",
      "Advanced tutorials",
      "Weekly webinars",
    ],
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    price: "5999",
    features: [
      "All the basics for accelerating business!",
      "Dedicated account manager",
      "Monthly performance review",
      "24/7 support",
      "Customizable solutions",
    ],
    cta: "Get Started",
  },
];

export const PricingCard = () => {
  // const [isLoading, setIsLoading] = useState(false)
  // const session = useCurrentUser()

  // const router = useRouter();

  // const onClick = async () => {
  //   if (!session) {
  //     router.push('/login')
  //     return
  //   }
  //   try {
  //     setIsLoading(true)
  //     const response = await axios.post('/api/.....')
  //     window.location.href = response.data.url
  //   } catch (error) {
  //     toast.error('An error occured! Please try again.')
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }
  return (
    <section id="pricing" className="scroll-mt-4">
      {/* Title */}
      <div className="mx-auto flex flex-col items-center pb-8">
        <h2 className="pb-4 text-4xl font-extrabold text-foreground">
          Pricing
        </h2>
        <p className="text-md opacity-50 max-w-lg text-center">
          Start building for free, then add a site plan to go live. Account
          plans unlock additional features.
        </p>
      </div>
      {/* Pricing Card Display */}
      <div className="flex flex-col sm:place-items-center md:flex-row items-center justify-center gap-6">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={
              "relative flex flex-col p-6 shadow-lg rounded-lg justify-between ring-2 ring-inset w-full max-w-[550px] ring-foreground/10 h-[400px]" // Set a fixed height for every card
            }
          >
            {/* Pricing */}
            <div className="flex-grow">
              <h3 className={`text-lg font-semibold text-foreground/70`}>
                {tier.name}
              </h3>
              <ul className="mt-2 mb-4 text-foreground/70">
                {tier.features.map((feature, index) => (
                  <li key={index} className="list-disc list-inside">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            {/* Price */}
            <div className={`absolute bottom-20 left-0 right-0 mt-4 text-foreground/70 text-center`}>
              <span className="text-4xl font-bold">Rs. {tier.price}</span> /month
            </div>
            {/* Button */}
            <div className="mt-6">
              <Button
                // onClick={onClick}
                className={`w-full bg-gradient-to-r from-primary to-blue-600`}
              >
                {tier.cta}
                <Sparkle className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
