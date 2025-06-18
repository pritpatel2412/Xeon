'use client'

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-white">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        At <span className="text-pink-500">Xeon</span>, your <span className="text-pink-500">privacy</span> is a top priority. This policy explains how we collect, use,
        and protect your information when you interact with our platform.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We collect personal data such as your name, email, and pitch content to enable features like profile creation,{' '}
        <span className="text-pink-500">pitch submission</span>, and networking.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <p>Your data helps us:</p>
      <ul className="list-disc ml-6 mt-2 mb-4">
        <li>Display your <span className="text-pink-500">startup pitches</span> on our platform</li>
        <li>Enable you to <span className="text-pink-500">connect with other entrepreneurs</span></li>
        <li>Send important <span className="text-pink-500">updates or notifications</span></li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Data Security</h2>
      <p className="mb-4">
        We implement industry-standard practices to safeguard your information from unauthorized access, disclosure, or loss.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Third-Party Sharing</h2>
      <p className="mb-4">
        We do <span className="text-pink-500">not</span> sell or share your personal data with third parties for marketing purposes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <p className="mb-4">
        You may request to <span className="text-pink-500">access</span>, <span className="text-pink-500">correct</span>, or <span className="text-pink-500">delete</span> your personal data at any time by contacting us.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this policy periodically. Continued use of <span className="text-pink-500">Xeon</span> implies your agreement to the latest version.
      </p>

      <p className="mt-10 text-sm text-neutral-400">
         © {new Date().getFullYear()} Xeon. All rights reserved. Built and owned by Prit Patel.
      </p>

      <div className="mt-10 text-center">
        <a
          href="/"
          className="inline-block rounded-md bg-pink-600 px-6 py-2 text-white hover:bg-pink-700 transition"
        >
          ← Back to Dashboard
        </a>
      </div>
    </div>
  )
}
