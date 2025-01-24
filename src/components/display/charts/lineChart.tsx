import { Box } from "@mui/material";
import { LineChart } from "@mui/x-charts";

export default function ChartLine() {
  return (
    <Box sx={{ backgroundColor: "white", width: "100%" }}>
      <LineChart
        // disableLineItemHighlight
        xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
        series={[
          {
            data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],

            //   showMark: ({ index }) => index % 2 === 0,
          },
        ]}
        height={300}
        // grid={{ vertical: true, horizontal: true }}
      />
    </Box>
  );
}
