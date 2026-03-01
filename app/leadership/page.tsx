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

export default function Leadership() {
  const GRS_INSTAGRAM_URL =
    "https://www.instagram.com/the_gachon_research_society?igsh=d3hvaGVuaTBqdzB4&utm_source=qr"
  const GRS_BYLAWS_PDF_URL = "/files/gachon-research-society.pdf"

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-10 text-center text-4xl font-bold">Leadership & Activities</h1>

      {/* Main content wrapper */}
      <div className="mx-auto max-w-4xl space-y-14">

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Research Service & Leadership</h2>

          <Card>
            <CardContent className="pt-6">
              {/* Header row */}
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h3 className="text-2xl font-semibold">The Gachon Research Society</h3>

                <div className="flex flex-col gap-2 sm:flex-row">
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

              {/* Timeline */}
              <Timeline>
                <TimelineItem>
                  <TimelineHeader>
                    <TimelineIcon />
                    <div className="flex w-full flex-col justify-between md:flex-row">
                      <h4 className="text-xl font-medium">Honorary Member</h4>
                      <p className="text-gray-600">February 2025 - Ongoing</p>
                    </div>
                  </TimelineHeader>
                </TimelineItem>

                <TimelineItem>
                  <TimelineHeader>
                    <TimelineIcon />
                    <div className="flex w-full flex-col justify-between md:flex-row">
                      <h4 className="text-xl font-medium">
                        Chairperson of the Acting Executive &amp; Steering Committee
                      </h4>
                      <p className="text-gray-600">February 2025 - November 2025</p>
                    </div>
                  </TimelineHeader>
                </TimelineItem>

                <TimelineItem>
                  <TimelineHeader>
                    <TimelineIcon />
                    <div className="flex w-full flex-col justify-between md:flex-row">
                      <h4 className="text-xl font-medium">Executive Adviser</h4>
                      <p className="text-gray-600">December 2024 - February 2025</p>
                    </div>
                  </TimelineHeader>
                </TimelineItem>

                <TimelineItem>
                  <TimelineHeader>
                    <TimelineIcon />
                    <div className="flex w-full flex-col justify-between md:flex-row">
                      <h4 className="text-xl font-medium">Founding President &amp; 1st President</h4>
                      <p className="text-gray-600">February 2024 - November 2024</p>
                    </div>
                  </TimelineHeader>

                  <TimelineBody>
                    <p className="mb-2 text-gray-700">
                      Chairperson of the General Assembly and Steering Committee (ex officio)
                    </p>
                    <ul className="list-disc space-y-2 pl-5 text-gray-700">
                      <li>
                        Contributed to improving language proficiency and fostering academic development
                        through reading and debating multilingual papers and books.
                      </li>
                      <li>
                        Facilitated information exchange within the university and strengthened networking
                        opportunities among student researchers.
                      </li>
                    </ul>
                  </TimelineBody>
                </TimelineItem>
              </Timeline>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Academic Service &amp; Leadership</h2>

          <Card>
  <CardContent className="p-6">
    <div className="space-y-12">
      <div className="space-y-1">
        <div className="mb-1 flex flex-col justify-between md:flex-row">
          <h3 className="text-xl font-semibold">Teaching Assistant (TA)</h3>
          <p className="text-gray-600">February 2026 - June 2026 (Expected)</p>
        </div>
        <p className="text-lg font-medium">Physical Electronics (EEE3210), Spring 2026</p>
        <p className="text-gray-700">School of Electrical & Electronic Engineering, Yonsei University</p>
      </div>

      <div className="space-y-1">
        <div className="mb-1 flex flex-col justify-between md:flex-row">
          <h3 className="text-xl font-semibold">Administrative Assistant</h3>
          <p className="text-gray-600">January 2026 - Present</p>
        </div>
        <p className="text-gray-700">School of Electrical & Electronic Engineering, Yonsei University</p>
      </div>

      <div className="space-y-1">
        <div className="mb-1 flex flex-col justify-between md:flex-row">
          <h3 className="text-xl font-semibold">Executive Member</h3>
          <p className="text-gray-600">March 2023 - February 2024</p>
        </div>
        <p className="text-lg font-medium">Student Association</p>
        <p className="text-gray-700">Major in Semiconductor Display, Gachon University</p>
      </div>
    </div>
  </CardContent>
</Card>
        </section>
      </div>
    </div>
  )
}