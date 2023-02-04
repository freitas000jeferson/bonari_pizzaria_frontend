import config from '@/core/config/api/';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <title>{config.api.title}</title>
        <meta name="description" content={config.api.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
