import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { company } from "@/lib/site-data";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  company: z.string().trim().max(150).optional(),
  country: z.string().trim().min(2, "Enter your country").max(80),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(5, "Enter your phone").max(40),
  product: z.string().trim().min(2, "Specify product requirement").max(200),
  quantity: z.string().trim().max(100).optional(),
  message: z.string().trim().max(2000).optional(),
});

export function InquiryForm({ defaultProduct = "" }: { defaultProduct?: string }) {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      setSubmitting(false);
      return;
    }
    const subject = encodeURIComponent(`Inquiry: ${parsed.data.product}`);
    const body = encodeURIComponent(
      `Name: ${parsed.data.name}\nCompany: ${parsed.data.company ?? ""}\nCountry: ${parsed.data.country}\nEmail: ${parsed.data.email}\nPhone: ${parsed.data.phone}\nProduct: ${parsed.data.product}\nQuantity: ${parsed.data.quantity ?? ""}\n\nMessage:\n${parsed.data.message ?? ""}`
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client to send the inquiry…");
    setTimeout(() => setSubmitting(false), 800);
  };

  const field = "w-full bg-transparent border-b border-foreground/20 focus:border-gold py-3 px-1 text-sm outline-none transition-colors";

  return (
    <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2">
      <input className={field} name="name" placeholder="Your name *" required maxLength={100} />
      <input className={field} name="company" placeholder="Company name" maxLength={150} />
      <input className={field} name="country" placeholder="Country *" required maxLength={80} />
      <input className={field} name="email" type="email" placeholder="Email *" required maxLength={255} />
      <input className={field} name="phone" placeholder="Phone (with country code) *" required maxLength={40} />
      <input className={field} name="quantity" placeholder="Quantity / Container size" maxLength={100} />
      <input
        className={`${field} md:col-span-2`}
        name="product"
        placeholder="Product requirement *"
        defaultValue={defaultProduct}
        required
        maxLength={200}
      />
      <textarea
        className={`${field} md:col-span-2 resize-none`}
        name="message"
        placeholder="Message / additional notes"
        rows={4}
        maxLength={2000}
      />
      <div className="md:col-span-2 flex justify-end">
        <button
          type="submit"
          disabled={submitting}
          className="px-8 py-3 bg-ink text-cream text-sm tracking-wider uppercase hover:bg-gradient-gold hover:text-ink transition-colors disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Send Inquiry"}
        </button>
      </div>
    </form>
  );
}
