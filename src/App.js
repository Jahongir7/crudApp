import { useState } from "react";
import List from "./components/list";

function App() {
  const [name, setName] = useState(" ");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: " " });

  return (
    <div className="section-center">
      <div className="grocery-container">
        <List />
        <button className="clear-btn">Udalit</button>
      </div>
    </div>
  );
}

export default App;
