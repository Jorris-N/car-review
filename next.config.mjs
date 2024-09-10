/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.imagin.studio',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'api.carsxe.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'vehicle-images2.p.rapidapi.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  