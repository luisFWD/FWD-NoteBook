import "./Menu.css";

function Menu(props) {
  return (
    <nav className="navbar bg-body-tertiary menu ">
      <div className="container-fluid d-flex justify-content-end">
        <form className="d-flex " role="search">
          <button
            className="btn btn-outline-success"
            type="button"
            onClick={props.onClick}
          >
            {props.texto}
          </button>
          {props.children}
        </form>
      </div>
    </nav>
  );
}

export default Menu;
