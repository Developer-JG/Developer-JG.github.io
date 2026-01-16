import Link from "next/link"
import { Github, Mail, ExternalLink } from "lucide-react"
import { GoogleScholar } from "@/components/icons/GoogleScholar"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">© 2025-{new Date().getFullYear()} Jeonggyu Hwang. All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://github.com/Developer-JG/"
              target="_blank"
              className="text-gray-600 hover:text-navy transition-colors"
            >
              <Github size={20} />
            </Link>
            <Link href="mailto:jeonggyuhwang04@gmail.com" className="text-gray-600 hover:text-navy transition-colors">
              <Mail size={20} />
            </Link>
            <Link
              href="https://scholar.google.com/citations?user=d2tmjtoAAAAJ"
              target="_blank"
              className="text-gray-600 hover:text-navy transition-colors"
            >
              <GoogleScholar size={20} />
            </Link>
            <Link
              href="https://orcid.org/0009-0000-6114-871X"
              target="_blank"
              className="text-gray-600 hover:text-navy transition-colors"
            >
              <ExternalLink size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

