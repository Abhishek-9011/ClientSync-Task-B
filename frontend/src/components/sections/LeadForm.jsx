import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { createLead } from "@/services/leads";

const budgetOptions = [
  {
    value: "Under ₹10,000",
    label: "Under ₹10,000",
  },
  {
    value: "₹10,000 - ₹50,000",
    label: "₹10,000 - ₹50,000",
  },
  {
    value: "₹50,000 - ₹1,00,000",
    label: "₹50,000 - ₹1,00,000",
  },
  {
    value: "Above ₹1,00,000",
    label: "Above ₹1,00,000",
  },
];
const initialForm = { name: "", email: "", budget: "", message: "" };

export default function LeadForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [serverError, setServerError] = useState("");

   const validate = () => {
  const next = {};

  if (!form.name.trim()) {
    next.name = "Name is required.";
  } else if (form.name.trim().length < 2) {
    next.name = "Name must be at least 2 characters.";
  }

  if (!form.email.trim()) {
    next.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    next.email = "Invalid email address.";
  }

  if (!form.budget.trim()) {
    next.budget = "Budget is required.";
  }

 if (!form.message.trim()) {
  next.message = "Message is required.";
} else if (form.message.trim().length < 5) {
  next.message = "Message must be at least 5 characters.";
} else if (form.message.trim().length > 1000) {
  next.message = "Message cannot exceed 1000 characters.";
}

  setErrors(next);

  return Object.keys(next).length === 0;
};

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setServerError("");
    try {
      await createLead(form);
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setServerError(
        err?.response?.data?.message ||
          "Something went wrong while submitting your lead. Please try again."
      );
    }
  };

  return (
    <section id="lead-form" className="py-24 md:py-32">
      <div className="container-app">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-600">
            Get Started
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold text-ink-950 sm:text-4xl">
            Tell us about your next opportunity
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            Share a few details and our team will reach out with a plan
            tailored to your business.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-ink-100 bg-white p-8 shadow-soft-lg sm:p-10">
          {status === "success" ? (
            <div className="flex flex-col items-center py-10 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <CheckCircle2 className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink-950">
                Lead submitted successfully
              </h3>
              <p className="mt-2 max-w-sm text-sm text-ink-600">
                Thanks for reaching out. A member of our team will contact you
                shortly.
              </p>
              <Button className="mt-6" variant="outline" onClick={() => setStatus("idle")}>
                Submit another lead
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {status === "error" && (
                <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{serverError}</span>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input
                  id="name"
                  placeholder="e.g. Rohan Mehta"
                  value={form.name}
                  onChange={handleChange("name")}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && (
                  <p className="text-xs font-medium text-red-600">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={handleChange("email")}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && (
                  <p className="text-xs font-medium text-red-600">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Budget</Label>
                <Select
                  value={form.budget}
                  onValueChange={(value) => {
                    setForm((f) => ({ ...f, budget: value }));
                    setErrors((err) => ({ ...err, budget: undefined }));
                  }}
                >
                  <SelectTrigger id="budget" aria-invalid={Boolean(errors.budget)}>
                    <SelectValue placeholder="Select a budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.budget && (
                  <p className="text-xs font-medium text-red-600">{errors.budget}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us what you're looking to achieve..."
                  value={form.message}
                  onChange={handleChange("message")}
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && (
                  <p className="text-xs font-medium text-red-600">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Lead
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
