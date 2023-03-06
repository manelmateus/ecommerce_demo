import "./featuredInfo.css";
import {ArrowUpward } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requests";

export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/totalRevenue");
        setIncome(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getIncome();
  }, []);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Total Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{income.totalRevenue}€</span>
          <span className="featuredMoneyRate">
            <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">All time revenue</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Profit</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Not Implemented</span>
        </div>
        <span className="featuredSub">Not yet implemented</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost of Goods</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Not Implemented</span>
        </div>
        <span className="featuredSub">Not yet implemented</span>
      </div>
    </div>
  );
}
