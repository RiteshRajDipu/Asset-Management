import "./assetLg.css";

export default function AssetLg() {
  const Button = ({ type }) => {
    return <button className={"assetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="assetLg">
      <h3 className="assetLgTitle">Latest transactions</h3>
      <table className="assetLgTable">
        <tr className="assetLgTr">
          <th className="assetLgTh">Customer</th>
          <th className="assetLgTh">Date</th>
          <th className="assetLgTh">Amount</th>
          <th className="assetLgTh">Status</th>
        </tr>
        <tr className="assetLgTr">
          <td className="assetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="assetLgImg"
            />
            <span className="assetLgName">Susan Carol</span>
          </td>
          <td className="assetLgDate">2 Jun 2021</td>
          <td className="assetLgAmount">$122.00</td>
          <td className="assetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="assetLgTr">
          <td className="assetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="assetLgImg"
            />
            <span className="assetLgName">Susan Carol</span>
          </td>
          <td className="assetLgDate">2 Jun 2021</td>
          <td className="assetLgAmount">$122.00</td>
          <td className="assetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="assetLgTr">
          <td className="assetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="assetLgImg"
            />
            <span className="assetLgName">Susan Carol</span>
          </td>
          <td className="assetLgDate">2 Jun 2021</td>
          <td className="assetLgAmount">$122.00</td>
          <td className="assetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="assetLgTr">
          <td className="assetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="assetLgImg"
            />
            <span className="assetLgName">Susan Carol</span>
          </td>
          <td className="assetLgDate">2 Jun 2021</td>
          <td className="assetLgAmount">$122.00</td>
          <td className="assetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
