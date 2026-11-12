import { Link } from 'react-router-dom';
import Img from './Img';

export default function ServiceCard({ division, title, text, to, image, alt }) {
  return (
    <div className="bg-surface rounded border border-outline-variant overflow-hidden shadow-sm flex flex-col hover:border-silver transition-all">
      <div className="h-44 bg-surface-variant overflow-hidden">
        <Img name={image} alt={alt} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-accent text-[11px] font-headline font-bold tracking-wider uppercase">{division}</span>
          <h3 className="font-headline font-bold text-headline-sm text-primary mt-1 mb-2">{title}</h3>
          <p className="text-body-sm text-secondary leading-relaxed">{text}</p>
        </div>
        <div className="pt-5 mt-4 border-t border-outline-variant">
          <Link
            to={to}
            className="inline-flex items-center text-primary font-headline font-semibold text-label-lg hover:text-accent gap-1"
          >
            <span>View Details</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
