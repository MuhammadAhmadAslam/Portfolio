/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          { hostname: 'cdn.sanity.io' },
          { hostname: 'example.com' },
          { hostname: 'upload.wikimedia.org' },
          { hostname: 'media.licdn.com' },
          { hostname: 'miro.medium.com' },
          { hostname: 'svgrepo.com' },
          { hostname: 'encrypted-tbn0.gstatic.com' },
          { hostname: 'cdn.worldvectorlogo.com' },
        ],
      },
};

export default nextConfig;