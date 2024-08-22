import "./topBox.scss";
import { latestAssets } from "../../data";

function TopBox() {
  return (
    <div className="topBox">
        <h1>Latest Transaction</h1>
        <div className="list">
            {latestAssets.map(item => (
                <div className="listItem" key={item.key}>
                   <div className="item">
                     <img src={item.img} alt="" />
                     <div className="itemTexts">
                        <span className="itemname">{item.product}</span>
                        <span className="name">by {item.customer}</span>
                     </div>
                   </div>
                   <span className="amount">${item.amount}</span>
                </div>
            ))}
        </div>
    </div>
  );
}

export default TopBox;