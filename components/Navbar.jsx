import Link from "next/link";
const Navbar = () => {
  const navbar = [
    { id: "reviews", label: "Reviews" },
    { id: "about", label: "About" },
  ];

  let a = true;

  return (
    <nav className="flex justify-between items-center">
      <Link
        href="/"
        className="font-bold font-orbitron text-orange-800 hover:underline"
      >
        Indie Gamer
      </Link>
      <ul className="flex gap-2">
        {navbar.map((item) => (
          <li key={item.id}>
            <Link
              href={`/${item.id}`}
              className="text-orange-800 hover:underline"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
