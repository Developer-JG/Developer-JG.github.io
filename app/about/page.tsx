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
            I am a combined Master–Doctor student in the School of Electrical and Electronic Engineering at Yonsei University. My research focuses on semiconductor technologies, with particular emphasis on materials science and its role in device performance and functionality.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">Education</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-semibold">Yonsei University</h3>
                  <p className="text-gray-600">March 2026 - Present</p>
                </div>
                <div className="space-y-1 text-gray-700 leading-relaxed">
                  <p>
                    <li>Combined Master-Doctor Student</li>
                    <li>School of Electrical and Electronic Engineering, College of Engineering</li>
                  </p>
                  <p>
                    <li>Selected for Priority Admission</li>
                  </p>
                </div>
              <h4 className="font-medium mt-4">Supervisor:{" "}
                <a
                  href="http://nbdl.yonsei.ac.kr"
                 target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Prof. Lee, Taeyoon
                </a>
              </h4>
              <h4 className="font-medium mt-0">Research topic: TBD</h4>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-semibold">Seoul National University</h3>
                  <p className="text-gray-600">August 2024 - February 2025</p>
                </div>
                <p className="text-gray-700 mb-2">
                  <li>Undergraduate Exchange Student</li>
                  <li>Department of Materials Science and Engineering, College of Engineering</li>
                </p>
                <h4 className="font-medium mt-4">Courses Taken:</h4>
                <ul className="list-disc list-inside text-gray-700 ml-2">
                  <li>(COSS) Big Data and AI in Arts</li>
                  <li>English Research Paper Writing for Graduate Students: Majors in Natural Sciences and Engineering</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-semibold">Gachon University</h3>
                  <p className="text-gray-600">March 2023 - February 2026</p>
                </div>
                <div className="space-y-1 text-gray-700 leading-relaxed">
                  <p>
                    <li>Undergraduate Student</li>
                    <li>Major in Semiconductor Display, Department of Semiconductor Engineering, College of Semiconductor</li>
                  </p>
                  <p>
                    <li>Degree: Bachelor of Engineering (B.E.)</li>
                    <li>Graduation with Honors</li>
                  </p>
                </div>
              <h4 className="font-medium mt-4">GPA (Overall): 4.33 / 4.50</h4>
              <h4 className="font-medium mt-0">Major GPA: 4.37 / 4.50</h4>
              </CardContent>
            </Card>


          </div>
        </div>
      </div>
    </div>
  )
}

