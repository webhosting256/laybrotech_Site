import { whatsappHref } from '@/lib/contact';

export function FloatingWhatsAppButton() {
  return (
    <a
      className="floating-whatsapp group fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_12px_30px_rgb(37_211_102/0.28)] transition duration-200 hover:-translate-y-1 hover:bg-[#1ebe5d] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#25d366]/45 sm:bottom-6 sm:right-6 sm:size-16"
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Laybrotech on WhatsApp"
      title="Message Laybrotech on WhatsApp"
    >
      <span className="floating-whatsapp__ring" aria-hidden="true" />
      <svg className="relative z-10 size-7 sm:size-8" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" focusable="false">
        <path d="M16.04 3.2c-7.02 0-12.72 5.64-12.72 12.6 0 2.22.59 4.39 1.7 6.3L3.2 28.8l6.88-1.78a12.82 12.82 0 0 0 5.96 1.48c7.02 0 12.72-5.64 12.72-12.6S23.06 3.2 16.04 3.2Zm0 22.98c-1.88 0-3.72-.5-5.34-1.45l-.38-.22-4.08 1.05 1.09-3.93-.25-.4a10.2 10.2 0 0 1-1.55-5.43c0-5.68 4.72-10.29 10.51-10.29s10.5 4.61 10.5 10.29-4.71 10.38-10.5 10.38Zm5.76-7.7c-.31-.16-1.86-.91-2.15-1.02-.29-.1-.5-.16-.71.16-.21.31-.82 1.02-1 1.23-.18.21-.37.24-.68.08-.31-.16-1.32-.48-2.51-1.54a9.34 9.34 0 0 1-1.73-2.13c-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.7-.97-2.33-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.62s1.13 3.04 1.29 3.25c.16.21 2.23 3.37 5.4 4.72.75.32 1.34.52 1.8.67.76.24 1.45.2 2 .12.61-.09 1.86-.76 2.12-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}
