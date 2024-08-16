
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.scss";
import {userData} from "../../dummyData"
import AssetSm from "../../components/AssetsSm/AssetSm";
import AssetLg from "../../components/AssetsLg/AssetLg";




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