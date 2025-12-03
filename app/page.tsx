"use client";

import { FormEvent, useState } from "react";
import {
  PhoneCall,
  ArrowRight,
  Clock,
  ShieldCheck,
  Star,
  Car,
  MapPin,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

type TripType = "one-way" | "round-trip" | "local";

export default function Home() {
  const [phoneError, setPhoneError] = useState("");
  const [tripType, setTripType] = useState<TripType>("one-way");

  const WHATSAPP_NUMBER = "919999999999";

  const handleBookingSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const pickup = formData.get("pickup") as string;
    const drop = formData.get("drop") as string;
    const date = formData.get("date") as string;
    const time = formData.get("time") as string;
    const vehicle = formData.get("vehicle") as string;
    const phone = (formData.get("phone") as string).trim();

    // --------------------------
    // 📌 VALIDATE MOBILE NUMBER
    // --------------------------
    const phoneRegex = /^[6-9]\d{9}$/; // Indian mobile format: 10 digits, starts with 6-9

    if (!phoneRegex.test(phone)) {
      setPhoneError("Please enter a valid 10-digit mobile number.");
      return; // ❌ Stop form submission
    }

    setPhoneError(""); // clear error if valid

    // --------------------------
    // WhatsApp redirect message
    // --------------------------
    const tripLabel =
      tripType === "one-way"
        ? "One-way"
        : tripType === "round-trip"
        ? "Round trip"
        : "Local";

    const message = `
🚕 New White Taxi Booking

Trip Type: ${tripLabel}
Pickup: ${pickup}
Drop: ${drop}
Date: ${date}
Time: ${time}
Vehicle: ${vehicle}
Customer Phone: ${phone}

Please confirm the fare & assign driver.
  `.trim();

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    // Reset the form
    form.reset();

    // Go to WhatsApp
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
              <span className="text-lg font-semibold">WT</span>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">White Taxi</p>
              <p className="text-xs text-slate-500">
                One-way & outstation cabs
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="#fares" className="hover:text-slate-900">
              Tariff
            </a>
            <a href="#how-it-works" className="hover:text-slate-900">
              How it works
            </a>
            <a href="#routes" className="hover:text-slate-900">
              Popular routes
            </a>
            <a href="#fleet" className="hover:text-slate-900">
              Fleet
            </a>
            <a href="#faq" className="hover:text-slate-900">
              FAQs
            </a>
          </nav>

          <a
            href="tel:+919999999999"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-emerald-700 md:text-sm"
          >
            <PhoneCall className="h-4 w-4" />
            24×7 Call: +91 99999 99999
          </a>
        </div>
      </header>

      <main>
        {/* HERO + BOOKING */}
        <section className="white-taxi-hero-bg border-b border-slate-200 pb-12 pt-10 md:pb-16 md:pt-14">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:px-6">
            {/* Left: text / social proof */}
            <div className="flex flex-1 flex-col justify-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm ring-1 ring-emerald-100">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Trusted one-way & outstation taxi service
              </div>

              <h1 className="mb-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                Book safe, affordable{" "}
                <span className="underline decoration-emerald-500/60 decoration-2 underline-offset-4">
                  outstation cabs
                </span>{" "}
                in minutes.
              </h1>

              <p className="mb-6 max-w-xl text-sm text-slate-600 md:text-base">
                White Taxi gives you clean cars, experienced drivers,
                transparent pricing, and instant booking for all your one-way,
                round trip, and local rides.
              </p>

              {/* Badges / social proof */}
              <div className="mb-6 flex flex-wrap items-center gap-4 text-xs text-slate-600 md:text-sm">
                <div className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span className="font-semibold text-slate-900">4.8/5</span>
                  <span>rating · 10,000+ trips</span>
                </div>
                <span className="hidden h-4 w-px bg-slate-300 md:inline-block" />
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>No surge pricing</span>
                </div>
                <span className="hidden h-4 w-px bg-slate-300 md:inline-block" />
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-sky-600" />
                  <span>Instant confirmation</span>
                </div>
              </div>

              {/* Primary CTAs (for CRO) */}
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <a
                  href="#booking"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
                >
                  Book a drop
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/919999999999"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:border-slate-400"
                >
                  Chat on WhatsApp
                </a>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 text-xs md:text-sm">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    150+ cities
                  </p>
                  <p className="text-slate-500">across South India</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    1000+ routes
                  </p>
                  <p className="text-slate-500">one-way & round trip</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    24×7 support
                  </p>
                  <p className="text-slate-500">phone & WhatsApp</p>
                </div>
              </div>
            </div>

            {/* Right: Booking card */}
            <div
              id="booking"
              className="relative flex flex-1 items-center justify-center md:justify-end"
            >
              <div className="white-taxi-card-shadow w-full max-w-md rounded-2xl bg-white/95 p-5 text-sm ring-1 ring-slate-200 backdrop-blur">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Quick booking
                </p>

                {/* Trip type toggle */}
                <div className="mb-4 flex gap-2 rounded-full bg-slate-100 p-1 text-xs font-medium">
                  {(
                    [
                      ["one-way", "One-way"],
                      ["round-trip", "Round trip"],
                      ["local", "Local"],
                    ] as const
                  ).map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setTripType(value)}
                      className={`flex-1 rounded-full px-3 py-1.5 ${
                        tripType === value
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <form
                  className="space-y-3 cursor-pointer"
                  onSubmit={handleBookingSubmit}
                >
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2.5">
                      <MapPin className="h-4 w-4 text-slate-400" />
                      <input
                        required
                        name="pickup"
                        type="text"
                        placeholder="Pickup city / location"
                        className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                      />
                    </div>
                    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2.5">
                      <MapPin className="h-4 w-4 text-slate-400" />
                      <input
                        required
                        name="drop"
                        type="text"
                        placeholder="Drop city / location"
                        className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2.5">
                      <Clock className="h-4 w-4 text-slate-400" />
                      <input
                        required
                        name="date"
                        type="date"
                        className="w-full bg-transparent text-xs outline-none [color-scheme:light]"
                      />
                    </div>
                    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2.5">
                      <Clock className="h-4 w-4 text-slate-400" />
                      <input
                        required
                        name="time"
                        type="time"
                        className="w-full bg-transparent text-xs outline-none [color-scheme:light]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2.5">
                      <Car className="h-4 w-4 text-slate-400" />
                      <select
                        name="vehicle"
                        className="w-full bg-transparent text-xs outline-none"
                      >
                        <option>Hatchback</option>
                        <option>Sedan</option>
                        <option>SUV</option>
                        <option>Premium</option>
                      </select>
                      <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2.5">
                        <PhoneCall className="h-4 w-4 text-slate-400" />
                        <input
                          required
                          name="phone"
                          type="tel"
                          placeholder="Mobile number"
                          className="w-full bg-transparent text-xs outline-none placeholder:text-slate-400"
                          onChange={(e) => {
                            const value = e.target.value.trim();
                            const phoneRegex = /^[6-9]\d{9}$/;
                            if (phoneRegex.test(value)) {
                              setPhoneError("");
                            }
                          }}
                        />
                      </div>

                      {/* ⚠️ Error message */}
                      {phoneError && (
                        <p className="text-[11px] text-red-500 font-medium">
                          {phoneError}
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 cursor-pointer"
                  >
                    Send details on WhatsApp
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <p className="pt-2 text-[11px] text-slate-500 cursor-auto">
                    We’ll open WhatsApp with your trip details. Just hit send to
                    confirm your booking with White Taxi.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section
          id="fares"
          className="border-b border-slate-200 bg-white py-10 md:py-12"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                  Transparent fare rates for every trip.
                </h2>
                <p className="mt-1 max-w-xl text-sm text-slate-600">
                  No surge, no hidden charges. Below are our standard starting
                  fares for popular cab types.
                </p>
              </div>
              <div className="text-xs text-slate-500 md:text-right">
                <p>
                  Fares may vary slightly based on route, traffic and peak
                  dates.
                </p>
                <p>Exact fare will be shared on WhatsApp before you confirm.</p>
              </div>
            </div>

            {/* Cards */}
            <div className="grid gap-4 md:grid-cols-3">
              {/* One-way */}
              <div className="flex flex-col justify-between rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                    ONE-WAY DROP
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-slate-900">
                    Outstation · One-way
                  </h3>
                  <p className="mt-1 text-xs text-slate-600">
                    Ideal when you don&apos;t want to pay for return.
                  </p>
                </div>
                <div className="mt-3 space-y-2 text-xs">
                  <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2">
                    <span>Hatchback</span>
                    <span className="font-semibold text-slate-900">
                      from ₹13/km
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2">
                    <span>Sedan</span>
                    <span className="font-semibold text-slate-900">
                      from ₹14/km
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2">
                    <span>SUV</span>
                    <span className="font-semibold text-slate-900">
                      from ₹18/km
                    </span>
                  </div>
                </div>
                <div className="mt-3 border-t border-dashed border-slate-200 pt-3 text-[11px] text-slate-500">
                  <p>• Minimum 130–150 km billing per day (varies by route).</p>
                  <p>• Driver bata from ₹400–₹600/day depending on route.</p>
                </div>
              </div>

              {/* Round trip */}
              <div className="flex flex-col justify-between rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                    ROUND TRIP
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-slate-900">
                    Outstation · Round trip
                  </h3>
                  <p className="mt-1 text-xs text-slate-600">
                    Best value for weekend trips and returns.
                  </p>
                </div>
                <div className="mt-3 space-y-2 text-xs">
                  <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2">
                    <span>Hatchback</span>
                    <span className="font-semibold text-slate-900">
                      from ₹12/km
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2">
                    <span>Sedan</span>
                    <span className="font-semibold text-slate-900">
                      from ₹13/km
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2">
                    <span>SUV</span>
                    <span className="font-semibold text-slate-900">
                      from ₹17/km
                    </span>
                  </div>
                </div>
                <div className="mt-3 border-t border-dashed border-slate-200 pt-3 text-[11px] text-slate-500">
                  <p>• Minimum 250–300 km per day (round trip billing).</p>
                  <p>• Night halt charges may apply for multi-day trips.</p>
                </div>
              </div>

              {/* Local */}
              <div className="flex flex-col justify-between rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                    LOCAL PACKAGES
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-slate-900">
                    In-city & airport rides
                  </h3>
                  <p className="mt-1 text-xs text-slate-600">
                    Perfect for errands, meetings and airport pickups.
                  </p>
                </div>
                <div className="mt-3 space-y-2 text-xs">
                  <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2">
                    <span>4 hrs / 40 km</span>
                    <span className="font-semibold text-slate-900">
                      from ₹1,199
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2">
                    <span>8 hrs / 80 km</span>
                    <span className="font-semibold text-slate-900">
                      from ₹1,999
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2">
                    <span>Airport pickup / drop</span>
                    <span className="font-semibold text-slate-900">
                      from ₹799
                    </span>
                  </div>
                </div>
                <div className="mt-3 border-t border-dashed border-slate-200 pt-3 text-[11px] text-slate-500">
                  <p>• Extra km & hours charged at standard slab rates.</p>
                  <p>• Parking & tolls as per actuals (if applicable).</p>
                </div>
              </div>
            </div>

            {/* CRO: CTA under fares */}
            <div className="mt-6 flex flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
              <p className="text-xs text-slate-600 md:text-sm">
                Need an exact fare for your trip? Share your route and we’ll
                send a detailed quote on WhatsApp in a few minutes.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#booking"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 md:text-sm"
                >
                  Get exact fare for my trip
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/919999999999"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-medium text-slate-800 hover:border-slate-400 md:text-sm"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          className="border-b border-slate-200 bg-white py-10 md:py-12"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                  Simple, transparent booking experience.
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slate-600">
                  No apps, no confusion. Just tell us where you&apos;re going
                  and we handle the rest.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <div className="group rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-sm">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                  1
                </div>
                <h3 className="mb-1 text-sm font-semibold text-slate-900">
                  Share your route
                </h3>
                <p className="text-xs text-slate-600">
                  Enter pickup, drop, date and time on the form or send us your
                  trip details on WhatsApp.
                </p>
              </div>
              <div className="group rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-sm">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                  2
                </div>
                <h3 className="mb-1 text-sm font-semibold text-slate-900">
                  Get fixed quote
                </h3>
                <p className="text-xs text-slate-600">
                  We share an all-inclusive fare with no hidden charges or
                  last-minute surprises.
                </p>
              </div>
              <div className="group rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-sm">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                  3
                </div>
                <h3 className="mb-1 text-sm font-semibold text-slate-900">
                  Ride with peace
                </h3>
                <p className="text-xs text-slate-600">
                  Verified drivers, GPS tracking and support throughout your
                  journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular routes */}
        <section
          id="routes"
          className="border-b border-slate-200 bg-slate-50 py-10 md:py-12"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                  Popular one-way routes
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Fixed, all-inclusive fares on top intercity routes.
                </p>
              </div>
              <a
                href="/routes"
                className="text-xs font-medium text-emerald-700 hover:text-emerald-800"
              >
                View all routes →
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  from: "Chennai",
                  to: "Bangalore",
                  fare: "₹3,999",
                  distance: "345 km · 6 hrs",
                },
                {
                  from: "Chennai",
                  to: "Pondicherry",
                  fare: "₹1,899",
                  distance: "150 km · 3.5 hrs",
                },
                {
                  from: "Coimbatore",
                  to: "Ooty",
                  fare: "₹2,299",
                  distance: "85 km · 3 hrs",
                },
              ].map((route) => (
                <div
                  key={`${route.from}-${route.to}`}
                  className="flex flex-col justify-between rounded-2xl bg-white p-4 text-sm ring-1 ring-slate-200"
                >
                  <div>
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white">
                        ↔
                      </span>
                      Popular route
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-900">
                      {route.from} → {route.to}
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      {route.distance}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500">
                        One-way fare from
                      </p>
                      <p className="text-base font-semibold text-slate-900">
                        {route.fare}
                      </p>
                    </div>
                    <button className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-800">
                      Book now
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet / vehicle types */}
        <section
          id="fleet"
          className="border-b border-slate-200 bg-white py-10 md:py-12"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                  Choose the right cab for your trip.
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  From solo work trips to family vacations, we have a car for
                  every need.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  label: "Hatchback",
                  desc: "Best for 2–3 passengers with light luggage.",
                  badge: "Budget-friendly",
                },
                {
                  label: "Sedan",
                  desc: "Perfect balance of comfort and value for families.",
                  badge: "Most booked",
                },
                {
                  label: "SUV",
                  desc: "Extra legroom and luggage space for long trips.",
                  badge: "Group travel",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group flex flex-col justify-between rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-sm"
                >
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
                        <Car className="h-4 w-4" />
                      </div>
                      <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {item.label}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600">{item.desc}</p>
                  </div>
                  <button className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800">
                    View sample fares
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="border-b border-slate-200 bg-slate-50 py-10 md:py-12">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                  Why travellers love White Taxi.
                </h2>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Feature
                title="Upfront pricing"
                description="You see your full fare before you start. No surprises, no hidden charges."
              />
              <Feature
                title="Clean, verified cars"
                description="Regularly cleaned vehicles and experienced, background-verified drivers."
              />
              <Feature
                title="Live support"
                description="Our team tracks your journey and is available on call or WhatsApp 24×7."
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-b border-slate-200 bg-white py-10 md:py-12">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                  Loved by families and frequent travellers.
                </h2>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  name: "Priya, Chennai",
                  text: "“Booked a last-minute Chennai to Pondicherry trip. Clean car, polite driver, and no extra charges.”",
                },
                {
                  name: "Arun, Bangalore",
                  text: "“I use White Taxi for my regular Bangalore–Chennai trips. Fixed pricing and reliable drivers.”",
                },
                {
                  name: "Fatima, Coimbatore",
                  text: "“Our family Ooty vacation was smooth from start to end. Support team was very responsive.”",
                },
              ].map((t) => (
                <div
                  key={t.name}
                  className="flex flex-col justify-between rounded-2xl bg-slate-50 p-4 text-sm ring-1 ring-slate-200"
                >
                  <p className="mb-3 text-xs text-slate-700">{t.text}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-slate-900">
                      {t.name}
                    </p>
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section
          id="faq"
          className="border-b border-slate-200 bg-slate-50 py-10 md:py-12"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                  Frequently asked questions.
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Still confused? Call us any time — we&apos;re happy to help.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FAQ
                q="Do I have to pay anything while booking?"
                a="No. You can book without advance payment. In some cases, a small token advance may be required during peak dates — our team will inform you clearly."
              />
              <FAQ
                q="Are tolls and taxes included in the fare?"
                a="We share both options: with tolls included or tolls extra. Everything is mentioned clearly in your quote."
              />
              <FAQ
                q="What if my trip timing changes?"
                a="Just message or call us. For most trips, we can adjust the timing if drivers are available. For last-minute cancellations, our standard policy applies."
              />
              <FAQ
                q="Is night driving safe?"
                a="Yes. We assign experienced drivers for night travel and follow strict safety guidelines. You can always reach our support team during the trip."
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-white py-10 md:py-12">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="white-taxi-card-shadow flex flex-col items-center gap-4 rounded-2xl bg-slate-900 px-5 py-8 text-center text-white md:flex-row md:justify-between md:text-left">
              <div>
                <h2 className="text-lg font-semibold tracking-tight md:text-xl">
                  Ready to book your next outstation trip?
                </h2>
                <p className="mt-1 text-sm text-slate-200">
                  Share your route and get an instant, all-inclusive quote from
                  White Taxi.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:flex-row md:items-center">
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100"
                >
                  Book a drop
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="tel:+919999999999"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-500/60 px-4 py-2 text-sm font-medium text-slate-100 hover:border-slate-300"
                >
                  <PhoneCall className="h-4 w-4" />
                  Call support
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-xs text-slate-500">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 md:flex-row md:items-center md:justify-between md:px-6">
          <p>© {new Date().getFullYear()} White Taxi. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="/terms" className="hover:text-slate-700">
              Terms
            </a>
            <a href="/cancellation" className="hover:text-slate-700">
              Cancellation
            </a>
            <a href="/refund" className="hover:text-slate-700">
              Refund
            </a>
            <a href="/privacy" className="hover:text-slate-700">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

type FeatureProps = {
  title: string;
  description: string;
};

function Feature({ title, description }: FeatureProps) {
  return (
    <div className="group flex gap-3 rounded-2xl bg-white p-4 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-sm">
      <div className="mt-1 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
        <CheckCircle2 className="h-4 w-4" />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-xs text-slate-600">{description}</p>
      </div>
    </div>
  );
}

type FAQProps = { q: string; a: string };

function FAQ({ q, a }: FAQProps) {
  return (
    <div className="rounded-2xl bg-white p-4 text-sm ring-1 ring-slate-200">
      <p className="text-xs font-semibold text-slate-900">{q}</p>
      <p className="mt-1 text-xs text-slate-600">{a}</p>
    </div>
  );
}
