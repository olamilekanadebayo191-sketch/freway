import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useSeo from '../hooks/useSeo';
import { SITE } from '../data/site';
import { categories, galleryItems } from '../data/gallery';
import { handleImgError } from '../data/images';
import Img from '../components/Img';
import PageHero from '../components/PageHero';

export default function Gallery() {
  useSeo(
    'Vehicle & Operations Gallery — Freway Direct Logistics Services',
    'Browse Freway trucks, buses, executive cars, event shuttles and loading operations across Nigeria.'
  );

  const [active, setActive] = useState('all');
  const [selected, setSelected] = useState(null);

  const visible = galleryItems.filter((i) => active === 'all' || i.categories.includes(active));

  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => e.key === 'Escape' && setSelected(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected]);

  return (
    <>
      <PageHero
        eyebrow="Operational & Fleet Portfolio"
        title="Explore Our Vehicles & Operations."
        text="Take a look at the transportation and logistics services offered by Freway Direct Logistics Services across Nigeria."
      />

      <section className="py-16 bg-surface">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-outline-variant pb-6">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActive(c.id)}
                className={
                  active === c.id
                    ? 'bg-primary text-white text-body-sm font-headline font-semibold px-4 py-2 rounded transition-all'
                    : 'bg-surface border border-outline text-primary text-body-sm font-headline font-semibold px-4 py-2 rounded hover:bg-neutral-bg transition-all'
                }
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((item) => (
              <div
                key={item.title}
                onClick={() => setSelected(item)}
                className="group rounded border border-outline-variant overflow-hidden bg-surface cursor-pointer shadow-sm"
              >
                <div className="h-64 overflow-hidden bg-surface-variant relative">
                  <Img
                    name={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span
                    className={`absolute top-3 left-3 ${item.badgeClass} text-white text-[11px] font-headline uppercase font-semibold px-2.5 py-1 rounded`}
                  >
                    {item.badge}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-headline font-bold text-base text-primary">{item.title}</h3>
                  <p className="text-body-sm text-secondary mt-0.5">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-bg border-t border-outline-variant text-center">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
          <h2 className="font-headline font-bold text-headline-lg text-primary mb-3">
            Need Specific Vehicles for Your Project?
          </h2>
          <p className="text-body-md text-secondary max-w-xl mx-auto mb-6">
            Contact our dispatch team to verify vehicle availability or request dedicated freight trucks.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-primary text-white font-headline font-semibold text-label-lg px-6 py-3 rounded hover:bg-navy-dark"
            >
              Book or Enquire Now
            </Link>
            <a
              href={`tel:${SITE.phones[0]}`}
              className="text-primary font-headline font-semibold text-label-lg hover:underline flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-sm">call</span> Call {SITE.phones[0]}
            </a>
          </div>
        </div>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && setSelected(null)}
        >
          <div className="max-w-4xl w-full bg-surface rounded overflow-hidden shadow-2xl relative">
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              aria-label="Close Lightbox"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
            <div className="max-h-[65vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={`/images/${selected.image}.jpg`}
                data-name={selected.image}
                onError={handleImgError}
                alt={selected.lightboxTitle}
                className="max-h-[65vh] w-auto object-contain"
              />
            </div>
            <div className="p-6 bg-surface">
              <h3 className="font-headline font-bold text-headline-sm text-primary">{selected.lightboxTitle}</h3>
              <p className="text-body-md text-secondary mt-1">{selected.lightboxDesc}</p>
              <div className="mt-4 pt-4 border-t border-outline-variant flex items-center justify-between">
                <span className="text-xs text-secondary font-headline uppercase font-semibold">
                  Freway Direct Logistics Services
                </span>
                <Link
                  to="/contact"
                  className="bg-accent text-white font-headline text-label-md font-semibold px-4 py-2 rounded hover:bg-[#a81624]"
                >
                  Enquire About This Vehicle
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
