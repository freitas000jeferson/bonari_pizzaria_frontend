import config from '@/core/config/api/';
import { NextSeo } from 'next-seo';

function PageTemplate({ title, description, path, children }: any) {
  const url = `${config.defaults.url}${path}`;
  title = title ? `${config.api.title} | ${title}` : config.api.title;
  description = description
    ? `${config.api.description} - ${description}`
    : config.api.description;
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{ url, title }}
      />
      {children}
    </>
  );
}
export default PageTemplate;
