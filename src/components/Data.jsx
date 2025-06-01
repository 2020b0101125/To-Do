import PropTypes from "prop-types";
import bin from "../assets/bin.png";

function Data(props) {
  const handleDelete = () => {
    props.onDelete(props.task);
  };
  return (
    <div className="data">
      <p>{props.task.text}</p>
      <img src={bin} alt="-" onClick={() => handleDelete()} />
    </div>
  );
}

Data.propTypes = {
  task: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Data;
