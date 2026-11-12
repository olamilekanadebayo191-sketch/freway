import { Link } from 'react-router-dom';
import { SITE } from '../data/site';

export default function CtaBand({ eyebrow, title, text, buttonLabel, buttonTo = '/contact' }) {
  return (
    <section className="py-20 bg-primary text-on-primary border-t border-secondary/20 relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 relative z-10 text-center">
        <span className="text-accent font-headline font-bold text-label-md uppercase tracking-wider block mb-3">
          {eyebrow}
        </span>
        <h2 className="font-headline font-bold text-headline-xl-mobile md:text-headline-xl text-white mb-6 max-w-2xl mx-auto">
          {title}
        </h2>
        <p className="text-body-lg text-silver-light max-w-2xl mx-auto mb-8 leading-relaxed">{text}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to={buttonTo}
            className="bg-accent text-on-accent font-headline font-semibold text-label-lg px-8 py-3.5 rounded transition-all duration-state-change hover:bg-[#a81624] shadow-md inline-flex items-center gap-2"
          >
            <span>{buttonLabel}</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
          <a
            href={`tel:${SITE.phones[0]}`}
            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-headline font-semibold text-label-lg px-8 py-3.5 rounded transition-all duration-state-change inline-flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm text-accent">call</span>
            <span>Call {SITE.phones[0]}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
