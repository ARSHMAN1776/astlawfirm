"use client";

import React, { useState } from "react";
import { practiceAreas } from "@/data/practiceAreas";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  practiceArea: string;
  matterDetails: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  practiceArea?: string;
  matterDetails?: string;
}

export const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    practiceArea: "",
    matterDetails: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Full legal name is required.";
    }

    if (!formData.email.trim()) {
      errs.email = "Business email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      errs.phone = "Contact phone number is required.";
    }

    if (!formData.practiceArea) {
      errs.practiceArea = "Please select a relevant practice area.";
    }

    if (!formData.matterDetails.trim() || formData.matterDetails.trim().length < 20) {
      errs.matterDetails = "Please provide a brief outline of the matter (minimum 20 characters).";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="border border-[rgba(17,17,16,0.12)] bg-[#EFECE3] p-8 sm:p-12 space-y-6 text-center">
        <div className="w-12 h-12 border border-[#8B7355] mx-auto flex items-center justify-center text-[#8B7355]">
          <CheckCircle2 className="w-6 h-6 stroke-1" />
        </div>
        <div className="space-y-2">
          <h3
            className="text-2xl text-[#111110]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
          >
            Consultation Request Received
          </h3>
          <p className="text-[#5C5A54] text-sm leading-relaxed max-w-md mx-auto">
            Thank you, <span className="text-[#111110] font-medium">{formData.fullName}</span>. Your inquiry has been routed to AST Law Firm. Our legal team will review the matter particulars and contact you discreetly.
          </p>
        </div>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: "",
              email: "",
              phone: "",
              practiceArea: "",
              matterDetails: "",
            });
          }}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#111110] hover:text-[#8B7355] border-b border-[#111110] pb-1 font-medium transition-colors"
        >
          Submit Another Request →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="space-y-1.5">
        <label htmlFor="fullName" className="block text-[0.68rem] tracking-[0.2em] uppercase text-[#5C5A54] font-medium">
          Full Name <span className="text-[#8B7355]">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          placeholder="e.g. Tariq Mehmood"
          className="w-full bg-[#FFFFFF] border border-[rgba(17,17,16,0.15)] text-[#111110] px-4 py-3.5 text-sm focus:border-[#111110] focus:ring-0 transition-colors focus:outline-none placeholder:text-[#A09D96]"
        />
        {errors.fullName && (
          <p className="text-xs text-red-600 flex items-center gap-1 mt-1 font-mono">
            <AlertCircle className="w-3 h-3" /> {errors.fullName}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-[0.68rem] tracking-[0.2em] uppercase text-[#5C5A54] font-medium">
            Email Address <span className="text-[#8B7355]">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@company.com"
            className="w-full bg-[#FFFFFF] border border-[rgba(17,17,16,0.15)] text-[#111110] px-4 py-3.5 text-sm focus:border-[#111110] focus:ring-0 transition-colors focus:outline-none placeholder:text-[#A09D96]"
          />
          {errors.email && (
            <p className="text-xs text-red-600 flex items-center gap-1 mt-1 font-mono">
              <AlertCircle className="w-3 h-3" /> {errors.email}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="phone" className="block text-[0.68rem] tracking-[0.2em] uppercase text-[#5C5A54] font-medium">
            Telephone / Mobile <span className="text-[#8B7355]">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+92 300 0000000"
            className="w-full bg-[#FFFFFF] border border-[rgba(17,17,16,0.15)] text-[#111110] px-4 py-3.5 text-sm focus:border-[#111110] focus:ring-0 transition-colors focus:outline-none placeholder:text-[#A09D96]"
          />
          {errors.phone && (
            <p className="text-xs text-red-600 flex items-center gap-1 mt-1 font-mono">
              <AlertCircle className="w-3 h-3" /> {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="practiceArea" className="block text-[0.68rem] tracking-[0.2em] uppercase text-[#5C5A54] font-medium">
          Relevant Practice Area <span className="text-[#8B7355]">*</span>
        </label>
        <select
          id="practiceArea"
          value={formData.practiceArea}
          onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
          className="w-full bg-[#FFFFFF] border border-[rgba(17,17,16,0.15)] text-[#111110] px-4 py-3.5 text-sm focus:border-[#111110] transition-colors focus:outline-none"
        >
          <option value="" disabled>Select Practice Area</option>
          {practiceAreas.map((pa) => (
            <option key={pa.slug} value={pa.title} className="text-[#111110]">
              {pa.number} — {pa.title}
            </option>
          ))}
          <option value="General Legal Inquiry" className="text-[#111110]">
            General Legal Inquiry
          </option>
        </select>
        {errors.practiceArea && (
          <p className="text-xs text-red-600 flex items-center gap-1 mt-1 font-mono">
            <AlertCircle className="w-3 h-3" /> {errors.practiceArea}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="matterDetails" className="block text-[0.68rem] tracking-[0.2em] uppercase text-[#5C5A54] font-medium">
          Matter Summary & Objectives <span className="text-[#8B7355]">*</span>
        </label>
        <textarea
          id="matterDetails"
          rows={5}
          value={formData.matterDetails}
          onChange={(e) => setFormData({ ...formData, matterDetails: e.target.value })}
          placeholder="Please provide a concise description of your legal matter or question. Do not include confidential litigation secrets prior to formal engagement."
          className="w-full bg-[#FFFFFF] border border-[rgba(17,17,16,0.15)] text-[#111110] px-4 py-3.5 text-sm focus:border-[#111110] transition-colors focus:outline-none placeholder:text-[#A09D96] leading-relaxed"
        />
        {errors.matterDetails && (
          <p className="text-xs text-red-600 flex items-center gap-1 mt-1 font-mono">
            <AlertCircle className="w-3 h-3" /> {errors.matterDetails}
          </p>
        )}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#111110] text-[#F7F5EF] hover:bg-[#2D2C2A] font-medium text-[0.7rem] tracking-[0.2em] uppercase transition-all duration-300 disabled:opacity-50"
        >
          <span>{isSubmitting ? "Transmitting..." : "Submit Consultation Request"}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <p className="text-[0.6875rem] text-[#8A8780] font-sans leading-normal pt-1">
        All communications are held in strict professional confidence. Transmission of this form does not establish an advocate-client relationship prior to formal engagement.
      </p>
    </form>
  );
};
