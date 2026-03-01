import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export default function Research() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Research & Publications</h1>

      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">Publications</h2>

        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-semibold">
                  Estimation of Solar Spectral Irradiance Using Meteorological Data and Analysis of 
                  Optimal Conditions for Solar Power Generation
                </h3>
                <p className="text-gray-600">2025</p>
              </div>
              <p className="text-gray-700 mb-4">
                <span className="font-medium">Authors:</span> Jeonggyu Hwang
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-medium">Status:</span> arXiv preprint (arXiv:2504.08008)
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="border-navy text-navy">
                  Solar Irradiance
                </Badge>
                <Badge variant="outline" className="border-navy text-navy">
                  Meteorological Data
                </Badge>
                <Badge variant="outline" className="border-navy text-navy">
                  Energy Modeling
                </Badge>
              </div>
              <p className="text-gray-700 mb-2">
                We present a lightweight model that estimates solar spectral irradiance in Seoul from real-time meteorological data by deriving DNI from GHI and scaling a standard solar spectrum.</p>
<p className="text-gray-700 mb-4">The model captures hourly variability with minimal computation, showing that while GHI follows stable seasonal trends, DNI exhibits sharp fluctuations that motivate anomaly detection for precision forecasting.</p>
              <Link
                href="https://arxiv.org/abs/2504.08008"
                target="_blank"
                className="text-navy hover:underline font-medium flex items-center gap-1"
              >
                View on arXiv <ExternalLink size={16} />
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-semibold">
                  Theoretical Analysis of Doping Concentration Gradients on Solar Cell Performance
                </h3>
                <p className="text-gray-600">2024</p>
              </div>
              <p className="text-gray-700 mb-4">
                <span className="font-medium">Authors:</span> Jeonggyu Hwang
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-medium">Status:</span> arXiv preprint (arXiv:2407.12245)
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="border-navy text-navy">
                  Solar Cells
                </Badge>
                <Badge variant="outline" className="border-navy text-navy">
                  Doping
                </Badge>
                <Badge variant="outline" className="border-navy text-navy">
                  Theoretical Analysis
                </Badge>
              </div>
              <p className="text-gray-700 mb-2">
                This paper formulates a theoretical model linking doping gradient profiles to carrier transport and efficiency-relevant parameters in solar cells.</p>
<p className="text-gray-700 mb-4">By mapping performance sensitivity to gradient shape, it outlines practical strategies for optimizing controlled doping profiles to improve efficiency.</p>
              <Link
                href="https://arxiv.org/abs/2407.12245"
                target="_blank"
                className="text-navy hover:underline font-medium flex items-center gap-1"
              >
                View on arXiv <ExternalLink size={16} />
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-semibold">
                  Exploring the Theoretical Limits of Efficiency in Multilayer Solar Cells
                </h3>
                <p className="text-gray-600">2024</p>
              </div>
              <p className="text-gray-700 mb-4">
                <span className="font-medium">Authors:</span> Jeonggyu Hwang
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-medium">Status:</span> arXiv preprint (arXiv:2404.14930)
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="border-navy text-navy">
                  Multilayer Solar Cells
                </Badge>
                <Badge variant="outline" className="border-navy text-navy">
                  Efficiency
                </Badge>
                <Badge variant="outline" className="border-navy text-navy">
                  Theoretical Limits
                </Badge>
              </div>
              <p className="text-gray-700 mb-2">
                We investigate the theoretical efficiency limits of multilayer solar-cell architectures and identify optimal layer configurations under idealized assumptions.</p>
<p className="text-gray-700 mb-4">The results provide design insights for selecting layer counts and material combinations toward next-generation photovoltaic devices.</p>
              <p className="text-gray-700 mb-4">
                Poster presented at the 32nd Korean Conference on Semiconductors (KCS), Korea. (Corresponding Author: Jinho Jeon)
              </p>
              <Link
                href="https://arxiv.org/abs/2404.14930"
                target="_blank"
                className="text-navy hover:underline font-medium flex items-center gap-1"
              >
                View on arXiv <ExternalLink size={16} />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Awards and Honors</h2>
        <div className="space-y-6">

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-semibold mb-2">Graduation with Honors</h3>
                <p className="text-gray-600">February 2026</p>
              </div>
              <p className="text-gray-700 mb-2">
                Conferred by Gachon University
              </p>
              <p className="text-gray-700">
                Cum Laude
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-semibold mb-2">Selected for Priority Admission</h3>
                <p className="text-gray-600">November 2025</p>
              </div>
              <p className="text-gray-700 mb-2">
                Admitted by Yonsei University
              </p>
              <p className="text-gray-700">
                Waived major-specific interview and exam based on document evaluation
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-semibold mb-2">Academic Excellence Scholarship</h3>
                <p className="text-gray-600">Fall 2023 - Fall 2025 (5 Consecutive Semesters)</p>
              </div>
              <p className="text-gray-700">
                Awarded by Gachon University in recognition of outstanding academic performance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-semibold mb-2">Undergraduate Poster Presentation Award</h3>
                <p className="text-gray-600">February 2025</p>
              </div>
              <p className="text-gray-700 mb-2">
                Awarded at the 32nd Korean Conference on Semiconductors (KCS), Korea.
              </p>
              <p className="text-gray-700">
                Recognized for the research presentation on "Exploring the Theoretical Limits of Efficiency in
                Multilayer Solar Cells."
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}

