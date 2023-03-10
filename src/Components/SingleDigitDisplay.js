import { Card, CardContent, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import SRCButton from "./SRCButton";

function SingleDigitDisplay({
  chartName,
  chartValue,
  chartPreValueText,
  chartSource,
  disableSource,
}) {
  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={10}>
            <Typography
              sx={{ fontSize: 24 }}
              component="div"
            >
              {chartName}
            </Typography>
          </Grid>
          <Grid container item xs={2} justifyContent="flex-end">
            {disableSource ? (
              <></>
            ) : (
              <SRCButton srcLink={chartSource}></SRCButton>
            )}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{ fontSize: 24 }}
            color={"textPrimaryLight"}
            component="div"
          >
            {chartPreValueText}
            {chartValue}
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default SingleDigitDisplay;
