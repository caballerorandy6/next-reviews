import Review from "./Review";
import { getReviews } from "@/lib/reviews";

const ReviewsList = async () => {
  const reviews = await getReviews(6);
  //console.log(reviews);

  return (
    <ul className="flex flex-row flex-wrap gap-3 mt-2">
      {reviews.map((review, index) => (
        <Review key={review.slug} review={review} index={index} />
      ))}
    </ul>
  );
};

export default ReviewsList;
