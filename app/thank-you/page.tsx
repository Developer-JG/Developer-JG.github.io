import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ThankYou() {
  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
        Your message has been sent successfully. I will get back to you as soon as possible.
      </p>
      <Button className="bg-navy hover:bg-navy/90">
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  )
}

