import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { ApiContext } from "../../context/ApiContext";

const TableRow = (props) => {
  const { deleteItem } = useContext(ApiContext);
  const [number, setNumber] = useState(Math.floor(Math.random() * 12) + 1);

  function increment() {
    setNumber(number + 1);
  };

  function decrement() {
    if (number > 1) setNumber(number - 1);
  };
  return (
    <tr key={props.item.id}>
      <td>{props.item.id}</td>
      <td>{props.item.title}</td>
      <td>{props.item.price}$</td>
      <td>{props.item.category}</td>
      <td>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button onClick={decrement} className="btn btn-outline-danger btn-sm">
            -
          </button>
          <span
            style={{ margin: "0 10px", minWidth: "20px", textAlign: "center" }}
          >
            {number}
          </span>
          <button
            onClick={increment}
            className="btn btn-outline-success btn-sm"
          >
            +
          </button>
        </div>
      </td>
      <td>
        <Button onClick={() => deleteItem(props.item.id)} variant="danger">
          Töröl
        </Button>
      </td>
    </tr>
  );
};

export default TableRow;
