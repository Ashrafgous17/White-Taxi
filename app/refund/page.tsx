export default function RefundPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-6">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-emerald-600">
            Legal
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-slate-900">
            Refund Policy
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Learn how and when refunds are processed by White Taxi.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
          <p className="mb-4">
            All refunds issued by <strong>White Taxi</strong> follow a clear and
            transparent process to ensure customer satisfaction.
          </p>

          <h2 className="mt-6 mb-2 text-base font-semibold text-slate-900">
            1. Eligibility for Refund
          </h2>
          <ul className="mb-4 list-disc space-y-1 pl-5">
            <li>If the trip is cancelled by White Taxi.</li>
            <li>If a driver is not assigned within the promised timeline.</li>
            <li>If the customer cancels within free cancellation window.</li>
            <li>If an advance payment was taken in error.</li>
          </ul>

          <h2 className="mt-6 mb-2 text-base font-semibold text-slate-900">
            2. Non-Refundable Situations
          </h2>
          <ul className="mb-4 list-disc space-y-1 pl-5">
            <li>Cancelling within 2 hours of pickup time.</li>
            <li>Driver already en route to pickup location.</li>
            <li>No-show at pickup point.</li>
          </ul>

          <h2 className="mt-6 mb-2 text-base font-semibold text-slate-900">
            3. Refund Time
          </h2>
          <p className="mb-4">
            Approved refunds will be processed within{" "}
            <strong>2–5 business days</strong> to the original payment method
            (UPI/Bank Transfer/Wallet).
          </p>

          <h2 className="mt-6 mb-2 text-base font-semibold text-slate-900">
            4. Mode of Refund
          </h2>
          <p>
            Refunds are issued via UPI, bank transfer or original payment
            method. Our support team will confirm all required details during
            processing.
          </p>
        </div>
      </div>
    </div>
  );
}
