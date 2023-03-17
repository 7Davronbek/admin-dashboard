import React from "react";
import Statistics from "../../components/Statistics";
import OrderPieChart from "../../components/OrderPieChart";

const Dashboard = () => {
  return (
    <>
      <OrderPieChart />
      <Statistics />
    </>
  );
};

export default Dashboard;
