export const NavBar = () => {
  return (
    <header className="header">
      <div className="logo-header">
        <a href="/#">LOGO</a>
      </div>
      <nav className="navbar">
        <ul className="navbar-ul">
          <a href="/">
            <li>NOSOTROS</li>
          </a>
          <a href="">
            <li>PLATAFORMA</li>
          </a>
          <a href="">
            <li>TECNOLOGIA</li>
          </a>
          <a href="">
            <li>CONTACTO</li>
          </a>
        </ul>
      </nav>
      <div className="registro-header">
        <button href="">Iniciar sesion</button>
        <button href="">Registrarse</button>
      </div>
    </header>
  );
};
