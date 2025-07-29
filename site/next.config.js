/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'KASM WORKSPACES REPO FOR SOC',
    description: 'SPAR - SOC Platform for Asset Repository',
    icon: 'Untitled design.png',
    listUrl: 'https://github.com/KWRFS/SPAR/',
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
