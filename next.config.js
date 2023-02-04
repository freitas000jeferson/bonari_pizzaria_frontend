/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  basePath: '',
  // async redirects() {
  //   // return [
  //   //   {
  //   //     source: '/team',
  //   //     destination: '/about',
  //   //     permanent: false,
  //   //   },
  //   //   // Path Matching - will match `/old-blog/a`, but not `/old-blog/a/b`
  //   //   {
  //   //     source: '/old-blog/:slug',
  //   //     destination: '/news/:slug',
  //   //     permanent: false,
  //   //   },
  //   //   // Wildcard Path Matching - will match `/blog/a` and `/blog/a/b`
  //   //   {
  //   //     source: '/blog/:slug*',
  //   //     destination: '/news/:slug*',
  //   //     permanent: false,
  //   //   },
  //   //   // Regex Path Matching - The regex below will match `/post/123` but not `/post/abc`
  //   //   {
  //   //     source: '/post/:slug(\\d{1,})',
  //   //     destination: '/news/:slug',
  //   //     permanent: false,
  //   //   },
  //   // ];
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/feedback',
  //       destination: '/feedback/general',
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
