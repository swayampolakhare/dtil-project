import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const newsItems = [
  {
    title: "RBI Keeps Repo Rate Unchanged at 6.5%",
    description:
      "The Reserve Bank of India's Monetary Policy Committee has decided to keep the repo rate unchanged at 6.5%, citing the need to assess the impact of previous rate hikes.",
    date: "2025-03-15",
  },
  {
    title: "Nifty 50 Crosses 20,000 Mark for the First Time",
    description:
      "India's benchmark Nifty 50 index has crossed the 20,000 mark for the first time, driven by strong foreign investment inflows and positive economic indicators.",
    date: "2025-03-14",
  },
  {
    title: "Government Announces New PLI Scheme for EV Battery Manufacturing",
    description:
      "The Indian government has introduced a new Production Linked Incentive (PLI) scheme to boost domestic manufacturing of electric vehicle batteries, aiming to reduce import dependence.",
    date: "2025-03-13",
  },
  {
    title: "SEBI Introduces New Regulations for Alternative Investment Funds",
    description:
      "The Securities and Exchange Board of India (SEBI) has announced new regulations for Alternative Investment Funds (AIFs) to enhance transparency and protect investor interests.",
    date: "2025-03-12",
  },
  {
    title: "Indian Rupee Strengthens Against US Dollar",
    description:
      "The Indian Rupee has appreciated against the US Dollar, reaching a 6-month high, supported by strong foreign investment inflows and a weakening dollar index.",
    date: "2025-03-11",
  },
]

export default function NewsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Latest Indian Financial News</CardTitle>
        <CardDescription>Stay updated with the Indian financial market</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {newsItems.map((item, index) => (
            <li key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              <p className="text-xs text-muted-foreground mt-1">{item.date}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

