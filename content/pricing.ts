export interface PricingTier {
  id: string
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
}

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$0",
    description: "Explore the ecosystem.",
    features: [
      "Access to basic features",
      "Community support",
      "Limited API usage",
      "Standard models",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$29",
    description: "Advanced features for creators and teams.",
    features: [
      "Everything in Starter",
      "Priority support",
      "Increased API limits",
      "Advanced models",
      "Custom workflows",
      "Team collaboration",
    ],
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    description: "Custom models, infrastructure and support.",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "Custom model training",
      "Private infrastructure",
      "SLA guarantees",
      "Custom integrations",
    ],
  },
]

