import axios from "axios";

const myQuery = `
select
  date_trunc('week', block_timestamp) as day_date,
  sum(TRANSACTION_FEE) / pow(10,24) as sum_fee,
  avg(TRANSACTION_FEE) / pow(10,24) as avg_fee
from
  near.core.fact_transactions
group by
  1
order by
  1
`;

export async function TerraFees() {
  const res = await axios.post(
    "https://flipside-api.antonyip.com/getCachedQuery",
    {
      query: myQuery,
    }
  );
  return res.data;
}

export function TerraFeesQuery() {
  return myQuery
}