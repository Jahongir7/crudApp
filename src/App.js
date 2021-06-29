import { useEffect, useState } from "react";
import List from "./components/List";
import Alert from "./components/Alert";
import "./index.css";

const getLocalStorge = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorge);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "Maydonni to'ldirishingiz kerak");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "Tahrirlandi");
    } else {
      showAlert(true, "success", "Qo'shildi");
      const newItem = { id: new Date().getTime(), title: name };
      setList([...list, newItem]);
      setName("");
      console.log(newItem.id);
    }
  };

  const clearList = () => {
    showAlert(true, "danger", "O'chirildi");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "o'chdi");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <div className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
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
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            Hammasini o'chirish
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
