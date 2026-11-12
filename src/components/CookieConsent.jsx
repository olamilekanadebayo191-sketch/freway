import { useState } from 'react';

export default function CookieConsent({ bannerOpen, modalOpen, onChoice, onOpenModal, onCloseModal }) {
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 inset-x-0 z-50 p-4 bg-primary text-white border-t border-secondary/30 shadow-2xl transition-all duration-300">
          <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-accent text-lg">cookie</span>
                <h4 className="font-headline font-bold text-sm">Your Privacy Matters</h4>
              </div>
              <p className="text-body-sm text-silver-light">
                We use cookies to improve your browsing experience and understand how visitors interact with our website.
                You can accept all, reject optional, or configure your preferences.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onChoice({ analytics: true, marketing: true })}
                className="bg-accent text-white font-headline text-label-md font-semibold px-4 py-2 rounded hover:bg-[#a81624] transition-all"
              >
                Accept All
              </button>
              <button
                type="button"
                onClick={() => onChoice({ analytics: false, marketing: false })}
                className="border border-silver text-white font-headline text-label-md font-semibold px-4 py-2 rounded hover:bg-white/10 transition-all"
              >
                Reject Optional
              </button>
              <button
                type="button"
                onClick={onOpenModal}
                className="text-silver underline font-headline text-label-md font-semibold hover:text-white px-2"
              >
                Manage Preferences
              </button>
            </div>
          </div>
        </div>
      )}

      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-surface text-on-surface max-w-lg w-full rounded border border-outline shadow-2xl p-6">
            <div className="flex items-center justify-between border-b border-outline-variant pb-4 mb-4">
              <h3 className="font-headline font-bold text-headline-sm text-primary">Cookie Preferences</h3>
              <button type="button" onClick={onCloseModal} className="text-secondary hover:text-primary" aria-label="Close">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="space-y-4 text-body-sm mb-6">
              <div className="p-3 bg-neutral-bg rounded border border-outline-variant flex items-start justify-between gap-4">
                <div>
                  <div className="font-headline font-semibold text-primary">Strictly Necessary Cookies</div>
                  <div className="text-secondary text-xs mt-0.5">Essential for website operation, navigation, and security.</div>
                </div>
                <span className="text-xs font-semibold text-accent uppercase tracking-wider shrink-0">Always Active</span>
              </div>
              <div className="p-3 bg-neutral-bg rounded border border-outline-variant flex items-start justify-between gap-4">
                <div>
                  <div className="font-headline font-semibold text-primary">Analytics Cookies</div>
                  <div className="text-secondary text-xs mt-0.5">Helps us evaluate traffic patterns and website usage.</div>
                </div>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="rounded text-primary focus:ring-primary mt-1"
                />
              </div>
              <div className="p-3 bg-neutral-bg rounded border border-outline-variant flex items-start justify-between gap-4">
                <div>
                  <div className="font-headline font-semibold text-primary">Marketing Cookies</div>
                  <div className="text-secondary text-xs mt-0.5">Used to present relevant logistical and transport enquiries.</div>
                </div>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="rounded text-primary focus:ring-primary mt-1"
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-outline-variant">
              <button
                type="button"
                onClick={() => onChoice({ analytics, marketing })}
                className="border border-outline font-headline font-semibold text-label-md px-4 py-2 rounded hover:bg-neutral-bg"
              >
                Save Preferences
              </button>
              <button
                type="button"
                onClick={() => onChoice({ analytics: true, marketing: true })}
                className="bg-primary text-white font-headline font-semibold text-label-md px-4 py-2 rounded hover:bg-navy-dark"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
