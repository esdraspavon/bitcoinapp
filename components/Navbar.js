import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">TodoBitcoin</a>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/" as={process.env.BACKEND_URL + "/"}>
                <a className="navbar-brand">Inicio</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/nosotros" as={process.env.BACKEND_URL + "/nosotros"}>
                <a className="navbar-brand">Nosotros</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
