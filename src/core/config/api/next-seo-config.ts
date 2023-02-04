import config from './index';

const SEO = {
  title: config.api.title,
  description: config.api.description,
  canonical: config.defaults.url || 'https://localhost:3000',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: config.defaults.url || 'https://localhost:3000',
    title: config.api.title,
    description: config.api.description,
    images: [
      {
        url: 'https://www.example.ie/og-image-01.jpg',
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
        type: 'image/jpeg',
      },
      {
        url: 'https://www.example.ie/og-image-02.jpg',
        width: 900,
        height: 800,
        alt: 'Og Image Alt Second',
        type: 'image/jpeg',
      },
      { url: 'https://www.example.ie/og-image-03.jpg' },
      { url: 'https://www.example.ie/og-image-04.jpg' },
    ],
    siteName: config.api.siteName,
  },
};

export default SEO;
