import "./TaskItem.css";

export default function TaskItem(props) {
  return (
    <li className="task-item">
      <label className="task-check">
        <input type="checkbox" />
        <span className="checkmark"></span>
        <span className="label-text">Checkbox Label</span>
      </label>

      <p>{props.nombrePropiedad}</p>
      <button onClick={props.nombreFuncionEliminar} className="task-delete">
        eliminar
      </button>
    </li>
  );
}
