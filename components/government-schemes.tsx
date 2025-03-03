import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const schemes = [
  {
    name: "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
    description: "Financial inclusion program providing access to banking services for all Indian citizens.",
    category: "Banking",
  },
  {
    name: "Atal Pension Yojana (APY)",
    description: "Pension scheme for unorganized sector workers with guaranteed minimum pension.",
    category: "Retirement",
  },
  {
    name: "Pradhan Mantri Mudra Yojana (PMMY)",
    description: "Scheme to provide loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises.",
    category: "Business",
  },
  {
    name: "Pradhan Mantri Suraksha Bima Yojana (PMSBY)",
    description: "Accident insurance scheme offering coverage for death or disability due to accidents.",
    category: "Insurance",
  },
  {
    name: "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)",
    description: "Life insurance scheme providing coverage on death of the insured.",
    category: "Insurance",
  },
  {
    name: "Sukanya Samriddhi Yojana (SSY)",
    description: "Small deposit scheme for the girl child with higher interest rate and tax benefits.",
    category: "Savings",
  },
  {
    name: "National Pension System (NPS)",
    description:
      "Voluntary, long-term retirement savings scheme to enable subscribers to make decisions about their future.",
    category: "Retirement",
  },
  {
    name: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    description: "Income support scheme for farmers providing up to ₹6,000 per year in three equal installments.",
    category: "Agriculture",
  },
  {
    name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    description: "Crop insurance scheme to provide financial support to farmers suffering crop loss/damage.",
    category: "Agriculture",
  },
  {
    name: "Stand Up India Scheme",
    description: "Facilitates bank loans between ₹10 lakh and ₹1 crore to SC/ST and women entrepreneurs.",
    category: "Business",
  },
]

export default function GovernmentSchemes() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Government Schemes</CardTitle>
        <CardDescription>Latest updates on Indian government financial schemes</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {schemes.map((scheme, index) => (
            <li key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold">{scheme.name}</h3>
                <Badge>{scheme.category}</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{scheme.description}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

