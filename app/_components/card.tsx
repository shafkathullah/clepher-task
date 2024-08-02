"use client";

import { Card, Title, AreaChart } from "@tremor/react";

const dataFormatter = (number) => {
  return `$${Intl.NumberFormat("us").format(number).toString()}`;
};

export default function ChartCard({ chartdata }) {
  return (
    <Card>
      <Title>IBM (USD)</Title>
      <AreaChart
        className="h-80"
        data={chartdata}
        index="date"
        categories={["High", "Low"]}
        colors={["indigo", "rose"]}
        valueFormatter={dataFormatter}
        yAxisWidth={60}
        onValueChange={(v) => console.log(v)}
        autoMinValue={true}
      />
    </Card>
  );
}
