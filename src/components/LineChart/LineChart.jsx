import React, { useEffect, useState} from 'react';
import Chart from 'react-google-charts';

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([['Date', 'Prices']]);

  useEffect(() => {
    let dataCopy = [['Date', 'Prices']];
    if (historicalData && historicalData.prices) {
      historicalData.prices.forEach(item => {
        dataCopy.push([new Date(item[0]).toLocaleDateString(), item[1]]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);

  return (
    <div>
      <Chart
        chartType="LineChart"
        data={data}
        options={{
          hAxis: {
            title: 'Date',
          },
          vAxis: {
            title: 'Price',
          },
        }}
      />
    </div>
  );
};

export default LineChart;