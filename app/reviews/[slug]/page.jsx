import Heading from "../../components/Heading";
import { getReview, getSlugs } from "@/lib/reviews";
import ShareButtons from "@/app/components/ShareButtons";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs?.map((slug) => ({ slug }));
}

export const generateMetadata = async ({ params: { slug } }) => {
  const review = await getReview(slug);
  return {
    title: review.title,
  };
};

const ReviewPage = async ({ params: { slug } }) => {
  const review = await getReview(slug);
  const { title, date, image, body } = review;
  //console.log(review);

  return (
    <>
      <Heading>{title}</Heading>
      <div className="flex gap-3 items-baseline">
        <p className="italic pb-2">{date}</p>
        <ShareButtons />
      </div>
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
