import { Link } from 'react-router-dom';
import Img from './Img';

export default function PillarCard({ icon, title, subtitle, tag, image, alt, text, items, to, cta }) {
  return (
    <div className="border border-outline-variant rounded bg-surface overflow-hidden shadow-sm flex flex-col">
      <div className="bg-primary text-white p-6 border-b border-secondary/20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-accent">
            <span className="material-symbols-outlined">{icon}</span>
          </div>
          <div>
            <h3 className="font-headline font-bold text-headline-md text-white">{title}</h3>
            <p className="text-silver-light text-body-sm">{subtitle}</p>
          </div>
        </div>
        <span className="bg-white/10 text-silver-light text-xs font-mono px-2.5 py-1 rounded">{tag}</span>
      </div>
      <div className="h-60 overflow-hidden">
        <Img name={image} alt={alt} className="w-full h-full object-cover" />
      </div>
      <div className="p-8 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-body-md text-on-surface-variant mb-6 leading-relaxed">{text}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {items.map((item, i) => (
              <div
                key={item}
                className={`flex items-center gap-2 text-body-sm text-primary font-semibold ${
                  i === items.length - 1 ? 'sm:col-span-2' : ''
                }`}
              >
                <span className="material-symbols-outlined text-accent text-lg">check_circle</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <Link
          to={to}
          className="w-full text-center bg-primary text-white font-headline font-semibold text-label-lg py-3 rounded hover:bg-navy-dark transition-all"
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}
