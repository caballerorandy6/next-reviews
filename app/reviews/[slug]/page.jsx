import { getReview } from "@/lib/reviews";
import Heading from "../../components/Heading";

const ReviewPage = async ({ params: { slug } }) => {
  const review = await getReview(slug);
  const { title, date, image, body } = review;
  //console.log(review);

  return (
    <>
      <Heading>{title}</Heading>
      <p className="italic pb-2">{date}</p>
      <img
        src={image}
        alt=""
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <article
        dangerouslySetInnerHTML={{ __html: body }}
        className="max-w-screen-sm prose prose-slate"
      />
    </>
  );
};

export default ReviewPage;
