import { Grid, Typography } from "@mui/material";
//import AreaChart from "../Components/AreaChart";

export default function SupplyPage() {
  

  return (
    <>
      <Typography variant="h4" gutterBottom color={"textPrimary"}>
        Supply
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={0} md={2} sx={{ p: 1 }}></Grid>
        <Grid item xs={12} md={8} sx={{ p: 1 }}>
         Nothing here for now...
        </Grid>
        <Grid item xs={0} md={2} sx={{ p: 1 }}></Grid>
      </Grid>
    </>
  );
}
