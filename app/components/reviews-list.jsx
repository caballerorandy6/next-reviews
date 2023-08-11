import Link from "next/link";

const ReviewsList = () => {
  const reviews = [
    { id: "hollow-knight", label: "Hollow-Knight" },
    { id: "stardew-valley", label: "Stardew-Valley" },
  ];

  return (
    <ul>
      {reviews.map((item) => (
        <li key={item.id}>
          <Link href={`/reviews/${item.id}`}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ReviewsList;
