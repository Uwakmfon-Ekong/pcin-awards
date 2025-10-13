"use client"
import { useEffect, useState } from "react"

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
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  const formatNumber = (num: number): string => num.toString().padStart(2, "0")

  return (
    <div className="flex flex-col items-center justify-center w-full space-y-6 sm:space-y-8">
      {/* Timer Grid */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 font-inter">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds },
        ].map((item, index) => (
          <div
            key={item.label}
            className="flex flex-col items-center min-w-[60px] sm:min-w-[70px] md:min-w-[90px]"
          >
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-foreground">
              {formatNumber(item.value)}
            </div>
            
            <div className="border-t-2 border-[#1E1E1E] w-[40%] mt-4"></div>
            <div className="text-sm sm:text-base text-muted-foreground mt-4 font-semibold">
              {item.label}
            </div>
            {/* Add colon between units except the last one */}
            {index < 3 && (
              <div className="absolute  sm:block text-3xl md:text-5xl text-muted-foreground font-bold -right-4 sm:right-[-1.5rem] lg:right-[-2rem]">
                :
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
