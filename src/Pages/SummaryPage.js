import { useEffect, useState } from "react";
import PhoenixLCDExtractBlock from "../Converters/PhoenixLCDExtractBlock";
import PhoenixLCDExtractTime from "../Converters/PhoenixLCDExtractTime";
import CoinGeckoExtractPrice from "../Converters/CoinGeckoExtractPrice";
import PhoenixLCDExtractSupply from "../Converters/PhoenixLCDExtractSupply";
import { Grid, Typography } from "@mui/material";
import TerraSummary from "../APIEndpoints/Terra-Summary-Data";
import SingleDigitDisplay from "../Components/SingleDigitDisplay";
import TerraLatestBlock from "../APIEndpoints/Terra-LatestBlock-Data";
import TerraLCDSupply from "../APIEndpoints/Terra-LCD-Luna-Supply-Data";
import NumberWithCommas from "../Converters/NumberWithCommars";
//import ConvertToUpDownBarLineChart from "../Converters/ConvertToUpDownBarLineChart";
import TerraLCDSupplyCirculating from "../APIEndpoints/Terra-LCD-Luna-SupplyCirculating-Data";
import TerraLCDStaked from "../APIEndpoints/Terra-LCD-Luna-Staked-Data";
//import { NearStakingAmounts } from "../APIEndpoints/Near-Staking-Amounts";

export default function SummaryPage() {
  const [TerraPriceData, setTerraPriceData] = useState(1.25);
  const [TerraLatestBlockData, setTerraLatestBlock] = useState(
    NumberWithCommas(3098561)
  );
  const [TerraLatestTimeData, setTerraLatestTime] = useState(
    "2022-12-29 22:58:56"
  );
  const [TerraLunaSupplyData, setTerraLunaSupplyData] = useState(1051017414);
  const [TerraLunaSupplyCirculatingData, setTerraLunaSupplyCirculatingData] =
    useState(187324501);
  const [TerraLunaStakingRateData, setTerraLunaStakingRateData] =
    useState("10.634%");
  const [TerraLunaStakedData, setTerraLunaStakedData] = useState(522556056);

  const [_internalTimer, _setInternalTimer] = useState(1);

  useEffect(() => {
    setInterval(() => {
      _setInternalTimer(Math.random());
    }, 1000); // updates every 1 second
  }, []);

  // fake use
  if (TerraLunaStakingRateData && TerraLunaStakedData)
  {
    console.log("asd")
  }

  useEffect(() => {
    
    TerraSummary().then((res) => setTerraPriceData(CoinGeckoExtractPrice(res)));
    TerraLatestBlock().then((res) => {
      setTerraLatestBlock(PhoenixLCDExtractBlock(res));
      setTerraLatestTime(PhoenixLCDExtractTime(res));
    });
    TerraLCDSupply().then((res) => {
      setTerraLunaSupplyData(PhoenixLCDExtractSupply(res));
      setTerraLunaStakingRateData("10.643%");
    });
    TerraLCDSupplyCirculating().then((res) =>
      setTerraLunaSupplyCirculatingData(res)
    );

    TerraLCDStaked().then((res) => {
      setTerraLunaStakedData(res.pool.bonded_tokens / 1000000);
    });
  }, [_internalTimer]);

  return (
    <>
      <Typography variant="h4" gutterBottom color={"textPrimary"}>
        Summary
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} sx={{ p: 1 }}>
          <SingleDigitDisplay
            chartName="Near Price"
            chartValue={TerraPriceData}
            chartPreValueText="$ "
            chartSource={
              "https://api.coingecko.com/api/v3/coins/near?tickers=true&market_data=true&sparkline=true"
            }
          ></SingleDigitDisplay>
        </Grid>
        <Grid item xs={12} md={4} sx={{ p: 1 }}>
          <SingleDigitDisplay
            chartName="Near Latest Block"
            chartValue={TerraLatestBlockData}
            chartSource={"https://api.nearblocks.io/v1/blocks/latest?limit=1"}
          ></SingleDigitDisplay>
        </Grid>
        <Grid item xs={12} md={4} sx={{ p: 1 }}>
          <SingleDigitDisplay
            chartName="Last Updated"
            chartValue={TerraLatestTimeData}
            chartSource={"https://api.nearblocks.io/v1/blocks/latest?limit=1"}
          ></SingleDigitDisplay>
        </Grid>

        <Grid item xs={12} md={6} sx={{ p: 1 }}>
          <SingleDigitDisplay
            chartName="Near Total Supply"
            chartValue={NumberWithCommas(TerraLunaSupplyData)}
            chartSource={"https://api.nearblocks.io/v1/stats"}
          ></SingleDigitDisplay>
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: 1 }}>
          <SingleDigitDisplay
            chartName="Near Circulating Supply"
            chartValue={NumberWithCommas(TerraLunaSupplyCirculatingData)}
            chartSource={"https://explorer.near.org/api/circulating-supply"}
          ></SingleDigitDisplay>
        </Grid>

        {/* <Grid item xs={12} md={4} sx={{ p: 1 }}>
          <SingleDigitDisplay
            chartName="Luna Staked"
            chartValue={NumberWithCommas(Math.round(TerraLunaStakedData))}
            chartSource={
              "https://phoenix-lcd.terra.dev/cosmos/staking/v1beta1/pool"
            }
          ></SingleDigitDisplay>
        </Grid>
        <Grid item xs={12} md={4} sx={{ p: 1 }}>
          <SingleDigitDisplay
            chartName="Luna Staking APY"
            chartValue={TerraLunaStakingRateData}
            chartSource={
              "https://phoenix-api.terra.dev/chart/staking-return/annualized"
            }
          ></SingleDigitDisplay>
        </Grid>
        <Grid item xs={12} md={4} sx={{ p: 1 }}>
          <SingleDigitDisplay
            chartName="Luna Staked Ratio"
            chartValue={
              Math.round((TerraLunaStakedData / TerraLunaSupplyData) * 100000) /
                1000 +
              "%"
            }
            disableSource={true}
          ></SingleDigitDisplay>
        </Grid> */}
      </Grid>
    </>
  );
}
