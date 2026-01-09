import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Experience() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Professional Experience</h1>

      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl font-semibold mb-6">Industry</h2>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h2 className="text-2xl font-semibold">Philoptics Co., Ltd</h2>
              <p className="text-gray-600">March 2024 - Present</p>
            </div>
            <p className="text-lg font-medium mb-4">Engineer, Semiconductor Department, R&D Division</p>
            <p className="text-gray-700 mb-4">Osan-si, Gyeonggi-do, South Korea</p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Project Details</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Development of Advanced Glass Singulation Processing Technology</li>
                    <li>Development of Next-Generation ABF Drilling Core Technology</li>
                    <li>2024 Advanced Technology Development Project</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold mb-6">Experience</h2>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h2 className="text-2xl font-semibold">Yonsei University</h2>
              <p className="text-gray-600">January 2026 - Present</p>
            </div>
            <p className="text-lg font-medium mb-2">Graduate Research Assistant</p>
            <p className="text-gray-700 mb-4">
              Seodaemun-gu, Seoul, South Korea
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Research Details</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    <span className="font-medium">Lab:</span> NanoBio Device Lab. (NBDL)
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">PI:</span> Prof. Lee, Taeyoon Ph.D.
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Research topic:</span> TBD
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h2 className="text-2xl font-semibold">Yonsei University</h2>
              <p className="text-gray-600">June 2025 - July 2025</p>
            </div>
            <p className="text-lg font-medium mb-2">Undergraduate Research Assistant</p>
            <p className="text-gray-700 mb-4">
              Seodaemun-gu, Seoul, South Korea
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Research Details</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    <span className="font-medium">Lab:</span> Center for Bandstructure Engineering
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">PI:</span> Prof. Kim, Keunsu Ph.D.
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Research topic:</span> 2D Materials and Solid-State Physics
                  </p>
                  <p className="mt-4">
                    Conducted research on the electronic band structures and quantum properties of low-dimensional materials. The work combined theoretical analysis and experimental investigation to understand the physical mechanisms governing two-dimensional materials and solid-state systems.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h2 className="text-2xl font-semibold">POSTECH</h2>
              <p className="text-gray-600">February 2024</p>
            </div>
            <p className="text-lg font-medium mb-2">Undergraduate Research Assistant</p>
            <p className="text-gray-700 mb-4">
              Pohang-si, Gyeongsangbuk-do, South Korea
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Research Details</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    <span className="font-medium">Lab:</span> FIMDEM Lab. - Functional Inorganic Materials Design &
                    Manufacturing
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">PI:</span> Prof. Son, Jaesung Ph.D.
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Research topic:</span> Solution-Processed Thin Film, Thermoelectric
                    Device Material
                  </p>
                  <p className="mt-4">
                    Conducted research on the development and characterization of solution-processed thin films for thermoelectric device applications. The work involved advanced materials synthesis and processing techniques aimed at optimizing thermoelectric properties.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h2 className="text-2xl font-semibold">Korea University</h2>
              <p className="text-gray-600">July 2023 - August 2023</p>
            </div>
            <p className="text-lg font-medium mb-2">Undergraduate Research Assistant</p>
            <p className="text-gray-700 mb-4">
              Seongbuk-gu, Seoul, South Korea
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Research Details</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    <span className="font-medium">Lab:</span> Electrochemistry Lab. - Solarrino
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">PI:</span> Prof. Jun, Yongseok Ph.D.
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Research topic:</span> Perovskite Solar Cells
                  </p>
                  <p className="mt-4">
                    Conducted research on perovskite solar cells with a focus on improving device efficiency and stability. The work involved fabrication processes and material characterization methods to enhance the performance of next-generation photovoltaic devices.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
