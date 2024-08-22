import { useState } from "react";
import Datatable from "../../components/datatable/Datatable";
import { userRows } from "../../data";
import "./users.scss";
import Add from "../../components/add/Add";

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

function Users() {
  const [open, setOpen] = useState(false);

  return (
    <div className='users'>
      <div className="info">
        <h1>Title</h1>
        <button onClick={()=>setOpen(true)}>Add New User</button>
      </div>
      <Datatable slug="users" columns={columns} rows={userRows} />
      {open &&  <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Users