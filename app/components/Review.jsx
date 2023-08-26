import Link from "next/link";

const Review = ({ review }) => {
  const { slug, title, image } = review;

  return (
    <li className="bg-white border rounded shadow hover:shadow-xl w-80 transition-shadow font-semibold font-orbitron">
      <Link href={`/reviews/${slug}`}>
        <img src={image} width={320} height={180} className="rounded-t" />
        <h2 className="py-1 text-center">{title}</h2>
      </Link>
    </li>
  );
};

export default Review;
