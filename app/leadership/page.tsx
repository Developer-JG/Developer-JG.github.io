import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Timeline,
  TimelineItem,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@/components/timeline"
import { Instagram, FileText } from "lucide-react"
import Image from "next/image"

export default function Leadership() {
  const GRS_INSTAGRAM_URL = "https://www.instagram.com/the_gachon_research_society?igsh=d3hvaGVuaTBqdzB4&utm_source=qr"
  const GRS_BYLAWS_PDF_URL = "/files/gachon-research-society.pdf"

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Leadership & Activities</h1>

      <div className="max-w-4xl mx-auto space-y-12">
        <section>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
            <h2 className="text-2xl font-semibold">The Gachon Research Society</h2>

            <div className="flex flex-col sm:flex-row gap-2">
              <Button asChild variant="outline">
                <a
                  href={GRS_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Gachon Research Society Instagram"
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  Instagram
                </a>
              </Button>

              <Button asChild>
                <a
                  href={GRS_BYLAWS_PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open bylaws PDF"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Bylaws
                </a>
              </Button>
            </div>
          </div>

          <Timeline>
            <TimelineItem>
              <TimelineHeader>
                <TimelineIcon />
                <div className="flex flex-col md:flex-row justify-between w-full">
                  <h3 className="text-xl font-medium">Honorary Member</h3>
                  <p className="text-gray-600">February 2025 - Ongoing</p>
                </div>
              </TimelineHeader>
            </TimelineItem>

            <TimelineItem>
              <TimelineHeader>
                <TimelineIcon />
                <div className="flex flex-col md:flex-row justify-between w-full">
                  <h3 className="text-xl font-medium">
                    Chairperson of the Acting Executive & Steering Committee
                  </h3>
                  <p className="text-gray-600">February 2025 - November 2025</p>
                </div>
              </TimelineHeader>
            </TimelineItem>

            <TimelineItem>
              <TimelineHeader>
                <TimelineIcon />
                <div className="flex flex-col md:flex-row justify-between w-full">
                  <h3 className="text-xl font-medium">Executive Adviser</h3>
                  <p className="text-gray-600">December 2024 - February 2025</p>
                </div>
              </TimelineHeader>
            </TimelineItem>

            <TimelineItem>
              <TimelineHeader>
                <TimelineIcon />
                <div className="flex flex-col md:flex-row justify-between w-full">
                  <h3 className="text-xl font-medium">Founding President & 1st President</h3>
                  <p className="text-gray-600">February 2024 - November 2024</p>
                </div>
              </TimelineHeader>
              <TimelineBody>
                <p className="text-gray-700 mb-2">
                  Chairperson of the General Assembly and Steering Committee (ex officio)
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    Contribute to improving language proficiency and fostering academic development through
                    reading and debating multilingual papers and books.
                  </li>
                  <li>
                    Facilitate information exchange within the university and strengthen networking opportunities
                    among student researchers.
                  </li>
                </ul>
              </TimelineBody>
            </TimelineItem>
          </Timeline>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Semiconductor Display Major Student Association</h2>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-semibold">Student Association Executive</h3>
                <p className="text-gray-600">March 2023 - February 2024</p>
              </div>
              <p className="text-lg font-medium mb-4">Department of Records and Information</p>
              <p className="text-gray-700 mb-4">
                Conduct research on the given topic or required information, and systematically organize
                and provide the results.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
