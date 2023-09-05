import Image from "next/image";
import Link from "next/link";

const Review = ({ review, index }) => {
  const { slug, title, image } = review;
  //console.log(review);

  return (
    <li className="bg-white border rounded shadow hover:shadow-xl w-80 transition-shadow font-semibold font-orbitron">
      <Link href={`/reviews/${slug}`}>
        <Image
          src={image}
          alt="Reviews Images"
          width={320}
          height={180}
          className="rounded-t"
          priority={index === 0}
        />
        <h2 className="py-1 text-center">{title}</h2>
      </Link>
    </li>
  );
};

export default Review;
