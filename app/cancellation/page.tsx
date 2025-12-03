export default function CancellationPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-6">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-emerald-600">
            Legal
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-slate-900">
            Cancellation Policy
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Understand how cancellations are handled for White Taxi bookings.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
          <p className="mb-4">
            White Taxi always aims for flexible and customer-friendly
            cancellation terms. However, certain charges apply depending on the
            timing and vehicle readiness.
          </p>

          <h2 className="mt-6 mb-2 text-base font-semibold text-slate-900">
            1. Free Cancellation Window
          </h2>
          <p className="mb-4">
            You may cancel your ride for free up to{" "}
            <strong>2 hours before</strong> the scheduled pickup time.
          </p>

          <h2 className="mt-6 mb-2 text-base font-semibold text-slate-900">
            2. Cancellation Charges
          </h2>
          <ul className="mb-4 list-disc space-y-1 pl-5">
            <li>
              Cancelling within 2 hours of pickup: <strong>₹300 – ₹500</strong>{" "}
              (driver allocation cost).
            </li>
            <li>
              Cancelling after driver arrival at pickup point:{" "}
              <strong>₹500 – ₹700</strong>.
            </li>
            <li>Cancelling after trip start: full base fare is applicable.</li>
          </ul>

          <h2 className="mt-6 mb-2 text-base font-semibold text-slate-900">
            3. Peak-day Conditions
          </h2>
          <p className="mb-4">
            During high-demand days (festivals/holidays), cancellation charges
            may vary and will be informed during booking confirmation.
          </p>

          <h2 className="mt-6 mb-2 text-base font-semibold text-slate-900">
            4. Driver-Initiated Cancellations
          </h2>
          <p>
            In rare cases, if a driver cancels due to unavoidable reasons, White
            Taxi will arrange an alternative cab or issue a full refund for any
            advance paid.
          </p>
        </div>
      </div>
    </div>
  );
}
