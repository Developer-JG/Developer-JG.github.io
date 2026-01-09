"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"
import { formConfig } from "@/lib/form-config"

export default function Contact() {
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return

    setIsSubmitting(true)

    try {
      // FormSubmit 서비스를 사용하여 이메일 전송
      const formData = new FormData(formRef.current)

      // 이메일 주소를 FormSubmit 서비스에 맞게 설정
      const response = await fetch(`https://formsubmit.co/${formConfig.emailAddress}`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        toast({
          title: "메시지가 전송되었습니다",
          description: "빠른 시일 내에 답변 드리겠습니다.",
        })

        // 폼 초기화
        formRef.current.reset()
      } else {
        throw new Error("메시지 전송에 실패했습니다")
      }
    } catch (error) {
      console.error("이메일 전송 오류:", error)
      toast({
        title: "오류가 발생했습니다",
        description: "메시지 전송에 실패했습니다. 나중에 다시 시도해주세요.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-6">
            Feel free to reach out if you have questions about my research, are interested in collaboration, or would
            like to discuss opportunities.
          </p>

          <form
            ref={formRef}
            className="space-y-4"
            onSubmit={handleSubmit}
            action={`https://formsubmit.co/${formConfig.emailAddress}`}
            method="POST"
          >
            <input type="hidden" name="_captcha" value={formConfig.useCaptcha ? "true" : "false"} />
            <input type="hidden" name="_subject" value={formConfig.subject} />
            <input type="hidden" name="_template" value={formConfig.template} />
            <input type="hidden" name="_next" value={formConfig.redirectUrl} />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Input id="name" name="name" placeholder="Your name" required />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input id="email" name="email" type="email" placeholder="Your email address" required />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Textarea id="message" name="message" placeholder="Your message" rows={5} required />
            </div>

            <Button type="submit" className="w-full bg-navy hover:bg-navy/90" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Address</h3>
              <p className="text-gray-700">
                50 Yonsei-ro, Seodaemun-gu, Seoul, Republic of Korea (03722)
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <Link
                href="mailto:jeonggyuhwang04@gmail.com"
                className="text-navy hover:underline font-medium flex items-center gap-2"
              >
                <Mail size={18} /> jeonggyuhwang04@gmail.com
              </Link>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Phone</h3>
              <p className="text-gray-700">+82) 10-2766-0335</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Profiles</h3>
              <div className="space-y-3">
                <Link
                  href="https://github.com/Developer-JG/"
                  target="_blank"
                  className="text-navy hover:underline font-medium flex items-center gap-2"
                >
                  <Github size={18} /> GitHub
                </Link>
                <Link
                  href="https://orcid.org/0009-0000-6114-871X"
                  target="_blank"
                  className="text-navy hover:underline font-medium flex items-center gap-2"
                >
                  <ExternalLink size={18} /> ORCID: 0009-0000-6114-871X
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

