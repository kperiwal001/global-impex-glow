import { company } from "@/lib/site-data";

export function WhatsAppButton() {
  const href = `https://wa.me/${company.phoneRaw}?text=${encodeURIComponent(
    "Hello Golden Impex, I'd like to enquire about exporting Indian FMCG products."
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 grid place-items-center rounded-full bg-[#25D366] shadow-luxe hover:scale-105 transition-transform"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" aria-hidden="true">
        <path d="M19.11 17.21c-.27-.13-1.59-.78-1.83-.87-.24-.09-.42-.13-.6.13-.18.26-.69.87-.84 1.05-.16.18-.31.2-.58.07-.27-.13-1.13-.42-2.16-1.33-.8-.71-1.34-1.58-1.5-1.84-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.15.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.13-.6-1.45-.82-1.98-.22-.52-.44-.45-.6-.46-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.26 0 1.33.97 2.61 1.1 2.79.13.18 1.9 2.91 4.61 4.08.64.28 1.14.45 1.53.57.64.2 1.22.17 1.68.1.51-.08 1.59-.65 1.81-1.27.22-.62.22-1.16.16-1.27-.06-.11-.24-.18-.51-.31zM16.03 4C9.4 4 4 9.4 4 16.03c0 2.11.55 4.18 1.6 6L4 28l6.16-1.55a12 12 0 0 0 5.87 1.5h.01c6.62 0 12.02-5.4 12.03-12.03 0-3.21-1.25-6.23-3.52-8.5A12 12 0 0 0 16.03 4z"/>
      </svg>
    </a>
  );
}
