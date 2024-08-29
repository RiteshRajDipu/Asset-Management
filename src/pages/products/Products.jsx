import { useState } from "react";
import Add from "../../components/add/Add";
import Datatable from "../../components/datatable/Datatable";
// import { products } from "../../data";
import "./products.scss";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateIds, removeProduct } from '../../store/slices/ProductSlice';

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 100,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 100,
  },
  {
    field: "producer",
    headerName: "Brand",
    type: "string",
    width: 100,
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 100,
    type: "boolean",
  },
]
 
function Products() {
  const [open, setOpen] = useState(false);
   const dispatch = useDispatch();
   const products = useSelector((state) => state.products.productItems)


   const addProductHandler = (newProd) => {
    setOpen(false);
    dispatch(addProduct(newProd));
    dispatch(updateIds());
   }

   const onDeleteHandler = (data) => {
    dispatch(removeProduct(data));
    dispatch(updateIds());
  }
 

  return (
    <div className='products'>
      <div className="info">
        <h1>Title</h1>
        <button onClick={()=>setOpen(true)}>Add New Product</button>
      </div>
      <Datatable 
        slug="products" 
        columns={columns} 
        rows={products}
        onDelete={onDeleteHandler}
        />
      {open &&  <Add slug="product" onAdd={addProductHandler} columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Products