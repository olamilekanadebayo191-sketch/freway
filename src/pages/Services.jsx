import { Link } from 'react-router-dom';
import useSeo from '../hooks/useSeo';
import { SITE } from '../data/site';
import Img from '../components/Img';
import PageHero from '../components/PageHero';
import SimpleCta from '../components/SimpleCta';

const jump = [
  { href: '#trucking', label: '1. Truck Management & Hiring' },
  { href: '#rental', label: '2. Vehicle Rental (Cars & Buses)' },
  { href: '#events', label: '3. Event & Shuttle Transport' },
  { href: '#haulage', label: '4. Local & Long-Distance Haulage' },
];

export default function Services() {
  useSeo(
    'Our Services — Freway Direct Logistics Services',
    'Truck management, truck hiring, nearby and distance loading, car and bus rental, event transportation and shuttles, and local and long-distance goods haulage across Nigeria.'
  );

  return (
    <>
      <PageHero
        eyebrow="Enterprise Transportation Catalogue"
        title="Our Logistics & Transportation Services."
        text="Explore our truck management, vehicle rental, haulage and passenger transportation solutions designed for commercial shippers and private travelers."
      />

      {/* QUICK JUMP */}
      <div className="bg-neutral-bg border-b border-outline-variant py-4 px-4 sm:px-8 sticky top-20 z-30 shadow-sm hidden sm:block">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between text-body-sm font-headline font-semibold">
          <span className="text-secondary text-xs uppercase tracking-wider">Service Jump:</span>
          <div className="flex items-center gap-6">
            {jump.map((j) => (
              <a key={j.href} href={j.href} className="text-primary hover:text-accent transition-colors">
                {j.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICE 1: TRUCK MANAGEMENT & HIRING */}
      <section id="trucking" className="py-20 bg-surface border-b border-outline-variant scroll-mt-28">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary text-white text-xs font-headline font-semibold uppercase tracking-wider mb-3">
                <span>Division 01: Freight &amp; Logistics</span>
              </div>
              <h2 className="font-headline font-bold text-headline-xl-mobile md:text-headline-xl text-primary mb-4">
                Truck Management &amp; Truck Hiring.
              </h2>
              <p className="text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Managing commercial trucks requires systematic oversight, scheduled maintenance, seasoned drivers, and
                regulatory diligence. Freway provides full-lifecycle truck management services alongside prompt
                commercial truck hire for industrial, agricultural, and general freight tasks.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-4 rounded bg-neutral-bg border border-outline-variant">
                  <span className="material-symbols-outlined text-accent text-xl mt-0.5">verified_user</span>
                  <div>
                    <h4 className="font-headline font-bold text-base text-primary">Comprehensive Truck Management</h4>
                    <p className="text-body-sm text-secondary">
                      Complete supervision of articulated trucks, preventative maintenance scheduling, and driver
                      performance governance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded bg-neutral-bg border border-outline-variant">
                  <span className="material-symbols-outlined text-accent text-xl mt-0.5">local_shipping</span>
                  <div>
                    <h4 className="font-headline font-bold text-base text-primary">Flexible Truck Hiring</h4>
                    <p className="text-body-sm text-secondary">
                      Commercial truck deployment tailored for specific delivery runs, contracts, and heavy industrial
                      freight demands across Nigeria.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact?service=Truck+Hiring"
                  className="bg-primary text-white font-headline font-semibold text-label-lg px-6 py-3 rounded hover:bg-navy-dark transition-all"
                >
                  Enquire for Truck Hiring
                </Link>
                <a
                  href={`tel:${SITE.phones[0]}`}
                  className="text-primary font-headline font-semibold text-label-lg hover:text-accent flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-sm">call</span> Call {SITE.phones[0]}
                </a>
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <Img
                name="fleet-yard"
                alt="Articulated trucks and commercial fleet management"
                className="rounded shadow-md w-full h-[440px] object-cover border border-outline-variant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 2: VEHICLE RENTAL */}
      <section id="rental" className="py-20 bg-neutral-bg border-b border-outline-variant scroll-mt-28">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <Img
                name="executive-car"
                alt="Executive Sedan and Car Rental Services in Nigeria"
                className="rounded shadow-md w-full h-[440px] object-cover border border-outline-variant"
              />
            </div>
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-accent text-white text-xs font-headline font-semibold uppercase tracking-wider mb-3">
                <span>Division 02: Passenger Transportation</span>
              </div>
              <h2 className="font-headline font-bold text-headline-xl-mobile md:text-headline-xl text-primary mb-4">
                Car Rental &amp; Bus Rental.
              </h2>
              <p className="text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Freway provides dependable vehicle rental options for personal journeys, executive business travel, and
                group mobility across Nigeria. We provide well-maintained modern sedans, executive cars, and
                high-capacity passenger buses.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-surface rounded border border-outline-variant">
                  <h4 className="font-headline font-bold text-base text-primary mb-1">Car Rental</h4>
                  <p className="text-body-sm text-secondary">
                    Sedans and executive passenger vehicles prepared for daily hire, airport pickups, and executive city
                    travel.
                  </p>
                </div>
                <div className="p-4 bg-surface rounded border border-outline-variant">
                  <h4 className="font-headline font-bold text-base text-primary mb-1">Bus Rental</h4>
                  <p className="text-body-sm text-secondary">
                    Coaster and commercial passenger buses equipped with ample luggage capacity and air conditioning for
                    group transit.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact?service=Car+Rental"
                  className="bg-primary text-white font-headline font-semibold text-label-lg px-6 py-3 rounded hover:bg-navy-dark transition-all"
                >
                  Request Vehicle Rental
                </Link>
                <Link
                  to="/gallery"
                  className="border border-outline bg-surface text-primary font-headline font-semibold text-label-lg px-6 py-3 rounded hover:bg-neutral-bg transition-all"
                >
                  View Available Vehicles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 3: EVENT & SHUTTLE */}
      <section id="events" className="py-20 bg-surface border-b border-outline-variant scroll-mt-28">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary text-white text-xs font-headline font-semibold uppercase tracking-wider mb-3">
                <span>Division 02: Specialized Mobility</span>
              </div>
              <h2 className="font-headline font-bold text-headline-xl-mobile md:text-headline-xl text-primary mb-4">
                Event &amp; Shuttle Transportation.
              </h2>
              <p className="text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Moving attendees, delegates, and guests smoothly requires coordinated passenger logistics. Freway
                provides dedicated short-distance and long-distance passenger transport, event convoys, and structured
                corporate shuttle operations.
              </p>
              <div className="space-y-3 mb-8 text-body-sm text-on-surface-variant">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-accent">check_circle</span>
                  <span>
                    <strong>Event Transportation:</strong> Coordinated car and bus fleets for weddings, state functions,
                    and religious gatherings.
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-accent">check_circle</span>
                  <span>
                    <strong>Short-Distance Transportation:</strong> City-wide transfers, hotel-to-venue movements, and
                    scheduled staff shuttles.
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-accent">check_circle</span>
                  <span>
                    <strong>Long-Distance Passenger Travel:</strong> Intercity passenger group conveyance with
                    professional, safety-tested drivers.
                  </span>
                </div>
              </div>
              <Link
                to="/contact?service=Event+Transportation"
                className="bg-accent text-white font-headline font-semibold text-label-lg px-6 py-3 rounded hover:bg-[#a81624] transition-all inline-block"
              >
                Book Event Transportation
              </Link>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <Img
                name="event-shuttle"
                alt="Coordinated event shuttles and passenger buses"
                className="rounded shadow-md w-full h-[440px] object-cover border border-outline-variant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 4: HAULAGE */}
      <section id="haulage" className="py-20 bg-neutral-bg scroll-mt-28">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <Img
                name="haulage-truck"
                alt="Long distance haulage truck on Nigerian highway"
                className="rounded shadow-md w-full h-[440px] object-cover border border-outline-variant"
              />
            </div>
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary text-white text-xs font-headline font-semibold uppercase tracking-wider mb-3">
                <span>Division 01: Freight Haulage</span>
              </div>
              <h2 className="font-headline font-bold text-headline-xl-mobile md:text-headline-xl text-primary mb-4">
                Local &amp; Long-Distance Goods Haulage.
              </h2>
              <p className="text-body-md text-on-surface-variant mb-6 leading-relaxed">
                We move raw materials, industrial items, packaged merchandise, and agricultural products across Nigeria.
                Our operations span nearby loading, distance loading, and robust intercity freight conveyance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-surface rounded border border-outline-variant">
                  <h4 className="font-headline font-bold text-base text-primary mb-1">Nearby Loading</h4>
                  <p className="text-body-sm text-secondary">
                    Local terminal and warehouse cargo pickup for quick short-radius distribution within metropolitan
                    regions.
                  </p>
                </div>
                <div className="p-4 bg-surface rounded border border-outline-variant">
                  <h4 className="font-headline font-bold text-base text-primary mb-1">Distance Loading</h4>
                  <p className="text-body-sm text-secondary">
                    Coordinated loading operations in distant supply hubs, ports, and industrial zones for transit
                    across states.
                  </p>
                </div>
                <div className="p-4 bg-surface rounded border border-outline-variant sm:col-span-2">
                  <h4 className="font-headline font-bold text-base text-primary mb-1">
                    Local &amp; Long-Distance Goods Transportation
                  </h4>
                  <p className="text-body-sm text-secondary">
                    Continuous freight haulage connecting manufacturing centers, commercial ports, and distribution
                    markets across Nigeria.
                  </p>
                </div>
              </div>
              <Link
                to="/contact?service=Distance+Loading"
                className="bg-primary text-white font-headline font-semibold text-label-lg px-6 py-3 rounded hover:bg-navy-dark transition-all inline-block"
              >
                Request Haulage Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SimpleCta
        title="Need a Custom Logistics or Vehicle Arrangement?"
        text="Discuss your haulage timetable, loading location, or passenger rental schedule directly with our dispatch supervisors."
        buttonLabel="Enquire With Freway"
        phone={SITE.phones[1]}
        phoneLabel={`Direct Line: ${SITE.phones[1]}`}
      />
    </>
  );
}
