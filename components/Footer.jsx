import Link from "next/link";

const Footer = () => {
  return (
    <>
      Game data and images courtesy of{" "}
      <Link
        href="https://rawg.io/"
        target="_blank"
        className="text-orange-800 hover:underline"
      >
        RAWG
      </Link>
    </>
  );
};

export default Footer;
