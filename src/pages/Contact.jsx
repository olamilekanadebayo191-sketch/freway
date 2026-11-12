import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useSeo from '../hooks/useSeo';
import { SITE } from '../data/site';
import PageHero from '../components/PageHero';

const services = [
  'Truck Management',
  'Truck Hiring',
  'Car Rental',
  'Bus Rental',
  'Event Transportation',
  'Short-Distance Transportation',
  'Long-Distance Transportation',
  'Shuttle Services',
  'Nearby Loading',
  'Distance Loading',
  'Other Enquiry',
];

const inputClass =
  'w-full px-4 py-3 rounded border border-outline bg-surface text-on-surface text-body-md focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-silver';
const labelClass = 'block font-headline text-label-md text-primary uppercase tracking-wide mb-2';

export default function Contact() {
  useSeo(
    'Contact Us — Freway Direct Logistics Services',
    'Contact Freway Direct Logistics Services for truck hiring, haulage, car and bus rental, and event transportation across Nigeria.'
  );

  const [params] = useSearchParams();
  const [service, setService] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  useEffect(() => {
    const s = params.get('service');
    if (s && services.includes(s)) setService(s);
  }, [params]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (data.company_website) return; // spam trap

    if (SITE.formEndpoint) {
      setStatus('sending');
      try {
        const res = await fetch(SITE.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error('Request failed');
        setStatus('success');
        form.reset();
        setService('');
      } catch {
        setStatus('error');
      }
    } else {
      const body = [
        `Name: ${data.full_name}`,
        `Phone: ${data.phone}`,
        `Email: ${data.email}`,
        `Service: ${data.service_required}`,
        '',
        data.message,
      ].join('\n');
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
        data.subject
      )}&body=${encodeURIComponent(body)}`;
      setStatus('success');
      form.reset();
      setService('');
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Direct Commercial Engagement"
        title="Let's Discuss Your Transportation Needs."
        text="Reach our operational dispatch team directly regarding commercial truck hire, freight haulage, car and bus rentals, or event passenger transport across Nigeria."
      />

      <section className="py-20 bg-surface">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* LEFT: CONTACT CHANNELS */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-accent font-headline font-bold text-label-md uppercase tracking-wider block mb-2">
                  Verified Contact
                </span>
                <h2 className="font-headline font-bold text-headline-lg text-primary mb-4">
                  Direct Lines &amp; Dispatch Desk
                </h2>
                <p className="text-body-md text-on-surface-variant leading-relaxed">
                  Freway maintains open communication channels so customers receive prompt quotations, confirmed dispatch
                  dates, and continuous journey updates.
                </p>
              </div>

              <div className="p-6 rounded border border-outline-variant bg-neutral-bg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded bg-primary text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">call</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-base text-primary">Telephone Inquiries</h3>
                    <p className="text-body-sm text-secondary">Click-to-call direct lines</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <a
                    href={`tel:${SITE.phones[0]}`}
                    className="flex items-center justify-between p-3 rounded bg-surface border border-outline-variant hover:border-primary transition-all"
                  >
                    <span className="font-headline font-bold text-primary">{SITE.phones[0]}</span>
                    <span className="text-xs bg-accent text-white px-2 py-0.5 rounded font-headline uppercase font-semibold">
                      Primary Dispatch
                    </span>
                  </a>
                  <a
                    href={`tel:${SITE.phones[1]}`}
                    className="flex items-center justify-between p-3 rounded bg-surface border border-outline-variant hover:border-primary transition-all"
                  >
                    <span className="font-headline font-bold text-primary">{SITE.phones[1]}</span>
                    <span className="text-xs bg-primary text-white px-2 py-0.5 rounded font-headline uppercase font-semibold">
                      Secondary Line
                    </span>
                  </a>
                </div>
              </div>

              <div className="p-6 rounded border border-outline-variant bg-neutral-bg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded bg-primary text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">mail</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-base text-primary">Email Communication</h3>
                    <p className="text-body-sm text-secondary">Official commercial mailbox</p>
                  </div>
                </div>
                <a
                  href={`mailto:${SITE.email}`}
                  className="p-3 rounded bg-surface border border-outline-variant hover:border-primary transition-all block"
                >
                  <span className="font-headline font-semibold text-primary break-all">{SITE.email}</span>
                  <span className="text-xs text-secondary block mt-0.5">
                    Send commercial procurement specs and route schedules
                  </span>
                </a>
              </div>

              <div className="p-6 rounded border border-outline-variant bg-neutral-bg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded bg-emerald-600 text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">chat</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-base text-primary">WhatsApp Messaging</h3>
                    <p className="text-body-sm text-secondary">Instant mobile coordination</p>
                  </div>
                </div>
                <p className="text-body-sm text-secondary mb-4 leading-relaxed">
                  Connect directly with our logistics supervisors for fast photo updates, quotes, and driver
                  coordination.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-emerald-700 text-white font-headline text-label-md font-semibold hover:bg-emerald-800 transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-base">chat</span>
                  <span>WhatsApp Enquiry Placeholder ({SITE.phones.join(' / ')})</span>
                </div>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded border border-outline-variant bg-surface shadow-md">
                <div className="mb-8">
                  <h3 className="font-headline font-bold text-headline-md text-primary mb-2">Service Enquiry Form</h3>
                  <p className="text-body-md text-secondary">
                    Please complete the form below. We will review your transport schedule or cargo requirements and
                    contact you promptly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* spam trap: real visitors never see or fill this */}
                  <input
                    type="text"
                    name="company_website"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  <div>
                    <label htmlFor="full_name" className={labelClass}>
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      required
                      placeholder="e.g. Adebayo Okonjo"
                      className={inputClass}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone Number <span className="text-accent">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        inputMode="numeric"
                        placeholder="08025756034"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        inputMode="email"
                        placeholder="name@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service_required" className={labelClass}>
                      Service Required <span className="text-accent">*</span>
                    </label>
                    <select
                      id="service_required"
                      name="service_required"
                      required
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className={inputClass}
                    >
                      <option value="">Select a service category</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className={labelClass}>
                      Subject <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      placeholder="e.g. Haulage quote for Lagos to Abuja route"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      placeholder="Please specify cargo type, dates, pickup location, passenger count, or required vehicle model..."
                      className={inputClass}
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full sm:w-auto bg-accent text-white font-headline font-semibold text-label-lg px-8 py-3.5 rounded hover:bg-[#a81624] transition-all shadow-md inline-flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      <span>{status === 'sending' ? 'Sending...' : 'Submit Enquiry'}</span>
                      <span className="material-symbols-outlined text-sm">send</span>
                    </button>

                    {status === 'success' && (
                      <p className="text-body-sm text-emerald-700 bg-emerald-50 border border-emerald-200 p-4 rounded mt-4">
                        Thank you. Your message has been prepared for dispatch. Our team will contact you using the
                        provided phone number or email address.
                      </p>
                    )}
                    {status === 'error' && (
                      <p className="text-body-sm text-red-700 bg-red-50 border border-red-200 p-4 rounded mt-4">
                        Sorry, your message could not be sent. Please call {SITE.phones[0]} or email {SITE.email}.
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-bg border-t border-outline-variant">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
          <div className="mb-8">
            <span className="text-accent font-headline font-bold text-label-md uppercase tracking-wider block mb-1">
              Operational Coverage
            </span>
            <h2 className="font-headline font-bold text-headline-lg text-primary">Nationwide Service Territory</h2>
            <p className="text-body-md text-secondary">
              Freway operates cargo loading and vehicle rental transit across commercial interstate corridors throughout
              Nigeria.
            </p>
          </div>
          <div className="rounded border border-outline-variant overflow-hidden bg-surface shadow-sm">
            <div className="h-80 bg-slate-200 flex flex-col items-center justify-center text-center p-6 relative">
              <span className="material-symbols-outlined text-primary text-5xl mb-2">map</span>
              <h3 className="font-headline font-bold text-headline-sm text-primary">Interactive Map Placeholder</h3>
              <p className="text-body-sm text-secondary max-w-md mt-1">
                Google Maps integration placeholder. Real map coordinates and physical depot address will be embedded
                upon final corporate verification.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded bg-surface border border-outline text-xs text-primary font-headline font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Serving Intercity &amp; Regional Corridors Across Nigeria</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
