/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'KASM WORKSPACES REPO FOR SOC',
    description: 'SPAR - SOC Platform for Asset Repository',
    icon: 'https://github.com/KWRFS/SPAR/blob/84aa9f9c577ddd0976047645a6fc7b9353c414b6/Untitled%20design.png',
    listUrl: 'https://kwrfs.github.io/SPAR/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  basePath: '/SPAR/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
