import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/3">
          <div className="sticky top-24">
            <div className="relative w-full aspect-square max-w-md mx-auto rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/profile.jpg" alt="Jeonggyu Hwang" fill className="object-cover" />
            </div>
          </div>
        </div>

        <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">Background</h2>
          <p className="text-lg text-gray-700 mb-6">
            I am an undergraduate student at Gachon University, majoring in Semiconductor Display at the College of
            Semiconductor, Department of Semiconductor Engineering. My academic journey has been focused on
            understanding and advancing semiconductor technologies, with a particular interest in solar cell efficiency
            and materials science.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            I have been offered a position in the Integrated Ph.D. program at the Center for Bandstructure Engineering,
            Department of Physics, Yonsei Graduate School (under Prof. Kim, Keunsu Ph.D.), starting in Spring 2026.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">Education</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-semibold">Gachon University</h3>
                  <p className="text-gray-600">Expected February 2026</p>
                </div>
                <p className="text-gray-700">
                  <li>Undergraduate Student</li>
                  <li>Major in Semiconductor Display, Department of Semiconductor Engineering, College of Semiconductor</li>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-semibold">Seoul National University</h3>
                  <p className="text-gray-600">August 2024 - February 2025</p>
                </div>
                <p className="text-gray-700 mb-2">
                  <li>Exchange Student</li>
                  <li>Department of Materials Science and Engineering, College of Engineering</li>
                </p>
                <h4 className="font-medium mt-4">Courses Taken:</h4>
                <ul className="list-disc list-inside text-gray-700 ml-2">
                  <li>AI, Concept of Art, Philosophy of Art, Literature, Visual Art, Music, Game</li>
                  <li>
                    English Research Paper Writing for Graduate Students: Majors in Natural Sciences & Engineering
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-semibold">Yonsei University</h3>
                  <p className="text-gray-600">Starting Spring 2026</p>
                </div>
                <p className="text-gray-700">
                  <li>Integrated Ph.D. Student</li>
                  <li>Department of Physics, College of Seience</li>
                  <li>PI: Prof. Kim, Keunsu Ph.D.</li>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

