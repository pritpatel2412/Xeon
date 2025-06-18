"use client"

import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import Tag from "@/components/tag"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState<string | null>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)

    if (!formRef.current) return

    emailjs
      .sendForm(
        "service_prlpgfd",
        "template_kaia8pq",
        formRef.current,
        "SOJX1V8QGKkoCpxHW"
      )
      .then(() => {
        setStatus("✅ Message sent successfully!")
        formRef.current?.reset()
      })
      .catch((err) => {
        console.error("EmailJS error:", err)
        setStatus("❌ Failed to send message. Please try again later.")
      })
      .finally(() => setSending(false))
  }

  return (
    <section id="contact" className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Contact</Tag>
        </div>
        <h2 className="mx-auto mt-6 max-w-xl text-center text-6xl font-medium">
          Let&apos;s <span className="text-pink-400">connect</span>
        </h2>
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="mx-auto mt-12 flex max-w-xl flex-col gap-6 rounded-2xl border border-white/10 bg-neutral-900 p-6"
        >
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email (Gmail only)"
            pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
            required
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
          />
          <Button
            type="submit"
            className="w-full rounded-full bg-pink-400 text-black hover:bg-pink-500"
            disabled={sending}
          >
            {sending ? "Sending..." : "Send Message"}
          </Button>
          {status && (
            <p
              className={`text-sm ${
                status.startsWith("✅") ? "text-green-400" : "text-red-400"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
