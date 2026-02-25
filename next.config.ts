import createNextIntlPlugin from "next-intl/plugin";
import withPWAInit from "next-pwa";

const isDev = process.env.NODE_ENV === "development";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: isDev,
  buildExcludes: [/middleware-manifest\.json$/],
});

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: true,
};

export default withNextIntl(withPWA(nextConfig));