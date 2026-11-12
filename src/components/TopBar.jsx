import { SITE } from '../data/site';

export default function TopBar() {
  return (
    <div className="bg-navy-dark text-silver text-body-sm border-b border-secondary/20 py-2.5 px-4 sm:px-8">
      <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-6">
          {SITE.phones.map((p) => (
            <a key={p} href={`tel:${p}`} className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-sm text-accent">call</span>
              <span>{p}</span>
            </a>
          ))}
          <a href={`mailto:${SITE.email}`} className="hidden md:inline-flex items-center gap-1.5 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-sm text-accent">mail</span>
            <span>{SITE.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="inline-flex items-center gap-1.5 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>{SITE.region}</span>
          </span>
          <span className="text-secondary/40">|</span>
          <span className="text-slate-400 font-mono">{SITE.rc}</span>
        </div>
      </div>
    </div>
  );
}
