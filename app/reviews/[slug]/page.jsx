import Image from "next/image";
import { notFound } from "next/navigation";
import Heading from "../../../components/Heading";
import { getReview, getSlugs } from "@/lib/reviews";
import ShareButtons from "@/components/ShareButtons";

//export const dynamic = "force-dynamic"; //Permite que las paginas sean dinamicas

//Permite actualizar paginas estaticas, cada pagina se almacena el la cache y caduca despues del intervalo dado, en este caso en 30 sec.
//export const revalidate = 30;

//Crea una pagina estatica para cada slug.
export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs?.map((slug) => ({ slug }));
}

export const generateMetadata = async ({ params: { slug } }) => {
  const review = await getReview(slug);
  if (!review) {
    notFound();
  }
  return {
    title: review.title,
  };
};

const ReviewPage = async ({ params: { slug } }) => {
  const review = await getReview(slug);
  if (!review) {
    notFound();
  }
  const { title, date, image, body } = review;
  //console.log("[ReviewPage] rendering:", slug);

  return (
    <>
      <Heading>{title}</Heading>
      <p className="font-semibold pb-3">{review.subtitle}</p>
      <div className="flex gap-3 items-baseline">
        <p className="italic pb-2">{date}</p>
        <ShareButtons />
      </div>
      <Image
        src={image}
        alt=""
        width="640"
        height="360"
        className="mb-2 rounded"
        priority
      />
      <article
        dangerouslySetInnerHTML={{ __html: body }}
        className="max-w-screen-sm prose prose-slate"
      />
    </>
  );
};

export default ReviewPage;
