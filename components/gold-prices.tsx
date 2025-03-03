"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "@/components/ui/chart"

// Gold price data for March 4, 2025 and previous days
const goldData = [
  { date: "2025-02-25", price: 87737 },
  { date: "2025-02-26", price: 87842 },
  { date: "2025-02-27", price: 87089 },
  { date: "2025-02-28", price: 87577 },
  { date: "2025-03-01", price: 87303 },
  { date: "2025-03-02", price: 87577 },
  { date: "2025-03-03", price: 87577 },
  { date: "2025-03-04", price: 88309 },
   // Current date
]

export default function GoldPrices() {
  const [timeframe, setTimeframe] = useState("1W")

  const filteredData = (() => {
    switch (timeframe) {
      case "1D":
        return goldData.slice(-1)
      case "1W":
        return goldData.slice(-7)
      case "1M":
        return goldData
      default:
        return goldData
    }
  })()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Indian Gold Prices</CardTitle>
        <CardDescription>Track gold prices in INR per 10 grams (as of March 4, 2025)</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={timeframe} onValueChange={setTimeframe}>
          <TabsList>
            <TabsTrigger value="1D">1D</TabsTrigger>
            <TabsTrigger value="1W">1W</TabsTrigger>
            <TabsTrigger value="1M">1M</TabsTrigger>
          </TabsList>
          <TabsContent value={timeframe}>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={filteredData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={["auto", "auto"]} />
                  <Tooltip formatter={(value) => [`₹${value}`, "Price"]} />
                  <Line type="monotone" dataKey="price" stroke="#FFD700" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

