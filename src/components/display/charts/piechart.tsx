import * as React from "react";
    import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
    import { Box, Paper } from "@mui/material";

    export default function ChartPie() {
    const desktopOS = [
    {
      label: "Windows",
      value: 72.72,
    },
    {
      label: "OS X",
      value: 16.38,
    },
    {
      label: "Linux",
      value: 3.83,
    },
    {
      label: "Chrome OS",
      value: 2.42,
    },
    {
      label: "Other",
      value: 4.65,
    },
  ];

  const valueFormatter = (item: { value: number }) => `${item.value}%`;
  const size = {
    width: 400,
    height: 200,
  };

  const data = {
    data: desktopOS,
    valueFormatter,
  };
  return (
    <Paper>
      <PieChart
        series={[
          {
            arcLabel: (item) => `${item.value}%`,
            arcLabelMinAngle: 35,
            arcLabelRadius: "60%",
            ...data,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fontWeight: "bold",
          },
        }}
        {...size}
      />
    </Paper>
  );
}
