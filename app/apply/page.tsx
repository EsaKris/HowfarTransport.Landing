"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ArrowLeft, CheckCircle, Upload, Loader2 } from "lucide-react";
import { submitDriverApplication, type DriverApplicationPayload } from "@/lib/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type FormValues = {
  full_name:            string;
  email:                string;
  phone_number:         string;
  guarantor_name:       string;
  guarantor_phone:      string;
  years_of_experience:  number;
  additional_notes:     string;
  resume:               FileList;
};

const steps = ["Personal Info", "Additional Info", "Review & Submit"];

export default function ApplyPage() {
  const [step, setStep]         = useState(0);
  const [success, setSuccess]   = useState(false);
  const [loading, setLoading]   = useState(false);
  const [apiError, setApiError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onBlur" });

  const watchedName = watch("full_name");

  // Validate current step's fields before advancing
  const nextStep = async () => {
    const fieldsPerStep: (keyof FormValues)[][] = [
      ["full_name", "email", "phone_number"],
      ["guarantor_name", "guarantor_phone"],
    ];
    const valid = await trigger(fieldsPerStep[step]);
    if (valid) setStep((s) => s + 1);
  };

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    setApiError("");
    try {
      const payload: DriverApplicationPayload = {
        full_name:            data.full_name,
        email:                data.email,
        phone_number:         data.phone_number,
        guarantor_name:       data.guarantor_name,
        guarantor_phone:      data.guarantor_phone,
        years_of_experience:  Number(data.years_of_experience),
        additional_notes:     data.additional_notes,
        resume:               data.resume?.[0] ?? null,
      };
      await submitDriverApplication(payload);
      setSuccess(true);
    } catch (err: unknown) {
      const msg =
        (err as { response?: { data?: { message?: string } } })?.response?.data?.message ||
        "Something went wrong. Please try again.";
      setApiError(msg);
    } finally {
      setLoading(false);
    }
  };

  // ── Success screen ────────────────────────────────────────────────────
  if (success) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-hfc-black flex items-center justify-center px-6 pt-20">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-hfc-lime/10 border border-hfc-lime/30 flex items-center justify-center mx-auto">
              <CheckCircle size={36} className="text-hfc-lime" />
            </div>
            <h1 className="font-display font-black text-4xl text-white">
              Application Submitted!
            </h1>
            <p className="font-body text-hfc-muted text-lg leading-relaxed">
              Thanks, <span className="text-white font-semibold">{watchedName}</span>!
              <br />
              Our team will review your application and send you a decision email within{" "}
              <strong className="text-hfc-lime">2–3 business days</strong>.
            </p>
            <div className="card-glass rounded-2xl p-5 text-left space-y-2 border border-hfc-border">
              <p className="text-white font-semibold text-sm">What happens next?</p>
              <ul className="space-y-1 text-hfc-muted text-sm font-body">
                <li>✅ Application received and logged</li>
                <li>📧 Check your email for a confirmation</li>
                <li>🔍 Admin reviews your details</li>
                <li>🎉 You get an acceptance + employment letter</li>
              </ul>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-hfc-lime hover:text-white transition-colors font-display font-semibold"
            >
              <ArrowLeft size={16} /> Back to homepage
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // ── Form ─────────────────────────────────────────────────────────────
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-hfc-black pt-24 pb-20 px-6">
        <div className="max-w-xl mx-auto">

          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-hfc-muted hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={14} /> Back to home
          </Link>

          {/* Header */}
          <div className="mb-10">
            <p className="text-hfc-orange font-body text-sm font-semibold mb-2 tracking-widest uppercase">
              Driver Application
            </p>
            <h1 className="font-display font-black text-4xl text-white leading-tight">
              Join the HFC
              <br />
              <span className="text-gradient-warm">driver team.</span>
            </h1>
            <p className="text-hfc-muted font-body mt-3">
              Fill out the form below and our team will get back to you within 2–3 business days.
            </p>
          </div>

          {/* Step indicator */}
          <div className="flex items-center gap-2 mb-10">
            {steps.map((label, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`flex items-center gap-2 ${i <= step ? "text-white" : "text-hfc-muted"}`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-display font-bold border ${
                    i < step
                      ? "bg-hfc-lime border-hfc-lime text-hfc-black"
                      : i === step
                      ? "border-hfc-orange text-hfc-orange"
                      : "border-hfc-border text-hfc-muted"
                  }`}>
                    {i < step ? "✓" : i + 1}
                  </div>
                  <span className="text-xs font-body hidden sm:block">{label}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`flex-1 h-px w-8 ${i < step ? "bg-hfc-lime/50" : "bg-hfc-border"}`} />
                )}
              </div>
            ))}
          </div>

          {/* Form card */}
          <div className="card-glass rounded-3xl border border-hfc-border p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

              {/* ── Step 0: Personal Info ───────────── */}
              {step === 0 && (
                <div className="space-y-5">
                  <h2 className="font-display font-bold text-white text-xl">Personal Information</h2>

                  <div>
                    <label className="block text-sm text-hfc-muted font-body mb-1.5">Full Name *</label>
                    <input
                      {...register("full_name", { required: "Full name is required" })}
                      className="w-full bg-hfc-dark border border-hfc-border rounded-xl px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-hfc-lime/60 transition-colors placeholder-hfc-muted"
                      placeholder="e.g. Amaka Okafor"
                    />
                    {errors.full_name && <p className="text-red-400 text-xs mt-1">{errors.full_name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm text-hfc-muted font-body mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
                      })}
                      className="w-full bg-hfc-dark border border-hfc-border rounded-xl px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-hfc-lime/60 transition-colors placeholder-hfc-muted"
                      placeholder="e.g. amaka@gmail.com"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm text-hfc-muted font-body mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      {...register("phone_number", {
                        required: "Phone number is required",
                        pattern: { value: /^\+?[0-9]{10,15}$/, message: "Enter a valid phone number" },
                      })}
                      className="w-full bg-hfc-dark border border-hfc-border rounded-xl px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-hfc-lime/60 transition-colors placeholder-hfc-muted"
                      placeholder="e.g. +2348012345678"
                    />
                    {errors.phone_number && <p className="text-red-400 text-xs mt-1">{errors.phone_number.message}</p>}
                  </div>

                  <button
                    type="button"
                    onClick={nextStep}
                    className="w-full bg-hfc-lime text-hfc-black font-display font-bold py-4 rounded-2xl hover:bg-white transition-colors"
                  >
                    Continue →
                  </button>
                </div>
              )}

              {/* ── Step 1: Additional Info ─────────── */}
              {step === 1 && (
                <div className="space-y-5">
                  <h2 className="font-display font-bold text-white text-xl">Additional Details</h2>

                  <div>
                    <label className="block text-sm text-hfc-muted font-body mb-1.5">Guarantor Name *</label>
                    <input
                      {...register("guarantor_name", { required: "Guarantor name is required" })}
                      className="w-full bg-hfc-dark border border-hfc-border rounded-xl px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-hfc-lime/60 transition-colors placeholder-hfc-muted"
                      placeholder="Full name of your guarantor"
                    />
                    {errors.guarantor_name && <p className="text-red-400 text-xs mt-1">{errors.guarantor_name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm text-hfc-muted font-body mb-1.5">Guarantor Phone *</label>
                    <input
                      type="tel"
                      {...register("guarantor_phone", { required: "Guarantor phone is required" })}
                      className="w-full bg-hfc-dark border border-hfc-border rounded-xl px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-hfc-lime/60 transition-colors placeholder-hfc-muted"
                      placeholder="+234..."
                    />
                    {errors.guarantor_phone && <p className="text-red-400 text-xs mt-1">{errors.guarantor_phone.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm text-hfc-muted font-body mb-1.5">Years of riding experience</label>
                    <select
                      {...register("years_of_experience")}
                      className="w-full bg-hfc-dark border border-hfc-border rounded-xl px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-hfc-lime/60 transition-colors"
                    >
                      <option value="0">Less than 1 year</option>
                      <option value="1">1 year</option>
                      <option value="2">2 years</option>
                      <option value="3">3+ years</option>
                      <option value="5">5+ years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-hfc-muted font-body mb-1.5">Upload CV / Resume (optional)</label>
                    <label className="w-full border border-dashed border-hfc-border rounded-xl px-4 py-5 flex flex-col items-center gap-2 cursor-pointer hover:border-hfc-lime/40 transition-colors group">
                      <Upload size={20} className="text-hfc-muted group-hover:text-hfc-lime transition-colors" />
                      <span className="text-hfc-muted text-xs font-body">Click to upload PDF or image</span>
                      <input type="file" {...register("resume")} className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm text-hfc-muted font-body mb-1.5">Anything else you'd like us to know?</label>
                    <textarea
                      {...register("additional_notes")}
                      rows={3}
                      className="w-full bg-hfc-dark border border-hfc-border rounded-xl px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-hfc-lime/60 transition-colors placeholder-hfc-muted resize-none"
                      placeholder="e.g. I have my own bike, I'm available full time..."
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(0)}
                      className="flex-1 border border-hfc-border text-white font-display font-semibold py-4 rounded-2xl hover:border-hfc-lime/50 transition-colors"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex-1 bg-hfc-lime text-hfc-black font-display font-bold py-4 rounded-2xl hover:bg-white transition-colors"
                    >
                      Review →
                    </button>
                  </div>
                </div>
              )}

              {/* ── Step 2: Review ──────────────────── */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="font-display font-bold text-white text-xl">Review Your Application</h2>

                  <div className="space-y-3">
                    {[
                      { label: "Full Name",    value: watch("full_name")       },
                      { label: "Email",        value: watch("email")           },
                      { label: "Phone",        value: watch("phone_number")    },
                      { label: "Guarantor",    value: watch("guarantor_name")  },
                      { label: "Guar. Phone",  value: watch("guarantor_phone") },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between py-2.5 border-b border-hfc-border">
                        <span className="text-hfc-muted text-sm font-body">{label}</span>
                        <span className="text-white text-sm font-semibold font-body">{value || "—"}</span>
                      </div>
                    ))}
                  </div>

                  {apiError && (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-4 py-3 text-sm">
                      {apiError}
                    </div>
                  )}

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 border border-hfc-border text-white font-display font-semibold py-4 rounded-2xl hover:border-hfc-lime/50 transition-colors"
                    >
                      ← Edit
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 bg-hfc-orange text-white font-display font-bold py-4 rounded-2xl hover:bg-[#FF8A50] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <><Loader2 size={16} className="animate-spin" /> Submitting...</>
                      ) : (
                        "Submit Application 🚀"
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Trust note */}
          <p className="text-center text-hfc-muted text-xs mt-6 font-body">
            🔒 Your information is secure and will only be used for the driver review process.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
