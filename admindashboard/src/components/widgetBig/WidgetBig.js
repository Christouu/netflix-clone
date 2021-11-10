import React from "react";
import "./WidgetBig.css";

export default function WidgetBig() {
  const Button = ({ type }) => {
    return <button className={"widgetBigButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetBig">
      <span className="widgetBigTitle">Latest Transactions</span>
      <table className="widgetBigTable">
        <thead>
          <tr className="widgetBigTr">
            <th className="widgetBigTh">Customer</th>
            <th className="widgetBigTh">Date</th>
            <th className="widgetBigTh">Amount</th>
            <th className="widgetBigTh">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="widgetBigTr">
            <td className="widgetBigUser">
              <img
                src="https://cdn.marica.bg/images/marica.bg/606/640_1591260939.jpeg"
                alt=""
                className="widgetBigImg"
              />
              <span className="widgetBigName">Susan Carol</span>
            </td>
            <td className="widgetBigDate">2 June 2021</td>
            <td className="widgetBigAmount">$122</td>
            <td className="widgetBigStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetBigTr">
            <td className="widgetBigUser">
              <img
                src="https://cdn.marica.bg/images/marica.bg/606/640_1591260939.jpeg"
                alt=""
                className="widgetBigImg"
              />
              <span className="widgetBigName">Susan Carol</span>
            </td>
            <td className="widgetBigDate">2 June 2021</td>
            <td className="widgetBigAmount">$122</td>
            <td className="widgetBigStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetBigTr">
            <td className="widgetBigUser">
              <img
                src="https://cdn.marica.bg/images/marica.bg/606/640_1591260939.jpeg"
                alt=""
                className="widgetBigImg"
              />
              <span className="widgetBigName">Susan Carol</span>
            </td>
            <td className="widgetBigDate">2 June 2021</td>
            <td className="widgetBigAmount">$122</td>
            <td className="widgetBigStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetBigTr">
            <td className="widgetBigUser">
              <img
                src="https://cdn.marica.bg/images/marica.bg/606/640_1591260939.jpeg"
                alt=""
                className="widgetBigImg"
              />
              <span className="widgetBigName">Susan Carol</span>
            </td>
            <td className="widgetBigDate">2 June 2021</td>
            <td className="widgetBigAmount">$122</td>
            <td className="widgetBigStatus">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetBigTr">
            <td className="widgetBigUser">
              <img
                src="https://cdn.marica.bg/images/marica.bg/606/640_1591260939.jpeg"
                alt=""
                className="widgetBigImg"
              />
              <span className="widgetBigName">Susan Carol</span>
            </td>
            <td className="widgetBigDate">2 June 2021</td>
            <td className="widgetBigAmount">$122</td>
            <td className="widgetBigStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
