import { useState } from "react";
import List from "./components/List";
import Alert from "./components/Alert";
import "./index.css";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
    } else if (name && isEditing) {
    } else {
      const newItem = { id: new Date().getTime(), title: name };
      setList([...list, newItem]);
      setName("");
      console.log(newItem.id);
    }
  };
  return (
    <div className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>Belgilanganlar qatori</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="belgilash joyi"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "Edit" : "Qo'shish"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} />
          <button className="clear-btn">Udalit</button>
        </div>
      )}
    </div>
  );
}

export default App;
