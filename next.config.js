const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const nextConfig = {
    reactStrictMode: true,
    images: {
        deviceSizes: [640, 768, 1024, 1280, 1536],
        loader: "custom",
        path: "/",
    },
    // basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    // assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
};

// module.exports = nextConfig;
module.exports = withPlugins(
    [
        [
            withPWA,
            {
                pwa: {
                    disable: process.env.NODE_ENV === "development",
                    dest: "public",
                    runtimeCaching,
                },
            },
        ],
    ],
    nextConfig
);