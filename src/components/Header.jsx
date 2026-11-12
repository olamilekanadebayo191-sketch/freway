import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { NAV, SITE } from '../data/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="bg-primary text-on-primary sticky top-0 z-40 border-b border-secondary/20 shadow-md">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3.5 group">
          <div className="w-12 h-12 rounded bg-white/5 border border-silver/30 flex items-center justify-center p-1.5 shadow-inner">
            <Logo />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-headline font-extrabold text-2xl tracking-wider text-white">FREWAY</span>
              <span className="bg-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded tracking-widest">NIGERIA</span>
            </div>
            <span className="text-[11px] font-headline tracking-widest text-silver-light uppercase font-semibold">
              Direct Logistics Services
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 font-headline font-semibold text-label-lg" aria-label="Main Navigation">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                isActive ? 'text-white border-b-2 border-accent pb-1' : 'text-silver hover:text-white transition-colors'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-4">
          <Link
            to="/contact"
            className="bg-accent text-on-accent font-headline font-semibold text-label-lg px-5 py-2.5 rounded transition-all duration-state-change hover:bg-[#a81624] shadow-sm"
          >
            Get In Touch
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden text-silver hover:text-white p-2"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-navy-dark border-t border-secondary/20 px-6 py-5">
          <div className="flex flex-col gap-4 font-headline text-label-lg">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => (isActive ? 'text-white font-bold' : 'text-silver hover:text-white')}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-3 border-t border-secondary/20 flex flex-col gap-2">
              <Link to="/contact" className="w-full text-center bg-accent text-white py-2.5 rounded font-semibold">
                Get In Touch
              </Link>
              <a href={`tel:${SITE.phones[0]}`} className="w-full text-center border border-silver/40 text-silver py-2 rounded text-sm">
                Call {SITE.phones[0]}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
