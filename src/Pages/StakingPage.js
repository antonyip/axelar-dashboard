import { useEffect, useState } from "react";
//import MultiAxisBarLineChart from "../Components/MultiAxisBarLineChart";
import TimeLineBarBarChart from "../Components/TimeLineBarBarChart";
//import ConvertToMultiAxisBarLineChart from "../Converters/ConvertToMultiAxisBarLineChart";
import ConvertToUpDownBarLineChart from "../Converters/ConvertToUpDownBarLineChart";
import { Grid, Typography } from "@mui/material";
import { CHARTCOLORS } from "../Constants/Colors";
import {
  NearStakingAmounts,
  NearStakingAmountsQuery,
} from "../APIEndpoints/Near-Staking-Amounts";

export default function DevelopmentPage() {
  const [StakingData, setStakingData] = useState();

  useEffect(() => {
    NearStakingAmounts().then((res) =>
      setStakingData(ConvertToUpDownBarLineChart(res, true))
    );
  }, []);

  return (
    <>
      <Typography variant="h4" gutterBottom color={"textPrimary"}>
        Staking
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={0} md={2} sx={{ p: 1 }}></Grid>
        <Grid item xs={12} md={8} sx={{ p: 1 }}>
          <TimeLineBarBarChart
            key="Staking Values on Near"
            chartDataLoad={StakingData}
            chartSwapYAxis={true}
            chartQuery={NearStakingAmountsQuery()}
            chartTitle={"Amount Staked"}
            chartBackgroundColors={[
              CHARTCOLORS.SECONDARY,
              CHARTCOLORS.PRIMARYLIGHT,
              CHARTCOLORS.PRIMARY,
            ]}
            chartYAxisLabel={[
              "Net Amount Staked",
              "Amount Staked",
              "Amount Unstaked",
            ]}
          ></TimeLineBarBarChart>
        </Grid>
        <Grid item xs={0} md={2} sx={{ p: 1 }}></Grid>
      </Grid>
    </>
  );
}
