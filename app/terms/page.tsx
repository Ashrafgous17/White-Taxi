export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-6">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-emerald-600">
            Legal
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-slate-900">
            Terms &amp; Conditions
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Please read these terms carefully before using White Taxi services.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
          <p className="mb-4">
            Welcome to <strong>White Taxi</strong>. By booking a cab with us,
            you agree to the following terms and conditions. Please read them
            carefully before making a booking.
          </p>

          <h2 className="mt-6 mb-2 text-base font-semibold text-slate-900">
            1. Booking Confirmation
          </h2>
          <p className="mb-4">
            Bookings must be confirmed via WhatsApp or phone. A trip is
            considered “confirmed” only after our team assigns a driver and
            shares vehicle details. White Taxi reserves the right to decline or
            cancel unverified bookings.
          </p>

          <h2 className="mt-6 mb-2 text-base font-semibold text-slate-900">
            2. Kilometre &amp; Billing Policy
          </h2>
          <ul className="mb-4 list-disc space-y-1 pl-5">
            <li>
              Kilometres are calculated from the starting city to the ending
              city.
            </li>
            <li>One-way trips follow point-to-point billing.</li>
            <li>
              Round trips carry mandatory minimum km/day as per standard slab.
            </li>
            <li>
              Extra km and waiting charges will apply based on vehicle category.
            </li>
          </ul>

          <h2 className="mt-6 mb-2 text-base font-semibold text-slate-900">
            3. Toll, Parking &amp; State Tax
          </h2>
          <p className="mb-4">
            Tolls, parking, inter-state permit charges, forest entry charges or
            any government levies are additional unless explicitly mentioned as
            “inclusive” in your fare quote.
          </p>

          <h2 className="mt-6 mb-2 text-base font-semibold text-slate-900">
            4. Driver Allowance (Bata)
          </h2>
          <p className="mb-4">
            Driver allowance is applicable for early morning trips (before 6
            AM), late-night trips (after 10 PM), and all outstation trips as per
            standard market fare.
          </p>

          <h2 className="mt-6 mb-2 text-base font-semibold text-slate-900">
            5. Vehicle &amp; Driver Assignment
          </h2>
          <p className="mb-4">
            While we try to provide the vehicle type booked
            (Hatchback/Sedan/SUV), in rare cases, an equivalent or higher
            category vehicle may be assigned based on availability.
          </p>

          <h2 className="mt-6 mb-2 text-base font-semibold text-slate-900">
            6. Customer Responsibilities
          </h2>
          <ul className="mb-4 list-disc space-y-1 pl-5">
            <li>Provide correct pickup &amp; drop details.</li>
            <li>Maintain hygiene inside the vehicle.</li>
            <li>
              Do not force the driver to overspeed or violate safety norms.
            </li>
            <li>Pay applicable tolls, taxes and parking when not included.</li>
          </ul>

          <h2 className="mt-6 mb-2 text-base font-semibold text-slate-900">
            7. Force Majeure
          </h2>
          <p className="mb-4">
            White Taxi is not responsible for delays due to traffic, weather,
            vehicle breakdown, strikes, public events, or any situation beyond
            our control.
          </p>

          <h2 className="mt-6 mb-2 text-base font-semibold text-slate-900">
            8. Amendments
          </h2>
          <p>
            White Taxi reserves the right to modify terms and conditions at any
            time. Updated policies will be available on this website.
          </p>
        </div>
      </div>
    </div>
  );
}
