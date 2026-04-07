"use client";

import { FormEvent, useState } from "react";

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  zipCode: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  fullName: "",
  email: "",
  phone: "",
  zipCode: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!values.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!values.email.trim()) nextErrors.email = "Email is required.";
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.phone.trim()) nextErrors.phone = "Phone is required.";
    if (values.phone && !/^[0-9()+\-\s]{7,}$/.test(values.phone)) {
      nextErrors.phone = "Please enter a valid phone number.";
    }
    if (!values.zipCode.trim()) nextErrors.zipCode = "ZIP code is required.";
    if (values.zipCode && !/^\d{5}(-\d{4})?$/.test(values.zipCode)) {
      nextErrors.zipCode = "Please enter a valid ZIP code.";
    }
    if (!values.service) nextErrors.service = "Please select a service.";
    if (!values.message.trim()) nextErrors.message = "Please provide a short message.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");

    if (!validate()) {
      setStatus("error");
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 450));
      setStatus("success");
      setValues(initialValues);
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-slate-700">
          Full Name
        </label>
        <input
          id="fullName"
          value={values.fullName}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, fullName: event.target.value }))
          }
          className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none ring-[#1C4EFF] transition focus:border-[#1C4EFF] focus:ring-2"
        />
        {errors.fullName ? <p className="mt-1 text-xs text-red-600">{errors.fullName}</p> : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
            className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none ring-[#1C4EFF] transition focus:border-[#1C4EFF] focus:ring-2"
          />
          {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
            Phone
          </label>
          <input
            id="phone"
            value={values.phone}
            onChange={(event) => setValues((prev) => ({ ...prev, phone: event.target.value }))}
            className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none ring-[#1C4EFF] transition focus:border-[#1C4EFF] focus:ring-2"
          />
          {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone}</p> : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="zipCode" className="mb-1 block text-sm font-medium text-slate-700">
            ZIP Code
          </label>
          <input
            id="zipCode"
            value={values.zipCode}
            onChange={(event) => setValues((prev) => ({ ...prev, zipCode: event.target.value }))}
            className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none ring-[#1C4EFF] transition focus:border-[#1C4EFF] focus:ring-2"
          />
          {errors.zipCode ? <p className="mt-1 text-xs text-red-600">{errors.zipCode}</p> : null}
        </div>
        <div>
          <label htmlFor="service" className="mb-1 block text-sm font-medium text-slate-700">
            Service Interested In
          </label>
          <select
            id="service"
            value={values.service}
            onChange={(event) => setValues((prev) => ({ ...prev, service: event.target.value }))}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none ring-[#1C4EFF] transition focus:border-[#1C4EFF] focus:ring-2"
          >
            <option value="">Select service</option>
            <option value="residential-maintenance">Residential Maintenance</option>
            <option value="commercial-maintenance">Commercial Maintenance</option>
            <option value="preventative-maintenance-contracts">Preventative Maintenance Contracts</option>
            <option value="exterior-landscaping">Exterior &amp; Landscaping</option>
            <option value="general-repairs-handyman">General Repairs &amp; Handyman</option>
            <option value="snow-removal">Snow Removal</option>
          </select>
          {errors.service ? <p className="mt-1 text-xs text-red-600">{errors.service}</p> : null}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={values.message}
          onChange={(event) => setValues((prev) => ({ ...prev, message: event.target.value }))}
          className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none ring-[#1C4EFF] transition focus:border-[#1C4EFF] focus:ring-2"
        />
        {errors.message ? <p className="mt-1 text-xs text-red-600">{errors.message}</p> : null}
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-xl bg-[#1C4EFF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#163fd3]"
      >
        Submit
      </button>

      {status === "success" ? (
        <p className="text-sm font-medium text-emerald-700">
          Thanks! Your message has been sent successfully.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm font-medium text-red-600">
          Please fix the highlighted fields and try again.
        </p>
      ) : null}
    </form>
  );
}
