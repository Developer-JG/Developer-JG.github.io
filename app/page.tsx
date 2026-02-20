"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Mail, ExternalLink } from "lucide-react"
import { GoogleScholar } from "@/components/icons/GoogleScholar"

type ScholarStats = {
  citations: number
  h_index: number
  i10_index: number
  last_updated: string
}

export default function Home() {
  const router = useRouter()
  const [scholar, setScholar] = useState<ScholarStats | null>(null)

  useEffect(() => {
    // GitHub Pages에서 SPA 라우팅을 위한 리다이렉션 처리
    const handleRedirect = () => {
      const query = new URLSearchParams(window.location.search)
      const path = query.get("p")

      if (path) {
        // 쿼리 파라미터에서 경로 정보를 추출하여 해당 페이지로 리다이렉션
        router.push(path)

        // URL에서 쿼리 파라미터 제거
        window.history.replaceState(null, "", window.location.pathname)
      }
    }

    handleRedirect()
  }, [router])

  useEffect(() => {
    // public/data/scholar.json 로부터 값 로드 (캐시 방지용 ts)
    const loadScholar = async () => {
      try {
        const res = await fetch(`/data/scholar.json?ts=${Date.now()}`)
        if (!res.ok) return
        const data = (await res.json()) as ScholarStats
        setScholar(data)
      } catch {
        // 실패해도 UI는 조용히 넘어가도록 처리
      }
    }

    loadScholar()
  }, [])

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between py-12 gap-8">
        <div className="md:w-3/5">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hello, I&apos;m Jeonggyu Hwang</h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">Graduate Student at Yonsei University</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl">
            Researcher focused on semiconductor engineering and materials science with experience in industry and
            academic research.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-navy hover:bg-navy/90">
              <Link href="/files/resume.pdf" target="_blank" className="flex items-center gap-2">
                View Resume <ExternalLink size={16} />
              </Link>
            </Button>
            <Button variant="outline" className="border-navy text-navy hover:bg-navy/10">
              <Link href="/about" className="flex items-center gap-2">
                View About Me
              </Link>
            </Button>
          </div>
        </div>
        <div className="md:w-2/5 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-navy">
            <Image src="/images/profile.jpg" alt="Jeonggyu Hwang" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Google Scholar Metrics */}
      <section className="py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold">Google Scholar Metrics</h3>
                <p className="text-gray-600 text-sm">
                  {scholar?.last_updated ? `Last updated: ${scholar.last_updated}` : "Loading latest stats..."}
                </p>
              </div>

              <Link
                href="https://scholar.google.com/citations?user=d2tmjtoAAAAJ"
                target="_blank"
                className="text-navy hover:underline font-medium inline-flex items-center gap-2"
              >
                View profile <ExternalLink size={16} />
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-lg border border-gray-100 p-4">
                <p className="text-sm text-gray-600">Citations</p>
                <p className="text-2xl font-bold text-gray-900">
                  {scholar ? scholar.citations.toLocaleString() : "—"}
                </p>
              </div>

              <div className="rounded-lg border border-gray-100 p-4">
                <p className="text-sm text-gray-600">h-index</p>
                <p className="text-2xl font-bold text-gray-900">{scholar ? scholar.h_index : "—"}</p>
              </div>

              <div className="rounded-lg border border-gray-100 p-4">
                <p className="text-sm text-gray-600">i10-index</p>
                <p className="text-2xl font-bold text-gray-900">{scholar ? scholar.i10_index : "—"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Research</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Exploring the Theoretical Limits of Efficiency in Multilayer Solar Cells</h3>
            <p className="text-gray-600 mb-4">arXiv preprint arXiv:2404.14930 (2024)</p>
            <p className="text-gray-700 mb-4">Presented at the 32nd Korean Conference on Semiconductors (KCS 2025).</p>
            <Link href="/research" className="text-navy hover:underline font-medium">
              Read more →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">
              Estimation of Solar Spectral Irradiance Using Meteorological Data and Analysis of Optimal Conditions for
              Solar Power Generation
            </h3>
            <p className="text-gray-600 mb-4">arXiv preprint arXiv:2504.08008 (2025)</p>
            <Link href="/research" className="text-navy hover:underline font-medium">
              Read more →
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Highlight */}
      {/* <section className="py-12 bg-gray-50 rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Current Position</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-xl font-semibold">Philoptics Co., Ltd</h3>
              <p className="text-gray-600">March 2024 - Present</p>
            </div>
            <p className="text-lg font-medium mb-2">Engineer, Semiconductor Department, R&D Division</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Development of Advanced Glass Singulation Processing Technology</li>
              <li>Development of Next-Generation ABF Drilling Core Technology</li>
              <li>2024 Advanced Technology Development Project</li>
            </ul>
            <div className="mt-4">
              <Link href="/experience" className="text-navy hover:underline font-medium">
                View all experience →
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact CTA */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Interested in collaboration or have questions about my research?
          <br />
          Feel free to reach out.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-navy hover:bg-navy/90">
            <Link href="/contact" className="flex items-center gap-2">
              Contact Me
            </Link>
          </Button>
          <Button variant="outline" className="border-navy text-navy hover:bg-navy/10">
            <Link href="https://github.com/Developer-JG/" target="_blank" className="flex items-center gap-2">
              <Github size={18} /> GitHub
            </Link>
          </Button>

          <Button variant="outline" className="border-navy text-navy hover:bg-navy/10">
            <Link href="https://scholar.google.com/citations?user=d2tmjtoAAAAJ" target="_blank" className="flex items-center gap-2">
              <GoogleScholar size={20} /> Google Scholar
            </Link>
          </Button>

          <Button variant="outline" className="border-navy text-navy hover:bg-navy/10">
            <Link href="mailto:jeonggyuhwang04@gmail.com" className="flex items-center gap-2">
              <Mail size={18} /> Email
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
