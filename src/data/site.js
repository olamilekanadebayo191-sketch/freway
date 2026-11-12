export const SITE = {
  name: 'Freway Direct Logistics Services',
  phones: ['08025756034', '07039590548'],
  email: 'freeway_transport@yahoo.com',
  rc: 'RC: 8351583',
  region: 'Operating Nationwide Across Nigeria',
  // Set VITE_FORM_ENDPOINT in Vercel (see batch 6). If empty, the form opens an email instead.
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
};

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];
