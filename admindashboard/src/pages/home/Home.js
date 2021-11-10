import React, { useState, useMemo, useEffect } from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./Home.css";

import WidgetBig from "../../components/widgetBig/WidgetBig";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import axios from "axios";

export default function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODUwYzRlNDNhN2NmNzkxMWYyZmFlNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjEwOTQ5MSwiZXhwIjoxNjM2NTQxNDkxfQ.oQ6RjZq_3sTzgcn_p5cqbfjV7lErZqgdz2KjvjKyJIc",
          },
        });

        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analitics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetBig />
      </div>
    </div>
  );
}
