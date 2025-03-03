import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const tips = [
  {
    title: "Start an Emergency Fund",
    description: "Aim to save 3-6 months of living expenses in a high-yield savings account.",
    category: "Saving",
  },
  {
    title: "Invest in Equity Mutual Funds",
    description: "Consider investing in equity mutual funds for long-term wealth creation in India.",
    category: "Investing",
  },
  {
    title: "Utilize Section 80C Deductions",
    description: "Maximize your tax savings by utilizing the full ₹1.5 lakh deduction under Section 80C.",
    category: "Tax Planning",
  },
  {
    title: "Get Adequate Health Insurance",
    description: "Ensure you have sufficient health insurance coverage for you and your family.",
    category: "Insurance",
  },
  {
    title: "Use UPI for Convenient Payments",
    description: "Take advantage of UPI for quick and secure digital payments in India.",
    category: "Digital Finance",
  },
  {
    title: "Diversify Your Investment Portfolio",
    description: "Spread your investments across different asset classes to manage risk.",
    category: "Investing",
  },
]

export default function FinancialTips() {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold mb-6">Financial Tips for Indians</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{tip.title}</CardTitle>
              <Badge>{tip.category}</Badge>
            </CardHeader>
            <CardContent>
              <CardDescription>{tip.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

