import { useState } from "react";
import Datatable from "../../components/datatable/Datatable";
// import { userRows } from "../../data";
import "./users.scss";
import Add from "../../components/add/Add";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, updateIds } from '../../store/slices/UsersSlice'; // Import actions


const columns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "img",
    headerName: "Avatar",
    width: 70,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 100,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
];
let editColums = [];
let addColums = [];

function Users() {
  const [open, setOpen] = useState(false);
  const items = useSelector((state) => {
    return state.users.items
  }); 
  const dispatch = useDispatch(); // Hook to get dispatch function

  const onDeleteHandler = (data) => {
    dispatch(removeItem(data));
    dispatch(updateIds());
  }

  const onEditHandler = (data) => {
    console.log('edit', data);
    editColums = JSON.parse(JSON.stringify(columns))

    for (let [key, value] of Object.entries(data)) {
      for (const col of clonedColumnArray) {
        if (col.field === key) {
          col.dataValue = value;
        }
      }
    }
    console.log(columns);

    setOpen(true);

    dispatch(updateIds());
  }

  const addUserHandler = (newItem) => {
    console.log('newItem', newItem);
    setOpen(false);
    dispatch(addItem(newItem));
    dispatch(updateIds());
  }

  return (
    <div className='users'>
      <div className="info">
        <h1>Title</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      {/* <Datatable slug="users" columns={columns} rows={userRows} /> */}
      <Datatable
        slug="users"
        columns={columns}
        columnsOnEdit={editColums}
        rows={items} 
        onEdit={onEditHandler}
        onDelete={onDeleteHandler}
      />
      {open && <Add slug="user" onAdd={addUserHandler} columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Users