import { Link } from 'react-router-dom';

export default function SimpleCta({ title, text, buttonLabel, buttonTo = '/contact', phone, phoneLabel }) {
  return (
    <section className="py-16 bg-primary text-on-primary text-center border-t border-secondary/20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        <h2 className="font-headline font-bold text-headline-xl-mobile md:text-headline-xl text-white mb-4">{title}</h2>
        <p className="text-body-md text-silver-light max-w-xl mx-auto mb-8">{text}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to={buttonTo}
            className="bg-accent text-white font-headline font-semibold text-label-lg px-6 py-3 rounded hover:bg-[#a81624]"
          >
            {buttonLabel}
          </Link>
          <a
            href={`tel:${phone}`}
            className="border border-silver text-white font-headline font-semibold text-label-lg px-6 py-3 rounded hover:bg-white/10"
          >
            {phoneLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
