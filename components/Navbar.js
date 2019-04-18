import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="/nosotros">
            <a>Nosotros</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
