export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-6">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-emerald-600">
            Legal
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-slate-900">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            How White Taxi collects, uses and protects your personal
            information.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
          <p className="mb-4">
            At <strong>White Taxi</strong>, we are committed to protecting your
            personal information. This Privacy Policy explains how we collect,
            use, and safeguard your data when you book a taxi with us.
          </p>

          <h2 className="mt-6 mb-2 text-base font-semibold text-slate-900">
            1. Information We Collect
          </h2>
          <ul className="mb-4 list-disc space-y-1 pl-5">
            <li>Name and contact number</li>
            <li>Pickup and drop location</li>
            <li>Trip date &amp; time</li>
            <li>IP address and browser data (for analytics)</li>
          </ul>

          <h2 className="mt-6 mb-2 text-base font-semibold text-slate-900">
            2. How We Use Your Data
          </h2>
          <ul className="mb-4 list-disc space-y-1 pl-5">
            <li>To assign drivers and confirm bookings</li>
            <li>To send WhatsApp or SMS booking updates</li>
            <li>To improve service quality and route suggestions</li>
            <li>To comply with legal or safety regulations</li>
          </ul>

          <h2 className="mt-6 mb-2 text-base font-semibold text-slate-900">
            3. Data Sharing
          </h2>
          <p className="mb-4">
            Your information is shared only with our assigned drivers for
            fulfilling your trip. We do not sell, rent or trade your personal
            details to third-party companies.
          </p>

          <h2 className="mt-6 mb-2 text-base font-semibold text-slate-900">
            4. Data Security
          </h2>
          <p className="mb-4">
            All your data is stored securely and is accessible only to
            authorized staff or assigned drivers. We follow industry-standard
            practices to prevent unauthorized access.
          </p>

          <h2 className="mt-6 mb-2 text-base font-semibold text-slate-900">
            5. Cookies &amp; Tracking
          </h2>
          <p className="mb-4">
            Our website may use cookies for analytics, improving user experience
            and better trip recommendations. You can disable cookies anytime in
            your browser settings.
          </p>

          <h2 className="mt-6 mb-2 text-base font-semibold text-slate-900">
            6. Updates to Policy
          </h2>
          <p>
            White Taxi reserves the right to update this privacy policy. Any
            changes will be posted on this page with revised dates.
          </p>
        </div>
      </div>
    </div>
  );
}
