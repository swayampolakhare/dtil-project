"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

type FinancialPlan = {
  savings: number
  investments: number
  expenses: number
  tax: number
}

export default function FinancialPlanningBot() {
  const [salary, setSalary] = useState("")
  const [plan, setPlan] = useState<FinancialPlan | null>(null)

  const generatePlan = () => {
    const monthlySalary = Number.parseFloat(salary)
    if (isNaN(monthlySalary) || monthlySalary <= 0) {
      alert("Please enter a valid salary amount.")
      return
    }

    // Simple tax calculation (this should be more complex in a real scenario)
    const annualSalary = monthlySalary * 12
    let tax = 0
    if (annualSalary > 1000000) {
      tax = (annualSalary - 1000000) * 0.3 + 112500
    } else if (annualSalary > 500000) {
      tax = (annualSalary - 500000) * 0.2 + 12500
    } else if (annualSalary > 250000) {
      tax = (annualSalary - 250000) * 0.05
    }

    const monthlyTax = tax / 12

    const newPlan: FinancialPlan = {
      savings: monthlySalary * 0.2, // 20% for savings
      investments: monthlySalary * 0.15, // 15% for investments
      expenses: monthlySalary * 0.55, // 55% for expenses
      tax: monthlyTax,
    }

    setPlan(newPlan)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Indian Financial Planning Bot</CardTitle>
        <CardDescription>Enter your monthly salary for a personalized financial plan</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="salary">Monthly Salary (in INR)</Label>
            <Input
              id="salary"
              placeholder="Enter your monthly salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              type="number"
            />
          </div>
          <Button onClick={generatePlan}>Generate Plan</Button>
          {plan && (
            <div className="mt-4 space-y-2">
              <p>
                <strong>Recommended Monthly Allocation:</strong>
              </p>
              <p>
                Savings: ₹{plan.savings.toFixed(2)} ({((plan.savings / Number.parseFloat(salary)) * 100).toFixed(1)}%)
              </p>
              <p>
                Investments: ₹{plan.investments.toFixed(2)} (
                {((plan.investments / Number.parseFloat(salary)) * 100).toFixed(1)}%)
              </p>
              <p>
                Expenses: ₹{plan.expenses.toFixed(2)} ({((plan.expenses / Number.parseFloat(salary)) * 100).toFixed(1)}
                %)
              </p>
              <p>
                Estimated Tax: ₹{plan.tax.toFixed(2)} ({((plan.tax / Number.parseFloat(salary)) * 100).toFixed(1)}%)
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

