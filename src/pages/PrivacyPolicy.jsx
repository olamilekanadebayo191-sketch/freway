import useSeo from '../hooks/useSeo';
import { SITE } from '../data/site';

const toc = [
  ['intro', '1. Introduction'],
  ['collection', '2. Information We Collect'],
  ['usage', '3. How We Use Information'],
  ['forms', '4. Contact and Enquiry Forms'],
  ['cookies', '5. Cookies and Tracking'],
  ['sharing', '6. Data Sharing'],
  ['security', '7. Data Security'],
  ['rights', '8. User Privacy Rights'],
  ['contact', '9. Contact Information'],
];

const h2 = 'font-headline font-bold text-headline-md text-primary mb-3';

export default function PrivacyPolicy() {
  useSeo(
    'Privacy Policy — Freway Direct Logistics Services',
    'How Freway Direct Logistics Services collects, uses and protects personal information.'
  );

  return (
    <>
      <section className="relative bg-primary text-on-primary py-14 overflow-hidden border-b border-secondary/20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
          <div className="max-w-2xl">
            <span className="text-accent font-headline font-bold text-label-md uppercase tracking-wider block mb-2">
              Legal Compliance
            </span>
            <h1 className="font-headline font-bold text-headline-xl-mobile md:text-headline-xl text-white mb-2">
              Privacy Policy
            </h1>
            <p className="text-body-sm text-silver-light">
              Last Updated: November 11, 2026 | Document Reference: FW-POL-2026-V1
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="sticky top-28 p-6 bg-neutral-bg rounded border border-outline-variant">
                <h3 className="font-headline font-bold text-primary uppercase tracking-wide text-xs mb-4">
                  Table of Contents
                </h3>
                <nav className="space-y-2 text-body-sm text-secondary">
                  {toc.map(([id, label]) => (
                    <a key={id} href={`#${id}`} className="block hover:text-primary hover:underline">
                      {label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            <div className="lg:col-span-8 max-w-prose space-y-10 text-on-surface-variant text-body-md leading-relaxed">
              <section id="intro" className="scroll-mt-28">
                <h2 className={h2}>1. Introduction</h2>
                <p>
                  Freway Direct Logistics Services (&quot;Freway&quot;, &quot;we&quot;, &quot;us&quot;, or
                  &quot;our&quot;) respects your privacy and is committed to protecting personal data. This privacy
                  policy informs you how we collect, use, safeguard, and disclose information when you visit our website
                  or communicate with our logistics dispatch operations.
                </p>
                <p className="mt-3">
                  As a corporate entity registered under Nigerian law ({SITE.rc}), Freway conducts commercial activities
                  across truck management, freight haulage, vehicle rental, and passenger transportation in compliance
                  with the Nigeria Data Protection Act (NDPA) and applicable privacy regulations.
                </p>
              </section>

              <section id="collection" className="scroll-mt-28">
                <h2 className={h2}>2. Information We Collect</h2>
                <p>
                  We may collect and process information necessary to provide logistics estimates, coordinate cargo
                  loading, and fulfill vehicle rental agreements:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1.5 text-body-sm">
                  <li>
                    <strong>Identity Information:</strong> Full name and commercial title.
                  </li>
                  <li>
                    <strong>Contact Information:</strong> Telephone number, mobile dispatch contacts, and email address.
                  </li>
                  <li>
                    <strong>Operational Data:</strong> Service category requested (e.g. truck hiring, distance loading,
                    bus rental, event transportation), cargo specifications, pickup destinations, and delivery
                    timelines.
                  </li>
                  <li>
                    <strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, and
                    operating system collected via technical web server logs.
                  </li>
                </ul>
              </section>

              <section id="usage" className="scroll-mt-28">
                <h2 className={h2}>3. How We Use Information</h2>
                <p>Freway uses the collected information strictly for authentic commercial purposes:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1.5 text-body-sm">
                  <li>Providing quotations and scheduling truck or passenger vehicle availability.</li>
                  <li>Communicating dispatch status, loading progress, and journey coordination.</li>
                  <li>Fulfilling corporate haulage contracts and rental agreements.</li>
                  <li>
                    Maintaining regulatory and accounting records as mandated under Nigerian corporate regulations.
                  </li>
                </ul>
              </section>

              <section id="forms" className="scroll-mt-28">
                <h2 className={h2}>4. Contact and Enquiry Forms</h2>
                <p>
                  When you submit an enquiry through our contact form, your name, telephone number, email, and requested
                  service are forwarded directly to our operational dispatch desk to evaluate route schedules. We do not
                  sell or monetize enquiry records.
                </p>
              </section>

              <section id="cookies" className="scroll-mt-28">
                <h2 className={h2}>5. Cookies and Tracking Technologies</h2>
                <p>
                  Our website utilizes standard cookies to ensure core website functions, remember your consent
                  preferences, and analyze anonymized site traffic. You can adjust your cookie settings at any time using
                  the global cookie banner or settings link in the website footer.
                </p>
              </section>

              <section id="sharing" className="scroll-mt-28">
                <h2 className={h2}>6. Data Sharing</h2>
                <p>
                  We do not sell, trade, or rent personal data. Information may only be disclosed to vetted logistics
                  contractors (such as assigned fleet drivers or loading personnel) strictly on a need-to-know basis to
                  fulfill transportation, or to law enforcement authorities where required by Nigerian law.
                </p>
              </section>

              <section id="security" className="scroll-mt-28">
                <h2 className={h2}>7. Data Security</h2>
                <p>
                  We implement appropriate technical and procedural security measures to protect your information against
                  unauthorized access, loss, or alteration. All electronic transmission channels are protected using
                  standard TLS/SSL encryption.
                </p>
              </section>

              <section id="rights" className="scroll-mt-28">
                <h2 className={h2}>8. User Privacy Rights</h2>
                <p>
                  Under the Nigeria Data Protection Act, you have rights to request access to the personal data we hold
                  about you, request corrections of inaccurate details, or request deletion where processing is no longer
                  required for active haulage or rental contracts.
                </p>
              </section>

              <section id="contact" className="scroll-mt-28">
                <h2 className={h2}>9. Contact Information</h2>
                <p>For questions regarding this Privacy Policy or data processing practices, please contact our compliance desk:</p>
                <div className="mt-4 p-5 bg-neutral-bg rounded border border-outline-variant space-y-1 text-body-sm">
                  <div>
                    <strong>Freway Direct Logistics Services</strong>
                  </div>
                  <div>Company Registration: {SITE.rc}</div>
                  <div>
                    Email:{' '}
                    <a href={`mailto:${SITE.email}`} className="text-primary font-semibold underline">
                      {SITE.email}
                    </a>
                  </div>
                  <div>
                    Telephone:{' '}
                    <a href={`tel:${SITE.phones[0]}`} className="text-primary font-semibold">
                      {SITE.phones[0]}
                    </a>{' '}
                    |{' '}
                    <a href={`tel:${SITE.phones[1]}`} className="text-primary font-semibold">
                      {SITE.phones[1]}
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
