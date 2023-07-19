import "./Menu.css";

function Menu() {
  return (
    <nav className="navbar bg-body-tertiary menu ">
      <div className="container-fluid d-flex justify-content-end">
        <form className="d-flex " role="search">
          <button className="btn btn-outline-success" type="button">
            Cerrar sesion
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Menu;
