export default function SectionHeading({ eyebrow, title, children, center = true }) {
  return (
    <div className={center ? 'text-center max-w-2xl mx-auto mb-16' : 'mb-12'}>
      <span className="text-accent font-headline font-bold text-label-md uppercase tracking-wider block mb-2">
        {eyebrow}
      </span>
      <h2 className="font-headline font-bold text-headline-xl-mobile md:text-headline-xl text-primary mb-4">
        {title}
      </h2>
      {children && <p className="text-body-md text-secondary">{children}</p>}
    </div>
  );
}
