/** @type {import('next').NextConfig} */
const nextConfig = {
        experimental:{
            serverAction:{
                bodySizeLimit:"5mb",
            },
        },
};

export default nextConfig;
