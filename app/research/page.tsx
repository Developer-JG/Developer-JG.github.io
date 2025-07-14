import Link from "next/link"
import Image from "next/image"
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
                <span className="font-medium">Authors:</span> Jeonggyu Hwang,
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-medium">Publication:</span> arXiv preprint arXiv:2504.08008
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
              <p className="text-gray-700 mb-4">
                This study presents a lightweight model that estimates solar spectral irradiance in Seoul using real-
                time weather data. By deriving DNI from GHI and adjusting the standard solar spectrum, the model 
                captures hourly variations with minimal computation. While GHI shows stable seasonal patterns, DNI 
                reveals sharp fluctuations, underscoring the need for anomaly detection in precision solar forecasting.
              </p>
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
                <span className="font-medium">Authors:</span> Jeonggyu Hwang,
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-medium">Publication:</span> arXiv preprint arXiv:2407.12245
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
              <p className="text-gray-700 mb-4">
                This paper presents a theoretical framework for analyzing how doping concentration gradients affect the
                performance of solar cells. The research explores optimization strategies for enhancing efficiency
                through controlled doping profiles.
              </p>
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
                <span className="font-medium">Authors:</span> Jeonggyu Hwang, and Jeon, Jinho
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-medium">Publication:</span> arXiv preprint arXiv:2404.14930
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
              <p className="text-gray-700 mb-4">
                This research investigates the theoretical maximum efficiency achievable in multilayer solar cell
                architectures. The paper provides insights into optimal layer configurations and material combinations
                for next-generation photovoltaic devices.
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-medium">Presented at:</span> 32nd Korean Conference on Semiconductors (KCS 2025)
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
              <h3 className="text-xl font-semibold mb-2">Academic Excellence Scholarship</h3>
              <p className="text-gray-700">
                Awarded by Gachon University in recognition of outstanding academic performance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Undergraduate Poster Presentation Award</h3>
              <p className="text-gray-700 mb-2">Awarded at the 32nd Korean Conference on Semiconductors (KCS 2025)</p>
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

