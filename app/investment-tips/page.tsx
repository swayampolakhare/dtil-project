import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const investmentTips = [
  {
    title: "Diversify Your Portfolio",
    description:
      "Don't put all your eggs in one basket. Spread your investments across different asset classes to manage risk.",
    category: "Risk Management",
  },
  {
    title: "Start Early",
    description: "Take advantage of compound interest by starting your investment journey as early as possible.",
    category: "Long-term Growth",
  },
  {
    title: "Understand Your Risk Tolerance",
    description: "Assess how much risk you're comfortable with and align your investments accordingly.",
    category: "Personal Finance",
  },
  {
    title: "Research Before Investing",
    description: "Always do your due diligence before investing in any asset or financial product.",
    category: "Education",
  },
  {
    title: "Regular Contributions",
    description: "Set up automatic contributions to your investment accounts to build wealth consistently.",
    category: "Wealth Building",
  },
  {
    title: "Rebalance Periodically",
    description: "Review and adjust your portfolio regularly to maintain your desired asset allocation.",
    category: "Portfolio Management",
  },
  {
    title: "Consider Low-Cost Index Funds",
    description: "For many investors, low-cost index funds offer a simple way to gain diversified market exposure.",
    category: "Investment Strategy",
  },
  {
    title: "Stay Informed",
    description:
      "Keep up with financial news and market trends, but avoid making impulsive decisions based on short-term fluctuations.",
    category: "Education",
  },
]

export default function InvestmentTips() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Investment Tips</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {investmentTips.map((tip, index) => (
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
    </div>
  )
}

