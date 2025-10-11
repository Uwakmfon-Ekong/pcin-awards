"use client"

import { useEffect, useState } from "react"
import { Button } from "./button"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, "0")
  }

  return (
    <div className="flex flex-col space-y-4">
<div className="text-3xl md:text-4xl text-center lg:text-4xl font-bold text-foreground font-mono">
Oct. 9th - 10th, 2026
</div>

    <div className="flex items-center justify-center gap-8 md:gap-8 font-inter">
          <div className="flex flex-col items-center">
        <div className="text-3xl md:text-4xl text-center lg:text-5xl font-bold text-foreground">
          {formatNumber(timeLeft.days)}
        </div>
        <div className="text-sm md:text-base text-muted-foreground mt-2">Days</div>
      </div>

      <div className="text-4xl md:text-6xl text-muted-foreground font-bold">:</div>

      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-4xl text-center lg:text-5xl font-bold text-foreground">
          {formatNumber(timeLeft.hours)}
        </div>
        <div className="text-sm md:text-base text-muted-foreground mt-2">Hours</div>
      </div>

      <div className="text-4xl md:text-6xl text-muted-foreground font-bold">:</div>

      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-4xl text-center lg:text-5xl font-bold text-foreground">
          {formatNumber(timeLeft.minutes)}
        </div>
        <div className="text-sm md:text-base text-muted-foreground mt-2">Minutes</div>
      </div>

      <div className="text-4xl md:text-6xl text-muted-foreground font-bold">:</div>

      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-4xl text-center lg:text-5xl font-bold text-foreground">
          {formatNumber(timeLeft.seconds)}
        </div>
        <div className="text-sm md:text-base text-muted-foreground mt-2">Seconds</div>
      </div>
    </div>

    <Button >Reserve a seat</Button>
    </div>
  )
}
