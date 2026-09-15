import { type FormEvent, type ReactNode, useState } from 'react';
import { ArrowRight, Headphones, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';

import heroImage from '@/assets/images/home-hero-business-growth.webp';
import { Footer } from '@/components/layout/Footer';
import { ButtonLink } from '@/components/ui/Button';
import { cn } from '@/lib/cn';
import { whatsappHref } from '@/lib/contact';
import { submitEnquiry } from '@/lib/enquiries';
import { FinalCTA } from '@/sections/home/FinalCTA';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<'name' | 'email' | 'subject' | 'message', string>>;

type ContactIcon = typeof Phone;

const phoneNumber = '+256 (0)200 923 164';
const phoneHref = 'tel:+256200923164';
const emailAddress = 'info@laybrotech.com';
const emailHref = 'mailto:info@laybrotech.com';
const officeAddress = 'Naalya Kyaliwajjala Rd, Topher Building, Second Floor, Room No. 09';
const officeAddressLines = 'Naalya Kyaliwajjala Rd,\nTopher Building,\nSecond Floor,\nRoom No. 09';

const serviceOptions = ['Web Hosting', 'Website Design', 'Software Development', 'Digital Marketing', 'General Enquiry'];
const supportPoints = ['Client support', 'Sales enquiries', 'Project consultations'];

const contactMethods: Array<{ label: string; value: string; href?: string; Icon: ContactIcon }> = [
  { label: 'Call Us', value: phoneNumber, href: phoneHref, Icon: Phone },
  { label: 'Email', value: emailAddress, href: emailHref, Icon: Mail },
  { label: 'Location', value: officeAddress, Icon: MapPin },
  { label: 'Support', value: 'Client Support Available', href: phoneHref, Icon: Headphones },
];

export function ContactPage() {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>('');
  const [submitting, setSubmitting] = useState(false);

  function updateValue(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatusMessage('');
    setStatusType('');
  }

  function validateForm() {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = 'Full name is required.';
    }

    if (!values.email.trim()) {
      nextErrors.email = 'Email address is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!values.subject.trim()) {
      nextErrors.subject = 'Subject is required.';
    }

    if (!values.message.trim()) {
      nextErrors.message = 'Message is required.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitting) return;

    if (!validateForm()) {
      setStatusType('error');
      setStatusMessage('Please complete the required fields before sending.');
      return;
    }

    setSubmitting(true);
    setStatusMessage('');
    setStatusType('');

    try {
      await submitEnquiry({
        full_name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim() || null,
        company: values.company.trim() || null,
        subject: values.subject.trim(),
        message: values.message.trim(),
      });
      setValues({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
      setStatusType('success');
      setStatusMessage('Thank you. Your enquiry has been received and our team will get back to you shortly.');
    } catch {
      setStatusType('error');
      setStatusMessage("We couldn't send your enquiry right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <ContactHero />
      <ContactOptionsStrip />
      <main id="contact-form" className="bg-[#fbf7f2] px-5 py-24 sm:px-6 sm:py-28 lg:py-32">
        <div className="mx-auto grid w-full max-w-container gap-8 lg:grid-cols-[0.6fr_0.4fr] lg:gap-10">
          <section className="rounded-[1.75rem] border border-[#ead8c8] bg-white p-6 shadow-[0_24px_70px_rgb(63_45_30/0.09)] sm:p-8 lg:p-10" aria-labelledby="contact-form-heading">
            <p className="type-eyebrow">Send an Enquiry</p>
            <h2 id="contact-form-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3rem]">
              Tell Us What You Need.
            </h2>
            <p className="mt-5 max-w-[42rem] text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">
              Share a few details about your project or enquiry and the Laybrotech team can follow up with you.
            </p>

            <form className="mt-8 grid gap-5" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField id="full-name" label="Full Name" error={errors.name} required>
                  <input id="full-name" name="name" type="text" autoComplete="name" value={values.name} onChange={(event) => updateValue('name', event.target.value)} className={inputClass(Boolean(errors.name))} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'full-name-error' : undefined} />
                </FormField>
                <FormField id="email-address" label="Email Address" error={errors.email} required>
                  <input id="email-address" name="email" type="email" autoComplete="email" value={values.email} onChange={(event) => updateValue('email', event.target.value)} className={inputClass(Boolean(errors.email))} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-address-error' : undefined} />
                </FormField>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField id="phone-number" label="Phone / WhatsApp">
                  <input id="phone-number" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={(event) => updateValue('phone', event.target.value)} className={inputClass(false)} />
                </FormField>
                <FormField id="company-name" label="Company or Organization">
                  <input id="company-name" name="company" type="text" autoComplete="organization" value={values.company} onChange={(event) => updateValue('company', event.target.value)} className={inputClass(false)} />
                </FormField>
              </div>

              <FormField id="enquiry-subject" label="Subject" error={errors.subject} required>
                <input id="enquiry-subject" name="subject" type="text" value={values.subject} onChange={(event) => updateValue('subject', event.target.value)} className={inputClass(Boolean(errors.subject))} aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? 'enquiry-subject-error' : undefined} />
              </FormField>

              <FormField id="message" label="Message" error={errors.message} required>
                <textarea id="message" name="message" rows={6} value={values.message} onChange={(event) => updateValue('message', event.target.value)} className={cn(inputClass(Boolean(errors.message)), 'min-h-[10rem] resize-y py-3')} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />
              </FormField>

              {statusMessage ? (
                <p className={cn('rounded-[0.9rem] border px-4 py-3 text-sm font-semibold leading-6', statusType === 'success' ? 'border-green-200 bg-green-50 text-green-700' : 'border-[#ead8c8] bg-[#fffaf5] text-[#5f5a56]')} role="status">
                  {statusMessage}
                </p>
              ) : null}

              <button className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-button bg-[#f25a05] px-6 text-sm font-bold text-white transition-colors duration-smooth hover:bg-[#d94f04] disabled:cursor-not-allowed disabled:bg-[#f6b38c] sm:w-fit" type="submit" disabled={submitting}>
                {submitting ? 'Sending...' : 'Send Inquiry'}
                <ArrowRight className="size-4 transition-transform duration-smooth group-hover:translate-x-1" aria-hidden="true" />
              </button>
            </form>
          </section>

          <ContactDetails whatsappHref={whatsappHref} />
        </div>
      </main>
      <ContactMap />
      <FinalCTA heading="Have a Project in Mind?" primaryLabel="Start Your Project" primaryHref="/contact#contact-form" secondaryLabel="Talk to Sales" secondaryHref={phoneHref} />
      <Footer />
    </>
  );
}

function ContactHero() {
  return (
    <section className="relative isolate min-h-[90svh] overflow-hidden bg-[#171717]" aria-labelledby="contact-hero-heading">
      <img className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]" src={heroImage} alt="Business professionals discussing digital project support on a laptop." fetchPriority="high" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,8,8,0.98)_0%,rgba(8,8,8,0.90)_46%,rgba(8,8,8,0.72)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(8,8,8,0.82)_0%,rgba(8,8,8,0.28)_52%,rgba(8,8,8,0.64)_100%)]" />

      <div className="mx-auto flex min-h-[90svh] w-full max-w-container items-center px-6 py-20 sm:px-8 lg:px-16">
        <div className="max-w-[49rem]">
          <p className="type-eyebrow">Contact Laybrotech</p>
          <h1 id="contact-hero-heading" className="mt-5 text-[2.45rem] font-semibold leading-[1.08] text-[#fffaf5] sm:text-[3.35rem] lg:text-[4.15rem]">
            Let&apos;s Talk About What Your Business Needs.
          </h1>
          <p className="mt-6 max-w-[43rem] text-base leading-8 text-[#f1e8df] sm:text-lg">
            Whether you need web hosting, a professional website, custom software, or digital marketing support, tell us what you are working on and we&apos;ll help you figure out the next step.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink className="h-12 w-full text-[#fff] sm:h-14 sm:w-auto" href="#contact-form" rightIcon={<ArrowRight />} size="lg">Send an Enquiry</ButtonLink>
            <ButtonLink className="h-12 w-full border-2 border-white/90 !bg-transparent !text-white hover:border-white hover:!bg-white/10 hover:!text-white sm:h-14 sm:w-auto" href={phoneHref} variant="secondary" size="lg">Talk to Sales</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactOptionsStrip() {
  return (
    <section className="relative z-10 -mt-12 px-5 sm:px-6" aria-label="Quick contact options">
      <div className="mx-auto w-full max-w-container overflow-hidden rounded-[1.35rem] border border-[#e5e1dc] bg-white shadow-[0_18px_42px_rgb(23_23_23/0.12)]">
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {contactMethods.map(({ label, value, href, Icon }) => {
            const content = (
              <>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-control bg-[#fbfaf7] text-[#f25a05]"><Icon className="size-5" aria-hidden="true" /></span>
                <span className="min-w-0"><span className="block text-xs font-bold uppercase tracking-normal text-[#f25a05]">{label}</span><span className="mt-1 block text-sm font-bold leading-5 text-[#18181b]">{value}</span></span>
              </>
            );
            return href ? <a className="flex min-h-[7.25rem] items-center gap-3 border-b border-[#e5e1dc] px-5 py-5 transition-colors duration-smooth hover:bg-[#fbfaf7] sm:[&:nth-child(2n-1)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0" href={href} key={label}>{content}</a> : <div className="flex min-h-[7.25rem] items-center gap-3 border-b border-[#e5e1dc] px-5 py-5 sm:[&:nth-child(2n-1)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0" key={label}>{content}</div>;
          })}
        </div>
      </div>
    </section>
  );
}

function ContactDetails({ whatsappHref }: { whatsappHref?: string }) {
  return (
    <aside className="rounded-[1.75rem] border border-[#ead8c8] bg-[#fffaf5] p-6 shadow-[0_18px_45px_rgb(63_45_30/0.06)] sm:p-8 lg:p-10" aria-labelledby="direct-contact-heading">
      <p className="type-eyebrow">Direct Contact</p>
      <h2 id="direct-contact-heading" className="mt-4 text-[2rem] font-semibold leading-tight text-[#18181b] sm:text-[2.45rem]">Prefer to Talk Directly?</h2>
      <p className="mt-4 text-base leading-7 text-[#5f5a56]">Reach out through the channel that works best for you.</p>
      <div className="mt-8 grid gap-5">
        <DetailItem label="Phone" value={phoneNumber} href={phoneHref} Icon={Phone} />
        <DetailItem label="Email" value={emailAddress} href={emailHref} Icon={Mail} />
        <DetailItem label="Address" value={officeAddressLines} Icon={MapPin} />
        {whatsappHref ? <DetailItem label="WhatsApp" value="Message Laybrotech on WhatsApp" href={whatsappHref} external Icon={MessageSquare} /> : null}
      </div>
    </aside>
  );
}

function ContactMap() {
  const mapQuery = encodeURIComponent(officeAddressLines.replace(/\n/g, ' '));

  return (
    <section className="bg-white px-5 py-20 sm:px-6 sm:py-24 lg:py-28" aria-label="Laybrotech office location map">
      <div className="mx-auto w-full max-w-container overflow-hidden rounded-[1.35rem] border border-[#ead8c8] bg-white shadow-[0_18px_45px_rgb(63_45_30/0.06)]">
        <iframe
          className="h-[24rem] w-full border-0 sm:h-[30rem] lg:h-[34rem]"
          title="Laybrotech office location on Google Maps"
          src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}

function DetailItem({ label, value, href, external = false, Icon }: { label: string; value: string; href?: string; external?: boolean; Icon: ContactIcon }) {
  const className = 'group flex gap-4 rounded-[1rem] border border-[#ead8c8] bg-white p-4 transition-colors duration-smooth hover:border-[#f25a05]/35';
  const content = <><span className="flex size-11 shrink-0 items-center justify-center rounded-control bg-[#fff4ed] text-[#f25a05]"><Icon className="size-5" aria-hidden="true" /></span><span><span className="block text-xs font-bold uppercase tracking-normal text-[#f25a05]">{label}</span><span className="mt-1 block whitespace-pre-line text-sm font-bold leading-6 text-[#18181b]">{value}</span></span></>;
  if (!href) return <div className={className}>{content}</div>;
  return <a className={className} href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>{content}</a>;
}

function FormField({ label, id, error, required = false, children }: { label: string; id: string; error?: string; required?: boolean; children: ReactNode }) {
  return <div><label className="block text-sm font-bold text-[#18181b]" htmlFor={id}>{label}{required ? <span className="text-[#f25a05]"> *</span> : null}</label><div className="mt-2">{children}</div>{error ? <p className="mt-2 text-sm font-semibold text-[#b42318]" id={id + '-error'}>{error}</p> : null}</div>;
}

function inputClass(hasError: boolean) {
  return cn('h-12 w-full rounded-[0.9rem] border bg-white px-4 text-sm font-semibold text-[#18181b] outline-none transition-colors duration-200 placeholder:text-[#9f958d] focus:border-[#f25a05] focus:ring-4 focus:ring-[#f25a05]/10', hasError ? 'border-[#b42318]' : 'border-[#e5ded6]');
}




