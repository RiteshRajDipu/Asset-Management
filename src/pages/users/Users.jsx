import "./users.scss";
import { useEffect, useState } from "react";
import Datatable from "../../components/datatable/Datatable";
import Add from "../../components/add/Add";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, updateIds } from '../../store/slices/UsersSlice';
import * as XLSX from 'xlsx';
import { setUsers } from "../../store/slices/userSlice";

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
// let addColums = [];

function Users() {
  const [open, setOpen] = useState(false);
  const items = useSelector((state) => state.users.items); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUsers(items));
  },);

  const addUserHandler = (newItem) => {
    setOpen(false);
    dispatch(addItem(newItem));
    dispatch(updateIds());
  }

  const onDeleteHandler = (data) => {
    dispatch(removeItem(data));
    dispatch(updateIds());
  }

  const exportToExcel = () => {
    try {
      if (!Array.isArray(items) || items.length === 0) {
        throw new Error('No data to export');
      }
      const ws = XLSX.utils.json_to_sheet(items);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Items');
      const filename = `users_${new Date().toISOString().split('T')[0]}.xlsx`;
      XLSX.writeFile(wb, filename);
    } catch (error) {
      console.error('Error exporting to Excel:', error);
    }
  };
  

  // const onEditHandler = (data) => {
  //   console.log('edit', data);
  //   editColums = JSON.parse(JSON.stringify(columns))

  //   for (let [key, value] of Object.entries(data)) {
  //     for (const col of clonedColumnArray) {
  //       if (col.field === key) {
  //         col.dataValue = value;
  //       }
  //     }
  //   }
  //   setOpen(true);
  //   dispatch(updateIds());
  // }

  return (
    <div className='users'>
      <div className="info">
        <h1>Title</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
        <button style={{marginLeft: "640px"}} onClick={exportToExcel}>Export to Excel</button>
      </div>
      <Datatable
        slug="users"
        columns={columns}
        columnsOnEdit={editColums}
        rows={items} 
        // onEdit={onEditHandler}
        onDelete={onDeleteHandler}
      />
      {open && <Add slug="user" onAdd={addUserHandler} columns={columns} setOpen={setOpen} />}
    </div>
  );
}

export default Users;