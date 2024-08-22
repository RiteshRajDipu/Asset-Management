import "./add.scss";

const Add = (props) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className="add">
      <div className="model">
        <span className="close" onClick={() => props.setOpen(false)}>X</span>
        <h1>Add New {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
          .filter(item => item.field !== "id" && item.field !== "img")
          .map(column=>(
            <div className="item" key={column.field}>
              <label>{column.headerName}</label>
              <input type={column.type} placeholder={column.field} />
            </div>
          ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Add