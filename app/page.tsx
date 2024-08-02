// import tremor chart library
import { Card, Title, AreaChart } from "@tremor/react";
import ChartCard from "./_components/card";

export default async function Home() {
  // fetch stock dat from alphavantage, noStore enabled
  const response = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo`,
    { cache: "no-store" }
  );

  // parse the response
  const data = await response.json();
  // get the time series data
  const timeSeries = data["Time Series (5min)"];

  const chartdata = Object.keys(timeSeries).map((date) => {
    return {
      date: date,
      High: parseFloat(timeSeries[date]["2. high"]),
      Low: parseFloat(timeSeries[date]["3. low"]),
    };
  });

  // return chart with the data
  return (
    <main className="p-4">
      <ChartCard chartdata={chartdata} />
    </main>
  );
}
