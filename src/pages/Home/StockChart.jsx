
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const StockChart = () => {
    const [activeLable,setActiveLable]=useState("1 Day");
  const series = [
    {
      data: [
        [1771263941503, 67985.55729240814],
        [1771264240860, 67922.93171943989],
        [1771264541165, 67918.50153256723],
        [1771264843846, 67923.40204674947],
        [1771265141760, 67975.09745186647],
        [1771265450828, 68069.34461545278],
        [1771265791512, 68073.02111557327],
        [1771266070139, 68090.43431354186],
        [1771266360665, 68145.34638948458],
        [1771266720706, 68066.27228524724],
        [1771266960496, 68078.45515430094],
        [1771267282379, 67974.62421823324],
        [1771267520764, 67970.37175490936],
        [1771267800603, 67905.36211981357],
        [1771268120923, 67940.20611276585],
        [1771268491866, 67845.65549273694],
        [1771268761573, 67858.99954190133],
        [1771269050852, 67913.49157281156],
        [1771269324417, 67921.69397079031],
        [1771269632204, 67896.20888096296],
        [1771269941667, 67936.20150739081],
        [1771270231802, 67973.72640558291],
        [1771270510384, 67965.24287533002],
        [1771270836833, 68040.55987463337],
        [1771271142814, 68052.20529572187],
        [1771271414716, 67978.14375870257],
        [1771271722631, 67934.6865320613],
        [1771272086957, 67881.7978501668],
        [1771272303211, 67904.07766173707],
        [1771272612474, 67877.28177979073],
        [1771272940137, 67873.80352882904],
        [1771273239832, 67978.19754724528],
        [1771273543798, 68033.99618882261],
        [1771273844146, 68174.73001281437],
        [1771274110615, 68175.02581548096],
      ],
    },
  ];
  const options = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 450,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      tickAmount: 6,
    },
    colors: ["#758AA2"],
    markers: {
      colors: ["#fff"],
      strokeColor: "#fff",
      size: 0,
      strokeWidth: 1,
      style: "hollow",
    },
    tooktip: {
      theme: "dark",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: "#47535E",
      strokeDashArray: 4,
      show: true,
    },
  };
  const timeSeries = [
    {
      keyword: "DIGITAL_CURRENCY_DAILY",
      key: "Time Series (Daily)",
      lable: "1 Day",
      value: 1,
    },
    {
      keyword: "DIGITAL_CURRENCY_WEEKLY",
      key: "Weekly Time Series",
      lable: "7 Day",
      value: 7,
    },
    {
      keyword: "DIGITAL_CURRENCY_MONTHLY",
      key: "Monthly Time Series",
      lable: "1 Month",
      value: 30,
    },
  ];

  const handleActiveLable=(value)=>{
    setActiveLable(value);
  }
  return (
    <div>
      <div className="space-x-3">
        {timeSeries.map((item)=><Button
        variant={activeLable==item.lable?"default":"outline"} onClick={()=>handleActiveLable(item.lable)} key={item.lable} >{item.lable}</Button>)}
      </div>
      <div id="chart-timelines">
        <ReactApexChart
          options={options}
          series={series}
          height={450}
          type="area"
        />
      </div>
    </div>
  );
};

export default StockChart;
