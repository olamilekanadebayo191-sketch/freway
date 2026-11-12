import { Link } from 'react-router-dom';
import useSeo from '../hooks/useSeo';
import { SITE } from '../data/site';
import Img from '../components/Img';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import PillarCard from '../components/PillarCard';
import CtaBand from '../components/CtaBand';

const services = [
  {
    division: 'Division 01',
    title: 'Truck Management & Hiring',
    text: 'Supervision of commercial freight trucks, ongoing maintenance coordination, and prompt truck hire for commercial operations.',
    to: '/services#trucking',
    image: 'fleet-yard',
    alt: 'Truck Management and Fleet Oversight',
  },
  {
    division: 'Division 02',
    title: 'Vehicle Rental',
    text: 'Modern cars, executive sedans, and passenger buses available for corporate travel, family journeys, and private hire.',
    to: '/services#rental',
    image: 'executive-car',
    alt: 'Executive Car and Bus Rental Services',
  },
  {
    division: 'Division 02',
    title: 'Event & Shuttle Transportation',
    text: 'Coordinated group passenger transportation for weddings, corporate conferences, staff shuttles, and special occasions.',
    to: '/services#events',
    image: 'event-shuttle',
    alt: 'Event Shuttles and Group Travel',
  },
  {
    division: 'Division 01',
    title: 'Local & Long-Distance Haulage',
    text: 'Nearby loading, distance loading, and secure transit of commercial goods between cities and regional distribution hubs.',
    to: '/services#haulage',
    image: 'haulage-truck',
    alt: 'Local and Long Distance Haulage',
  },
];

const why = [
  {
    icon: 'hub',
    title: 'Multiple Solutions',
    text: 'A single corporate partner delivering both heavy-cargo logistics support and versatile passenger car or bus rentals.',
  },
  {
    icon: 'local_shipping',
    title: 'Dedicated Truck Support',
    text: 'Professional management oversight and truck hiring designed specifically for demanding Nigerian supply routes.',
  },
  {
    icon: 'event_available',
    title: 'Event & Passenger Care',
    text: 'Comfortable, timely car and bus movement for executive seminars, wedding ceremonies, and scheduled corporate group travel.',
  },
  {
    icon: 'support_agent',
    title: 'Direct Coordination',
    text: 'Accessible direct communication lines ensure immediate updates on vehicle position, loading status, and scheduling.',
  },
];

const galleryPreview = [
  {
    image: 'haulage-truck',
    alt: 'Articulated Cargo Haulage',
    label: 'Trucking Division',
    title: 'Long-Distance Haulage Transit',
    extra: '',
  },
  {
    image: 'passenger-bus',
    alt: 'Passenger Coaster Bus',
    label: 'Passenger Division',
    title: 'Executive Bus & Group Shuttles',
    extra: '',
  },
  {
    image: 'cargo-loading',
    alt: 'Cargo Loading Operations',
    label: 'Logistics Operations',
    title: 'Warehouse Nearby & Distance Loading',
    extra: 'sm:col-span-2 lg:col-span-1',
  },
];

export default function Home() {
  useSeo(
    'Freway Direct Logistics Services — Official Website',
    'Freway Direct Logistics Services: truck management, truck hiring, nearby and distance loading, goods haulage, car and bus rental, and event transportation across Nigeria.'
  );

  return (
    <>
      {/* HERO */}
      <section className="relative bg-primary text-on-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Img
            name="haulage-truck"
            alt="Commercial Haulage Truck on Nigerian Expressway"
            loading="eager"
            className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80"></div>
        </div>
        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-8 py-20 lg:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white/10 border border-white/15 text-silver-light font-headline text-label-md mb-6">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              <span>Commercial Haulage &amp; Passenger Vehicle Rental</span>
            </div>
            <h1 className="font-headline font-bold text-display-lg-mobile md:text-display-lg text-white mb-6 tracking-tight leading-tight">
              Reliable Logistics &amp; Transportation Solutions.
            </h1>
            <p className="font-body text-body-lg text-silver-light mb-8 max-w-xl leading-relaxed">
              From truck management and haulage to car and bus rentals, event transportation and passenger transport,
              Freway Direct Logistics Services provides solutions for your business and everyday transportation needs.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/services"
                className="bg-accent text-on-accent font-headline font-semibold text-label-lg px-7 py-3.5 rounded transition-all duration-state-change hover:bg-[#a81624] shadow-md inline-flex items-center gap-2"
              >
                <span>Explore Our Services</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-headline font-semibold text-label-lg px-7 py-3.5 rounded transition-all duration-state-change"
              >
                Contact Us
              </Link>
            </div>
            <div className="mt-12 pt-8 border-t border-secondary/30 grid grid-cols-2 sm:grid-cols-3 gap-6 text-silver">
              <div>
                <div className="font-headline font-bold text-white text-xl">2 Key Divisions</div>
                <div className="text-body-sm text-silver mt-0.5">Trucking &amp; Passenger Hire</div>
              </div>
              <div>
                <div className="font-headline font-bold text-white text-xl">Nationwide</div>
                <div className="text-body-sm text-silver mt-0.5">Intercity &amp; Local Routes</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="font-headline font-bold text-white text-xl">Direct Dispatch</div>
                <div className="text-body-sm text-silver mt-0.5">{SITE.phones.join(' / ')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section className="py-20 bg-surface">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="relative">
                <Img
                  name="cargo-loading"
                  alt="Freway Cargo Logistics Operations in Nigeria"
                  className="rounded shadow-md w-full h-[420px] object-cover border border-outline-variant"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded shadow-xl hidden sm:block border-l-4 border-accent max-w-xs">
                  <p className="font-headline font-bold text-base">Direct Logistics Accountability</p>
                  <p className="text-body-sm text-silver-light mt-1">
                    Truck supervision, prompt goods dispatch, and reliable vehicle arrangements.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <span className="text-accent font-headline font-bold text-label-md uppercase tracking-wider block mb-2">
                Corporate Profile
              </span>
              <h2 className="font-headline font-bold text-headline-xl-mobile md:text-headline-xl text-primary mb-6">
                Moving People, Goods and Businesses Forward.
              </h2>
              <p className="text-body-md text-on-surface-variant mb-4 leading-relaxed">
                Freway Direct Logistics Services is an established Nigerian enterprise delivering dependable freight
                haulage, dedicated truck management, and versatile passenger vehicle rental solutions.
              </p>
              <p className="text-body-md text-on-surface-variant mb-8 leading-relaxed">
                Whether supporting industrial supply chains with heavy-duty articulated trucks and goods loading, or
                facilitating corporate seminars, wedding parties, and interstate travel with modern cars and buses, we
                keep your cargo secure and your passengers comfortable.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded border border-outline-variant bg-neutral-bg">
                  <div className="flex items-center gap-2 text-primary font-headline font-semibold text-headline-sm mb-1">
                    <span className="material-symbols-outlined text-accent">local_shipping</span>
                    <span>Trucking Division</span>
                  </div>
                  <p className="text-body-sm text-secondary">
                    Truck management, hiring, nearby and distance cargo loading.
                  </p>
                </div>
                <div className="p-4 rounded border border-outline-variant bg-neutral-bg">
                  <div className="flex items-center gap-2 text-primary font-headline font-semibold text-headline-sm mb-1">
                    <span className="material-symbols-outlined text-accent">directions_car</span>
                    <span>Vehicle Rental</span>
                  </div>
                  <p className="text-body-sm text-secondary">
                    Sedans, SUVs, event buses, and interstate passenger transport.
                  </p>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-headline font-bold hover:text-accent transition-colors"
              >
                <span>Read More About Our Company</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="py-20 bg-neutral-bg border-y border-outline-variant">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
          <SectionHeading eyebrow="Our Capabilities" title="What We Do.">
            Structured transportation and haulage categories built to meet operational corporate and personal logistics
            standards across Nigeria.
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* TWO SIDES OF FREWAY */}
      <section className="py-20 bg-surface">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
          <SectionHeading eyebrow="Dual Business Pillars" title="The Two Sides of Freway.">
            Freway operates two distinct yet complementary business divisions, ensuring equal operational dedication to
            commercial freight and passenger transit.
          </SectionHeading>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PillarCard
              icon="local_shipping"
              title="Trucking & Logistics"
              subtitle="Commercial Freight & Haulage Division"
              tag="HEAVY CARGO"
              image="cargo-loading"
              alt="Commercial trucking operations in Nigeria"
              text="Dedicated solutions for industrial shippers, manufacturers, and distributors requiring heavy vehicles, strategic supervision, and guaranteed cargo protection across Nigerian roads."
              items={[
                'Truck Management',
                'Truck Hiring',
                'Nearby Loading',
                'Distance Loading',
                'Local & Long-Distance Goods Transportation',
              ]}
              to="/services#trucking"
              cta="Explore Trucking Services"
            />
            <PillarCard
              icon="directions_car"
              title="Vehicle Rental & Transportation"
              subtitle="Passenger Fleet & Event Mobility Division"
              tag="PASSENGERS"
              image="passenger-bus"
              alt="Commercial passenger bus and vehicle rental in Nigeria"
              text="Tailored passenger transit for individuals, corporate delegations, and large event gatherings, offering quality maintained cars and buses driven by experienced road professionals."
              items={[
                'Car Rental',
                'Bus Rental',
                'Event Transportation',
                'Short-Distance Transportation',
                'Long-Distance Transportation & Shuttles',
              ]}
              to="/services#rental"
              cta="Explore Transportation Services"
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE FREWAY */}
      <section className="py-20 bg-neutral-bg border-t border-outline-variant">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-accent font-headline font-bold text-label-md uppercase tracking-wider block mb-2">
                Corporate Assurance
              </span>
              <h2 className="font-headline font-bold text-headline-xl-mobile md:text-headline-xl text-primary mb-6">
                Why Choose Freway.
              </h2>
              <p className="text-body-md text-on-surface-variant mb-6 leading-relaxed">
                We focus on practical operational reliability rather than overstated marketing claims. Our clients
                depend on clear communication, prompt vehicle deployment, and transparent service delivery.
              </p>
              <div className="p-6 rounded bg-primary text-white border-l-4 border-accent">
                <p className="font-headline font-bold text-base mb-1">Direct Operational Lines</p>
                <p className="text-body-sm text-silver-light">
                  Speak directly with dispatch personnel regarding haulage schedules and passenger vehicle availability.
                </p>
                <div className="mt-4 flex items-center gap-4 text-sm font-semibold">
                  {SITE.phones.map((p) => (
                    <a key={p} href={`tel:${p}`} className="text-accent hover:underline flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">call</span> {p}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {why.map((w) => (
                <div key={w.title} className="p-6 bg-surface rounded border border-outline-variant">
                  <div className="w-10 h-10 rounded bg-surface-variant flex items-center justify-center text-primary mb-4">
                    <span className="material-symbols-outlined">{w.icon}</span>
                  </div>
                  <h3 className="font-headline font-bold text-headline-sm text-primary mb-2">{w.title}</h3>
                  <p className="text-body-sm text-secondary leading-relaxed">{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-20 bg-surface">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <span className="text-accent font-headline font-bold text-label-md uppercase tracking-wider block mb-2">
                Visual Showcase
              </span>
              <h2 className="font-headline font-bold text-headline-xl-mobile md:text-headline-xl text-primary">
                Fleet &amp; Operational Gallery.
              </h2>
              <p className="text-body-md text-secondary mt-1">
                A look at commercial vehicles and transportation solutions across Nigeria.
              </p>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-1.5 font-headline font-semibold text-label-lg text-primary hover:text-accent border border-outline px-4 py-2 rounded transition-colors"
            >
              <span>View Complete Gallery</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryPreview.map((g) => (
              <div
                key={g.title}
                className={`rounded border border-outline-variant overflow-hidden group shadow-sm ${g.extra}`}
              >
                <div className="h-64 overflow-hidden bg-surface-variant">
                  <Img
                    name={g.image}
                    alt={g.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-surface">
                  <div className="text-xs font-semibold text-accent font-headline uppercase">{g.label}</div>
                  <div className="font-headline font-bold text-primary text-base">{g.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Direct Engagement"
        title="Need a Reliable Logistics or Transportation Partner?"
        text="Whether you need truck hiring, vehicle rental, event transportation or haulage services, get in touch with Freway to discuss your requirements."
        buttonLabel="Speak With Our Team"
      />
    </>
  );
}
