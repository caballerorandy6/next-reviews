import Review from "./Review";
import { getReviews } from "@/lib/reviews";

const ReviewsList = async () => {
  const reviews = await getReviews();
  //console.log(reviews);

  return (
    <ul className="flex flex-row flex-wrap gap-3 mt-2">
      {reviews.map((review) => (
        <Review key={review.slug} review={review} />
      ))}
    </ul>
  );
};

export default ReviewsList;
