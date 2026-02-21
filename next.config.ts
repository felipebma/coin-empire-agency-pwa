import type { NextConfig } from "next";
import createPWA from "next-pwa";

const isProd = process.env.NODE_ENV === "production";

const withPWA = createPWA({
  dest: "public",
  disable: !isProd,
  register: false,
  fallbacks: {
    document: "/~offline",
  },
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fonts\.(?:gstatic|googleapis)\.com\/.*/i,
      handler: "CacheFirst",
      options: {
        cacheName: "google-fonts",
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24 * 365,
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
    {
      urlPattern: /^https:\/\/.*\/_next\/static\/.*/i,
      handler: "CacheFirst",
      options: {
        cacheName: "next-static-assets",
        expiration: {
          maxEntries: 64,
          maxAgeSeconds: 60 * 60 * 24 * 30,
        },
      },
    },
    {
      urlPattern: /^https:\/\/.*\/_next\/image\?url=.*/i,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "next-image-assets",
        expiration: {
          maxEntries: 64,
          maxAgeSeconds: 60 * 60 * 24 * 7,
        },
      },
    },
    {
      urlPattern: /^https:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg|ico)$/i,
      handler: "CacheFirst",
      options: {
        cacheName: "static-image-assets",
        expiration: {
          maxEntries: 64,
          maxAgeSeconds: 60 * 60 * 24 * 30,
        },
      },
    },
    {
      urlPattern: /^https:\/\/.*\/(dashboard|announcements|events|links|profile)\/?$/i,
      handler: "NetworkFirst",
      options: {
        cacheName: "app-shell-pages",
        networkTimeoutSeconds: 3,
        expiration: {
          maxEntries: 20,
          maxAgeSeconds: 60 * 60 * 24,
        },
      },
    },
    {
      urlPattern: /^https:\/\/.*\/ranking\/?$/i,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "ranking-page",
        expiration: {
          maxEntries: 3,
          maxAgeSeconds: 60 * 5,
        },
      },
    },
  ],
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default withPWA(nextConfig);
