export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="relative bg-primary text-on-primary py-16 lg:py-24 overflow-hidden border-b border-secondary/20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 text-silver-light font-headline text-xs font-semibold uppercase tracking-wider mb-4">
            <span>{eyebrow}</span>
          </div>
          <h1 className="font-headline font-bold text-headline-xl-mobile md:text-display-lg text-white mb-4">
            {title}
          </h1>
          <p className="text-body-lg text-silver-light leading-relaxed">{text}</p>
        </div>
      </div>
    </section>
  );
}
