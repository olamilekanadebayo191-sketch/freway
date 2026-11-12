import { Link } from 'react-router-dom';
import useSeo from '../hooks/useSeo';

export default function NotFound() {
  useSeo('Page Not Found — Freway Direct Logistics Services');

  return (
    <section className="py-24 bg-surface text-center">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        <span className="text-accent font-headline font-bold text-label-md uppercase tracking-wider block mb-2">
          Error 404
        </span>
        <h1 className="font-headline font-bold text-headline-xl-mobile md:text-headline-xl text-primary mb-4">
          Page Not Found.
        </h1>
        <p className="text-body-md text-secondary max-w-xl mx-auto mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="bg-primary text-white font-headline font-semibold text-label-lg px-6 py-3 rounded hover:bg-navy-dark transition-all inline-block"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
