export interface PricingItem {
    id: number;
    name: string;
    description: string;
    amount: string;
    features: string[]
}

export const pricing: PricingItem[] = [
    { id: 1, name: "Basic", description: "For SMES and Bootstrapped Startups", amount: "$ 1799", features: ["20 Advisory Hours / Month", "Sprint Planning & Roadmaps", "Architecture & Tech Stack Review", "Feature Development", "On‑Call Support", "Dedicated Slack Channel", "Custom Service Level Agreement"] },
    { id: 2, name: "Pro", description: "For VC Funded Startups", amount: "$ 3499" , features: ["40 Advisory Hours / Month", "Sprint Planning & Roadmaps", "Architecture & Tech Stack Review", "Feature Development", "On‑Call Support", "Dedicated Slack Channel", "Custom Service Level Agreement"] },
    { id: 3, name: "Enterprise", description: "For Profitable Startups and Large Corps", amount: "$ 5999" , features: ["Unlimited Advisory Hours / Month","Sprint Planning & Roadmaps", "Architecture & Tech Stack Review", "Product Development", "Feature Development", "On‑Call Support", "Dedicated Slack Channel", "Custom Service Level Agreement", "Participation in status meetings"]}
]   


