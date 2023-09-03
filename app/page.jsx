import Image from "next/image";
import Link from "next/link";
import Heading from "./components/Heading";
import { getReviews } from "@/lib/reviews";

const HomePage = async () => {
  const reviews = await getReviews(3);
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>

      <ul className="flex flex-col gap-3">
        {reviews.map((review, index) => (
          <li
            key={review.slug}
            className="bg-white border rounded shadow w-80 hover:shadow-xl transition-shadow sm:w-full"
          >
            <Link
              href={`/reviews/${review.slug}`}
              className="flex flex-col sm:flex-row"
            >
              <Image
                src={review.image}
                alt="stardew-valley img"
                width="320"
                height="180"
                className="rounded-t sm:rounded-l sm:rounded-r-none"
                priority={index === 0}
              />
              <div className="px-2 py-1 sm:text-left">
                <h2 className="font-semibold font-orbitron py-1 text-center sm:px-2">
                  {review.title}
                </h2>
                <p className="hidden sm:block pt-2">{review.subtitle}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
