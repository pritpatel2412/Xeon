'use client'

export default function TermsAndConditions() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-white">
      <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>

      <p className="mb-4">
        Welcome to <span className="text-pink-500 font-semibold">Xeon</span>. By using our platform, you agree to the following{' '}
        <span className="text-pink-500 font-semibold">terms and conditions</span>. Please read them carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing or using <span className="text-pink-500 font-semibold">Xeon</span>, you agree to be bound by these{' '}
        <span className="text-pink-500 font-semibold">Terms</span>. If you do not accept, please discontinue use.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. User Responsibilities</h2>
      <p className="mb-2">Users are expected to:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Submit <span className="text-pink-500 font-semibold">original and truthful</span> startup pitches
        </li>
        <li>
          Respect the <span className="text-pink-500 font-semibold">intellectual property</span> of others
        </li>
        <li>
          Engage <span className="text-pink-500 font-semibold">respectfully</span> with the community
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Intellectual Property</h2>
      <p className="mb-4">
        You retain rights to your submitted pitches, but you grant <span className="text-pink-500 font-semibold">Xeon</span> the license to{' '}
        <span className="text-pink-500 font-semibold">display them publicly</span> within the platform.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Termination</h2>
      <p className="mb-4">
        We reserve the right to <span className="text-pink-500 font-semibold">suspend or terminate access</span> if users violate these terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Limitation of Liability</h2>
      <p className="mb-4">
        <span className="text-pink-500 font-semibold">Xeon</span> is not liable for any damages arising from use or inability to use the platform.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Changes to Terms</h2>
      <p className="mb-4">
        We may modify these terms at any time. Continued use indicates your{' '}
        <span className="text-pink-500 font-semibold">acceptance</span> of the updated terms.
      </p>

      <p className="mt-10 text-sm text-neutral-400">
        © {new Date().getFullYear()} Xeon. All rights reserved. Built and owned by Prit Patel.
      </p>

      <div className="mt-10 text-center">
        <a
          href="/"
          className="inline-block rounded-md bg-black px-6 py-2 text-white hover:bg-neutral-800 transition"
        >
          ← Back to Dashboard
        </a>
      </div>
    </div>
  )
}
