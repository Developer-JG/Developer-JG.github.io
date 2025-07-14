import type React from "react"
import { cn } from "@/lib/utils"

interface TimelineProps {
  children: React.ReactNode
  className?: string
}

export function Timeline({ children, className }: TimelineProps) {
  return <div className={cn("space-y-8", className)}>{children}</div>
}

interface TimelineItemProps {
  children: React.ReactNode
  className?: string
}

export function TimelineItem({ children, className }: TimelineItemProps) {
  return <div className={cn("relative pl-8", className)}>{children}</div>
}

interface TimelineConnectorProps {
  className?: string
}

export function TimelineConnector({ className }: TimelineConnectorProps) {
  return <div className={cn("absolute left-2.5 top-10 h-full w-px bg-gray-200", className)} />
}

interface TimelineHeaderProps {
  children: React.ReactNode
  className?: string
}

export function TimelineHeader({ children, className }: TimelineHeaderProps) {
  return <div className={cn("flex items-start mb-2", className)}>{children}</div>
}

interface TimelineIconProps {
  className?: string
}

export function TimelineIcon({ className }: TimelineIconProps) {
  return (
    <div
      className={cn(
        "absolute left-0 flex h-6 w-6 items-center justify-center rounded-full bg-navy text-white -translate-x-1/2",
        className,
      )}
    >
      <div className="h-2 w-2 rounded-full bg-white" />
    </div>
  )
}

interface TimelineBodyProps {
  children: React.ReactNode
  className?: string
}

export function TimelineBody({ children, className }: TimelineBodyProps) {
  return <div className={cn("ml-2", className)}>{children}</div>
}

