/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        instrumentationHook: true, 
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'blob-static.studyclix.ie',
            port: '',
            pathname: '/**',
          },
        ],
      },
    webpack: (config) => {
		config.externals.push("@node-rs/argon2", "@node-rs/bcrypt");
		return config;
	},
}

module.exports = nextConfig
