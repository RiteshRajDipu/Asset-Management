import "./add.scss";
import { userRows } from "../../data";

const Add = (props) => {

  const addNewUser = (payload) => {
     console.log(payload)
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const obj = {};
 
    for (let [key, value] of formData.entries()) {
      obj[key] = value;
    }    
    props.onAdd(obj);
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
              <input value={column.dataValue} type={column.type} name={column.field} placeholder={column.field} />
            </div>
          ))}
          <button onClick={() => addNewUser(userRows)}>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Add