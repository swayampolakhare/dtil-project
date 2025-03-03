"use client"

import type React from "react"

import { useState } from "react"
import { Bot, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function BouncingAiBot() {
  return (
    <>
      <div className="fixed bottom-8 right-8 animate-bounce">
      <Button 
        onClick={() => window.open('https://doubtbot.netlify.app/', '_blank')}
        variant="outline"
        size="lg"
        className="rounded-full p-4"
      >
        <Bot className="h-8 w-8" />
      </Button>
      </div>
     
    </>
  )
}