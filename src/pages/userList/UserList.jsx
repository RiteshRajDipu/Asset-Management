

import "./userList.scss"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import {userRows} from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
    const [data, setData] = useState(userRows);

    const handleClick = (id) => {
      setData(data.filter((item) => item.id !== id));
    };
 
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'Username', width: 200, renderCell: (params) => {
            // console.log(params);
            return(
                <div className="userListUser">
                <img className="userListImg" src={params.row.avatar} alt="" />
                   {params.row.username}
                </div> 
            )
        } },
        { field: 'email', headerName: 'Email', width: 200, },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 160,
        },
        {
            field:"action",
            headerName:"Action",
            width: 150,
            renderCell: (params) => {
              return (
                <div className="userListAction">
                  <Link to={"/user/"+params.row.id }>
                     <button className="userListEdit">Edit</button>
                  </Link>  
                <DeleteOutline className="userListDelete" style={{marginBottom: '4px'}}
                  onClick={() => handleClick(params.row.id)}
                />
                </div>
              );  
            },
        },
      ];
      
  return (
    <>
    <div className="userList">
    <DataGrid
        disableRowSelectionOnClick
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    </>
    
  )
}
