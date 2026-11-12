import { Link } from 'react-router-dom';
import Logo from './Logo';
import { SITE } from '../data/site';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Our Services' },
  { to: '/gallery', label: 'Vehicle Gallery' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
];

const divisions = [
  { to: '/services#trucking', label: 'Truck Management' },
  { to: '/services#trucking', label: 'Truck Hiring' },
  { to: '/services#haulage', label: 'Nearby & Distance Loading' },
  { to: '/services#rental', label: 'Car & Bus Rental' },
  { to: '/services#events', label: 'Event & Shuttle Transport' },
  { to: '/services#haulage', label: 'Goods Transportation' },
];

export default function Footer({ onCookieSettings }) {
  return (
    <footer className="bg-navy-dark text-silver border-t border-secondary/20 pt-16 pb-12">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-secondary/20">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded bg-white/5 border border-silver/30 flex items-center justify-center p-1">
                <Logo small />
              </div>
              <div>
                <span className="font-headline font-bold text-xl text-white tracking-wider block">FREWAY</span>
                <span className="text-[10px] font-headline tracking-widest text-silver uppercase font-semibold">
                  Direct Logistics Services
                </span>
              </div>
            </div>
            <p className="text-body-sm text-slate-400 mb-6 leading-relaxed">
              Professional Nigerian logistics, commercial truck management, freight haulage, and passenger vehicle rental
              solutions serving enterprises and individuals nationwide.
            </p>
            <div className="text-xs text-slate-400 space-y-1">
              <div>
                Company Registration: <span className="text-white font-mono">{SITE.rc}</span>
              </div>
              <div>Headquarters: Nigeria</div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-headline font-bold text-white mb-4 tracking-wide uppercase text-xs">Quick Links</h4>
            <ul className="space-y-2.5 text-body-sm">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-headline font-bold text-white mb-4 tracking-wide uppercase text-xs">Service Divisions</h4>
            <ul className="space-y-2.5 text-body-sm">
              {divisions.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-headline font-bold text-white mb-4 tracking-wide uppercase text-xs">Direct Contact</h4>
            <div className="space-y-3 text-body-sm">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-accent text-lg mt-0.5">call</span>
                <div>
                  {SITE.phones.map((p) => (
                    <a key={p} href={`tel:${p}`} className="text-white hover:text-accent font-semibold block">{p}</a>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-accent text-lg mt-0.5">mail</span>
                <a href={`mailto:${SITE.email}`} className="text-slate-300 hover:text-white break-all">{SITE.email}</a>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white/5 border border-silver/30 text-silver-light text-xs hover:bg-white/10 transition-colors"
                >
                  <span className="material-symbols-outlined text-sm text-accent">chat</span>
                  <span>WhatsApp Enquiry Placeholder</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>© 2026 Freway Direct Logistics Services. All rights reserved. Registered in Nigeria ({SITE.rc}).</div>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-silver transition-colors">Privacy Policy</Link>
            <button type="button" onClick={onCookieSettings} className="hover:text-silver transition-colors underline">
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
