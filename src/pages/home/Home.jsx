import "./home.scss";
import TopBox from "../../components/topBox/topBox";
import ChartBox from "../../components/chartBox/ChartBox";
// import { chartBoxProduct, chartBoxUser } from "../../data";
import { useSelector } from "react-redux";
import SearchBar from "../../components/searchBar/SearchBar";


function Home() {
  const numberOfUsers = useSelector((state) => state.users.items.length);
  const numberOfProducts = useSelector((state) => state.products.productItems.length);


    // Define ChartBox props
    const chartBoxUser = {
      color: '#8884d8',
      title: 'User Statistics',
      dataKey: 'value',
      number: numberOfUsers, // Use number of users from Redux
      percentage: 20, // Example percentage
      chartData: [
        { name: 'Jan', value: 4000 },
        { name: 'Feb', value: 3000 },
        { name: 'Mar', value: 4000 },
        // Add more data as needed
      ],
    };

    const chartBoxProduct = {
      color: '#82ca9d',
      title: 'Product Sales',
      dataKey: 'value',
      number: numberOfProducts, // Use number of products from Redux
      percentage: 10, // Example percentage
      chartData: [
        { name: 'Jan', value: 2400 },
        { name: 'Feb', value: 1398 },
        { name: 'Mar', value: 9800 },
        // Add more data as needed
      ],
    };

  return (
    <>
    <div className="home">
      <div className="box box1">
       <ChartBox {...chartBoxUser}/>
      </div>
      <div className="box box1">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box2">
         <TopBox />
      </div>
    </div>
    </>
  )
}

export default Home;