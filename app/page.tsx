import GoldPrices from "@/components/gold-prices"
import StockMarket from "@/components/stock-market"
import FinancialTips from "@/components/financial-tips"
import FinancialPlanningBot from "@/components/financial-planning-bot"
import NewsSection from "@/components/news-section"
import GovernmentSchemes from "@/components/government-schemes"
import BouncingAiBot from "@/components/bouncing-ai-bot"
import News from "../components/news"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
        Indian Financial Literacy Hub
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <GoldPrices />
        <StockMarket />
      </div>
      <div className="mb-12">
        <FinancialPlanningBot />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <NewsSection />
        <GovernmentSchemes />
      </div>
      <FinancialTips />
      <BouncingAiBot />
    </div>
  )
}

