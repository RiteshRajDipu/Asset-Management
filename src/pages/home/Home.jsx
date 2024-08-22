import "./home.scss";
import TopBox from "../../components/topBox/topBox";
import ChartBox from "../../components/chartBox/ChartBox";
import { chartBoxProduct, chartBoxUser } from "../../data";


function Home() {
  return (
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
  )
}

export default Home;