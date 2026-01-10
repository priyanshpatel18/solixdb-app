import * as React from "react"
import { cn } from "@/lib/utils"

interface AccordionContextValue {
  openItems: Set<string>
  toggleItem: (value: string) => void
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null)

interface AccordionProps {
  children: React.ReactNode
  type?: "single" | "multiple"
  defaultValue?: string | string[]
  className?: string
}

function Accordion({ children, type = "single", defaultValue, className }: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<Set<string>>(() => {
    if (defaultValue) {
      return new Set(Array.isArray(defaultValue) ? defaultValue : [defaultValue])
    }
    return new Set()
  })

  const toggleItem = React.useCallback((value: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev)
      if (type === "single") {
        next.clear()
        if (!prev.has(value)) {
          next.add(value)
        }
      } else {
        if (next.has(value)) {
          next.delete(value)
        } else {
          next.add(value)
        }
      }
      return next
    })
  }, [type])

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={cn("space-y-2", className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

interface AccordionItemProps {
  value: string
  children: React.ReactNode
  className?: string
}

const AccordionItemContext = React.createContext<{ value: string } | null>(null)

function AccordionItem({ value, children, className }: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div className={cn("border rounded-lg overflow-hidden", className)}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

interface AccordionTriggerProps {
  children: React.ReactNode
  className?: string
}

function AccordionTrigger({ children, className }: AccordionTriggerProps) {
  const context = React.useContext(AccordionContext)
  const itemContext = React.useContext(AccordionItemContext)
  if (!context) throw new Error("AccordionTrigger must be used within Accordion")
  if (!itemContext) throw new Error("AccordionTrigger must be used within AccordionItem")

  const itemValue = itemContext.value
  const isOpen = context.openItems.has(itemValue)

  return (
    <button
      type="button"
      onClick={() => context.toggleItem(itemValue)}
      className={cn(
        "flex w-full items-center justify-between px-4 py-4 text-left font-medium transition-all hover:bg-accent/50 [&[data-state=open]>svg]:rotate-180",
        className
      )}
      data-state={isOpen ? "open" : "closed"}
    >
      {children}
      <svg
        className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
  )
}

interface AccordionContentProps {
  children: React.ReactNode
  className?: string
}

function AccordionContent({ children, className }: AccordionContentProps) {
  const context = React.useContext(AccordionContext)
  const itemContext = React.useContext(AccordionItemContext)
  if (!context) throw new Error("AccordionContent must be used within Accordion")
  if (!itemContext) throw new Error("AccordionContent must be used within AccordionItem")

  const itemValue = itemContext.value
  const isOpen = context.openItems.has(itemValue)

  if (!isOpen) return null

  return (
    <div className={cn("px-4 pb-4 pt-0", className)}>
      {children}
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

