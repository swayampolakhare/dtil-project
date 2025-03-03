import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const bankingSchemes = {
  savings: [
    {
      name: "High-Yield Savings Account",
      description:
        "Offers higher interest rates than traditional savings accounts, ideal for emergency funds or short-term savings goals.",
      features: ["Higher interest rates", "FDIC insured", "Easy access to funds"],
    },
    {
      name: "Certificates of Deposit (CDs)",
      description:
        "Fixed-term savings product with higher interest rates, best for funds you won't need for a specific period.",
      features: ["Higher interest rates", "Fixed terms (3 months to 5 years)", "FDIC insured"],
    },
  ],
  checking: [
    {
      name: "Rewards Checking",
      description: "Offers cashback, points, or other rewards on debit card purchases.",
      features: ["Earn rewards on purchases", "Often has monthly fees", "May require minimum balance"],
    },
    {
      name: "Interest-Bearing Checking",
      description: "Pays interest on your checking account balance, combining the benefits of checking and savings.",
      features: [
        "Earn interest on balance",
        "May have higher minimum balance requirements",
        "Check writing privileges",
      ],
    },
  ],
  retirement: [
    {
      name: "Individual Retirement Account (IRA)",
      description: "Tax-advantaged account for long-term retirement savings.",
      features: ["Tax benefits", "Various investment options", "Contribution limits apply"],
    },
    {
      name: "401(k)",
      description: "Employer-sponsored retirement savings plan with potential employer match.",
      features: ["Pre-tax contributions", "Potential employer match", "Limited investment options"],
    },
  ],
}

export default function BankingSchemes() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Banking Schemes</h1>
      <Tabs defaultValue="savings">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="savings">Savings</TabsTrigger>
          <TabsTrigger value="checking">Checking</TabsTrigger>
          <TabsTrigger value="retirement">Retirement</TabsTrigger>
        </TabsList>
        {Object.entries(bankingSchemes).map(([category, schemes]) => (
          <TabsContent key={category} value={category}>
            <div className="grid gap-6 mt-6">
              {schemes.map((scheme, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{scheme.name}</CardTitle>
                    <CardDescription>{scheme.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5">
                      {scheme.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

