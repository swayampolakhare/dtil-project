"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Stock data for March 4, 2025
const stockData = [
  { symbol: "RELIANCE", name: "Reliance Industries", price: 3245.75, change: 1.25 },
  { symbol: "TCS", name: "Tata Consultancy Services", price: 4120.3, change: -0.45 },
  { symbol: "HDFCBANK", name: "HDFC Bank", price: 2150.6, change: 0.85 },
  { symbol: "INFY", name: "Infosys", price: 1780.25, change: -0.3 },
  { symbol: "ICICIBANK", name: "ICICI Bank", price: 1250.4, change: 1.1 },
  { symbol: "HINDUNILVR", name: "Hindustan Unilever", price: 2850.15, change: 0.65 },
  { symbol: "BHARTIARTL", name: "Bharti Airtel", price: 1420.8, change: 1.75 },
  { symbol: "SBIN", name: "State Bank of India", price: 780.35, change: 0.9 },
]

export default function StockMarket() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredStocks = stockData.filter(
    (stock) =>
      stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Indian Stock Market</CardTitle>
        <CardDescription>Track top Indian stocks (as of March 4, 2025)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-4">
          <Input placeholder="Search stocks..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <Button>Add</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Symbol</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price (INR)</TableHead>
              <TableHead>Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStocks.map((stock) => (
              <TableRow key={stock.symbol}>
                <TableCell className="font-medium">{stock.symbol}</TableCell>
                <TableCell>{stock.name}</TableCell>
                <TableCell>₹{stock.price.toFixed(2)}</TableCell>
                <TableCell className={stock.change >= 0 ? "text-green-600" : "text-red-600"}>
                  {stock.change > 0 ? "+" : ""}
                  {stock.change}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

