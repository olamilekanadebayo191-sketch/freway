import { Link } from 'react-router-dom';
import useSeo from '../hooks/useSeo';
import { SITE } from '../data/site';
import Img from '../components/Img';
import PageHero from '../components/PageHero';
import SimpleCta from '../components/SimpleCta';

const values = [
  {
    title: '1. Reliability',
    text: 'Punctual vehicle departures, dependable transit timelines, and strict adherence to agreed schedules.',
  },
  {
    title: '2. Cargo Security',
    text: 'Safeguarding every consignment from nearby warehouse loading to long-distance intercity destination delivery.',
  },
  {
    title: '3. Passenger Comfort',
    text: 'Clean, air-conditioned, well-maintained rental cars and buses driven by seasoned, courteous drivers.',
  },
  {
    title: '4. Direct Transparency',
    text: 'Clear quotes without hidden surcharges and accessible direct telephone communication at every phase.',
  },
];

export default function About() {
  useSeo(
    'About Us — Freway Direct Logistics Services',
    'Learn about Freway Direct Logistics Services, a Nigerian logistics and mobility provider combining truck management and haulage with car, bus and event vehicle rental.'
  );

  return (
    <>
      <PageHero
        eyebrow="Corporate Identity & Purpose"
        title="About Freway Direct Logistics Services."
        text="A dependable corporate logistics and mobility provider uniting dedicated truck management and haulage with versatile passenger vehicle hire across Nigeria."
      />

      {/* WHO WE ARE */}
      <section className="py-20 bg-surface">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-accent font-headline font-bold text-label-md uppercase tracking-wider block mb-2">
                Who We Are
              </span>
              <h2 className="font-headline font-bold text-headline-xl-mobile md:text-headline-xl text-primary mb-6">
                A Dual-Discipline Transportation Company.
              </h2>
              <p className="text-body-md text-on-surface-variant mb-4 leading-relaxed">
                Freway Direct Logistics Services operates with a distinct business architecture designed to serve both
                commercial freight and individual/group transportation needs.
              </p>
              <p className="text-body-md text-on-surface-variant mb-6 leading-relaxed">
                In our Trucking &amp; Logistics division, we assist businesses with rigorous truck management, reliable
                truck hiring, nearby loading, and distance freight haulage. Concurrently, our Vehicle Rental &amp;
                Passenger Transportation division ensures individuals, corporate executives, and event organizers have
                access to quality cars, buses, and scheduled shuttles.
              </p>
              <div className="p-4 bg-neutral-bg rounded border border-outline-variant text-body-sm text-secondary">
                <strong>Official Direct Contact:</strong> Reach our operations desk via{' '}
                <a href={`mailto:${SITE.email}`} className="text-primary underline">
                  {SITE.email}
                </a>{' '}
                or telephone lines{' '}
                <a href={`tel:${SITE.phones[0]}`} className="text-primary underline">
                  {SITE.phones[0]}
                </a>{' '}
                /{' '}
                <a href={`tel:${SITE.phones[1]}`} className="text-primary underline">
                  {SITE.phones[1]}
                </a>
                .
              </div>
            </div>
            <div className="lg:col-span-6">
              <Img
                name="fleet-yard"
                alt="Freway Commercial Fleet Operations in Nigeria"
                className="rounded shadow-md w-full h-[400px] object-cover border border-outline-variant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY BACKGROUND */}
      <section className="py-20 bg-neutral-bg border-y border-outline-variant">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-accent font-headline font-bold text-label-md uppercase tracking-wider block mb-2">
              Our Roots
            </span>
            <h2 className="font-headline font-bold text-headline-xl-mobile md:text-headline-xl text-primary mb-6">
              Our Company Background.
            </h2>
            <div className="space-y-4 text-body-md text-on-surface-variant leading-relaxed">
              <p>
                Freway Direct Logistics Services was established to bridge critical operational gaps in Nigerian freight
                movement and passenger mobility. Recognizing that dependable transport is the backbone of commerce and
                social cohesion, Freway formed dedicated structures to manage commercial heavy vehicles while supporting
                executive and group transport.
              </p>
              <p>
                Registered officially under Nigerian corporate authorities ({SITE.rc}), Freway operates on principles of
                direct accountability, driver discipline, vehicle readiness, and clear client coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-surface">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded border border-outline-variant bg-surface shadow-sm">
              <div className="w-12 h-12 rounded bg-surface-variant flex items-center justify-center text-accent mb-6">
                <span className="material-symbols-outlined text-2xl">track_changes</span>
              </div>
              <h3 className="font-headline font-bold text-headline-lg text-primary mb-4">Our Mission</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                To provide punctual, secure, and professional logistics and vehicle rental solutions that move goods,
                people, and businesses safely across Nigerian roads through disciplined fleet management and dependable
                service.
              </p>
            </div>
            <div className="p-8 rounded border border-outline-variant bg-surface shadow-sm">
              <div className="w-12 h-12 rounded bg-surface-variant flex items-center justify-center text-accent mb-6">
                <span className="material-symbols-outlined text-2xl">visibility</span>
              </div>
              <h3 className="font-headline font-bold text-headline-lg text-primary mb-4">Our Vision</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                To be recognized across Nigeria as a benchmark logistics and transportation enterprise trusted by
                industrial clients, business leaders, and travelers for operational consistency and direct customer
                care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-neutral-bg border-y border-outline-variant">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-headline font-bold text-label-md uppercase tracking-wider block mb-2">
              Foundational Principles
            </span>
            <h2 className="font-headline font-bold text-headline-xl-mobile md:text-headline-xl text-primary mb-4">
              Our Core Values.
            </h2>
            <p className="text-body-md text-secondary">
              The core standards governing every truck journey, cargo loading, and passenger trip.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 bg-surface rounded border border-outline-variant">
                <h4 className="font-headline font-bold text-headline-sm text-primary mb-2">{v.title}</h4>
                <p className="text-body-sm text-secondary leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-20 bg-surface">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <Img
                name="passenger-bus"
                alt="Freway Passenger Transport and Vehicle Maintenance"
                className="rounded shadow-md w-full h-[400px] object-cover border border-outline-variant"
              />
            </div>
            <div className="lg:col-span-6">
              <span className="text-accent font-headline font-bold text-label-md uppercase tracking-wider block mb-2">
                Operational Execution
              </span>
              <h2 className="font-headline font-bold text-headline-xl-mobile md:text-headline-xl text-primary mb-6">
                Our Professional Approach.
              </h2>
              <div className="space-y-4 text-body-md text-on-surface-variant leading-relaxed">
                <p>
                  Our approach is rooted in practical understanding of Nigeria's transportation geography. Rather than
                  relying on generic software promises, we pair rigorous vehicle inspections with direct route
                  knowledge.
                </p>
                <p>
                  Every truck deployed undergoes pre-trip mechanical verification. Similarly, our passenger vehicles are
                  prepared with thorough interior cleaning and driver briefing before any event or long-distance journey
                  begins.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white font-headline font-semibold text-label-lg px-6 py-3 rounded hover:bg-navy-dark transition-all"
                >
                  <span>Discuss Your Logistics Needs</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SimpleCta
        title="Ready to Work With Freway?"
        text="Contact our team directly to discuss truck management, haulage rates, car rental options, or event passenger transport."
        buttonLabel="Contact Our Team"
        phone={SITE.phones[0]}
        phoneLabel={`Call Dispatch: ${SITE.phones[0]}`}
      />
    </>
  );
}
