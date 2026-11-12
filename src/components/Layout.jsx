import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TopBar from './TopBar';
import Header from './Header';
import Footer from './Footer';
import CookieConsent from './CookieConsent';

const KEY = 'freway-cookie-choice';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => {
        const el = document.getElementById(hash.slice(1));
        if (el) el.scrollIntoView();
      }, 50);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  const [bannerOpen, setBannerOpen] = useState(() => {
    try {
      return !localStorage.getItem(KEY);
    } catch {
      return true;
    }
  });
  const [modalOpen, setModalOpen] = useState(false);

  const handleChoice = (choice) => {
    try {
      localStorage.setItem(KEY, JSON.stringify(choice));
    } catch {
      /* storage unavailable */
    }
    setBannerOpen(false);
    setModalOpen(false);
  };

  return (
    <>
      <ScrollManager />
      <TopBar />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer onCookieSettings={() => setModalOpen(true)} />
      <CookieConsent
        bannerOpen={bannerOpen}
        modalOpen={modalOpen}
        onChoice={handleChoice}
        onOpenModal={() => setModalOpen(true)}
        onCloseModal={() => setModalOpen(false)}
      />
    </>
  );
}
