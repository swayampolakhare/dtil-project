"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

type Message = {
  role: "user" | "bot"
  content: string
}

export default function AIChatbot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: "user", content: input }])
      // Here you would typically send the input to your AI service and get a response
      // For this example, we'll just echo the input
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { role: "bot", content: `You asked: ${input}. This is where the AI response would go.` },
        ])
      }, 500)
      setInput("")
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>AI Financial Assistant</CardTitle>
        <CardDescription>Ask me anything about Indian finance</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full pr-4">
          {messages.map((message, index) => (
            <div key={index} className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}>
              <div
                className={`inline-block p-2 rounded-lg ${message.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSend()
          }}
          className="flex w-full space-x-2"
        >
          <Input placeholder="Type your question..." value={input} onChange={(e) => setInput(e.target.value)} />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  )
}

