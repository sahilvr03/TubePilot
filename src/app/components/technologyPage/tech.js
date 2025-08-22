import PricingSection from "../main/pricing-section";

export default function TechnologyPage() {
  const saasPlans = [
    { name: "SaaS Starter", price: "$29/month", features: ["Basic AI Tools", "1 User Account", "Email Support"] },
    { name: "SaaS Pro", price: "$99/month", features: ["Advanced AI Dashboard", "Team Access", "Priority Support"] },
    { name: "SaaS Enterprise", price: "Custom", features: ["Custom Modules", "White-Label", "Dedicated Support"] },
  ];

  const ecommercePlans = [
    { name: "Starter Store", price: "$199", features: ["Shopify Store Setup", "20 Products", "Basic Theme Customization"] },
    { name: "Pro Store", price: "$399", features: ["Custom Shopify Theme", "100 Products", "Email Marketing Integration"] },
    { name: "Advanced Suite", price: "$799", features: ["Headless Commerce", "Unlimited Products", "Automation & Analytics"] },
  ];

  return (
    <div id="technologies">
      <PricingSection title="E-commerce Services" plans={ecommercePlans} />
      <PricingSection title="SaaS AI Products" plans={saasPlans} />
    </div>
  );
}
