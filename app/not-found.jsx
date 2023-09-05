import Heading from "@/components/Heading";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Heading>Not Found</Heading>
      <p>Oops, the page you requested only exists in a parallel universe.</p>
    </div>
  );
};

export default NotFoundPage;
