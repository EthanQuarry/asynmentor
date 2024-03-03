/** @type {import('next').NextConfig} */

const nextConfig = {
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
  pkg: {
    scripts: ['src/worker-script/node/index.js'],
  },
}

module.exports = nextConfig
