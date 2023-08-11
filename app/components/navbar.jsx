import Link from "next/link";
const Navbar = () => {
  const navbar = [
    { id: "/", label: "Home" },
    { id: "reviews", label: "Reviews" },
    { id: "about", label: "About" },
  ];

  return (
    <nav>
      <ul>
        {navbar.map((item) => (
          <li key={item.id}>
            <Link href={`/${item.id}`}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
