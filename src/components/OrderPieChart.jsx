import React from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const OrderPieChart = () => {
  const option = {
    color: [
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#5003d4",
        },
        {
          offset: 1,
          color: "#6425d0",
        },
      ]),
    ],
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    series: [
      {
        data: [
          { value: 2190, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 892, name: "Email" },
          { value: 462, name: "Union Ads" },
        ],
        name: "Search Item",
        type: "pie",
        radius: ["50%", "80%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#000",
          borderWidth: 5,
          // shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(255, 255, 255, 0.2)",
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: "bold",
          },
        },
      },
    ],
  };

  return (
    <div className="OrderPieChart py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mx-auto">
            <ReactECharts option={option} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPieChart;
