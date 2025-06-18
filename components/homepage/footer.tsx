import Image from "next/image"
import logoImage from "@/public/images/Xeon_logo.png"

const footerLinks = [
  { href: "#contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
]

export default function Footer() {
  return (
    <footer className="w-full bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <div className="flex justify-center">
            <Image
              src={logoImage}
              alt="Xeon Logo"
              width={220}
              height={60}
              priority
            />
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Made by line */}
        <div className="mt-6 text-center text-xs text-white/50">
          Made by <span className="text-white">Prit Patel</span>
        </div>
      </div>
    </footer>
  )
}
