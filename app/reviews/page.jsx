import Heading from "../../components/Heading";
import ReviewsList from "../../components/Reviews-list";

export const metadata = {
  title: "Reviews",
  description: "Only the best indie games, reviewed for you",
};

const ReviewsPage = async () => {
  return (
    <>
      <Heading>Reviews</Heading>
      <ReviewsList />
    </>
  );
};

export default ReviewsPage;
