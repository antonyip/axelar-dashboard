import axios from "axios";

const myQuery = `
with
  days as (
    select distinct
      date_trunc('week', block_timestamp) as day_date
    from
      near.core.dim_staking_actions
  ),
  staking as (
    select
      date_trunc('week', block_timestamp) as day_date,
      sum(stake_amount) / pow(10, 24) as weekly_stake
    from
      near.core.dim_staking_actions
    where
      action = 'Stake'
    group by
      1
  ),
  unstaking as (
    select
      date_trunc('week', block_timestamp) as day_date,
      sum(stake_amount) / pow(10, 24) as weekly_unstake
    from
      near.core.dim_staking_actions
    where
      action = 'Unstake'
    group by
      1
  ),
  final as (
    select
      d.day_date as day_date,
      weekly_stake,
      weekly_unstake
    from
      days d
      left join staking s on d.day_date = s.day_date
      left join unstaking u on d.day_date = u.day_date
    order by
      1
  )
select
  day_date,
  sum(weekly_stake - weekly_unstake) over (
    order by
      day_date
  ) as total_staked,
  weekly_stake,
  0-weekly_unstake
from
  final
order by
  1
`;

export async function NearStakingAmounts() {
  const res = await axios.post(
    "https://flipside-api.antonyip.com/getCachedQuery",
    {
      query: myQuery,
    }
  );
  return res.data;
}

export function NearStakingAmountsQuery() {
  return myQuery
}