
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Bike, User, Phone, Mail, MapPin, Building2, CreditCard, Upload, ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import axios from "axios";

type FormData = {
  // Owner info
  owner_name: string;
  owner_phone: string;
  owner_email: string;
  owner_address: string;
  
  // Bank details
  bank_name: string;
  account_number: string;
  account_name: string;
  
  // Bike info
  bike_type: string;
  license_plate: string;
  model: string;
  color: string;
  year: string;
  
  // Files
  id_document?: FileList;
  owner_photo?: FileList;
  bike_photo?: FileList;
  registration_document?: FileList;
  
  additional_notes?: string;
};

export default function RegisterBikePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError("");

    const formData = new FormData();
    
    // Owner info
    formData.append("owner_name", data.owner_name);
    formData.append("owner_phone", data.owner_phone);
    formData.append("owner_email", data.owner_email);
    if (data.owner_address) formData.append("owner_address", data.owner_address);
    
    // Bank
    if (data.bank_name) formData.append("bank_name", data.bank_name);
    if (data.account_number) formData.append("account_number", data.account_number);
    if (data.account_name) formData.append("account_name", data.account_name);
    
    // Bike
    formData.append("bike_type", data.bike_type);
    formData.append("license_plate", data.license_plate);
    if (data.model) formData.append("model", data.model);
    if (data.color) formData.append("color", data.color);
    if (data.year) formData.append("year", data.year);
    
    // Files
    if (data.id_document?.[0]) formData.append("id_document", data.id_document[0]);
    if (data.owner_photo?.[0]) formData.append("owner_photo", data.owner_photo[0]);
    if (data.bike_photo?.[0]) formData.append("bike_photo", data.bike_photo[0]);
    if (data.registration_document?.[0]) formData.append("registration_document", data.registration_document[0]);
    
    if (data.additional_notes) formData.append("additional_notes", data.additional_notes);

    try {
      const BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";
      await axios.post(`${BASE}/register-bike/`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSuccess(true);
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-hfc-black flex items-center justify-center px-6">
        <div className="max-w-md text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-hfc-lime/10 border border-hfc-lime/20 flex items-center justify-center mx-auto">
            <Bike size={40} className="text-hfc-lime" />
          </div>
          <h1 className="font-display font-black text-white text-3xl">Registration Submitted!</h1>
          <p className="text-hfc-muted font-body leading-relaxed">
            Thank you for registering your bike with HFC. We'll review your submission and contact you within 24-48 hours.
          </p>
          <button
            onClick={() => router.push("/")}
            className="inline-flex items-center gap-2 bg-hfc-lime text-hfc-black font-display font-bold px-8 py-4 rounded-xl hover:bg-white transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-hfc-black">
      {/* Header */}
      <header className="border-b border-hfc-border bg-hfc-black/90 backdrop-blur sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-3">
          <button onClick={() => router.back()} className="text-hfc-muted hover:text-white transition-colors">
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-hfc-lime rounded-xl flex items-center justify-center">
              <Bike size={20} className="text-hfc-black" />
            </div>
            <div>
              <p className="font-display font-bold text-white">Register Your Bike</p>
              <p className="text-hfc-muted text-xs">Join HFC as a bike owner</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          
          {/* Owner Information */}
          <div className="bg-hfc-card border border-hfc-border rounded-2xl p-6 space-y-4">
            <h2 className="font-display font-bold text-white text-lg flex items-center gap-2">
              <User size={20} className="text-hfc-lime" />
              Your Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs text-hfc-muted font-body font-medium">Full Name *</label>
                <input type="text" placeholder="John Doe" className="w-full bg-hfc-dark border border-hfc-border rounded-xl px-3 py-2.5 text-white text-sm outline-none focus:border-hfc-lime/50" {...register("owner_name", { required: "Required" })} />
                {errors.owner_name && <p className="text-hfc-red text-xs">{errors.owner_name.message}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-hfc-muted font-body font-medium">Phone Number *</label>
                <input type="tel" placeholder="+2348012345678" className="w-full bg-hfc-dark border border-hfc-border rounded-xl px-3 py-2.5 text-white text-sm outline-none focus:border-hfc-lime/50" {...register("owner_phone", { required: "Required" })} />
                {errors.owner_phone && <p className="text-hfc-red text-xs">{errors.owner_phone.message}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-hfc-muted font-body font-medium">Email *</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-hfc-dark border border-hfc-border rounded-xl px-3 py-2.5 text-white text-sm outline-none focus:border-hfc-lime/50" {...register("owner_email", { required: "Required" })} />
                {errors.owner_email && <p className="text-hfc-red text-xs">{errors.owner_email.message}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-hfc-muted font-body font-medium">Address</label>
                <input type="text" placeholder="123 Main St, Makurdi" className="w-full bg-hfc-dark border border-hfc-border rounded-xl px-3 py-2.5 text-white text-sm outline-none focus:border-hfc-lime/50" {...register("owner_address")} />
              </div>
            </div>
          </div>

          {/* Bank Details */}
          <div className="bg-hfc-card border border-hfc-border rounded-2xl p-6 space-y-4">
            <h2 className="font-display font-bold text-white text-lg flex items-center gap-2">
              <Building2 size={20} className="text-hfc-lime" />
              Bank Details (For Payments)
            </h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs text-hfc-muted font-body font-medium">Bank Name</label>
                <input type="text" placeholder="First Bank" className="w-full bg-hfc-dark border border-hfc-border rounded-xl px-3 py-2.5 text-white text-sm outline-none focus:border-hfc-lime/50" {...register("bank_name")} />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-hfc-muted font-body font-medium">Account Number</label>
                <input type="text" placeholder="1234567890" className="w-full bg-hfc-dark border border-hfc-border rounded-xl px-3 py-2.5 text-white text-sm outline-none focus:border-hfc-lime/50" {...register("account_number")} />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-hfc-muted font-body font-medium">Account Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-hfc-dark border border-hfc-border rounded-xl px-3 py-2.5 text-white text-sm outline-none focus:border-hfc-lime/50" {...register("account_name")} />
              </div>
            </div>
          </div>

          {/* Bike Details */}
          <div className="bg-hfc-card border border-hfc-border rounded-2xl p-6 space-y-4">
            <h2 className="font-display font-bold text-white text-lg flex items-center gap-2">
              <Bike size={20} className="text-hfc-lime" />
              Bike Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs text-hfc-muted font-body font-medium">Bike Type *</label>
                <select className="w-full bg-hfc-dark border border-hfc-border rounded-xl px-3 py-2.5 text-white text-sm outline-none focus:border-hfc-lime/50" {...register("bike_type", { required: "Required" })}>
                  <option value="">Select type</option>
                  <option value="standard">Standard</option>
                  <option value="sport">Sport</option>
                  <option value="cargo">Cargo</option>
                </select>
                {errors.bike_type && <p className="text-hfc-red text-xs">{errors.bike_type.message}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-hfc-muted font-body font-medium">License Plate *</label>
                <input type="text" placeholder="MKD-123AB" className="w-full bg-hfc-dark border border-hfc-border rounded-xl px-3 py-2.5 text-white text-sm outline-none focus:border-hfc-lime/50" {...register("license_plate", { required: "Required" })} />
                {errors.license_plate && <p className="text-hfc-red text-xs">{errors.license_plate.message}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-hfc-muted font-body font-medium">Model</label>
                <input type="text" placeholder="Honda CB125" className="w-full bg-hfc-dark border border-hfc-border rounded-xl px-3 py-2.5 text-white text-sm outline-none focus:border-hfc-lime/50" {...register("model")} />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-hfc-muted font-body font-medium">Color</label>
                <input type="text" placeholder="Black" className="w-full bg-hfc-dark border border-hfc-border rounded-xl px-3 py-2.5 text-white text-sm outline-none focus:border-hfc-lime/50" {...register("color")} />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-hfc-muted font-body font-medium">Year</label>
                <input type="number" placeholder="2022" className="w-full bg-hfc-dark border border-hfc-border rounded-xl px-3 py-2.5 text-white text-sm outline-none focus:border-hfc-lime/50" {...register("year")} />
              </div>
            </div>
          </div>

          {/* Documents */}
          <div className="bg-hfc-card border border-hfc-border rounded-2xl p-6 space-y-4">
            <h2 className="font-display font-bold text-white text-lg flex items-center gap-2">
              <Upload size={20} className="text-hfc-lime" />
              Documents
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs text-hfc-muted font-body font-medium">ID Document</label>
                <input type="file" accept=".pdf,image/*" className="w-full bg-hfc-dark border border-hfc-border rounded-xl px-3 py-2.5 text-white text-sm outline-none file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:bg-hfc-lime file:text-hfc-black file:font-display file:font-bold file:text-xs" {...register("id_document")} />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-hfc-muted font-body font-medium">Your Photo</label>
                <input type="file" accept="image/*" className="w-full bg-hfc-dark border border-hfc-border rounded-xl px-3 py-2.5 text-white text-sm outline-none file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:bg-hfc-lime file:text-hfc-black file:font-display file:font-bold file:text-xs" {...register("owner_photo")} />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-hfc-muted font-body font-medium">Bike Photo</label>
                <input type="file" accept="image/*" className="w-full bg-hfc-dark border border-hfc-border rounded-xl px-3 py-2.5 text-white text-sm outline-none file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:bg-hfc-lime file:text-hfc-black file:font-display file:font-bold file:text-xs" {...register("bike_photo")} />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-hfc-muted font-body font-medium">Registration Papers</label>
                <input type="file" accept=".pdf,image/*" className="w-full bg-hfc-dark border border-hfc-border rounded-xl px-3 py-2.5 text-white text-sm outline-none file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:bg-hfc-lime file:text-hfc-black file:font-display file:font-bold file:text-xs" {...register("registration_document")} />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-hfc-muted font-body font-medium">Additional Notes</label>
              <textarea rows={3} placeholder="Any additional information..." className="w-full bg-hfc-dark border border-hfc-border rounded-xl px-3 py-2.5 text-white text-sm outline-none focus:border-hfc-lime/50 resize-none" {...register("additional_notes")} />
            </div>
          </div>

          {error && <div className="bg-hfc-red/10 border border-hfc-red/30 text-hfc-red rounded-xl px-4 py-3">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-hfc-lime text-hfc-black font-display font-bold px-8 py-4 rounded-xl hover:bg-white transition-all disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Registration"}
          </button>
        </form>
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════════════════
// ADD THESE IMPORTS TO YOUR LANDING PAGE
// ═══════════════════════════════════════════════════════════════════════════

