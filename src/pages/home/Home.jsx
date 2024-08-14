import Chart from "../../components/dashboard/chart/Chart";
import FeaturedInfo from "../../components/dashboard/featuredInfo/FeaturedInfo";
import "./home.css";
import {userData} from "../../dummyData"
import AssetSm from "../../components/dashboard/AssetsSm/AssetSm";
import AssetLg from "../../components/dashboard/AssetsLg/AssetLg";




const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} dataKey="Active_User" title="User Analytics" grid />
      <div className="homeAssets">
        <AssetSm />
        <AssetLg />
      </div> 
    </div>
  )
}

export default Home