"use client"

import type React from "react"

import { useState } from "react"
import { Bot, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function BouncingAiBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [conversation, setConversation] = useState([
    { role: "bot", content: "Hello! I'm your financial assistant. How can I help you with your financial queries?" },
  ])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    // Add user message to conversation
    setConversation([...conversation, { role: "user", content: message }])

    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "You can check out our Banking Schemes page for more information on that.",
        "That's a great question about investing. Have you looked at our Investment Tips section?",
        "Gold prices have been fluctuating recently. You can track them on our homepage.",
        "The stock market has shown positive trends this week. Check our latest updates.",
        "I recommend starting with an emergency fund before investing in the market.",
      ]
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      setConversation((prev) => [...prev, { role: "bot", content: randomResponse }])
    }, 1000)

    setMessage("")
  }

  return (
    <>
      {!isOpen && (
        <div
          className="fixed bottom-6 right-6 bg-blue-500 text-white rounded-full p-4 shadow-lg cursor-pointer animate-bounce hover:animate-none"
          onClick={() => setIsOpen(true)}
        >
          <Bot size={24} />
        </div>
      )}

      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-80 shadow-xl z-50">
          <CardHeader className="bg-blue-500 text-white">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Financial Assistant</CardTitle>
              <X size={18} className="cursor-pointer hover:text-gray-200" onClick={() => setIsOpen(false)} />
            </div>
          </CardHeader>
          <CardContent className="h-64 overflow-y-auto p-3 space-y-3">
            {conversation.map((msg, index) => (
              <div
                key={index}
                className={`${
                  msg.role === "user" ? "ml-auto bg-blue-100" : "mr-auto bg-gray-100"
                } p-2 rounded-lg max-w-[80%]`}
              >
                {msg.content}
              </div>
            ))}
          </CardContent>
          <CardFooter className="p-3 border-t">
            <form onSubmit={handleSendMessage} className="flex w-full space-x-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your question..."
                className="flex-1"
              />
              <Button type="submit" size="sm">
                Send
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  )
}

