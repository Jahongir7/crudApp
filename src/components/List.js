const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div className="btn-container">
              <button
                onClick={() => editItem(id)}
                type="button"
                className="edit-btn"
              >
                E
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => {
                  removeItem(id);
                }}
              >
                D
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
