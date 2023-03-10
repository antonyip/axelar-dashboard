import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import EmptyChart from "./EmptyChart";
import SQLButton from "./SQLButton";
import JSONButton from "./JSONButton";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  ButtonGroup,
} from "@mui/material";
import { Spinner } from "reactstrap";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TimeLineBarBarChart = ({
  chartDataLoad,
  chartTitle,
  chartYAxisLabel,
  chartBackgroundColors,
  chartQuery,
}) => {
  if (!chartDataLoad) {
    return (
      <Card>
        <CardContent>
          <Grid container>
            <Grid item xs={1}>
              <Spinner />
            </Grid>
            <Grid item xs={9}>
              <Typography
                variant="h5"
              >
                {chartTitle}
              </Typography>
            </Grid>
            <Grid container item xs={2} justifyContent="flex-end">
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <SQLButton sqlQuery={chartQuery}></SQLButton>
                <JSONButton
                  jsonData={{ error: "Chart Not Loaded Yet..." }}
                ></JSONButton>
              </ButtonGroup>
            </Grid>
          </Grid>
          <EmptyChart></EmptyChart>
        </CardContent>
      </Card>
    );
  }

  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },

      title: {
        display: false,
        text: chartTitle,
      },
    },
  };

  const chartXAxisData = chartDataLoad.xAxis;
  const chartYAxisData = [
    chartDataLoad.yAxis,
    chartDataLoad.yAxis2,
    chartDataLoad.yAxis3,
  ];

  //const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // x-axis
  const labels = chartXAxisData;

  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: 'Dataset 1',
  //       data: [5,3,3,4,6,3,4],
  //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //     },
  //     {
  //       label: 'Dataset 2',
  //       data: [52,3,-3,4,64,3,-4],
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };
  // y-axis
  const dataSets = [];
  for (let index = 0; index < chartYAxisData.length; index++) {
    const yData = chartYAxisData[index];
    const yLabel = chartYAxisLabel[index];
    const yColor = chartBackgroundColors[index];
    var yType = "bar";
    if (index === 0) {
      yType = "line";
    }
    dataSets.push({
      label: yLabel,
      data: yData,
      borderColor: yColor,
      backgroundColor: yColor,
      type: yType,
    });
  }
  const data = {
    labels,
    datasets: dataSets,
  };

  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={10}>
            <Typography variant="h5">
              {chartTitle}
            </Typography>
          </Grid>
          <Grid container item xs={2} justifyContent="flex-end">
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <SQLButton sqlQuery={chartQuery}></SQLButton>
              <JSONButton
                jsonData={chartDataLoad}
                jsonFilename={chartTitle + ".json"}
              ></JSONButton>
            </ButtonGroup>
          </Grid>
        </Grid>
        <Line options={options} data={data} />
      </CardContent>
    </Card>
  );
};

export default TimeLineBarBarChart;
