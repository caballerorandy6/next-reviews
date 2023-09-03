/** @type {import ('next').NextConfig} */
module.exports = {
  //output: "export", //Utilizando el componente Image en un sitio estatico
  images: {
    //unoptimized: true, //Utilizando el componente Image en un sitio estatico
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
};
