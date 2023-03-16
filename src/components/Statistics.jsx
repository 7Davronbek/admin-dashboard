import React from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const Statistics = () => {
  const option = {
    // tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //         type:'shadow'
    //     }
    // },
    // grid: {
    //     left: '3%',
    //     right: '4%',
    //     bottom: '3%',
    //     containLabel: true
    // },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        type: "line",
        smooth: true,
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(255, 191, 0)",
            },
            {
              offset: 1,
              color: "#f450d3",
            },
          ]),
          width: 5,
        },
        data: [120, 132, 101, 134, 90, 230, 210],
        areaStyle: {
          opacity: 0.5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#fe4c00",
            },
            {
              offset: 1,
              color: "rgba(255, 144, 70, 0.1)",
            },
          ]),
        },
      },
    ],
  };

  return (
    <div className="Statistics py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-4">
            <ReactECharts option={option} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
